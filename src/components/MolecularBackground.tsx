import React, { useRef, useEffect } from "react";

const MolecularBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const layers = [
      { nodeCount: 16, minR: 16, maxR: 28, color: "#2563eb", alpha: 0.06, lineAlpha: 0.10, lineColor: "#2563eb" }, // blue (darker)
      { nodeCount: 20, minR: 8, maxR: 16, color: "#60a5fa", alpha: 0.05, lineAlpha: 0.07, lineColor: "#60a5fa" },
      { nodeCount: 12, minR: 18, maxR: 32, color: "#9333ea", alpha: 0.08, lineAlpha: 0.12, lineColor: "#9333ea" }, // purple (darker)
      { nodeCount: 18, minR: 8, maxR: 18, color: "#c4b5fd", alpha: 0.06, lineAlpha: 0.07, lineColor: "#c4b5fd" },
      { nodeCount: 8, minR: 28, maxR: 44, color: "#a78bfa", alpha: 0.05, lineAlpha: 0.07, lineColor: "#a78bfa" },
      { nodeCount: 10, minR: 10, maxR: 22, color: "#818cf8", alpha: 0.04, lineAlpha: 0.06, lineColor: "#818cf8" },
    ];
    let width = 0;
    let height = 0;
    let layerNodes: { x: number; y: number; r: number }[][] = [];
    let staticDrawn = false;
    const darkLayerIndexes = [0, 2];
    let glowLayerIdx = 0;

    function hexToRgb(hex: string) {
      const match = hex.replace('#', '').match(/.{1,2}/g);
      if (!match) return [0, 0, 0];
      return match.map(x => parseInt(x, 16));
    }

    function generateNodes(nodeCount: number, minR: number, maxR: number, ySpread = 0.6) {
      const nodes = [];
      const minY = height * (0.5 - ySpread / 2);
      const maxY = height * (0.5 + ySpread / 2);
      for (let i = 0; i < nodeCount; i++) {
        const x = (width / (nodeCount - 1)) * i + (i % 2 === 0 ? 0 : Math.random() * 30 - 15);
        const y = minY + Math.random() * (maxY - minY);
        const r = minR + Math.random() * (maxR - minR);
        nodes.push({ x, y, r });
      }
      return nodes;
    }

    function drawStatic(ctx: CanvasRenderingContext2D) {
      layerNodes.forEach((nodes, i) => {
        const layer = layers[i];
        ctx.save();
        ctx.globalAlpha = layer.lineAlpha;
        ctx.strokeStyle = layer.lineColor;
        ctx.lineWidth = 2;
        for (let j = 0; j < nodes.length - 1; j++) {
          ctx.beginPath();
          ctx.moveTo(nodes[j].x, nodes[j].y);
          ctx.lineTo(nodes[j + 1].x, nodes[j + 1].y);
          ctx.stroke();
        }
        ctx.restore();
        for (const node of nodes) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
          ctx.globalAlpha = layer.alpha;
          ctx.fillStyle = layer.color;
          ctx.fill();
          ctx.restore();
        }
      });
    }

    function drawGlow(ctx: CanvasRenderingContext2D, nodes: { x: number; y: number; r: number }[], color: string, t: number) {
      const total = nodes.length - 1;
      const pos = t * total;
      const idx = Math.floor(pos);
      const frac = pos - idx;
      if (idx < nodes.length - 1) {
        const x = nodes[idx].x + (nodes[idx + 1].x - nodes[idx].x) * frac;
        const y = nodes[idx].y + (nodes[idx + 1].y - nodes[idx].y) * frac;
        ctx.save();
        const glowRadius = 36;
        const [r, g, b] = hexToRgb(color);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.18)`);
        gradient.addColorStop(0.4, `rgba(${r},${g},${b},0.10)`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, 2 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.shadowColor = `rgba(${r},${g},${b},0.7)`;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      if (!staticDrawn) {
        ctx.clearRect(0, 0, width, height);
        drawStatic(ctx);
        staticDrawn = true;
      } else {
        ctx.clearRect(0, 0, width, height);
        drawStatic(ctx);
      }
      const now = Date.now();
      const duration = 6000; // slower glow
      const t = ((now % duration) / duration);
      glowLayerIdx = Math.floor((now / duration) % 2);
      const layerIdx = darkLayerIndexes[glowLayerIdx];
      drawGlow(ctx, layerNodes[layerIdx], layers[layerIdx].lineColor, t);
      animationFrameId = requestAnimationFrame(animate);
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth * dpr;
      height = canvas.offsetHeight * dpr;
      canvas.width = width;
      canvas.height = height;
      layerNodes = layers.map((layer, i) => generateNodes(layer.nodeCount, layer.minR, layer.maxR, 0.6 - i * 0.1));
      staticDrawn = false;
      animate();
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute block inset-0 w-full h-full pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
};

export default MolecularBackground; 