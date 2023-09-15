if (!process.env.SKIP_ENV_VALIDATIONS) {
  require('./.env.validator');
}

const buildArchiveYear = process.env.NEXT_PUBLIC_ARCHIVE_YEAR;
const isBuildArchiveMode = !!buildArchiveYear;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isBuildArchiveMode ? `/archive-${buildArchiveYear}` : undefined,
  output: isBuildArchiveMode ? 'export' : undefined,
  reactStrictMode: true,
  swcMinify: true,
  images: isBuildArchiveMode
    ? {
        loader: 'custom',
        loaderFile: './archive.ts',
      }
    : {
        domains: ['pbs.twimg.com'],
      },
};

module.exports = nextConfig;
