import meta from "./meta.js";

const registerGlobal = ({ spec, tags, tagsSchema, definitions }) => {
    if (typeof globalThis === "undefined" || !definition) return;

    globalThis.ks ??= {};
    globalThis.ks.specs ??= {};

    globalThis.ks.specs.jsonFiles = {
        meta,
        spec, tags, tagsSchema, definitions
    };
};

export { registerGlobal, meta };
export default registerGlobal;
