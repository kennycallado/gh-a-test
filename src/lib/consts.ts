export const WEBSLAB_PROJECT = "base";
export const WEBSLAB_DOMAIN = "ipsitec.es";

export const WEBSLAB_SITE = `https://${WEBSLAB_PROJECT}.${WEBSLAB_DOMAIN}`;

export const DB = {
  url: `${WEBSLAB_SITE}/db`,
  config: {
    access: "user",
    database: WEBSLAB_PROJECT,
    namespace: "webslab",
  },
};
