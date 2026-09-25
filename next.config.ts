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
      { source: "/projekt-badrum-frejgatan-stockholm", destination: "/projekt/badrum-frejgatan-stockholm", permanent: true },
      { source: "/projekt-attefallare-solna", destination: "/projekt/attefallshus-sjovagen-solna", permanent: true },
      { source: "/projekt-poolbygge-sj%C3%B6v%C3%A4gen-solna", destination: "/projekt/poolbygge-sjovagen-solna", permanent: true },
      { source: "/projekt-servisbyte-och-dr%C3%A4nering", destination: "/projekt/servisbyte-dranering-solna", permanent: true },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
