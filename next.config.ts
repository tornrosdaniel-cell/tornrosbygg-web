import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/byggtips-2/", destination: "/byggtips/", permanent: true },
      { source: "/tjänster-för-privatpersoner/", destination: "/tjanster/", permanent: true },
      { source: "/tjänster-för-fastighetsägare/", destination: "/fastighetsagare/", permanent: true },
      { source: "/projekt-renovering-nämndemansgatan-solna/", destination: "/projekt/renovering-namndemansgatan-solna/", permanent: true },
      { source: "/projekt-tillbyggnad-solna/", destination: "/projekt/tillbyggnad-sjovagen-solna/", permanent: true },
      { source: "/projekt-nybyggnation-blanchevägen-danderyd/", destination: "/projekt/nybyggnation-blanchevagen-danderyd/", permanent: true },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
