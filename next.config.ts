import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/byggtips-2", destination: "/byggtips", permanent: true },
      { source: "/tj%C3%A4nster-f%C3%B6r-privatpersoner", destination: "/tjanster", permanent: true },
      { source: "/tj%C3%A4nster-f%C3%B6r-fastighets%C3%A4gare", destination: "/fastighetsagare", permanent: true },
      { source: "/projekt-renovering-n%C3%A4mndemansgatan-solna", destination: "/projekt/renovering-namndemansgatan-solna", permanent: true },
      { source: "/projekt-tillbyggnad-solna", destination: "/projekt/tillbyggnad-sjovagen-solna", permanent: true },
      { source: "/projekt-nybyggnation-blanchev%C3%A4gen-danderyd", destination: "/projekt/nybyggnation-blanchevagen-danderyd", permanent: true },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
