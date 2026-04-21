"use client";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// ✅ SSR SAFE Canvas
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

// ✅ FIX: proper import instead of require
import { useFrame, useThree } from "@react-three/fiber";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01;
            opacity *= step(intro_offset, u_time * animation_speed_factor);
          `}
          center={["x", "y"]}
        />
      </div>

      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

const DotMatrix = ({ colors, opacities, totalSize = 4, dotSize = 2, shader, center }: any) => {
  const uniforms = useMemo(() => ({
    u_colors: { value: colors.map((c: any) => [c[0]/255, c[1]/255, c[2]/255]) },
    u_opacities: { value: opacities },
    u_total_size: { value: totalSize },
    u_dot_size: { value: dotSize },
  }), [colors, opacities, totalSize, dotSize]);

  return <Shader source={shaderWrapper(shader, center)} uniforms={uniforms} />;
};

const ShaderMaterial = ({ source, uniforms }: any) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    (ref.current.material as any).uniforms.u_time.value = clock.getElapsedTime();
  });

  const material = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: source,
    uniforms: {
      ...uniforms,
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
    },
  }), [size.width, size.height, source]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader = ({ source, uniforms }: any) => {
  return (
    <Canvas className="absolute inset-0 w-full h-full">
      <ShaderMaterial source={source} uniforms={uniforms} />
    </Canvas>
  );
};

const shaderWrapper = (shader: string, center: any) => `
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
out vec4 fragColor;

void main() {
  vec2 st = gl_FragCoord.xy;
  float opacity = 0.5;
  ${shader}
  fragColor = vec4(vec3(0.2,0.6,1.0), opacity);
}
`;