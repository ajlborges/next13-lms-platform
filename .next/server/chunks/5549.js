"use strict";
exports.id = 5549;
exports.ids = [5549];
exports.modules = {

/***/ 35549:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* reexport */ createNextRouteHandler),
  H: () => (/* reexport */ createUploadthing)
});

;// CONCATENATED MODULE: ./node_modules/uploadthing/dist/chunk-QTCNM7DJ.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
 //# sourceMappingURL=chunk-QTCNM7DJ.mjs.map

;// CONCATENATED MODULE: ./node_modules/@uploadthing/mime-types/dist/chunk-BFQJWQY7.mjs
// src/db.ts
var mimeTypesInternal = {
    "application/andrew-inset": {
        source: "iana",
        extensions: [
            "ez"
        ],
        compressible: null
    },
    "application/applixware": {
        source: "apache",
        extensions: [
            "aw"
        ],
        compressible: null
    },
    "application/atom+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "atom"
        ]
    },
    "application/atomcat+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "atomcat"
        ]
    },
    "application/atomdeleted+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "atomdeleted"
        ]
    },
    "application/atomsvc+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "atomsvc"
        ]
    },
    "application/atsc-dwd+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "dwd"
        ]
    },
    "application/atsc-held+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "held"
        ]
    },
    "application/atsc-rsat+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rsat"
        ]
    },
    "application/calendar+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xcs"
        ]
    },
    "application/ccxml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "ccxml"
        ]
    },
    "application/cdfx+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "cdfx"
        ]
    },
    "application/cdmi-capability": {
        source: "iana",
        extensions: [
            "cdmia"
        ],
        compressible: null
    },
    "application/cdmi-container": {
        source: "iana",
        extensions: [
            "cdmic"
        ],
        compressible: null
    },
    "application/cdmi-domain": {
        source: "iana",
        extensions: [
            "cdmid"
        ],
        compressible: null
    },
    "application/cdmi-object": {
        source: "iana",
        extensions: [
            "cdmio"
        ],
        compressible: null
    },
    "application/cdmi-queue": {
        source: "iana",
        extensions: [
            "cdmiq"
        ],
        compressible: null
    },
    "application/cpl+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "cpl"
        ]
    },
    "application/cu-seeme": {
        source: "apache",
        extensions: [
            "cu"
        ],
        compressible: null
    },
    "application/dash+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mpd"
        ]
    },
    "application/dash-patch+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mpp"
        ]
    },
    "application/davmount+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "davmount"
        ]
    },
    "application/docbook+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "dbk"
        ]
    },
    "application/dssc+der": {
        source: "iana",
        extensions: [
            "dssc"
        ],
        compressible: null
    },
    "application/dssc+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xdssc"
        ]
    },
    "application/ecmascript": {
        source: "iana",
        compressible: true,
        extensions: [
            "es",
            "ecma"
        ]
    },
    "application/emma+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "emma"
        ]
    },
    "application/emotionml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "emotionml"
        ]
    },
    "application/epub+zip": {
        source: "iana",
        compressible: false,
        extensions: [
            "epub"
        ]
    },
    "application/exi": {
        source: "iana",
        extensions: [
            "exi"
        ],
        compressible: null
    },
    "application/express": {
        source: "iana",
        extensions: [
            "exp"
        ],
        compressible: null
    },
    "application/fdt+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "fdt"
        ]
    },
    "application/font-tdpfr": {
        source: "iana",
        extensions: [
            "pfr"
        ],
        compressible: null
    },
    "application/geo+json": {
        source: "iana",
        compressible: true,
        extensions: [
            "geojson"
        ]
    },
    "application/gml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "gml"
        ]
    },
    "application/gpx+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "gpx"
        ]
    },
    "application/gxf": {
        source: "apache",
        extensions: [
            "gxf"
        ],
        compressible: null
    },
    "application/gzip": {
        source: "iana",
        compressible: false,
        extensions: [
            "gz"
        ]
    },
    "application/hyperstudio": {
        source: "iana",
        extensions: [
            "stk"
        ],
        compressible: null
    },
    "application/inkml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "ink",
            "inkml"
        ]
    },
    "application/ipfix": {
        source: "iana",
        extensions: [
            "ipfix"
        ],
        compressible: null
    },
    "application/its+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "its"
        ]
    },
    "application/java-archive": {
        source: "apache",
        compressible: false,
        extensions: [
            "jar",
            "war",
            "ear"
        ]
    },
    "application/java-serialized-object": {
        source: "apache",
        compressible: false,
        extensions: [
            "ser"
        ]
    },
    "application/java-vm": {
        source: "apache",
        compressible: false,
        extensions: [
            "class"
        ]
    },
    "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "js",
            "mjs"
        ]
    },
    "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "json",
            "map"
        ]
    },
    "application/jsonml+json": {
        source: "apache",
        compressible: true,
        extensions: [
            "jsonml"
        ]
    },
    "application/ld+json": {
        source: "iana",
        compressible: true,
        extensions: [
            "jsonld"
        ]
    },
    "application/lgr+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "lgr"
        ]
    },
    "application/lost+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "lostxml"
        ]
    },
    "application/mac-binhex40": {
        source: "iana",
        extensions: [
            "hqx"
        ],
        compressible: null
    },
    "application/mac-compactpro": {
        source: "apache",
        extensions: [
            "cpt"
        ],
        compressible: null
    },
    "application/mads+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mads"
        ]
    },
    "application/manifest+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "webmanifest"
        ]
    },
    "application/marc": {
        source: "iana",
        extensions: [
            "mrc"
        ],
        compressible: null
    },
    "application/marcxml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mrcx"
        ]
    },
    "application/mathematica": {
        source: "iana",
        extensions: [
            "ma",
            "nb",
            "mb"
        ],
        compressible: null
    },
    "application/mathml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mathml"
        ]
    },
    "application/mbox": {
        source: "iana",
        extensions: [
            "mbox"
        ],
        compressible: null
    },
    "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mpf"
        ]
    },
    "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mscml"
        ]
    },
    "application/metalink+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "metalink"
        ]
    },
    "application/metalink4+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "meta4"
        ]
    },
    "application/mets+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mets"
        ]
    },
    "application/mmt-aei+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "maei"
        ]
    },
    "application/mmt-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "musd"
        ]
    },
    "application/mods+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mods"
        ]
    },
    "application/mp21": {
        source: "iana",
        extensions: [
            "m21",
            "mp21"
        ],
        compressible: null
    },
    "application/mp4": {
        source: "iana",
        extensions: [
            "mp4s",
            "m4p"
        ],
        compressible: null
    },
    "application/msword": {
        source: "iana",
        compressible: false,
        extensions: [
            "doc",
            "dot"
        ]
    },
    "application/mxf": {
        source: "iana",
        extensions: [
            "mxf"
        ],
        compressible: null
    },
    "application/n-quads": {
        source: "iana",
        extensions: [
            "nq"
        ],
        compressible: null
    },
    "application/n-triples": {
        source: "iana",
        extensions: [
            "nt"
        ],
        compressible: null
    },
    "application/node": {
        source: "iana",
        extensions: [
            "cjs"
        ],
        compressible: null
    },
    "application/octet-stream": {
        source: "iana",
        compressible: false,
        extensions: [
            "bin",
            "dms",
            "lrf",
            "mar",
            "so",
            "dist",
            "distz",
            "pkg",
            "bpk",
            "dump",
            "elc",
            "deploy",
            "exe",
            "dll",
            "deb",
            "dmg",
            "iso",
            "img",
            "msi",
            "msp",
            "msm",
            "buffer"
        ]
    },
    "application/oda": {
        source: "iana",
        extensions: [
            "oda"
        ],
        compressible: null
    },
    "application/oebps-package+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "opf"
        ]
    },
    "application/ogg": {
        source: "iana",
        compressible: false,
        extensions: [
            "ogx"
        ]
    },
    "application/omdoc+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "omdoc"
        ]
    },
    "application/onenote": {
        source: "apache",
        extensions: [
            "onetoc",
            "onetoc2",
            "onetmp",
            "onepkg"
        ],
        compressible: null
    },
    "application/oxps": {
        source: "iana",
        extensions: [
            "oxps"
        ],
        compressible: null
    },
    "application/p2p-overlay+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "relo"
        ]
    },
    "application/patch-ops-error+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xer"
        ]
    },
    "application/pdf": {
        source: "iana",
        compressible: false,
        extensions: [
            "pdf"
        ]
    },
    "application/pgp-encrypted": {
        source: "iana",
        compressible: false,
        extensions: [
            "pgp"
        ]
    },
    "application/pgp-keys": {
        source: "iana",
        extensions: [
            "asc"
        ],
        compressible: null
    },
    "application/pgp-signature": {
        source: "iana",
        extensions: [
            "asc",
            "sig"
        ],
        compressible: null
    },
    "application/pics-rules": {
        source: "apache",
        extensions: [
            "prf"
        ],
        compressible: null
    },
    "application/pkcs10": {
        source: "iana",
        extensions: [
            "p10"
        ],
        compressible: null
    },
    "application/pkcs7-mime": {
        source: "iana",
        extensions: [
            "p7m",
            "p7c"
        ],
        compressible: null
    },
    "application/pkcs7-signature": {
        source: "iana",
        extensions: [
            "p7s"
        ],
        compressible: null
    },
    "application/pkcs8": {
        source: "iana",
        extensions: [
            "p8"
        ],
        compressible: null
    },
    "application/pkix-attr-cert": {
        source: "iana",
        extensions: [
            "ac"
        ],
        compressible: null
    },
    "application/pkix-cert": {
        source: "iana",
        extensions: [
            "cer"
        ],
        compressible: null
    },
    "application/pkix-crl": {
        source: "iana",
        extensions: [
            "crl"
        ],
        compressible: null
    },
    "application/pkix-pkipath": {
        source: "iana",
        extensions: [
            "pkipath"
        ],
        compressible: null
    },
    "application/pkixcmp": {
        source: "iana",
        extensions: [
            "pki"
        ],
        compressible: null
    },
    "application/pls+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "pls"
        ]
    },
    "application/postscript": {
        source: "iana",
        compressible: true,
        extensions: [
            "ai",
            "eps",
            "ps"
        ]
    },
    "application/provenance+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "provx"
        ]
    },
    "application/prs.cww": {
        source: "iana",
        extensions: [
            "cww"
        ],
        compressible: null
    },
    "application/pskc+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "pskcxml"
        ]
    },
    "application/rdf+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rdf",
            "owl"
        ]
    },
    "application/reginfo+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rif"
        ]
    },
    "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: [
            "rnc"
        ],
        compressible: null
    },
    "application/resource-lists+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rl"
        ]
    },
    "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rld"
        ]
    },
    "application/rls-services+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rs"
        ]
    },
    "application/route-apd+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rapd"
        ]
    },
    "application/route-s-tsid+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "sls"
        ]
    },
    "application/route-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rusd"
        ]
    },
    "application/rpki-ghostbusters": {
        source: "iana",
        extensions: [
            "gbr"
        ],
        compressible: null
    },
    "application/rpki-manifest": {
        source: "iana",
        extensions: [
            "mft"
        ],
        compressible: null
    },
    "application/rpki-roa": {
        source: "iana",
        extensions: [
            "roa"
        ],
        compressible: null
    },
    "application/rsd+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "rsd"
        ]
    },
    "application/rss+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "rss"
        ]
    },
    "application/rtf": {
        source: "iana",
        compressible: true,
        extensions: [
            "rtf"
        ]
    },
    "application/sbml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "sbml"
        ]
    },
    "application/scvp-cv-request": {
        source: "iana",
        extensions: [
            "scq"
        ],
        compressible: null
    },
    "application/scvp-cv-response": {
        source: "iana",
        extensions: [
            "scs"
        ],
        compressible: null
    },
    "application/scvp-vp-request": {
        source: "iana",
        extensions: [
            "spq"
        ],
        compressible: null
    },
    "application/scvp-vp-response": {
        source: "iana",
        extensions: [
            "spp"
        ],
        compressible: null
    },
    "application/sdp": {
        source: "iana",
        extensions: [
            "sdp"
        ],
        compressible: null
    },
    "application/senml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "senmlx"
        ]
    },
    "application/sensml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "sensmlx"
        ]
    },
    "application/set-payment-initiation": {
        source: "iana",
        extensions: [
            "setpay"
        ],
        compressible: null
    },
    "application/set-registration-initiation": {
        source: "iana",
        extensions: [
            "setreg"
        ],
        compressible: null
    },
    "application/shf+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "shf"
        ]
    },
    "application/sieve": {
        source: "iana",
        extensions: [
            "siv",
            "sieve"
        ],
        compressible: null
    },
    "application/smil+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "smi",
            "smil"
        ]
    },
    "application/sparql-query": {
        source: "iana",
        extensions: [
            "rq"
        ],
        compressible: null
    },
    "application/sparql-results+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "srx"
        ]
    },
    "application/srgs": {
        source: "iana",
        extensions: [
            "gram"
        ],
        compressible: null
    },
    "application/srgs+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "grxml"
        ]
    },
    "application/sru+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "sru"
        ]
    },
    "application/ssdl+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "ssdl"
        ]
    },
    "application/ssml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "ssml"
        ]
    },
    "application/swid+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "swidtag"
        ]
    },
    "application/tei+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "tei",
            "teicorpus"
        ]
    },
    "application/thraud+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "tfi"
        ]
    },
    "application/timestamped-data": {
        source: "iana",
        extensions: [
            "tsd"
        ],
        compressible: null
    },
    "application/trig": {
        source: "iana",
        extensions: [
            "trig"
        ],
        compressible: null
    },
    "application/ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "ttml"
        ]
    },
    "application/urc-ressheet+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "rsheet"
        ]
    },
    "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "td"
        ]
    },
    "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "1km"
        ]
    },
    "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: [
            "plb"
        ],
        compressible: null
    },
    "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: [
            "psb"
        ],
        compressible: null
    },
    "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: [
            "pvb"
        ],
        compressible: null
    },
    "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: [
            "tcap"
        ],
        compressible: null
    },
    "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: [
            "pwn"
        ],
        compressible: null
    },
    "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: [
            "aso"
        ],
        compressible: null
    },
    "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: [
            "imp"
        ],
        compressible: null
    },
    "application/vnd.acucobol": {
        source: "iana",
        extensions: [
            "acu"
        ],
        compressible: null
    },
    "application/vnd.acucorp": {
        source: "iana",
        extensions: [
            "atc",
            "acutc"
        ],
        compressible: null
    },
    "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: false,
        extensions: [
            "air"
        ]
    },
    "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: [
            "fcdt"
        ],
        compressible: null
    },
    "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: [
            "fxp",
            "fxpl"
        ],
        compressible: null
    },
    "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xdp"
        ]
    },
    "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: [
            "xfdf"
        ],
        compressible: null
    },
    "application/vnd.age": {
        source: "iana",
        extensions: [
            "age"
        ],
        compressible: null
    },
    "application/vnd.ahead.space": {
        source: "iana",
        extensions: [
            "ahead"
        ],
        compressible: null
    },
    "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: [
            "azf"
        ],
        compressible: null
    },
    "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: [
            "azs"
        ],
        compressible: null
    },
    "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: [
            "azw"
        ],
        compressible: null
    },
    "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: [
            "acc"
        ],
        compressible: null
    },
    "application/vnd.amiga.ami": {
        source: "iana",
        extensions: [
            "ami"
        ],
        compressible: null
    },
    "application/vnd.android.package-archive": {
        source: "apache",
        compressible: false,
        extensions: [
            "apk"
        ]
    },
    "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: [
            "cii"
        ],
        compressible: null
    },
    "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: [
            "fti"
        ],
        compressible: null
    },
    "application/vnd.antix.game-component": {
        source: "iana",
        extensions: [
            "atx"
        ],
        compressible: null
    },
    "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mpkg"
        ]
    },
    "application/vnd.apple.keynote": {
        source: "iana",
        extensions: [
            "key"
        ],
        compressible: null
    },
    "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: [
            "m3u8"
        ],
        compressible: null
    },
    "application/vnd.apple.numbers": {
        source: "iana",
        extensions: [
            "numbers"
        ],
        compressible: null
    },
    "application/vnd.apple.pages": {
        source: "iana",
        extensions: [
            "pages"
        ],
        compressible: null
    },
    "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: [
            "swi"
        ],
        compressible: null
    },
    "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: [
            "iota"
        ],
        compressible: null
    },
    "application/vnd.audiograph": {
        source: "iana",
        extensions: [
            "aep"
        ],
        compressible: null
    },
    "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "bmml"
        ]
    },
    "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: [
            "mpm"
        ],
        compressible: null
    },
    "application/vnd.bmi": {
        source: "iana",
        extensions: [
            "bmi"
        ],
        compressible: null
    },
    "application/vnd.businessobjects": {
        source: "iana",
        extensions: [
            "rep"
        ],
        compressible: null
    },
    "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "cdxml"
        ]
    },
    "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: [
            "mmd"
        ],
        compressible: null
    },
    "application/vnd.cinderella": {
        source: "iana",
        extensions: [
            "cdy"
        ],
        compressible: null
    },
    "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "csl"
        ]
    },
    "application/vnd.claymore": {
        source: "iana",
        extensions: [
            "cla"
        ],
        compressible: null
    },
    "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: [
            "rp9"
        ],
        compressible: null
    },
    "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: [
            "c4g",
            "c4d",
            "c4f",
            "c4p",
            "c4u"
        ],
        compressible: null
    },
    "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: [
            "c11amc"
        ],
        compressible: null
    },
    "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: [
            "c11amz"
        ],
        compressible: null
    },
    "application/vnd.commonspace": {
        source: "iana",
        extensions: [
            "csp"
        ],
        compressible: null
    },
    "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: [
            "cdbcmsg"
        ],
        compressible: null
    },
    "application/vnd.cosmocaller": {
        source: "iana",
        extensions: [
            "cmc"
        ],
        compressible: null
    },
    "application/vnd.crick.clicker": {
        source: "iana",
        extensions: [
            "clkx"
        ],
        compressible: null
    },
    "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: [
            "clkk"
        ],
        compressible: null
    },
    "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: [
            "clkp"
        ],
        compressible: null
    },
    "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: [
            "clkt"
        ],
        compressible: null
    },
    "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: [
            "clkw"
        ],
        compressible: null
    },
    "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "wbs"
        ]
    },
    "application/vnd.ctc-posml": {
        source: "iana",
        extensions: [
            "pml"
        ],
        compressible: null
    },
    "application/vnd.cups-ppd": {
        source: "iana",
        extensions: [
            "ppd"
        ],
        compressible: null
    },
    "application/vnd.curl.car": {
        source: "apache",
        extensions: [
            "car"
        ],
        compressible: null
    },
    "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: [
            "pcurl"
        ],
        compressible: null
    },
    "application/vnd.dart": {
        source: "iana",
        compressible: true,
        extensions: [
            "dart"
        ]
    },
    "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: [
            "rdz"
        ],
        compressible: null
    },
    "application/vnd.dbf": {
        source: "iana",
        extensions: [
            "dbf"
        ],
        compressible: null
    },
    "application/vnd.dece.data": {
        source: "iana",
        extensions: [
            "uvf",
            "uvvf",
            "uvd",
            "uvvd"
        ],
        compressible: null
    },
    "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "uvt",
            "uvvt"
        ]
    },
    "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: [
            "uvx",
            "uvvx"
        ],
        compressible: null
    },
    "application/vnd.dece.zip": {
        source: "iana",
        extensions: [
            "uvz",
            "uvvz"
        ],
        compressible: null
    },
    "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: [
            "fe_launch"
        ],
        compressible: null
    },
    "application/vnd.dna": {
        source: "iana",
        extensions: [
            "dna"
        ],
        compressible: null
    },
    "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: [
            "mlp"
        ],
        compressible: null
    },
    "application/vnd.dpgraph": {
        source: "iana",
        extensions: [
            "dpg"
        ],
        compressible: null
    },
    "application/vnd.dreamfactory": {
        source: "iana",
        extensions: [
            "dfac"
        ],
        compressible: null
    },
    "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: [
            "kpxx"
        ],
        compressible: null
    },
    "application/vnd.dvb.ait": {
        source: "iana",
        extensions: [
            "ait"
        ],
        compressible: null
    },
    "application/vnd.dvb.service": {
        source: "iana",
        extensions: [
            "svc"
        ],
        compressible: null
    },
    "application/vnd.dynageo": {
        source: "iana",
        extensions: [
            "geo"
        ],
        compressible: null
    },
    "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: [
            "mag"
        ],
        compressible: null
    },
    "application/vnd.enliven": {
        source: "iana",
        extensions: [
            "nml"
        ],
        compressible: null
    },
    "application/vnd.epson.esf": {
        source: "iana",
        extensions: [
            "esf"
        ],
        compressible: null
    },
    "application/vnd.epson.msf": {
        source: "iana",
        extensions: [
            "msf"
        ],
        compressible: null
    },
    "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: [
            "qam"
        ],
        compressible: null
    },
    "application/vnd.epson.salt": {
        source: "iana",
        extensions: [
            "slt"
        ],
        compressible: null
    },
    "application/vnd.epson.ssf": {
        source: "iana",
        extensions: [
            "ssf"
        ],
        compressible: null
    },
    "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "es3",
            "et3"
        ]
    },
    "application/vnd.ezpix-album": {
        source: "iana",
        extensions: [
            "ez2"
        ],
        compressible: null
    },
    "application/vnd.ezpix-package": {
        source: "iana",
        extensions: [
            "ez3"
        ],
        compressible: null
    },
    "application/vnd.fdf": {
        source: "iana",
        extensions: [
            "fdf"
        ],
        compressible: null
    },
    "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: [
            "mseed"
        ],
        compressible: null
    },
    "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: [
            "seed",
            "dataless"
        ],
        compressible: null
    },
    "application/vnd.flographit": {
        source: "iana",
        extensions: [
            "gph"
        ],
        compressible: null
    },
    "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: [
            "ftc"
        ],
        compressible: null
    },
    "application/vnd.framemaker": {
        source: "iana",
        extensions: [
            "fm",
            "frame",
            "maker",
            "book"
        ],
        compressible: null
    },
    "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: [
            "fnc"
        ],
        compressible: null
    },
    "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: [
            "ltf"
        ],
        compressible: null
    },
    "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: [
            "fsc"
        ],
        compressible: null
    },
    "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: [
            "oas"
        ],
        compressible: null
    },
    "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: [
            "oa2"
        ],
        compressible: null
    },
    "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: [
            "oa3"
        ],
        compressible: null
    },
    "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: [
            "fg5"
        ],
        compressible: null
    },
    "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: [
            "bh2"
        ],
        compressible: null
    },
    "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: [
            "ddd"
        ],
        compressible: null
    },
    "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: [
            "xdw"
        ],
        compressible: null
    },
    "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: [
            "xbd"
        ],
        compressible: null
    },
    "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: [
            "fzs"
        ],
        compressible: null
    },
    "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: [
            "txd"
        ],
        compressible: null
    },
    "application/vnd.geogebra.file": {
        source: "iana",
        extensions: [
            "ggb"
        ],
        compressible: null
    },
    "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: [
            "ggt"
        ],
        compressible: null
    },
    "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: [
            "gex",
            "gre"
        ],
        compressible: null
    },
    "application/vnd.geonext": {
        source: "iana",
        extensions: [
            "gxt"
        ],
        compressible: null
    },
    "application/vnd.geoplan": {
        source: "iana",
        extensions: [
            "g2w"
        ],
        compressible: null
    },
    "application/vnd.geospace": {
        source: "iana",
        extensions: [
            "g3w"
        ],
        compressible: null
    },
    "application/vnd.gmx": {
        source: "iana",
        extensions: [
            "gmx"
        ],
        compressible: null
    },
    "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "kml"
        ]
    },
    "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: false,
        extensions: [
            "kmz"
        ]
    },
    "application/vnd.grafeq": {
        source: "iana",
        extensions: [
            "gqf",
            "gqs"
        ],
        compressible: null
    },
    "application/vnd.groove-account": {
        source: "iana",
        extensions: [
            "gac"
        ],
        compressible: null
    },
    "application/vnd.groove-help": {
        source: "iana",
        extensions: [
            "ghf"
        ],
        compressible: null
    },
    "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: [
            "gim"
        ],
        compressible: null
    },
    "application/vnd.groove-injector": {
        source: "iana",
        extensions: [
            "grv"
        ],
        compressible: null
    },
    "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: [
            "gtm"
        ],
        compressible: null
    },
    "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: [
            "tpl"
        ],
        compressible: null
    },
    "application/vnd.groove-vcard": {
        source: "iana",
        extensions: [
            "vcg"
        ],
        compressible: null
    },
    "application/vnd.hal+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "hal"
        ]
    },
    "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "zmm"
        ]
    },
    "application/vnd.hbci": {
        source: "iana",
        extensions: [
            "hbci"
        ],
        compressible: null
    },
    "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: [
            "les"
        ],
        compressible: null
    },
    "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: [
            "hpgl"
        ],
        compressible: null
    },
    "application/vnd.hp-hpid": {
        source: "iana",
        extensions: [
            "hpid"
        ],
        compressible: null
    },
    "application/vnd.hp-hps": {
        source: "iana",
        extensions: [
            "hps"
        ],
        compressible: null
    },
    "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: [
            "jlt"
        ],
        compressible: null
    },
    "application/vnd.hp-pcl": {
        source: "iana",
        extensions: [
            "pcl"
        ],
        compressible: null
    },
    "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: [
            "pclxl"
        ],
        compressible: null
    },
    "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: [
            "sfd-hdstx"
        ],
        compressible: null
    },
    "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: [
            "mpy"
        ],
        compressible: null
    },
    "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: [
            "afp",
            "listafp",
            "list3820"
        ],
        compressible: null
    },
    "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: [
            "irm"
        ],
        compressible: null
    },
    "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: [
            "sc"
        ],
        compressible: null
    },
    "application/vnd.iccprofile": {
        source: "iana",
        extensions: [
            "icc",
            "icm"
        ],
        compressible: null
    },
    "application/vnd.igloader": {
        source: "iana",
        extensions: [
            "igl"
        ],
        compressible: null
    },
    "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: [
            "ivp"
        ],
        compressible: null
    },
    "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: [
            "ivu"
        ],
        compressible: null
    },
    "application/vnd.insors.igm": {
        source: "iana",
        extensions: [
            "igm"
        ],
        compressible: null
    },
    "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: [
            "xpw",
            "xpx"
        ],
        compressible: null
    },
    "application/vnd.intergeo": {
        source: "iana",
        extensions: [
            "i2g"
        ],
        compressible: null
    },
    "application/vnd.intu.qbo": {
        source: "iana",
        extensions: [
            "qbo"
        ],
        compressible: null
    },
    "application/vnd.intu.qfx": {
        source: "iana",
        extensions: [
            "qfx"
        ],
        compressible: null
    },
    "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: [
            "rcprofile"
        ],
        compressible: null
    },
    "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "irp"
        ]
    },
    "application/vnd.is-xpr": {
        source: "iana",
        extensions: [
            "xpr"
        ],
        compressible: null
    },
    "application/vnd.isac.fcs": {
        source: "iana",
        extensions: [
            "fcs"
        ],
        compressible: null
    },
    "application/vnd.jam": {
        source: "iana",
        extensions: [
            "jam"
        ],
        compressible: null
    },
    "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: [
            "rms"
        ],
        compressible: null
    },
    "application/vnd.jisp": {
        source: "iana",
        extensions: [
            "jisp"
        ],
        compressible: null
    },
    "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: [
            "joda"
        ],
        compressible: null
    },
    "application/vnd.kahootz": {
        source: "iana",
        extensions: [
            "ktz",
            "ktr"
        ],
        compressible: null
    },
    "application/vnd.kde.karbon": {
        source: "iana",
        extensions: [
            "karbon"
        ],
        compressible: null
    },
    "application/vnd.kde.kchart": {
        source: "iana",
        extensions: [
            "chrt"
        ],
        compressible: null
    },
    "application/vnd.kde.kformula": {
        source: "iana",
        extensions: [
            "kfo"
        ],
        compressible: null
    },
    "application/vnd.kde.kivio": {
        source: "iana",
        extensions: [
            "flw"
        ],
        compressible: null
    },
    "application/vnd.kde.kontour": {
        source: "iana",
        extensions: [
            "kon"
        ],
        compressible: null
    },
    "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: [
            "kpr",
            "kpt"
        ],
        compressible: null
    },
    "application/vnd.kde.kspread": {
        source: "iana",
        extensions: [
            "ksp"
        ],
        compressible: null
    },
    "application/vnd.kde.kword": {
        source: "iana",
        extensions: [
            "kwd",
            "kwt"
        ],
        compressible: null
    },
    "application/vnd.kenameaapp": {
        source: "iana",
        extensions: [
            "htke"
        ],
        compressible: null
    },
    "application/vnd.kidspiration": {
        source: "iana",
        extensions: [
            "kia"
        ],
        compressible: null
    },
    "application/vnd.kinar": {
        source: "iana",
        extensions: [
            "kne",
            "knp"
        ],
        compressible: null
    },
    "application/vnd.koan": {
        source: "iana",
        extensions: [
            "skp",
            "skd",
            "skt",
            "skm"
        ],
        compressible: null
    },
    "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: [
            "sse"
        ],
        compressible: null
    },
    "application/vnd.las.las+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "lasxml"
        ]
    },
    "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: [
            "lbd"
        ],
        compressible: null
    },
    "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "lbe"
        ]
    },
    "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: [
            "123"
        ],
        compressible: null
    },
    "application/vnd.lotus-approach": {
        source: "iana",
        extensions: [
            "apr"
        ],
        compressible: null
    },
    "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: [
            "pre"
        ],
        compressible: null
    },
    "application/vnd.lotus-notes": {
        source: "iana",
        extensions: [
            "nsf"
        ],
        compressible: null
    },
    "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: [
            "org"
        ],
        compressible: null
    },
    "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: [
            "scm"
        ],
        compressible: null
    },
    "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: [
            "lwp"
        ],
        compressible: null
    },
    "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: [
            "portpkg"
        ],
        compressible: null
    },
    "application/vnd.mapbox-vector-tile": {
        source: "iana",
        extensions: [
            "mvt"
        ],
        compressible: null
    },
    "application/vnd.mcd": {
        source: "iana",
        extensions: [
            "mcd"
        ],
        compressible: null
    },
    "application/vnd.medcalcdata": {
        source: "iana",
        extensions: [
            "mc1"
        ],
        compressible: null
    },
    "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: [
            "cdkey"
        ],
        compressible: null
    },
    "application/vnd.mfer": {
        source: "iana",
        extensions: [
            "mwf"
        ],
        compressible: null
    },
    "application/vnd.mfmp": {
        source: "iana",
        extensions: [
            "mfm"
        ],
        compressible: null
    },
    "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: [
            "flo"
        ],
        compressible: null
    },
    "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: [
            "igx"
        ],
        compressible: null
    },
    "application/vnd.mif": {
        source: "iana",
        extensions: [
            "mif"
        ],
        compressible: null
    },
    "application/vnd.mobius.daf": {
        source: "iana",
        extensions: [
            "daf"
        ],
        compressible: null
    },
    "application/vnd.mobius.dis": {
        source: "iana",
        extensions: [
            "dis"
        ],
        compressible: null
    },
    "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: [
            "mbk"
        ],
        compressible: null
    },
    "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: [
            "mqy"
        ],
        compressible: null
    },
    "application/vnd.mobius.msl": {
        source: "iana",
        extensions: [
            "msl"
        ],
        compressible: null
    },
    "application/vnd.mobius.plc": {
        source: "iana",
        extensions: [
            "plc"
        ],
        compressible: null
    },
    "application/vnd.mobius.txf": {
        source: "iana",
        extensions: [
            "txf"
        ],
        compressible: null
    },
    "application/vnd.mophun.application": {
        source: "iana",
        extensions: [
            "mpn"
        ],
        compressible: null
    },
    "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: [
            "mpc"
        ],
        compressible: null
    },
    "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xul"
        ]
    },
    "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: [
            "cil"
        ],
        compressible: null
    },
    "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: [
            "cab"
        ],
        compressible: null
    },
    "application/vnd.ms-excel": {
        source: "iana",
        compressible: false,
        extensions: [
            "xls",
            "xlm",
            "xla",
            "xlc",
            "xlt",
            "xlw"
        ]
    },
    "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: [
            "xlam"
        ],
        compressible: null
    },
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: [
            "xlsb"
        ],
        compressible: null
    },
    "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: [
            "xlsm"
        ],
        compressible: null
    },
    "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: [
            "xltm"
        ],
        compressible: null
    },
    "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: true,
        extensions: [
            "eot"
        ]
    },
    "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: [
            "chm"
        ],
        compressible: null
    },
    "application/vnd.ms-ims": {
        source: "iana",
        extensions: [
            "ims"
        ],
        compressible: null
    },
    "application/vnd.ms-lrm": {
        source: "iana",
        extensions: [
            "lrm"
        ],
        compressible: null
    },
    "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: [
            "thmx"
        ],
        compressible: null
    },
    "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: [
            "cat"
        ],
        compressible: null
    },
    "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: [
            "stl"
        ],
        compressible: null
    },
    "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: false,
        extensions: [
            "ppt",
            "pps",
            "pot"
        ]
    },
    "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: [
            "ppam"
        ],
        compressible: null
    },
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: [
            "pptm"
        ],
        compressible: null
    },
    "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: [
            "sldm"
        ],
        compressible: null
    },
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: [
            "ppsm"
        ],
        compressible: null
    },
    "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: [
            "potm"
        ],
        compressible: null
    },
    "application/vnd.ms-project": {
        source: "iana",
        extensions: [
            "mpp",
            "mpt"
        ],
        compressible: null
    },
    "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: [
            "docm"
        ],
        compressible: null
    },
    "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: [
            "dotm"
        ],
        compressible: null
    },
    "application/vnd.ms-works": {
        source: "iana",
        extensions: [
            "wps",
            "wks",
            "wcm",
            "wdb"
        ],
        compressible: null
    },
    "application/vnd.ms-wpl": {
        source: "iana",
        extensions: [
            "wpl"
        ],
        compressible: null
    },
    "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: false,
        extensions: [
            "xps"
        ]
    },
    "application/vnd.mseq": {
        source: "iana",
        extensions: [
            "mseq"
        ],
        compressible: null
    },
    "application/vnd.musician": {
        source: "iana",
        extensions: [
            "mus"
        ],
        compressible: null
    },
    "application/vnd.muvee.style": {
        source: "iana",
        extensions: [
            "msty"
        ],
        compressible: null
    },
    "application/vnd.mynfc": {
        source: "iana",
        extensions: [
            "taglet"
        ],
        compressible: null
    },
    "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: [
            "nlu"
        ],
        compressible: null
    },
    "application/vnd.nitf": {
        source: "iana",
        extensions: [
            "ntf",
            "nitf"
        ],
        compressible: null
    },
    "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: [
            "nnd"
        ],
        compressible: null
    },
    "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: [
            "nns"
        ],
        compressible: null
    },
    "application/vnd.noblenet-web": {
        source: "iana",
        extensions: [
            "nnw"
        ],
        compressible: null
    },
    "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "ac"
        ]
    },
    "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: [
            "ngdat"
        ],
        compressible: null
    },
    "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: [
            "n-gage"
        ],
        compressible: null
    },
    "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: [
            "rpst"
        ],
        compressible: null
    },
    "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: [
            "rpss"
        ],
        compressible: null
    },
    "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: [
            "edm"
        ],
        compressible: null
    },
    "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: [
            "edx"
        ],
        compressible: null
    },
    "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: [
            "ext"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: [
            "odc"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: [
            "otc"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: [
            "odb"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: [
            "odf"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: [
            "odft"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: false,
        extensions: [
            "odg"
        ]
    },
    "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: [
            "otg"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: [
            "odi"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: [
            "oti"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: false,
        extensions: [
            "odp"
        ]
    },
    "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: [
            "otp"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: false,
        extensions: [
            "ods"
        ]
    },
    "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: [
            "ots"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: false,
        extensions: [
            "odt"
        ]
    },
    "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: [
            "odm"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: [
            "ott"
        ],
        compressible: null
    },
    "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: [
            "oth"
        ],
        compressible: null
    },
    "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: [
            "xo"
        ],
        compressible: null
    },
    "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "dd2"
        ]
    },
    "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "obgx"
        ]
    },
    "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: [
            "oxt"
        ],
        compressible: null
    },
    "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "osm"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: false,
        extensions: [
            "pptx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: [
            "sldx"
        ],
        compressible: null
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: [
            "ppsx"
        ],
        compressible: null
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: [
            "potx"
        ],
        compressible: null
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: false,
        extensions: [
            "xlsx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: [
            "xltx"
        ],
        compressible: null
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: false,
        extensions: [
            "docx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: [
            "dotx"
        ],
        compressible: null
    },
    "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: [
            "mgp"
        ],
        compressible: null
    },
    "application/vnd.osgi.dp": {
        source: "iana",
        extensions: [
            "dp"
        ],
        compressible: null
    },
    "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: [
            "esa"
        ],
        compressible: null
    },
    "application/vnd.palm": {
        source: "iana",
        extensions: [
            "pdb",
            "pqa",
            "oprc"
        ],
        compressible: null
    },
    "application/vnd.pawaafile": {
        source: "iana",
        extensions: [
            "paw"
        ],
        compressible: null
    },
    "application/vnd.pg.format": {
        source: "iana",
        extensions: [
            "str"
        ],
        compressible: null
    },
    "application/vnd.pg.osasli": {
        source: "iana",
        extensions: [
            "ei6"
        ],
        compressible: null
    },
    "application/vnd.picsel": {
        source: "iana",
        extensions: [
            "efif"
        ],
        compressible: null
    },
    "application/vnd.pmi.widget": {
        source: "iana",
        extensions: [
            "wg"
        ],
        compressible: null
    },
    "application/vnd.pocketlearn": {
        source: "iana",
        extensions: [
            "plf"
        ],
        compressible: null
    },
    "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: [
            "pbd"
        ],
        compressible: null
    },
    "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: [
            "box"
        ],
        compressible: null
    },
    "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: [
            "mgz"
        ],
        compressible: null
    },
    "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: [
            "qps"
        ],
        compressible: null
    },
    "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: [
            "ptid"
        ],
        compressible: null
    },
    "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: [
            "qxd",
            "qxt",
            "qwd",
            "qwt",
            "qxl",
            "qxb"
        ],
        compressible: null
    },
    "application/vnd.rar": {
        source: "iana",
        extensions: [
            "rar"
        ],
        compressible: null
    },
    "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: [
            "bed"
        ],
        compressible: null
    },
    "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: [
            "mxl"
        ],
        compressible: null
    },
    "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "musicxml"
        ]
    },
    "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: [
            "cryptonote"
        ],
        compressible: null
    },
    "application/vnd.rim.cod": {
        source: "apache",
        extensions: [
            "cod"
        ],
        compressible: null
    },
    "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: [
            "rm"
        ],
        compressible: null
    },
    "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: [
            "rmvb"
        ],
        compressible: null
    },
    "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "link66"
        ]
    },
    "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: [
            "st"
        ],
        compressible: null
    },
    "application/vnd.seemail": {
        source: "iana",
        extensions: [
            "see"
        ],
        compressible: null
    },
    "application/vnd.sema": {
        source: "iana",
        extensions: [
            "sema"
        ],
        compressible: null
    },
    "application/vnd.semd": {
        source: "iana",
        extensions: [
            "semd"
        ],
        compressible: null
    },
    "application/vnd.semf": {
        source: "iana",
        extensions: [
            "semf"
        ],
        compressible: null
    },
    "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: [
            "ifm"
        ],
        compressible: null
    },
    "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: [
            "itp"
        ],
        compressible: null
    },
    "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: [
            "iif"
        ],
        compressible: null
    },
    "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: [
            "ipk"
        ],
        compressible: null
    },
    "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: [
            "twd",
            "twds"
        ],
        compressible: null
    },
    "application/vnd.smaf": {
        source: "iana",
        extensions: [
            "mmf"
        ],
        compressible: null
    },
    "application/vnd.smart.teacher": {
        source: "iana",
        extensions: [
            "teacher"
        ],
        compressible: null
    },
    "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "fo"
        ]
    },
    "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "sdkm",
            "sdkd"
        ]
    },
    "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: [
            "dxp"
        ],
        compressible: null
    },
    "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: [
            "sfs"
        ],
        compressible: null
    },
    "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: [
            "sdc"
        ],
        compressible: null
    },
    "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: [
            "sda"
        ],
        compressible: null
    },
    "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: [
            "sdd"
        ],
        compressible: null
    },
    "application/vnd.stardivision.math": {
        source: "apache",
        extensions: [
            "smf"
        ],
        compressible: null
    },
    "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: [
            "sdw",
            "vor"
        ],
        compressible: null
    },
    "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: [
            "sgl"
        ],
        compressible: null
    },
    "application/vnd.stepmania.package": {
        source: "iana",
        extensions: [
            "smzip"
        ],
        compressible: null
    },
    "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: [
            "sm"
        ],
        compressible: null
    },
    "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "wadl"
        ]
    },
    "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: [
            "sxc"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: [
            "stc"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: [
            "sxd"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: [
            "std"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: [
            "sxi"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: [
            "sti"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: [
            "sxm"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: [
            "sxw"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: [
            "sxg"
        ],
        compressible: null
    },
    "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: [
            "stw"
        ],
        compressible: null
    },
    "application/vnd.sus-calendar": {
        source: "iana",
        extensions: [
            "sus",
            "susp"
        ],
        compressible: null
    },
    "application/vnd.svd": {
        source: "iana",
        extensions: [
            "svd"
        ],
        compressible: null
    },
    "application/vnd.symbian.install": {
        source: "apache",
        extensions: [
            "sis",
            "sisx"
        ],
        compressible: null
    },
    "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "xsm"
        ]
    },
    "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: [
            "bdm"
        ],
        compressible: null
    },
    "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "xdm"
        ]
    },
    "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "ddf"
        ]
    },
    "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: [
            "tao"
        ],
        compressible: null
    },
    "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: [
            "pcap",
            "cap",
            "dmp"
        ],
        compressible: null
    },
    "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: [
            "tmo"
        ],
        compressible: null
    },
    "application/vnd.trid.tpt": {
        source: "iana",
        extensions: [
            "tpt"
        ],
        compressible: null
    },
    "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: [
            "mxs"
        ],
        compressible: null
    },
    "application/vnd.trueapp": {
        source: "iana",
        extensions: [
            "tra"
        ],
        compressible: null
    },
    "application/vnd.ufdl": {
        source: "iana",
        extensions: [
            "ufd",
            "ufdl"
        ],
        compressible: null
    },
    "application/vnd.uiq.theme": {
        source: "iana",
        extensions: [
            "utz"
        ],
        compressible: null
    },
    "application/vnd.umajin": {
        source: "iana",
        extensions: [
            "umj"
        ],
        compressible: null
    },
    "application/vnd.unity": {
        source: "iana",
        extensions: [
            "unityweb"
        ],
        compressible: null
    },
    "application/vnd.uoml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "uoml"
        ]
    },
    "application/vnd.vcx": {
        source: "iana",
        extensions: [
            "vcx"
        ],
        compressible: null
    },
    "application/vnd.visio": {
        source: "iana",
        extensions: [
            "vsd",
            "vst",
            "vss",
            "vsw"
        ],
        compressible: null
    },
    "application/vnd.visionary": {
        source: "iana",
        extensions: [
            "vis"
        ],
        compressible: null
    },
    "application/vnd.vsf": {
        source: "iana",
        extensions: [
            "vsf"
        ],
        compressible: null
    },
    "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: [
            "wbxml"
        ],
        compressible: null
    },
    "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: [
            "wmlc"
        ],
        compressible: null
    },
    "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: [
            "wmlsc"
        ],
        compressible: null
    },
    "application/vnd.webturbo": {
        source: "iana",
        extensions: [
            "wtb"
        ],
        compressible: null
    },
    "application/vnd.wolfram.player": {
        source: "iana",
        extensions: [
            "nbp"
        ],
        compressible: null
    },
    "application/vnd.wordperfect": {
        source: "iana",
        extensions: [
            "wpd"
        ],
        compressible: null
    },
    "application/vnd.wqd": {
        source: "iana",
        extensions: [
            "wqd"
        ],
        compressible: null
    },
    "application/vnd.wt.stf": {
        source: "iana",
        extensions: [
            "stf"
        ],
        compressible: null
    },
    "application/vnd.xara": {
        source: "iana",
        extensions: [
            "xar"
        ],
        compressible: null
    },
    "application/vnd.xfdl": {
        source: "iana",
        extensions: [
            "xfdl"
        ],
        compressible: null
    },
    "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: [
            "hvd"
        ],
        compressible: null
    },
    "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: [
            "hvs"
        ],
        compressible: null
    },
    "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: [
            "hvp"
        ],
        compressible: null
    },
    "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: [
            "osf"
        ],
        compressible: null
    },
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "osfpvg"
        ]
    },
    "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: [
            "saf"
        ],
        compressible: null
    },
    "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: [
            "spf"
        ],
        compressible: null
    },
    "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: [
            "cmp"
        ],
        compressible: null
    },
    "application/vnd.zul": {
        source: "iana",
        extensions: [
            "zir",
            "zirz"
        ],
        compressible: null
    },
    "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "zaz"
        ]
    },
    "application/voicexml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "vxml"
        ]
    },
    "application/wasm": {
        source: "iana",
        compressible: true,
        extensions: [
            "wasm"
        ]
    },
    "application/watcherinfo+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "wif"
        ]
    },
    "application/widget": {
        source: "iana",
        extensions: [
            "wgt"
        ],
        compressible: null
    },
    "application/winhlp": {
        source: "apache",
        extensions: [
            "hlp"
        ],
        compressible: null
    },
    "application/wsdl+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "wsdl"
        ]
    },
    "application/wspolicy+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "wspolicy"
        ]
    },
    "application/x-7z-compressed": {
        source: "apache",
        compressible: false,
        extensions: [
            "7z"
        ]
    },
    "application/x-abiword": {
        source: "apache",
        extensions: [
            "abw"
        ],
        compressible: null
    },
    "application/x-ace-compressed": {
        source: "apache",
        extensions: [
            "ace"
        ],
        compressible: null
    },
    "application/x-apple-diskimage": {
        source: "apache",
        extensions: [
            "dmg"
        ],
        compressible: null
    },
    "application/x-authorware-bin": {
        source: "apache",
        extensions: [
            "aab",
            "x32",
            "u32",
            "vox"
        ],
        compressible: null
    },
    "application/x-authorware-map": {
        source: "apache",
        extensions: [
            "aam"
        ],
        compressible: null
    },
    "application/x-authorware-seg": {
        source: "apache",
        extensions: [
            "aas"
        ],
        compressible: null
    },
    "application/x-bcpio": {
        source: "apache",
        extensions: [
            "bcpio"
        ],
        compressible: null
    },
    "application/x-bittorrent": {
        source: "apache",
        extensions: [
            "torrent"
        ],
        compressible: null
    },
    "application/x-blorb": {
        source: "apache",
        extensions: [
            "blb",
            "blorb"
        ],
        compressible: null
    },
    "application/x-bzip": {
        source: "apache",
        compressible: false,
        extensions: [
            "bz"
        ]
    },
    "application/x-bzip2": {
        source: "apache",
        compressible: false,
        extensions: [
            "bz2",
            "boz"
        ]
    },
    "application/x-cbr": {
        source: "apache",
        extensions: [
            "cbr",
            "cba",
            "cbt",
            "cbz",
            "cb7"
        ],
        compressible: null
    },
    "application/x-cdlink": {
        source: "apache",
        extensions: [
            "vcd"
        ],
        compressible: null
    },
    "application/x-cfs-compressed": {
        source: "apache",
        extensions: [
            "cfs"
        ],
        compressible: null
    },
    "application/x-chat": {
        source: "apache",
        extensions: [
            "chat"
        ],
        compressible: null
    },
    "application/x-chess-pgn": {
        source: "apache",
        extensions: [
            "pgn"
        ],
        compressible: null
    },
    "application/x-cocoa": {
        source: "nginx",
        extensions: [
            "cco"
        ],
        compressible: null
    },
    "application/x-conference": {
        source: "apache",
        extensions: [
            "nsc"
        ],
        compressible: null
    },
    "application/x-cpio": {
        source: "apache",
        extensions: [
            "cpio"
        ],
        compressible: null
    },
    "application/x-csh": {
        source: "apache",
        extensions: [
            "csh"
        ],
        compressible: null
    },
    "application/x-debian-package": {
        source: "apache",
        extensions: [
            "deb",
            "udeb"
        ],
        compressible: null
    },
    "application/x-dgc-compressed": {
        source: "apache",
        extensions: [
            "dgc"
        ],
        compressible: null
    },
    "application/x-director": {
        source: "apache",
        extensions: [
            "dir",
            "dcr",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa"
        ],
        compressible: null
    },
    "application/x-doom": {
        source: "apache",
        extensions: [
            "wad"
        ],
        compressible: null
    },
    "application/x-dtbncx+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "ncx"
        ]
    },
    "application/x-dtbook+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "dtb"
        ]
    },
    "application/x-dtbresource+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "res"
        ]
    },
    "application/x-dvi": {
        source: "apache",
        compressible: false,
        extensions: [
            "dvi"
        ]
    },
    "application/x-envoy": {
        source: "apache",
        extensions: [
            "evy"
        ],
        compressible: null
    },
    "application/x-eva": {
        source: "apache",
        extensions: [
            "eva"
        ],
        compressible: null
    },
    "application/x-font-bdf": {
        source: "apache",
        extensions: [
            "bdf"
        ],
        compressible: null
    },
    "application/x-font-ghostscript": {
        source: "apache",
        extensions: [
            "gsf"
        ],
        compressible: null
    },
    "application/x-font-linux-psf": {
        source: "apache",
        extensions: [
            "psf"
        ],
        compressible: null
    },
    "application/x-font-pcf": {
        source: "apache",
        extensions: [
            "pcf"
        ],
        compressible: null
    },
    "application/x-font-snf": {
        source: "apache",
        extensions: [
            "snf"
        ],
        compressible: null
    },
    "application/x-font-type1": {
        source: "apache",
        extensions: [
            "pfa",
            "pfb",
            "pfm",
            "afm"
        ],
        compressible: null
    },
    "application/x-freearc": {
        source: "apache",
        extensions: [
            "arc"
        ],
        compressible: null
    },
    "application/x-futuresplash": {
        source: "apache",
        extensions: [
            "spl"
        ],
        compressible: null
    },
    "application/x-gca-compressed": {
        source: "apache",
        extensions: [
            "gca"
        ],
        compressible: null
    },
    "application/x-glulx": {
        source: "apache",
        extensions: [
            "ulx"
        ],
        compressible: null
    },
    "application/x-gnumeric": {
        source: "apache",
        extensions: [
            "gnumeric"
        ],
        compressible: null
    },
    "application/x-gramps-xml": {
        source: "apache",
        extensions: [
            "gramps"
        ],
        compressible: null
    },
    "application/x-gtar": {
        source: "apache",
        extensions: [
            "gtar"
        ],
        compressible: null
    },
    "application/x-hdf": {
        source: "apache",
        extensions: [
            "hdf"
        ],
        compressible: null
    },
    "application/x-install-instructions": {
        source: "apache",
        extensions: [
            "install"
        ],
        compressible: null
    },
    "application/x-iso9660-image": {
        source: "apache",
        extensions: [
            "iso"
        ],
        compressible: null
    },
    "application/x-java-archive-diff": {
        source: "nginx",
        extensions: [
            "jardiff"
        ],
        compressible: null
    },
    "application/x-java-jnlp-file": {
        source: "apache",
        compressible: false,
        extensions: [
            "jnlp"
        ]
    },
    "application/x-latex": {
        source: "apache",
        compressible: false,
        extensions: [
            "latex"
        ]
    },
    "application/x-lzh-compressed": {
        source: "apache",
        extensions: [
            "lzh",
            "lha"
        ],
        compressible: null
    },
    "application/x-makeself": {
        source: "nginx",
        extensions: [
            "run"
        ],
        compressible: null
    },
    "application/x-mie": {
        source: "apache",
        extensions: [
            "mie"
        ],
        compressible: null
    },
    "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: [
            "prc",
            "mobi"
        ],
        compressible: null
    },
    "application/x-ms-application": {
        source: "apache",
        extensions: [
            "application"
        ],
        compressible: null
    },
    "application/x-ms-shortcut": {
        source: "apache",
        extensions: [
            "lnk"
        ],
        compressible: null
    },
    "application/x-ms-wmd": {
        source: "apache",
        extensions: [
            "wmd"
        ],
        compressible: null
    },
    "application/x-ms-wmz": {
        source: "apache",
        extensions: [
            "wmz"
        ],
        compressible: null
    },
    "application/x-ms-xbap": {
        source: "apache",
        extensions: [
            "xbap"
        ],
        compressible: null
    },
    "application/x-msaccess": {
        source: "apache",
        extensions: [
            "mdb"
        ],
        compressible: null
    },
    "application/x-msbinder": {
        source: "apache",
        extensions: [
            "obd"
        ],
        compressible: null
    },
    "application/x-mscardfile": {
        source: "apache",
        extensions: [
            "crd"
        ],
        compressible: null
    },
    "application/x-msclip": {
        source: "apache",
        extensions: [
            "clp"
        ],
        compressible: null
    },
    "application/x-msdownload": {
        source: "apache",
        extensions: [
            "exe",
            "dll",
            "com",
            "bat",
            "msi"
        ],
        compressible: null
    },
    "application/x-msmediaview": {
        source: "apache",
        extensions: [
            "mvb",
            "m13",
            "m14"
        ],
        compressible: null
    },
    "application/x-msmetafile": {
        source: "apache",
        extensions: [
            "wmf",
            "wmz",
            "emf",
            "emz"
        ],
        compressible: null
    },
    "application/x-msmoney": {
        source: "apache",
        extensions: [
            "mny"
        ],
        compressible: null
    },
    "application/x-mspublisher": {
        source: "apache",
        extensions: [
            "pub"
        ],
        compressible: null
    },
    "application/x-msschedule": {
        source: "apache",
        extensions: [
            "scd"
        ],
        compressible: null
    },
    "application/x-msterminal": {
        source: "apache",
        extensions: [
            "trm"
        ],
        compressible: null
    },
    "application/x-mswrite": {
        source: "apache",
        extensions: [
            "wri"
        ],
        compressible: null
    },
    "application/x-netcdf": {
        source: "apache",
        extensions: [
            "nc",
            "cdf"
        ],
        compressible: null
    },
    "application/x-nzb": {
        source: "apache",
        extensions: [
            "nzb"
        ],
        compressible: null
    },
    "application/x-perl": {
        source: "nginx",
        extensions: [
            "pl",
            "pm"
        ],
        compressible: null
    },
    "application/x-pilot": {
        source: "nginx",
        extensions: [
            "prc",
            "pdb"
        ],
        compressible: null
    },
    "application/x-pkcs12": {
        source: "apache",
        compressible: false,
        extensions: [
            "p12",
            "pfx"
        ]
    },
    "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: [
            "p7b",
            "spc"
        ],
        compressible: null
    },
    "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: [
            "p7r"
        ],
        compressible: null
    },
    "application/x-rar-compressed": {
        source: "apache",
        compressible: false,
        extensions: [
            "rar"
        ]
    },
    "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: [
            "rpm"
        ],
        compressible: null
    },
    "application/x-research-info-systems": {
        source: "apache",
        extensions: [
            "ris"
        ],
        compressible: null
    },
    "application/x-sea": {
        source: "nginx",
        extensions: [
            "sea"
        ],
        compressible: null
    },
    "application/x-sh": {
        source: "apache",
        compressible: true,
        extensions: [
            "sh"
        ]
    },
    "application/x-shar": {
        source: "apache",
        extensions: [
            "shar"
        ],
        compressible: null
    },
    "application/x-shockwave-flash": {
        source: "apache",
        compressible: false,
        extensions: [
            "swf"
        ]
    },
    "application/x-silverlight-app": {
        source: "apache",
        extensions: [
            "xap"
        ],
        compressible: null
    },
    "application/x-sql": {
        source: "apache",
        extensions: [
            "sql"
        ],
        compressible: null
    },
    "application/x-stuffit": {
        source: "apache",
        compressible: false,
        extensions: [
            "sit"
        ]
    },
    "application/x-stuffitx": {
        source: "apache",
        extensions: [
            "sitx"
        ],
        compressible: null
    },
    "application/x-subrip": {
        source: "apache",
        extensions: [
            "srt"
        ],
        compressible: null
    },
    "application/x-sv4cpio": {
        source: "apache",
        extensions: [
            "sv4cpio"
        ],
        compressible: null
    },
    "application/x-sv4crc": {
        source: "apache",
        extensions: [
            "sv4crc"
        ],
        compressible: null
    },
    "application/x-t3vm-image": {
        source: "apache",
        extensions: [
            "t3"
        ],
        compressible: null
    },
    "application/x-tads": {
        source: "apache",
        extensions: [
            "gam"
        ],
        compressible: null
    },
    "application/x-tar": {
        source: "apache",
        compressible: true,
        extensions: [
            "tar"
        ]
    },
    "application/x-tcl": {
        source: "apache",
        extensions: [
            "tcl",
            "tk"
        ],
        compressible: null
    },
    "application/x-tex": {
        source: "apache",
        extensions: [
            "tex"
        ],
        compressible: null
    },
    "application/x-tex-tfm": {
        source: "apache",
        extensions: [
            "tfm"
        ],
        compressible: null
    },
    "application/x-texinfo": {
        source: "apache",
        extensions: [
            "texinfo",
            "texi"
        ],
        compressible: null
    },
    "application/x-tgif": {
        source: "apache",
        extensions: [
            "obj"
        ],
        compressible: null
    },
    "application/x-ustar": {
        source: "apache",
        extensions: [
            "ustar"
        ],
        compressible: null
    },
    "application/x-wais-source": {
        source: "apache",
        extensions: [
            "src"
        ],
        compressible: null
    },
    "application/x-x509-ca-cert": {
        source: "iana",
        extensions: [
            "der",
            "crt",
            "pem"
        ],
        compressible: null
    },
    "application/x-xfig": {
        source: "apache",
        extensions: [
            "fig"
        ],
        compressible: null
    },
    "application/x-xliff+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "xlf"
        ]
    },
    "application/x-xpinstall": {
        source: "apache",
        compressible: false,
        extensions: [
            "xpi"
        ]
    },
    "application/x-xz": {
        source: "apache",
        extensions: [
            "xz"
        ],
        compressible: null
    },
    "application/x-zmachine": {
        source: "apache",
        extensions: [
            "z1",
            "z2",
            "z3",
            "z4",
            "z5",
            "z6",
            "z7",
            "z8"
        ],
        compressible: null
    },
    "application/xaml+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "xaml"
        ]
    },
    "application/xcap-att+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xav"
        ]
    },
    "application/xcap-caps+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xca"
        ]
    },
    "application/xcap-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xdf"
        ]
    },
    "application/xcap-el+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xel"
        ]
    },
    "application/xcap-ns+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xns"
        ]
    },
    "application/xenc+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xenc"
        ]
    },
    "application/xhtml+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xhtml",
            "xht"
        ]
    },
    "application/xliff+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xlf"
        ]
    },
    "application/xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xml",
            "xsl",
            "xsd",
            "rng"
        ]
    },
    "application/xml-dtd": {
        source: "iana",
        compressible: true,
        extensions: [
            "dtd"
        ]
    },
    "application/xop+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xop"
        ]
    },
    "application/xproc+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "xpl"
        ]
    },
    "application/xslt+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xsl",
            "xslt"
        ]
    },
    "application/xspf+xml": {
        source: "apache",
        compressible: true,
        extensions: [
            "xspf"
        ]
    },
    "application/xv+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "mxml",
            "xhvml",
            "xvml",
            "xvm"
        ]
    },
    "application/yang": {
        source: "iana",
        extensions: [
            "yang"
        ],
        compressible: null
    },
    "application/yin+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "yin"
        ]
    },
    "application/zip": {
        source: "iana",
        compressible: false,
        extensions: [
            "zip"
        ]
    },
    "audio/3gpp": {
        source: "iana",
        compressible: false,
        extensions: [
            "3gpp"
        ]
    },
    "audio/adpcm": {
        source: "apache",
        extensions: [
            "adp"
        ],
        compressible: null
    },
    "audio/amr": {
        source: "iana",
        extensions: [
            "amr"
        ],
        compressible: null
    },
    "audio/basic": {
        source: "iana",
        compressible: false,
        extensions: [
            "au",
            "snd"
        ]
    },
    "audio/midi": {
        source: "apache",
        extensions: [
            "mid",
            "midi",
            "kar",
            "rmi"
        ],
        compressible: null
    },
    "audio/mobile-xmf": {
        source: "iana",
        extensions: [
            "mxmf"
        ],
        compressible: null
    },
    "audio/mp4": {
        source: "iana",
        compressible: false,
        extensions: [
            "m4a",
            "mp4a"
        ]
    },
    "audio/mpeg": {
        source: "iana",
        compressible: false,
        extensions: [
            "mpga",
            "mp2",
            "mp2a",
            "mp3",
            "m2a",
            "m3a"
        ]
    },
    "audio/ogg": {
        source: "iana",
        compressible: false,
        extensions: [
            "oga",
            "ogg",
            "spx",
            "opus"
        ]
    },
    "audio/s3m": {
        source: "apache",
        extensions: [
            "s3m"
        ],
        compressible: null
    },
    "audio/silk": {
        source: "apache",
        extensions: [
            "sil"
        ],
        compressible: null
    },
    "audio/vnd.dece.audio": {
        source: "iana",
        extensions: [
            "uva",
            "uvva"
        ],
        compressible: null
    },
    "audio/vnd.digital-winds": {
        source: "iana",
        extensions: [
            "eol"
        ],
        compressible: null
    },
    "audio/vnd.dra": {
        source: "iana",
        extensions: [
            "dra"
        ],
        compressible: null
    },
    "audio/vnd.dts": {
        source: "iana",
        extensions: [
            "dts"
        ],
        compressible: null
    },
    "audio/vnd.dts.hd": {
        source: "iana",
        extensions: [
            "dtshd"
        ],
        compressible: null
    },
    "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: [
            "lvp"
        ],
        compressible: null
    },
    "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: [
            "pya"
        ],
        compressible: null
    },
    "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: [
            "ecelp4800"
        ],
        compressible: null
    },
    "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: [
            "ecelp7470"
        ],
        compressible: null
    },
    "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: [
            "ecelp9600"
        ],
        compressible: null
    },
    "audio/vnd.rip": {
        source: "iana",
        extensions: [
            "rip"
        ],
        compressible: null
    },
    "audio/webm": {
        source: "apache",
        compressible: false,
        extensions: [
            "weba"
        ]
    },
    "audio/x-aac": {
        source: "apache",
        compressible: false,
        extensions: [
            "aac"
        ]
    },
    "audio/x-aiff": {
        source: "apache",
        extensions: [
            "aif",
            "aiff",
            "aifc"
        ],
        compressible: null
    },
    "audio/x-caf": {
        source: "apache",
        compressible: false,
        extensions: [
            "caf"
        ]
    },
    "audio/x-flac": {
        source: "apache",
        extensions: [
            "flac"
        ],
        compressible: null
    },
    "audio/x-m4a": {
        source: "nginx",
        extensions: [
            "m4a"
        ],
        compressible: null
    },
    "audio/x-matroska": {
        source: "apache",
        extensions: [
            "mka"
        ],
        compressible: null
    },
    "audio/x-mpegurl": {
        source: "apache",
        extensions: [
            "m3u"
        ],
        compressible: null
    },
    "audio/x-ms-wax": {
        source: "apache",
        extensions: [
            "wax"
        ],
        compressible: null
    },
    "audio/x-ms-wma": {
        source: "apache",
        extensions: [
            "wma"
        ],
        compressible: null
    },
    "audio/x-pn-realaudio": {
        source: "apache",
        extensions: [
            "ram",
            "ra"
        ],
        compressible: null
    },
    "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: [
            "rmp"
        ],
        compressible: null
    },
    "audio/x-realaudio": {
        source: "nginx",
        extensions: [
            "ra"
        ],
        compressible: null
    },
    "audio/x-wav": {
        source: "apache",
        extensions: [
            "wav"
        ],
        compressible: null
    },
    "audio/xm": {
        source: "apache",
        extensions: [
            "xm"
        ],
        compressible: null
    },
    "chemical/x-cdx": {
        source: "apache",
        extensions: [
            "cdx"
        ],
        compressible: null
    },
    "chemical/x-cif": {
        source: "apache",
        extensions: [
            "cif"
        ],
        compressible: null
    },
    "chemical/x-cmdf": {
        source: "apache",
        extensions: [
            "cmdf"
        ],
        compressible: null
    },
    "chemical/x-cml": {
        source: "apache",
        extensions: [
            "cml"
        ],
        compressible: null
    },
    "chemical/x-csml": {
        source: "apache",
        extensions: [
            "csml"
        ],
        compressible: null
    },
    "chemical/x-xyz": {
        source: "apache",
        extensions: [
            "xyz"
        ],
        compressible: null
    },
    "font/collection": {
        source: "iana",
        extensions: [
            "ttc"
        ],
        compressible: null
    },
    "font/otf": {
        source: "iana",
        compressible: true,
        extensions: [
            "otf"
        ]
    },
    "font/ttf": {
        source: "iana",
        compressible: true,
        extensions: [
            "ttf"
        ]
    },
    "font/woff": {
        source: "iana",
        extensions: [
            "woff"
        ],
        compressible: null
    },
    "font/woff2": {
        source: "iana",
        extensions: [
            "woff2"
        ],
        compressible: null
    },
    "image/aces": {
        source: "iana",
        extensions: [
            "exr"
        ],
        compressible: null
    },
    "image/avci": {
        source: "iana",
        extensions: [
            "avci"
        ],
        compressible: null
    },
    "image/avcs": {
        source: "iana",
        extensions: [
            "avcs"
        ],
        compressible: null
    },
    "image/avif": {
        source: "iana",
        compressible: false,
        extensions: [
            "avif"
        ]
    },
    "image/bmp": {
        source: "iana",
        compressible: true,
        extensions: [
            "bmp"
        ]
    },
    "image/cgm": {
        source: "iana",
        extensions: [
            "cgm"
        ],
        compressible: null
    },
    "image/dicom-rle": {
        source: "iana",
        extensions: [
            "drle"
        ],
        compressible: null
    },
    "image/emf": {
        source: "iana",
        extensions: [
            "emf"
        ],
        compressible: null
    },
    "image/fits": {
        source: "iana",
        extensions: [
            "fits"
        ],
        compressible: null
    },
    "image/g3fax": {
        source: "iana",
        extensions: [
            "g3"
        ],
        compressible: null
    },
    "image/gif": {
        source: "iana",
        compressible: false,
        extensions: [
            "gif"
        ]
    },
    "image/heic": {
        source: "iana",
        extensions: [
            "heic"
        ],
        compressible: null
    },
    "image/heic-sequence": {
        source: "iana",
        extensions: [
            "heics"
        ],
        compressible: null
    },
    "image/heif": {
        source: "iana",
        extensions: [
            "heif"
        ],
        compressible: null
    },
    "image/heif-sequence": {
        source: "iana",
        extensions: [
            "heifs"
        ],
        compressible: null
    },
    "image/hej2k": {
        source: "iana",
        extensions: [
            "hej2"
        ],
        compressible: null
    },
    "image/hsj2": {
        source: "iana",
        extensions: [
            "hsj2"
        ],
        compressible: null
    },
    "image/ief": {
        source: "iana",
        extensions: [
            "ief"
        ],
        compressible: null
    },
    "image/jls": {
        source: "iana",
        extensions: [
            "jls"
        ],
        compressible: null
    },
    "image/jp2": {
        source: "iana",
        compressible: false,
        extensions: [
            "jp2",
            "jpg2"
        ]
    },
    "image/jpeg": {
        source: "iana",
        compressible: false,
        extensions: [
            "jpeg",
            "jpg",
            "jpe"
        ]
    },
    "image/jph": {
        source: "iana",
        extensions: [
            "jph"
        ],
        compressible: null
    },
    "image/jphc": {
        source: "iana",
        extensions: [
            "jhc"
        ],
        compressible: null
    },
    "image/jpm": {
        source: "iana",
        compressible: false,
        extensions: [
            "jpm"
        ]
    },
    "image/jpx": {
        source: "iana",
        compressible: false,
        extensions: [
            "jpx",
            "jpf"
        ]
    },
    "image/jxr": {
        source: "iana",
        extensions: [
            "jxr"
        ],
        compressible: null
    },
    "image/jxra": {
        source: "iana",
        extensions: [
            "jxra"
        ],
        compressible: null
    },
    "image/jxrs": {
        source: "iana",
        extensions: [
            "jxrs"
        ],
        compressible: null
    },
    "image/jxs": {
        source: "iana",
        extensions: [
            "jxs"
        ],
        compressible: null
    },
    "image/jxsc": {
        source: "iana",
        extensions: [
            "jxsc"
        ],
        compressible: null
    },
    "image/jxsi": {
        source: "iana",
        extensions: [
            "jxsi"
        ],
        compressible: null
    },
    "image/jxss": {
        source: "iana",
        extensions: [
            "jxss"
        ],
        compressible: null
    },
    "image/ktx": {
        source: "iana",
        extensions: [
            "ktx"
        ],
        compressible: null
    },
    "image/ktx2": {
        source: "iana",
        extensions: [
            "ktx2"
        ],
        compressible: null
    },
    "image/png": {
        source: "iana",
        compressible: false,
        extensions: [
            "png"
        ]
    },
    "image/prs.btif": {
        source: "iana",
        extensions: [
            "btif"
        ],
        compressible: null
    },
    "image/prs.pti": {
        source: "iana",
        extensions: [
            "pti"
        ],
        compressible: null
    },
    "image/sgi": {
        source: "apache",
        extensions: [
            "sgi"
        ],
        compressible: null
    },
    "image/svg+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "svg",
            "svgz"
        ]
    },
    "image/t38": {
        source: "iana",
        extensions: [
            "t38"
        ],
        compressible: null
    },
    "image/tiff": {
        source: "iana",
        compressible: false,
        extensions: [
            "tif",
            "tiff"
        ]
    },
    "image/tiff-fx": {
        source: "iana",
        extensions: [
            "tfx"
        ],
        compressible: null
    },
    "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: true,
        extensions: [
            "psd"
        ]
    },
    "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: [
            "azv"
        ],
        compressible: null
    },
    "image/vnd.dece.graphic": {
        source: "iana",
        extensions: [
            "uvi",
            "uvvi",
            "uvg",
            "uvvg"
        ],
        compressible: null
    },
    "image/vnd.djvu": {
        source: "iana",
        extensions: [
            "djvu",
            "djv"
        ],
        compressible: null
    },
    "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: [
            "sub"
        ],
        compressible: null
    },
    "image/vnd.dwg": {
        source: "iana",
        extensions: [
            "dwg"
        ],
        compressible: null
    },
    "image/vnd.dxf": {
        source: "iana",
        extensions: [
            "dxf"
        ],
        compressible: null
    },
    "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: [
            "fbs"
        ],
        compressible: null
    },
    "image/vnd.fpx": {
        source: "iana",
        extensions: [
            "fpx"
        ],
        compressible: null
    },
    "image/vnd.fst": {
        source: "iana",
        extensions: [
            "fst"
        ],
        compressible: null
    },
    "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: [
            "mmr"
        ],
        compressible: null
    },
    "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: [
            "rlc"
        ],
        compressible: null
    },
    "image/vnd.microsoft.icon": {
        source: "iana",
        compressible: true,
        extensions: [
            "ico"
        ]
    },
    "image/vnd.ms-modi": {
        source: "iana",
        extensions: [
            "mdi"
        ],
        compressible: null
    },
    "image/vnd.ms-photo": {
        source: "apache",
        extensions: [
            "wdp"
        ],
        compressible: null
    },
    "image/vnd.net-fpx": {
        source: "iana",
        extensions: [
            "npx"
        ],
        compressible: null
    },
    "image/vnd.pco.b16": {
        source: "iana",
        extensions: [
            "b16"
        ],
        compressible: null
    },
    "image/vnd.tencent.tap": {
        source: "iana",
        extensions: [
            "tap"
        ],
        compressible: null
    },
    "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: [
            "vtf"
        ],
        compressible: null
    },
    "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: [
            "wbmp"
        ],
        compressible: null
    },
    "image/vnd.xiff": {
        source: "iana",
        extensions: [
            "xif"
        ],
        compressible: null
    },
    "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: [
            "pcx"
        ],
        compressible: null
    },
    "image/webp": {
        source: "apache",
        extensions: [
            "webp"
        ],
        compressible: null
    },
    "image/wmf": {
        source: "iana",
        extensions: [
            "wmf"
        ],
        compressible: null
    },
    "image/x-3ds": {
        source: "apache",
        extensions: [
            "3ds"
        ],
        compressible: null
    },
    "image/x-cmu-raster": {
        source: "apache",
        extensions: [
            "ras"
        ],
        compressible: null
    },
    "image/x-cmx": {
        source: "apache",
        extensions: [
            "cmx"
        ],
        compressible: null
    },
    "image/x-freehand": {
        source: "apache",
        extensions: [
            "fh",
            "fhc",
            "fh4",
            "fh5",
            "fh7"
        ],
        compressible: null
    },
    "image/x-icon": {
        source: "apache",
        compressible: true,
        extensions: [
            "ico"
        ]
    },
    "image/x-jng": {
        source: "nginx",
        extensions: [
            "jng"
        ],
        compressible: null
    },
    "image/x-mrsid-image": {
        source: "apache",
        extensions: [
            "sid"
        ],
        compressible: null
    },
    "image/x-ms-bmp": {
        source: "nginx",
        compressible: true,
        extensions: [
            "bmp"
        ]
    },
    "image/x-pcx": {
        source: "apache",
        extensions: [
            "pcx"
        ],
        compressible: null
    },
    "image/x-pict": {
        source: "apache",
        extensions: [
            "pic",
            "pct"
        ],
        compressible: null
    },
    "image/x-portable-anymap": {
        source: "apache",
        extensions: [
            "pnm"
        ],
        compressible: null
    },
    "image/x-portable-bitmap": {
        source: "apache",
        extensions: [
            "pbm"
        ],
        compressible: null
    },
    "image/x-portable-graymap": {
        source: "apache",
        extensions: [
            "pgm"
        ],
        compressible: null
    },
    "image/x-portable-pixmap": {
        source: "apache",
        extensions: [
            "ppm"
        ],
        compressible: null
    },
    "image/x-rgb": {
        source: "apache",
        extensions: [
            "rgb"
        ],
        compressible: null
    },
    "image/x-tga": {
        source: "apache",
        extensions: [
            "tga"
        ],
        compressible: null
    },
    "image/x-xbitmap": {
        source: "apache",
        extensions: [
            "xbm"
        ],
        compressible: null
    },
    "image/x-xpixmap": {
        source: "apache",
        extensions: [
            "xpm"
        ],
        compressible: null
    },
    "image/x-xwindowdump": {
        source: "apache",
        extensions: [
            "xwd"
        ],
        compressible: null
    },
    "message/disposition-notification": {
        source: "iana",
        extensions: [
            "disposition-notification"
        ],
        compressible: null
    },
    "message/global": {
        source: "iana",
        extensions: [
            "u8msg"
        ],
        compressible: null
    },
    "message/global-delivery-status": {
        source: "iana",
        extensions: [
            "u8dsn"
        ],
        compressible: null
    },
    "message/global-disposition-notification": {
        source: "iana",
        extensions: [
            "u8mdn"
        ],
        compressible: null
    },
    "message/global-headers": {
        source: "iana",
        extensions: [
            "u8hdr"
        ],
        compressible: null
    },
    "message/rfc822": {
        source: "iana",
        compressible: true,
        extensions: [
            "eml",
            "mime"
        ]
    },
    "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: [
            "wsc"
        ],
        compressible: null
    },
    "model/3mf": {
        source: "iana",
        extensions: [
            "3mf"
        ],
        compressible: null
    },
    "model/gltf+json": {
        source: "iana",
        compressible: true,
        extensions: [
            "gltf"
        ]
    },
    "model/gltf-binary": {
        source: "iana",
        compressible: true,
        extensions: [
            "glb"
        ]
    },
    "model/iges": {
        source: "iana",
        compressible: false,
        extensions: [
            "igs",
            "iges"
        ]
    },
    "model/mesh": {
        source: "iana",
        compressible: false,
        extensions: [
            "msh",
            "mesh",
            "silo"
        ]
    },
    "model/mtl": {
        source: "iana",
        extensions: [
            "mtl"
        ],
        compressible: null
    },
    "model/obj": {
        source: "iana",
        extensions: [
            "obj"
        ],
        compressible: null
    },
    "model/step+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "stpx"
        ]
    },
    "model/step+zip": {
        source: "iana",
        compressible: false,
        extensions: [
            "stpz"
        ]
    },
    "model/step-xml+zip": {
        source: "iana",
        compressible: false,
        extensions: [
            "stpxz"
        ]
    },
    "model/stl": {
        source: "iana",
        extensions: [
            "stl"
        ],
        compressible: null
    },
    "model/vnd.collada+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "dae"
        ]
    },
    "model/vnd.dwf": {
        source: "iana",
        extensions: [
            "dwf"
        ],
        compressible: null
    },
    "model/vnd.gdl": {
        source: "iana",
        extensions: [
            "gdl"
        ],
        compressible: null
    },
    "model/vnd.gtw": {
        source: "iana",
        extensions: [
            "gtw"
        ],
        compressible: null
    },
    "model/vnd.mts": {
        source: "iana",
        extensions: [
            "mts"
        ],
        compressible: null
    },
    "model/vnd.opengex": {
        source: "iana",
        extensions: [
            "ogex"
        ],
        compressible: null
    },
    "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: [
            "x_b"
        ],
        compressible: null
    },
    "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: [
            "x_t"
        ],
        compressible: null
    },
    "model/vnd.sap.vds": {
        source: "iana",
        extensions: [
            "vds"
        ],
        compressible: null
    },
    "model/vnd.usdz+zip": {
        source: "iana",
        compressible: false,
        extensions: [
            "usdz"
        ]
    },
    "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: [
            "bsp"
        ],
        compressible: null
    },
    "model/vnd.vtu": {
        source: "iana",
        extensions: [
            "vtu"
        ],
        compressible: null
    },
    "model/vrml": {
        source: "iana",
        compressible: false,
        extensions: [
            "wrl",
            "vrml"
        ]
    },
    "model/x3d+binary": {
        source: "apache",
        compressible: false,
        extensions: [
            "x3db",
            "x3dbz"
        ]
    },
    "model/x3d+fastinfoset": {
        source: "iana",
        extensions: [
            "x3db"
        ],
        compressible: null
    },
    "model/x3d+vrml": {
        source: "apache",
        compressible: false,
        extensions: [
            "x3dv",
            "x3dvz"
        ]
    },
    "model/x3d+xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "x3d",
            "x3dz"
        ]
    },
    "model/x3d-vrml": {
        source: "iana",
        extensions: [
            "x3dv"
        ],
        compressible: null
    },
    "text/cache-manifest": {
        source: "iana",
        compressible: true,
        extensions: [
            "appcache",
            "manifest"
        ]
    },
    "text/calendar": {
        source: "iana",
        extensions: [
            "ics",
            "ifb"
        ],
        compressible: null
    },
    "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "css"
        ]
    },
    "text/csv": {
        source: "iana",
        compressible: true,
        extensions: [
            "csv"
        ]
    },
    "text/html": {
        source: "iana",
        compressible: true,
        extensions: [
            "html",
            "htm",
            "shtml"
        ]
    },
    "text/markdown": {
        source: "iana",
        compressible: true,
        extensions: [
            "markdown",
            "md"
        ]
    },
    "text/mathml": {
        source: "nginx",
        extensions: [
            "mml"
        ],
        compressible: null
    },
    "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "n3"
        ]
    },
    "text/plain": {
        source: "iana",
        compressible: true,
        extensions: [
            "txt",
            "text",
            "conf",
            "def",
            "list",
            "log",
            "in",
            "ini"
        ]
    },
    "text/prs.lines.tag": {
        source: "iana",
        extensions: [
            "dsc"
        ],
        compressible: null
    },
    "text/richtext": {
        source: "iana",
        compressible: true,
        extensions: [
            "rtx"
        ]
    },
    "text/rtf": {
        source: "iana",
        compressible: true,
        extensions: [
            "rtf"
        ]
    },
    "text/sgml": {
        source: "iana",
        extensions: [
            "sgml",
            "sgm"
        ],
        compressible: null
    },
    "text/shex": {
        source: "iana",
        extensions: [
            "shex"
        ],
        compressible: null
    },
    "text/spdx": {
        source: "iana",
        extensions: [
            "spdx"
        ],
        compressible: null
    },
    "text/tab-separated-values": {
        source: "iana",
        compressible: true,
        extensions: [
            "tsv"
        ]
    },
    "text/troff": {
        source: "iana",
        extensions: [
            "t",
            "tr",
            "roff",
            "man",
            "me",
            "ms"
        ],
        compressible: null
    },
    "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: [
            "ttl"
        ],
        compressible: null
    },
    "text/uri-list": {
        source: "iana",
        compressible: true,
        extensions: [
            "uri",
            "uris",
            "urls"
        ]
    },
    "text/vcard": {
        source: "iana",
        compressible: true,
        extensions: [
            "vcard"
        ]
    },
    "text/vnd.curl": {
        source: "iana",
        extensions: [
            "curl"
        ],
        compressible: null
    },
    "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: [
            "dcurl"
        ],
        compressible: null
    },
    "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: [
            "mcurl"
        ],
        compressible: null
    },
    "text/vnd.curl.scurl": {
        source: "apache",
        extensions: [
            "scurl"
        ],
        compressible: null
    },
    "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: [
            "sub"
        ],
        compressible: null
    },
    "text/vnd.familysearch.gedcom": {
        source: "iana",
        extensions: [
            "ged"
        ],
        compressible: null
    },
    "text/vnd.fly": {
        source: "iana",
        extensions: [
            "fly"
        ],
        compressible: null
    },
    "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: [
            "flx"
        ],
        compressible: null
    },
    "text/vnd.graphviz": {
        source: "iana",
        extensions: [
            "gv"
        ],
        compressible: null
    },
    "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: [
            "3dml"
        ],
        compressible: null
    },
    "text/vnd.in3d.spot": {
        source: "iana",
        extensions: [
            "spot"
        ],
        compressible: null
    },
    "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: [
            "jad"
        ],
        compressible: null
    },
    "text/vnd.wap.wml": {
        source: "iana",
        extensions: [
            "wml"
        ],
        compressible: null
    },
    "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: [
            "wmls"
        ],
        compressible: null
    },
    "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: [
            "vtt"
        ]
    },
    "text/x-asm": {
        source: "apache",
        extensions: [
            "s",
            "asm"
        ],
        compressible: null
    },
    "text/x-c": {
        source: "apache",
        extensions: [
            "c",
            "cc",
            "cxx",
            "cpp",
            "h",
            "hh",
            "dic"
        ],
        compressible: null
    },
    "text/x-component": {
        source: "nginx",
        extensions: [
            "htc"
        ],
        compressible: null
    },
    "text/x-fortran": {
        source: "apache",
        extensions: [
            "f",
            "for",
            "f77",
            "f90"
        ],
        compressible: null
    },
    "text/x-java-source": {
        source: "apache",
        extensions: [
            "java"
        ],
        compressible: null
    },
    "text/x-nfo": {
        source: "apache",
        extensions: [
            "nfo"
        ],
        compressible: null
    },
    "text/x-opml": {
        source: "apache",
        extensions: [
            "opml"
        ],
        compressible: null
    },
    "text/x-pascal": {
        source: "apache",
        extensions: [
            "p",
            "pas"
        ],
        compressible: null
    },
    "text/x-setext": {
        source: "apache",
        extensions: [
            "etx"
        ],
        compressible: null
    },
    "text/x-sfv": {
        source: "apache",
        extensions: [
            "sfv"
        ],
        compressible: null
    },
    "text/x-uuencode": {
        source: "apache",
        extensions: [
            "uu"
        ],
        compressible: null
    },
    "text/x-vcalendar": {
        source: "apache",
        extensions: [
            "vcs"
        ],
        compressible: null
    },
    "text/x-vcard": {
        source: "apache",
        extensions: [
            "vcf"
        ],
        compressible: null
    },
    "text/xml": {
        source: "iana",
        compressible: true,
        extensions: [
            "xml"
        ]
    },
    "video/3gpp": {
        source: "iana",
        extensions: [
            "3gp",
            "3gpp"
        ],
        compressible: null
    },
    "video/3gpp2": {
        source: "iana",
        extensions: [
            "3g2"
        ],
        compressible: null
    },
    "video/h261": {
        source: "iana",
        extensions: [
            "h261"
        ],
        compressible: null
    },
    "video/h263": {
        source: "iana",
        extensions: [
            "h263"
        ],
        compressible: null
    },
    "video/h264": {
        source: "iana",
        extensions: [
            "h264"
        ],
        compressible: null
    },
    "video/iso.segment": {
        source: "iana",
        extensions: [
            "m4s"
        ],
        compressible: null
    },
    "video/jpeg": {
        source: "iana",
        extensions: [
            "jpgv"
        ],
        compressible: null
    },
    "video/jpm": {
        source: "apache",
        extensions: [
            "jpm",
            "jpgm"
        ],
        compressible: null
    },
    "video/mj2": {
        source: "iana",
        extensions: [
            "mj2",
            "mjp2"
        ],
        compressible: null
    },
    "video/mp2t": {
        source: "iana",
        extensions: [
            "ts"
        ],
        compressible: null
    },
    "video/mp4": {
        source: "iana",
        compressible: false,
        extensions: [
            "mp4",
            "mp4v",
            "mpg4"
        ]
    },
    "video/mpeg": {
        source: "iana",
        compressible: false,
        extensions: [
            "mpeg",
            "mpg",
            "mpe",
            "m1v",
            "m2v"
        ]
    },
    "video/ogg": {
        source: "iana",
        compressible: false,
        extensions: [
            "ogv"
        ]
    },
    "video/quicktime": {
        source: "iana",
        compressible: false,
        extensions: [
            "qt",
            "mov"
        ]
    },
    "video/vnd.dece.hd": {
        source: "iana",
        extensions: [
            "uvh",
            "uvvh"
        ],
        compressible: null
    },
    "video/vnd.dece.mobile": {
        source: "iana",
        extensions: [
            "uvm",
            "uvvm"
        ],
        compressible: null
    },
    "video/vnd.dece.pd": {
        source: "iana",
        extensions: [
            "uvp",
            "uvvp"
        ],
        compressible: null
    },
    "video/vnd.dece.sd": {
        source: "iana",
        extensions: [
            "uvs",
            "uvvs"
        ],
        compressible: null
    },
    "video/vnd.dece.video": {
        source: "iana",
        extensions: [
            "uvv",
            "uvvv"
        ],
        compressible: null
    },
    "video/vnd.dvb.file": {
        source: "iana",
        extensions: [
            "dvb"
        ],
        compressible: null
    },
    "video/vnd.fvt": {
        source: "iana",
        extensions: [
            "fvt"
        ],
        compressible: null
    },
    "video/vnd.mpegurl": {
        source: "iana",
        extensions: [
            "mxu",
            "m4u"
        ],
        compressible: null
    },
    "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: [
            "pyv"
        ],
        compressible: null
    },
    "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: [
            "uvu",
            "uvvu"
        ],
        compressible: null
    },
    "video/vnd.vivo": {
        source: "iana",
        extensions: [
            "viv"
        ],
        compressible: null
    },
    "video/webm": {
        source: "apache",
        compressible: false,
        extensions: [
            "webm"
        ]
    },
    "video/x-f4v": {
        source: "apache",
        extensions: [
            "f4v"
        ],
        compressible: null
    },
    "video/x-fli": {
        source: "apache",
        extensions: [
            "fli"
        ],
        compressible: null
    },
    "video/x-flv": {
        source: "apache",
        compressible: false,
        extensions: [
            "flv"
        ]
    },
    "video/x-m4v": {
        source: "apache",
        extensions: [
            "m4v"
        ],
        compressible: null
    },
    "video/x-matroska": {
        source: "apache",
        compressible: false,
        extensions: [
            "mkv",
            "mk3d",
            "mks"
        ]
    },
    "video/x-mng": {
        source: "apache",
        extensions: [
            "mng"
        ],
        compressible: null
    },
    "video/x-ms-asf": {
        source: "apache",
        extensions: [
            "asf",
            "asx"
        ],
        compressible: null
    },
    "video/x-ms-vob": {
        source: "apache",
        extensions: [
            "vob"
        ],
        compressible: null
    },
    "video/x-ms-wm": {
        source: "apache",
        extensions: [
            "wm"
        ],
        compressible: null
    },
    "video/x-ms-wmv": {
        source: "apache",
        compressible: false,
        extensions: [
            "wmv"
        ]
    },
    "video/x-ms-wmx": {
        source: "apache",
        extensions: [
            "wmx"
        ],
        compressible: null
    },
    "video/x-ms-wvx": {
        source: "apache",
        extensions: [
            "wvx"
        ],
        compressible: null
    },
    "video/x-msvideo": {
        source: "apache",
        extensions: [
            "avi"
        ],
        compressible: null
    },
    "video/x-sgi-movie": {
        source: "apache",
        extensions: [
            "movie"
        ],
        compressible: null
    },
    "video/x-smv": {
        source: "apache",
        extensions: [
            "smv"
        ],
        compressible: null
    },
    "x-conference/x-cooltalk": {
        source: "apache",
        extensions: [
            "ice"
        ],
        compressible: null
    }
};
var chunk_BFQJWQY7_mimeTypes = mimeTypesInternal;
 //# sourceMappingURL=chunk-BFQJWQY7.mjs.map

;// CONCATENATED MODULE: ./node_modules/@uploadthing/mime-types/dist/index.mjs

// src/index.ts
function extname(path) {
    const index = path.lastIndexOf(".");
    return index < 0 ? "" : path.substring(index);
}
var extensions = {};
var types = {};
populateMaps(extensions, types);
function lookup(path) {
    if (!path || typeof path !== "string") {
        return false;
    }
    const extension = extname("x." + path).toLowerCase().substring(1);
    if (!extension) {
        return false;
    }
    return types[extension] || false;
}
function populateMaps(extensions2, types2) {
    const preference = [
        "nginx",
        "apache",
        void 0,
        "iana"
    ];
    Object.keys(chunk_BFQJWQY7_mimeTypes).forEach((type)=>{
        const mime = chunk_BFQJWQY7_mimeTypes[type];
        const exts = mime.extensions;
        if (!(exts == null ? void 0 : exts.length)) {
            return;
        }
        extensions2[type] = exts;
        for (const extension of exts){
            if (types2[extension]) {
                const from = preference.indexOf(chunk_BFQJWQY7_mimeTypes[types2[extension]].source);
                const to = preference.indexOf(mime.source);
                if (types2[extension] !== "application/octet-stream" && (from > to || from === to && types2[extension].startsWith("application/"))) {
                    continue;
                }
            }
            types2[extension] = type;
        }
    });
}
 /*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */  //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/zod/lib/index.mjs
var util;
(function(util) {
    util.assertEqual = (val)=>val;
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items){
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys){
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object){
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};
const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        } else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                } else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                } else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                } else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                } else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                        // if (typeof el === "string") {
                        //   curr[el] = curr[el] || { _errors: [] };
                        // } else if (typeof el === "number") {
                        //   const errorArray: any = [];
                        //   errorArray._errors = [];
                        //   curr[el] = curr[el] || errorArray;
                        // }
                        } else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues){
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            } else {
                formErrors.push(mapper(sub));
            }
        }
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};
const errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            } else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                } else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                } else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                } else {
                    util.assertNever(issue.validation);
                }
            } else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            } else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return {
        message
    };
};
let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}
const makeIssue = (params)=>{
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps){
        errorMessage = map(fullIssue, {
            data,
            defaultError: errorMessage
        }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: issueData.message || errorMessage
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            syncPairs.push({
                key: await pair.key,
                value: await pair.value
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const INVALID = Object.freeze({
    status: "aborted"
});
const DIRTY = (value)=>({
        status: "dirty",
        value
    });
const OK = (value)=>({
        status: "valid",
        value
    });
const isAborted = (x)=>x.status === "aborted";
const isDirty = (x)=>x.status === "dirty";
const isValid = (x)=>x.status === "valid";
const isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    errorUtil.toString = (message)=>typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
class ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            } else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result)=>{
    if (isValid(result)) {
        return {
            success: true,
            data: result.value
        };
    } else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap) return {
        errorMap: errorMap,
        description
    };
    const customMap = (iss, ctx)=>{
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        if (typeof ctx.data === "undefined") {
            return {
                message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError
            };
        }
        return {
            message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
class ZodType {
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") {
                return {
                    message
                };
            } else if (typeof message === "function") {
                return message(val);
            } else {
                return message;
            }
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: ZodIssueCode.custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data)=>{
                    if (!data) {
                        setError();
                        return false;
                    } else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            } else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this, this._def);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[a-z][a-z0-9]*$/;
const ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
const ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// Adapted from https://stackoverflow.com/a/3143231
const datetimeRegex = (args)=>{
    if (args.precision) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
        }
    } else if (args.precision === 0) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
        }
    } else {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
        }
    }
};
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    constructor(){
        super(...arguments);
        this._regex = (regex, validation, message)=>this.refinement((data)=>regex.test(data), {
                validation,
                code: ZodIssueCode.invalid_string,
                ...errorUtil.errToObj(message)
            });
        /**
         * @deprecated Use z.string().min(1) instead.
         * @see {@link ZodString.min}
         */ this.nonempty = (message)=>this.min(1, errorUtil.errToObj(message));
        this.trim = ()=>new ZodString({
                ...this._def,
                checks: [
                    ...this._def.checks,
                    {
                        kind: "trim"
                    }
                ]
            });
        this.toLowerCase = ()=>new ZodString({
                ...this._def,
                checks: [
                    ...this._def.checks,
                    {
                        kind: "toLowerCase"
                    }
                ]
            });
        this.toUpperCase = ()=>new ZodString({
                ...this._def,
                checks: [
                    ...this._def.checks,
                    {
                        kind: "toUpperCase"
                    }
                ]
            });
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    } else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    }
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") {
                try {
                    new URL(input.data);
                } catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") {
                input.data = input.data.trim();
            } else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            } else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            } else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...errorUtil.errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...errorUtil.errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...errorUtil.errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...errorUtil.errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...errorUtil.errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...errorUtil.errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...errorUtil.errToObj(message)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...errorUtil.errToObj(options)
        });
    }
    datetime(options) {
        var _a;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                message: options
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message)
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params)=>{
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                return true;
            } else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
    });
};
class ZodBigInt extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params)=>{
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params)=>{
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params)=>{
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
    });
};
class ZodAny extends ZodType {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
    });
};
class ZodUnknown extends ZodType {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType
        });
        return INVALID;
    }
}
ZodNever.create = (params)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([
                ...ctx.data
            ].map((item, i)=>{
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result)=>{
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: errorUtil.toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: errorUtil.toString(message)
            }
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: {
                value: len,
                message: errorUtil.toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params)=>{
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element)
        });
    } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item)=>deepPartialify(item)));
    } else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return this._cached = {
            shape,
            keys
        };
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data){
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys){
                    pairs.push({
                        key: {
                            status: "valid",
                            value: key
                        },
                        value: {
                            status: "valid",
                            value: ctx.data[key]
                        }
                    });
                }
            } else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve().then(async ()=>{
                const syncPairs = [];
                for (const pair of pairs){
                    const key = await pair.key;
                    syncPairs.push({
                        key,
                        value: await pair.value,
                        alwaysSet: pair.alwaysSet
                    });
                }
                return syncPairs;
            }).then((syncPairs)=>{
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        } else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    var _a, _b, _c, _d;
                    const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key)=>{
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key)=>{
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key)=>{
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            } else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key)=>{
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            } else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while(newField instanceof ZodOptional){
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.strictCreate = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.lazycreate = (shape, params)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results){
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result)=>new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option)=>{
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx
                    }),
                    ctx: childCtx
                };
            })).then(handleResults);
        } else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") {
                    return result;
                } else if (result.status === "dirty" && !dirty) {
                    dirty = {
                        result,
                        ctx: childCtx
                    };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type)=>{
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
        return [
            type.value
        ];
    } else if (type instanceof ZodEnum) {
        return type.options;
    } else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return Object.keys(type.enum);
    } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
        return [
            undefined
        ];
    } else if (type instanceof ZodNull) {
        return [
            null
        ];
    } else {
        return null;
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        } else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return {
            valid: true,
            data: a
        };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util.objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return {
                valid: false
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
        return {
            valid: true,
            data: a
        };
    } else {
        return {
            valid: false
        };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                })
            ]).then(([left, right])=>handleParsed(left, right));
        } else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }));
        }
    }
}
ZodIntersection.create = (left, right, params)=>{
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results)=>{
                return ParseStatus.mergeArray(status, results);
            });
        } else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
}
ZodTuple.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data){
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        } else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third)
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
ZodMap.create = (keyType, valueType, params)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return INVALID;
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements)=>finalizeSet(elements));
        } else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: errorUtil.toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: errorUtil.toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
    });
};
class ZodFunction extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap
                ].filter((x)=>!!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap
                ].filter((x)=>!!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function(...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([
                        makeArgsIssue(args, parsedArgs.error)
                    ]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([
                        makeReturnsIssue(result, parsedReturns.error)
                    ]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
ZodLazy.create = (getter, params)=>{
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value
            });
            return INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params)=>{
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type
            });
            return INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values) {
        return ZodEnum.create(values);
    }
    exclude(values) {
        return ZodEnum.create(this.options.filter((opt)=>!values.includes(opt)));
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type
            });
            return INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params)=>{
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
ZodPromise.create = (schema, params)=>{
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                } else {
                    status.dirty();
                }
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.issues.length) {
                return {
                    status: "dirty",
                    value: ctx.data
                };
            }
            if (ctx.common.async) {
                return Promise.resolve(processed).then((processed)=>{
                    return this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx
                    });
                });
            } else {
                return this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return INVALID;
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((inner)=>{
                    if (inner.status === "aborted") return INVALID;
                    if (inner.status === "dirty") status.dirty();
                    return executeRefinement(inner.value).then(()=>{
                        return {
                            status: status.value,
                            value: inner.value
                        };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!isValid(base)) return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return {
                    status: status.value,
                    value: result
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((base)=>{
                    if (!isValid(base)) return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                            status: status.value,
                            value: result
                        }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params)=>{
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params)=>{
    return new ZodEffects({
        schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params)=>{
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...processCreateParams(params)
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if (isAsync(result)) {
            return result.then((result)=>{
                return {
                    status: "valid",
                    value: result.status === "valid" ? result.value : this._def.catchValue({
                        get error () {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data
                    })
                };
            });
        } else {
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new ZodError(newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params)=>{
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...processCreateParams(params)
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
ZodNaN.create = (params)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                } else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx
                    });
                }
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        if (isValid(result)) {
            result.value = Object.freeze(result.value);
        }
        return result;
    }
}
ZodReadonly.create = (type, params)=>{
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
    });
};
const custom = (check, params = {}, /*
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal)=>{
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        var _a, _b;
        if (!check(data)) {
            const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
                message: params
            } : params;
            const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
            const p2 = typeof p === "string" ? {
                message: p
            } : p;
            ctx.addIssue({
                code: "custom",
                ...p2,
                fatal: _fatal
            });
        }
    });
    return ZodAny.create();
};
const late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = ()=>stringType().optional();
const onumber = ()=>numberType().optional();
const oboolean = ()=>booleanType().optional();
const coerce = {
    string: (arg)=>ZodString.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>ZodNumber.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>ZodBoolean.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>ZodBigInt.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>ZodDate.create({
            ...arg,
            coerce: true
        })
};
const NEVER = INVALID;
var z = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () {
        return util;
    },
    get objectUtil () {
        return objectUtil;
    },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () {
        return ZodFirstPartyTypeKind;
    },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});


;// CONCATENATED MODULE: ./node_modules/@uploadthing/mime-types/dist/db.mjs

 //# sourceMappingURL=db.mjs.map

;// CONCATENATED MODULE: ./node_modules/@uploadthing/shared/dist/index.mjs
// src/utils.ts

function isRouteArray(routeConfig) {
    return Array.isArray(routeConfig);
}
function getDefaultSizeForType(fileType) {
    if (fileType === "image") return "4MB";
    if (fileType === "video") return "16MB";
    if (fileType === "audio") return "8MB";
    if (fileType === "blob") return "8MB";
    if (fileType === "pdf") return "4MB";
    if (fileType === "text") return "64KB";
    return "4MB";
}
function fillInputRouteConfig(routeConfig) {
    if (isRouteArray(routeConfig)) {
        return routeConfig.reduce((acc, fileType)=>{
            acc[fileType] = {
                // Apply defaults
                maxFileSize: getDefaultSizeForType(fileType),
                maxFileCount: 1
            };
            return acc;
        }, {});
    }
    const newConfig = {};
    const inputKeys = Object.keys(routeConfig);
    inputKeys.forEach((key)=>{
        const value = routeConfig[key];
        if (!value) throw new Error("Invalid config during fill");
        const defaultValues = {
            maxFileSize: getDefaultSizeForType(key),
            maxFileCount: 1
        };
        newConfig[key] = {
            ...defaultValues,
            ...value
        };
    }, {});
    return newConfig;
}
function getTypeFromFileName(fileName, allowedTypes) {
    const mimeType = lookup(fileName);
    if (!mimeType) {
        throw new Error(`Could not determine type for ${fileName}, presigned URL generation failed`);
    }
    if (allowedTypes.some((type2)=>type2.includes("/"))) {
        if (allowedTypes.includes(mimeType)) {
            return mimeType;
        }
    }
    const type = mimeType.toLowerCase() === "application/pdf" ? "pdf" : mimeType.split("/")[0];
    if (!allowedTypes.includes(type)) {
        if (allowedTypes.includes("blob")) {
            return "blob";
        } else {
            throw new Error(`File type ${type} not allowed for ${fileName}`);
        }
    }
    return type;
}
function generateUploadThingURL(path) {
    const host = process.env.CUSTOM_INFRA_URL ?? "https://uploadthing.com";
    return `${host}${path}`;
}
var withExponentialBackoff = async (doTheThing, MAXIMUM_BACKOFF_MS = 64 * 1e3, MAX_RETRIES = 20)=>{
    let tries = 0;
    let backoffMs = 500;
    let backoffFuzzMs = 0;
    let result = null;
    while(tries <= MAX_RETRIES){
        result = await doTheThing();
        if (result !== null) return result;
        tries += 1;
        backoffMs = Math.min(MAXIMUM_BACKOFF_MS, backoffMs * 2);
        backoffFuzzMs = Math.floor(Math.random() * 500);
        if (tries > 3) {
            console.error(`[UT] Call unsuccessful after ${tries} tries. Retrying in ${Math.floor(backoffMs / 1e3)} seconds...`);
        }
        await new Promise((r)=>setTimeout(r, backoffMs + backoffFuzzMs));
    }
    return null;
};
async function dist_pollForFileData(fileKey, callback) {
    const queryUrl = generateUploadThingURL(`/api/pollUpload/${fileKey}`);
    return withExponentialBackoff(async ()=>{
        const res = await fetch(queryUrl);
        const json = await res.json();
        if (json.status !== "done") return null;
        await (callback == null ? void 0 : callback(json));
    });
}
function getUploadthingUrl() {
    const uturl = process.env.UPLOADTHING_URL;
    if (uturl) return `${uturl}/api/uploadthing`;
    const vcurl = process.env.VERCEL_URL;
    if (vcurl) return `https://${vcurl}/api/uploadthing`;
    return `http://localhost:${process.env.PORT ?? 3e3}/api/uploadthing`;
}
var FILESIZE_UNITS = (/* unused pure expression or super */ null && ([
    "B",
    "KB",
    "MB",
    "GB"
]));
var fileSizeToBytes = (input)=>{
    const regex = new RegExp(`^(\\d+)(\\.\\d+)?\\s*(${FILESIZE_UNITS.join("|")})$`, "i");
    const match = input.match(regex);
    if (!match) {
        return new Error("Invalid file size format");
    }
    const sizeValue = parseFloat(match[1]);
    const sizeUnit = match[3].toUpperCase();
    if (!FILESIZE_UNITS.includes(sizeUnit)) {
        throw new Error("Invalid file size unit");
    }
    const bytes = sizeValue * Math.pow(1024, FILESIZE_UNITS.indexOf(sizeUnit));
    return Math.floor(bytes);
};
// src/file-types.ts


var ALLOWED_FILE_TYPES = [
    "image",
    "video",
    "audio",
    "pdf",
    "text",
    "blob"
];
function zodEnumFromObjKeys(obj) {
    const [firstKey, ...otherKeys] = Object.keys(obj);
    return enumType([
        firstKey,
        ...otherKeys
    ]);
}
var MimeTypeZod = zodEnumFromObjKeys(chunk_BFQJWQY7_mimeTypes);
var InternalFileTypeValidator = enumType(ALLOWED_FILE_TYPES);
var InternalMimeTypeValidator = MimeTypeZod;
var CombinedTypeValidator = unionType([
    InternalFileTypeValidator,
    InternalMimeTypeValidator
]);
// src/error.ts
var ERROR_CODES = {
    // Generic
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500,
    INTERNAL_CLIENT_ERROR: 500,
    // S3 specific
    TOO_LARGE: 413,
    TOO_SMALL: 400,
    TOO_MANY_FILES: 400,
    KEY_TOO_LONG: 400,
    // UploadThing specific
    URL_GENERATION_FAILED: 500,
    UPLOAD_FAILED: 500,
    MISSING_ENV: 500,
    FILE_LIMIT_EXCEEDED: 500
};
function messageFromUnknown(cause, fallback) {
    if (typeof cause === "string") {
        return cause;
    }
    if (cause instanceof Error) {
        return cause.message;
    }
    if (cause && typeof cause === "object" && "message" in cause && typeof cause.message === "string") {
        return cause.message;
    }
    return fallback ?? "An unknown error occurred";
}
var dist_UploadThingError = class extends Error {
    constructor(opts){
        const message = opts.message ?? messageFromUnknown(opts.cause, opts.code);
        super(message);
        this.code = opts.code;
        this.data = opts.data;
        if (opts.cause instanceof Error) {
            this.cause = opts.cause;
        } else if (opts.cause instanceof Response) {
            this.cause = new Error(`Response ${opts.cause.status} ${opts.cause.statusText}`);
        } else if (typeof opts.cause === "string") {
            this.cause = new Error(opts.cause);
        } else {
            this.cause = void 0;
        }
    }
    static async fromResponse(response) {
        const json = await response.json();
        let message = void 0;
        if (json !== null && typeof json === "object" && !Array.isArray(json)) {
            if (typeof json.message === "string") {
                message = json.message;
            } else if (typeof json.error === "string") {
                message = json.error;
            }
        }
        return new dist_UploadThingError({
            message,
            code: getErrorTypeFromStatusCode(response.status),
            cause: response,
            data: json
        });
    }
    static toObject(error) {
        return {
            code: error.code,
            message: error.message,
            data: error.data
        };
    }
    static serialize(error) {
        return JSON.stringify(dist_UploadThingError.toObject(error));
    }
};
function getStatusCodeFromError(error) {
    return ERROR_CODES[error.code] ?? 500;
}
function getErrorTypeFromStatusCode(statusCode) {
    for (const [code, status] of Object.entries(ERROR_CODES)){
        if (status === statusCode) {
            return code;
        }
    }
    return "INTERNAL_SERVER_ERROR";
}
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/uploadthing/dist/chunk-I5F7TG7J.mjs

// package.json
var require_package = __commonJS({
    "package.json" (exports, module) {
        module.exports = {
            name: "uploadthing",
            version: "5.5.3",
            license: "MIT",
            exports: {
                "./package.json": "./package.json",
                "./client": {
                    types: "./dist/client.d.ts",
                    import: "./dist/client.mjs",
                    require: "./dist/client.js"
                },
                "./server": {
                    types: "./dist/server.d.ts",
                    import: "./dist/server.mjs",
                    require: "./dist/server.js"
                },
                "./next": {
                    types: "./dist/next.d.ts",
                    import: "./dist/next.mjs",
                    require: "./dist/next.js"
                },
                "./next-legacy": {
                    types: "./dist/next-legacy.d.ts",
                    import: "./dist/next-legacy.mjs",
                    require: "./dist/next-legacy.js"
                },
                "./tw": {
                    types: "./dist/tw.d.ts",
                    import: "./dist/tw.mjs",
                    require: "./dist/tw.js"
                }
            },
            files: [
                "dist"
            ],
            publishConfig: {
                access: "public"
            },
            typesVersions: {
                "*": {
                    client: [
                        "dist/client.d.ts"
                    ],
                    server: [
                        "dist/server.d.ts"
                    ],
                    next: [
                        "dist/next.d.ts"
                    ],
                    "next-legacy": [
                        "dist/next-legacy.d.ts"
                    ],
                    tw: [
                        "dist/tw.d.ts"
                    ]
                }
            },
            scripts: {
                lint: 'eslint "**/*.{ts,tsx}" --max-warnings 0',
                build: "tsup",
                clean: "git clean -xdf dist node_modules",
                dev: "tsup --watch",
                test: "vitest run",
                "test:watch": "vitest",
                typecheck: "tsc --noEmit"
            },
            dependencies: {
                "@uploadthing/mime-types": "^0.2.1",
                "@uploadthing/shared": "^5.2.1"
            },
            devDependencies: {
                "@uploadthing/eslint-config": "0.2.0",
                "@uploadthing/tsconfig": "0.1.0",
                "@uploadthing/tsup-config": "0.1.0",
                eslint: "^8.47.0",
                next: "13.4.4",
                tailwindcss: "^3.3.2",
                tsup: "6.7.0",
                "type-fest": "^3.11.1",
                typescript: "^5.1.6",
                vitest: "^0.30.1",
                zod: "^3.21.4"
            },
            eslintConfig: {
                root: true,
                extends: [
                    "@uploadthing/eslint-config/base"
                ]
            }
        };
    }
});
// src/internal/error-formatter.ts
function defaultErrorFormatter(error) {
    return {
        message: error.message
    };
}
// src/internal/upload-builder.ts
function internalCreateBuilder(initDef = {}) {
    const _def = {
        // Default router config
        routerConfig: {
            image: {
                maxFileSize: "4MB"
            }
        },
        inputParser: {
            parse: ()=>({}),
            _input: {},
            _output: {}
        },
        middleware: ()=>({}),
        onUploadError: ()=>({}),
        errorFormatter: initDef.errorFormatter ?? defaultErrorFormatter,
        // Overload with properties passed in
        ...initDef
    };
    return {
        input (userParser) {
            return internalCreateBuilder({
                ..._def,
                inputParser: userParser
            });
        },
        middleware (userMiddleware) {
            return internalCreateBuilder({
                ..._def,
                middleware: userMiddleware
            });
        },
        onUploadComplete (userUploadComplete) {
            return {
                _def,
                resolver: userUploadComplete
            };
        },
        onUploadError (userOnUploadError) {
            return internalCreateBuilder({
                ..._def,
                onUploadError: userOnUploadError
            });
        }
    };
}
function createBuilder(opts) {
    return (input)=>{
        return internalCreateBuilder({
            routerConfig: input,
            ...opts
        });
    };
}
// src/internal/types.ts
var unsetMarker = "unsetMarker";
var VALID_ACTION_TYPES = [
    "upload",
    "failure"
];
// src/constants.ts
var packageJson = require_package();
if (!packageJson.version) throw new Error("no version found in package.json");
var UPLOADTHING_VERSION = packageJson.version;
// src/internal/handler.ts

// src/internal/parser.ts
function getParseFn(parser) {
    if (typeof parser.parse === "function") {
        return parser.parse;
    }
    throw new Error("Invalid parser");
}
// src/internal/handler.ts
var fileCountLimitHit = (files, routeConfig)=>{
    var _a;
    const counts = {};
    files.forEach((file)=>{
        const type = getTypeFromFileName(file, Object.keys(routeConfig));
        if (!counts[type]) {
            counts[type] = 1;
        } else {
            counts[type] += 1;
        }
    });
    for(const _key in counts){
        const key = _key;
        const count = counts[key];
        const limit = (_a = routeConfig[key]) == null ? void 0 : _a.maxFileCount;
        if (!limit) {
            console.error(routeConfig, key);
            throw new dist_UploadThingError({
                code: "BAD_REQUEST",
                message: "Invalid config during file count",
                cause: `Expected route config to have a maxFileCount for key ${key} but none was found.`
            });
        }
        if (count > limit) {
            return {
                limitHit: true,
                type: key,
                limit,
                count
            };
        }
    }
    return {
        limitHit: false
    };
};
if (false) {}
var isValidResponse = (response)=>{
    if (!response.ok) return false;
    if (response.status >= 400) return false;
    if (!response.headers.has("x-uploadthing-version")) return false;
    return true;
};
var conditionalDevServer = async (fileKey)=>{
    if (true) return;
    const fileData = await pollForFileData(fileKey, async (json)=>{
        const file = json.fileData;
        let callbackUrl = file.callbackUrl + `?slug=${file.callbackSlug}`;
        if (!callbackUrl.startsWith("http")) callbackUrl = "http://" + callbackUrl;
        console.log("[UT] SIMULATING FILE UPLOAD WEBHOOK CALLBACK", callbackUrl);
        const response = await fetch(callbackUrl, {
            method: "POST",
            body: JSON.stringify({
                status: "uploaded",
                metadata: JSON.parse(file.metadata ?? "{}"),
                file: {
                    url: `https://utfs.io/f/${encodeURIComponent(fileKey)}`,
                    key: fileKey,
                    name: file.fileName,
                    size: file.fileSize
                }
            }),
            headers: {
                "uploadthing-hook": "callback"
            }
        });
        if (isValidResponse(response)) {
            console.log("[UT] Successfully simulated callback for file", fileKey);
        } else {
            console.error("[UT] Failed to simulate callback for file. Is your webhook configured correctly?", fileKey);
        }
        return file;
    });
    if (fileData !== null) return fileData;
    console.error(`[UT] Failed to simulate callback for file ${fileKey}`);
    throw new UploadThingError({
        code: "UPLOAD_FAILED",
        message: "File took too long to upload"
    });
};
var getHeader = (req, key)=>{
    if (req.headers instanceof Headers) {
        return req.headers.get(key);
    }
    return req.headers[key];
};
var buildRequestHandler = (opts)=>{
    return async (input)=>{
        const { req, res } = input;
        const { router, config } = opts;
        const preferredOrEnvSecret = (config == null ? void 0 : config.uploadthingSecret) ?? process.env.UPLOADTHING_SECRET;
        const params = new URL(req.url ?? "", getUploadthingUrl()).searchParams;
        const uploadthingHook = getHeader(req, "uploadthing-hook") ?? void 0;
        const slug = params.get("slug") ?? void 0;
        const actionType = params.get("actionType") ?? void 0;
        if (!slug) return new dist_UploadThingError({
            code: "BAD_REQUEST",
            message: "No slug provided"
        });
        if (slug && typeof slug !== "string") {
            return new dist_UploadThingError({
                code: "BAD_REQUEST",
                message: "`slug` must be a string",
                cause: `Expected slug to be of type 'string', got '${typeof slug}'`
            });
        }
        if (actionType && typeof actionType !== "string") {
            return new dist_UploadThingError({
                code: "BAD_REQUEST",
                message: "`actionType` must be a string",
                cause: `Expected actionType to be of type 'string', got '${typeof actionType}'`
            });
        }
        if (uploadthingHook && typeof uploadthingHook !== "string") {
            return new dist_UploadThingError({
                code: "BAD_REQUEST",
                message: "`uploadthingHook` must be a string",
                cause: `Expected uploadthingHook to be of type 'string', got '${typeof uploadthingHook}'`
            });
        }
        if (!preferredOrEnvSecret) {
            return new dist_UploadThingError({
                code: "BAD_REQUEST",
                message: `Please set your preferred secret in ${slug} router's config or set UPLOADTHING_SECRET in your env file`,
                cause: "No secret provided"
            });
        }
        const uploadable = router[slug];
        if (!uploadable) {
            return new dist_UploadThingError({
                code: "NOT_FOUND",
                message: `No file route found for slug ${slug}`
            });
        }
        if (uploadthingHook === "callback") {
            const reqBody = await req.json();
            await uploadable.resolver({
                file: reqBody.file,
                metadata: reqBody.metadata
            });
            return {
                status: 200
            };
        }
        if (!actionType || !VALID_ACTION_TYPES.includes(actionType)) {
            return new dist_UploadThingError({
                code: "BAD_REQUEST",
                cause: `Invalid action type ${actionType}`,
                message: `Expected ${VALID_ACTION_TYPES.map((x)=>`"${x}"`).join(", ").replace(/,(?!.*,)/, " or")} but got "${"a"}"`
            });
        }
        switch(actionType){
            case "upload":
                {
                    const { files, input: userInput } = await req.json();
                    let parsedInput = {};
                    try {
                        const inputParser = uploadable._def.inputParser;
                        parsedInput = await getParseFn(inputParser)(userInput);
                    } catch (error) {
                        console.error(error);
                        return new dist_UploadThingError({
                            code: "BAD_REQUEST",
                            message: "Invalid input.",
                            cause: error
                        });
                    }
                    let metadata = {};
                    try {
                        metadata = await uploadable._def.middleware({
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            req,
                            res,
                            input: parsedInput
                        });
                    } catch (error) {
                        console.error(error);
                        return new dist_UploadThingError({
                            code: "INTERNAL_SERVER_ERROR",
                            message: "Failed to run middleware.",
                            cause: error
                        });
                    }
                    if (!Array.isArray(files) || !files.every((f)=>typeof f === "string")) return new dist_UploadThingError({
                        code: "BAD_REQUEST",
                        message: "Files must be a string array",
                        cause: `Expected files to be of type 'string[]', got '${JSON.stringify(files)}'`
                    });
                    let parsedConfig;
                    try {
                        parsedConfig = fillInputRouteConfig(uploadable._def.routerConfig);
                    } catch (error) {
                        console.error(error);
                        return new dist_UploadThingError({
                            code: "BAD_REQUEST",
                            message: "Invalid config.",
                            cause: error
                        });
                    }
                    try {
                        const { limitHit, count, limit, type } = fileCountLimitHit(files, parsedConfig);
                        if (limitHit) {
                            return new dist_UploadThingError({
                                code: "BAD_REQUEST",
                                message: "File limit exceeded",
                                cause: `You uploaded ${count} files of type '${type}', but the limit for that type is ${limit}`
                            });
                        }
                    } catch (error) {
                        console.error(error);
                        return new dist_UploadThingError({
                            code: "BAD_REQUEST",
                            message: "Invalid config.",
                            cause: error
                        });
                    }
                    const uploadthingApiResponse = await fetch(generateUploadThingURL("/api/prepareUpload"), {
                        method: "POST",
                        body: JSON.stringify({
                            files,
                            routeConfig: parsedConfig,
                            metadata,
                            callbackUrl: (config == null ? void 0 : config.callbackUrl) ?? getUploadthingUrl(),
                            callbackSlug: slug
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "x-uploadthing-api-key": preferredOrEnvSecret,
                            "x-uploadthing-version": UPLOADTHING_VERSION
                        }
                    });
                    if (!uploadthingApiResponse.ok) {
                        console.error("[UT] unable to get presigned urls");
                        try {
                            const error = await uploadthingApiResponse.json();
                            console.error(error);
                            return new dist_UploadThingError({
                                code: "BAD_REQUEST",
                                cause: error
                            });
                        } catch (cause) {
                            console.error("[UT] unable to parse response");
                            return new dist_UploadThingError({
                                code: "URL_GENERATION_FAILED",
                                message: "Unable to get presigned urls",
                                cause
                            });
                        }
                    }
                    const parsedResponse = await uploadthingApiResponse.json();
                    if (false) {}
                    return {
                        body: parsedResponse,
                        status: 200
                    };
                }
            case "failure":
                {
                    const { fileKey } = await req.json();
                    const uploadthingApiResponse = await fetch(generateUploadThingURL("/api/failureCallback"), {
                        method: "POST",
                        body: JSON.stringify({
                            fileKey
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "x-uploadthing-api-key": preferredOrEnvSecret,
                            "x-uploadthing-version": UPLOADTHING_VERSION
                        }
                    });
                    if (!uploadthingApiResponse.ok) {
                        console.error("[UT] failed to mark upload as failed");
                        try {
                            const error = await uploadthingApiResponse.json();
                            console.error(error);
                            return new dist_UploadThingError({
                                message: "Failed to mark upload as failed",
                                code: "INTERNAL_SERVER_ERROR",
                                cause: error
                            });
                        } catch (cause) {
                            console.error("[UT] unable to parse response");
                            return new dist_UploadThingError({
                                code: "URL_GENERATION_FAILED",
                                message: "Unable to get presigned urls",
                                cause
                            });
                        }
                    }
                    try {
                        uploadable._def.onUploadError({
                            error: new dist_UploadThingError({
                                code: "UPLOAD_FAILED",
                                message: `Upload failed for ${fileKey}`
                            }),
                            fileKey
                        });
                    } catch (error) {
                        console.error("[UT] Failed to run onUploadError callback. You probably shouldn't be throwing errors in your callback.");
                        console.error(error);
                        return new dist_UploadThingError({
                            code: "INTERNAL_SERVER_ERROR",
                            message: "Failed to run onUploadError callback",
                            cause: error
                        });
                    }
                    return {
                        status: 200
                    };
                }
            default:
                {
                    return new dist_UploadThingError({
                        code: "BAD_REQUEST",
                        message: `Invalid action type`
                    });
                }
        }
    };
};
var buildPermissionsInfoHandler = (opts)=>{
    return ()=>{
        const r = opts.router;
        const permissions = Object.keys(r).map((k)=>{
            const route = r[k];
            const config = fillInputRouteConfig(route._def.routerConfig);
            return {
                slug: k,
                config
            };
        });
        return permissions;
    };
};
 //# sourceMappingURL=chunk-I5F7TG7J.mjs.map

;// CONCATENATED MODULE: ./node_modules/uploadthing/dist/chunk-UZDIEYWV.mjs

// src/next.ts

var createUploadthing = (opts)=>createBuilder(opts);
var createNextRouteHandler = (opts)=>{
    const requestHandler = buildRequestHandler(opts);
    const POST = async (req)=>{
        var _a;
        const response = await requestHandler({
            req
        });
        const errorFormatter = ((_a = opts.router[Object.keys(opts.router)[0]]) == null ? void 0 : _a._def.errorFormatter) ?? defaultErrorFormatter;
        if (response instanceof dist_UploadThingError) {
            const formattedError = errorFormatter(response);
            return new Response(JSON.stringify(formattedError), {
                status: getStatusCodeFromError(response),
                headers: {
                    "x-uploadthing-version": UPLOADTHING_VERSION
                }
            });
        }
        if (response.status !== 200) {
            return new Response("An unknown error occured", {
                status: 500,
                headers: {
                    "x-uploadthing-version": UPLOADTHING_VERSION
                }
            });
        }
        return new Response(JSON.stringify(response.body), {
            status: response.status,
            headers: {
                "x-uploadthing-version": UPLOADTHING_VERSION
            }
        });
    };
    const getBuildPerms = buildPermissionsInfoHandler(opts);
    const GET = ()=>{
        return new Response(JSON.stringify(getBuildPerms()), {
            status: 200,
            headers: {
                "x-uploadthing-version": UPLOADTHING_VERSION
            }
        });
    };
    return {
        GET,
        POST
    };
};
 //# sourceMappingURL=chunk-UZDIEYWV.mjs.map

;// CONCATENATED MODULE: ./node_modules/uploadthing/dist/next.mjs



 //# sourceMappingURL=next.mjs.map


/***/ })

};
;