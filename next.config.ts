import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Adiciona suporte a MDX nas extensões de página
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Opcional: Se você quiser suporte a Rust-based compiler para MDX no futuro
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);