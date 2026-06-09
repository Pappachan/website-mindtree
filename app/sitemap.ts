import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mindtreenursing.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-08"),
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date("2026-06-08"),
    },  {
      url: `${baseUrl}/courses/best-oet-coaching-centre-in-kerala`,
      lastModified: new Date("2026-06-08"),
    },  {
      url: `${baseUrl}/courses/best-iqn-coaching`,
      lastModified: new Date("2026-06-08"),
    },  {
      url: `${baseUrl}/courses/osce-training-kerala`,
      lastModified: new Date("2026-06-08"),
    },

     {
      url: `${baseUrl}/courses/osce-training-new-zealand`,
      lastModified: new Date("2026-06-08"),
    },
     {
      url: `${baseUrl}/courses/therapeutic-communication`,
      lastModified: new Date("2026-06-08"),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-06-08"),
    },
        {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-06-08"),
    },
  ];
}