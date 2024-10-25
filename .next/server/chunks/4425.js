"use strict";
exports.id = 4425;
exports.ids = [4425];
exports.modules = {

/***/ 48936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    AllowlistIdentifier: ()=>AllowlistIdentifier,
    AuthStatus: ()=>AuthStatus,
    Clerk: ()=>Clerk,
    Client: ()=>Client,
    DeletedObject: ()=>DeletedObject,
    Email: ()=>Email,
    EmailAddress: ()=>EmailAddress,
    ExternalAccount: ()=>ExternalAccount,
    IdentificationLink: ()=>IdentificationLink,
    Invitation: ()=>Invitation,
    OauthAccessToken: ()=>OauthAccessToken,
    ObjectType: ()=>ObjectType,
    Organization: ()=>Organization,
    OrganizationInvitation: ()=>OrganizationInvitation,
    OrganizationMembership: ()=>OrganizationMembership,
    OrganizationMembershipPublicUserData: ()=>OrganizationMembershipPublicUserData,
    PhoneNumber: ()=>PhoneNumber,
    RedirectUrl: ()=>RedirectUrl,
    SMSMessage: ()=>SMSMessage,
    Session: ()=>Session,
    SignInToken: ()=>SignInToken,
    Token: ()=>Token,
    User: ()=>User,
    Verification: ()=>Verification,
    buildRequestUrl: ()=>buildRequestUrl,
    constants: ()=>constants,
    createAuthenticateRequest: ()=>createAuthenticateRequest,
    createIsomorphicRequest: ()=>createIsomorphicRequest,
    debugRequestState: ()=>debugRequestState,
    decodeJwt: ()=>decodeJwt,
    deserialize: ()=>deserialize,
    hasValidSignature: ()=>hasValidSignature,
    loadInterstitialFromLocal: ()=>loadInterstitialFromLocal,
    makeAuthObjectSerializable: ()=>makeAuthObjectSerializable,
    prunePrivateMetadata: ()=>prunePrivateMetadata,
    redirect: ()=>redirect,
    sanitizeAuthObject: ()=>sanitizeAuthObject,
    signedInAuthObject: ()=>signedInAuthObject,
    signedOutAuthObject: ()=>signedOutAuthObject,
    verifyJwt: ()=>verifyJwt,
    verifyToken: ()=>verifyToken
});
module.exports = __toCommonJS(src_exports);
// src/api/endpoints/AbstractApi.ts
var AbstractAPI = class {
    constructor(request){
        this.request = request;
    }
    requireId(id) {
        if (!id) {
            throw new Error("A valid resource ID is required.");
        }
    }
};
// src/util/path.ts
var SEPARATOR = "/";
var MULTIPLE_SEPARATOR_REGEX = new RegExp(SEPARATOR + "{1,}", "g");
function joinPaths(...args) {
    return args.filter((p)=>p).join(SEPARATOR).replace(MULTIPLE_SEPARATOR_REGEX, SEPARATOR);
}
// src/api/endpoints/AllowlistIdentifierApi.ts
var basePath = "/allowlist_identifiers";
var AllowlistIdentifierAPI = class extends AbstractAPI {
    async getAllowlistIdentifierList() {
        return this.request({
            method: "GET",
            path: basePath
        });
    }
    async createAllowlistIdentifier(params) {
        return this.request({
            method: "POST",
            path: basePath,
            bodyParams: params
        });
    }
    async deleteAllowlistIdentifier(allowlistIdentifierId) {
        this.requireId(allowlistIdentifierId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath, allowlistIdentifierId)
        });
    }
};
// src/api/endpoints/ClientApi.ts
var basePath2 = "/clients";
var ClientAPI = class extends AbstractAPI {
    async getClientList() {
        return this.request({
            method: "GET",
            path: basePath2
        });
    }
    async getClient(clientId) {
        this.requireId(clientId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath2, clientId)
        });
    }
    verifyClient(token) {
        return this.request({
            method: "POST",
            path: joinPaths(basePath2, "verify"),
            bodyParams: {
                token
            }
        });
    }
};
// src/api/endpoints/DomainApi.ts
var basePath3 = "/domains";
var DomainAPI = class extends AbstractAPI {
    async deleteDomain(id) {
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath3, id)
        });
    }
};
// src/api/endpoints/EmailAddressApi.ts
var basePath4 = "/email_addresses";
var EmailAddressAPI = class extends AbstractAPI {
    async getEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath4, emailAddressId)
        });
    }
    async createEmailAddress(params) {
        return this.request({
            method: "POST",
            path: basePath4,
            bodyParams: params
        });
    }
    async updateEmailAddress(emailAddressId, params = {}) {
        this.requireId(emailAddressId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath4, emailAddressId),
            bodyParams: params
        });
    }
    async deleteEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath4, emailAddressId)
        });
    }
};
// src/api/endpoints/EmailApi.ts
var basePath5 = "/emails";
var EmailAPI = class extends AbstractAPI {
    async createEmail(params) {
        return this.request({
            method: "POST",
            path: basePath5,
            bodyParams: params
        });
    }
};
// src/api/endpoints/InterstitialApi.ts
var InterstitialAPI = class extends AbstractAPI {
    async getInterstitial() {
        return this.request({
            path: "internal/interstitial",
            method: "GET",
            headerParams: {
                "Content-Type": "text/html"
            }
        });
    }
};
// src/api/endpoints/InvitationApi.ts
var basePath6 = "/invitations";
var InvitationAPI = class extends AbstractAPI {
    async getInvitationList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath6,
            queryParams: params
        });
    }
    async createInvitation(params) {
        return this.request({
            method: "POST",
            path: basePath6,
            bodyParams: params
        });
    }
    async revokeInvitation(invitationId) {
        this.requireId(invitationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath6, invitationId, "revoke")
        });
    }
};
// src/runtime/index.ts
var import_crypto = __toESM(__webpack_require__(61686));
var fetchApisPolyfill = __toESM(__webpack_require__(53150));
var { default: fetch, RuntimeAbortController, RuntimeBlob, RuntimeFormData, RuntimeHeaders, RuntimeRequest, RuntimeResponse } = fetchApisPolyfill;
var globalFetch = fetch.bind(globalThis);
var runtime = {
    crypto: import_crypto.default,
    fetch: globalFetch,
    AbortController: RuntimeAbortController,
    Blob: RuntimeBlob,
    FormData: RuntimeFormData,
    Headers: RuntimeHeaders,
    Request: RuntimeRequest,
    Response: RuntimeResponse
};
var runtime_default = runtime;
// src/api/endpoints/OrganizationApi.ts
var basePath7 = "/organizations";
var OrganizationAPI = class extends AbstractAPI {
    async getOrganizationList(params) {
        return this.request({
            method: "GET",
            path: basePath7,
            queryParams: params
        });
    }
    async createOrganization(params) {
        return this.request({
            method: "POST",
            path: basePath7,
            bodyParams: params
        });
    }
    async getOrganization(params) {
        const organizationIdOrSlug = "organizationId" in params ? params.organizationId : params.slug;
        this.requireId(organizationIdOrSlug);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationIdOrSlug)
        });
    }
    async updateOrganization(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId),
            bodyParams: params
        });
    }
    async updateOrganizationLogo(organizationId, params) {
        this.requireId(organizationId);
        const formData = new runtime_default.FormData();
        formData.append("file", params?.file);
        formData.append("uploader_user_id", params?.uploaderUserId);
        return this.request({
            method: "PUT",
            path: joinPaths(basePath7, organizationId, "logo"),
            formData
        });
    }
    async deleteOrganizationLogo(organizationId) {
        this.requireId(organizationId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, organizationId, "logo")
        });
    }
    async updateOrganizationMetadata(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId, "metadata"),
            bodyParams: params
        });
    }
    async deleteOrganization(organizationId) {
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, organizationId)
        });
    }
    async getOrganizationMembershipList(params) {
        const { organizationId, limit, offset } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationId, "memberships"),
            queryParams: {
                limit,
                offset
            }
        });
    }
    async createOrganizationMembership(params) {
        const { organizationId, userId, role } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath7, organizationId, "memberships"),
            bodyParams: {
                userId,
                role
            }
        });
    }
    async updateOrganizationMembership(params) {
        const { organizationId, userId, role } = params;
        this.requireId(organizationId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId, "memberships", userId),
            bodyParams: {
                role
            }
        });
    }
    async updateOrganizationMembershipMetadata(params) {
        const { organizationId, userId, publicMetadata, privateMetadata } = params;
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath7, organizationId, "memberships", userId, "metadata"),
            bodyParams: {
                publicMetadata,
                privateMetadata
            }
        });
    }
    async deleteOrganizationMembership(params) {
        const { organizationId, userId } = params;
        this.requireId(organizationId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath7, organizationId, "memberships", userId)
        });
    }
    async getPendingOrganizationInvitationList(params) {
        const { organizationId, limit, offset } = params;
        this.requireId(organizationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationId, "invitations", "pending"),
            queryParams: {
                limit,
                offset
            }
        });
    }
    async createOrganizationInvitation(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath7, organizationId, "invitations"),
            bodyParams: {
                ...bodyParams
            }
        });
    }
    async getOrganizationInvitation(params) {
        const { organizationId, invitationId } = params;
        this.requireId(organizationId);
        this.requireId(invitationId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath7, organizationId, "invitations", invitationId)
        });
    }
    async revokeOrganizationInvitation(params) {
        const { organizationId, invitationId, requestingUserId } = params;
        this.requireId(organizationId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath7, organizationId, "invitations", invitationId, "revoke"),
            bodyParams: {
                requestingUserId
            }
        });
    }
};
// src/api/endpoints/PhoneNumberApi.ts
var basePath8 = "/phone_numbers";
var PhoneNumberAPI = class extends AbstractAPI {
    async getPhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath8, phoneNumberId)
        });
    }
    async createPhoneNumber(params) {
        return this.request({
            method: "POST",
            path: basePath8,
            bodyParams: params
        });
    }
    async updatePhoneNumber(phoneNumberId, params = {}) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath8, phoneNumberId),
            bodyParams: params
        });
    }
    async deletePhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath8, phoneNumberId)
        });
    }
};
// src/api/endpoints/RedirectUrlApi.ts
var basePath9 = "/redirect_urls";
var RedirectUrlAPI = class extends AbstractAPI {
    async getRedirectUrlList() {
        return this.request({
            method: "GET",
            path: basePath9
        });
    }
    async getRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath9, redirectUrlId)
        });
    }
    async createRedirectUrl(params) {
        return this.request({
            method: "POST",
            path: basePath9,
            bodyParams: params
        });
    }
    async deleteRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath9, redirectUrlId)
        });
    }
};
// src/api/endpoints/SessionApi.ts
var basePath10 = "/sessions";
var SessionAPI = class extends AbstractAPI {
    async getSessionList(queryParams) {
        return this.request({
            method: "GET",
            path: basePath10,
            queryParams
        });
    }
    async getSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath10, sessionId)
        });
    }
    async revokeSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath10, sessionId, "revoke")
        });
    }
    async verifySession(sessionId, token) {
        this.requireId(sessionId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath10, sessionId, "verify"),
            bodyParams: {
                token
            }
        });
    }
    async getToken(sessionId, template) {
        this.requireId(sessionId);
        return (await this.request({
            method: "POST",
            path: joinPaths(basePath10, sessionId, "tokens", template || "")
        })).jwt;
    }
};
// src/api/endpoints/SignInTokenApi.ts
var basePath11 = "/sign_in_tokens";
var SignInTokenAPI = class extends AbstractAPI {
    async createSignInToken(params) {
        return this.request({
            method: "POST",
            path: basePath11,
            bodyParams: params
        });
    }
    async revokeSignInToken(signInTokenId) {
        this.requireId(signInTokenId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath11, signInTokenId, "revoke")
        });
    }
};
// src/api/endpoints/SMSMessageApi.ts
var basePath12 = "/sms_messages";
var SMSMessageAPI = class extends AbstractAPI {
    async createSMSMessage(params) {
        return this.request({
            method: "POST",
            path: basePath12,
            bodyParams: params
        });
    }
};
// src/api/endpoints/UserApi.ts
var basePath13 = "/users";
var UserAPI = class extends AbstractAPI {
    async getUserList(params = {}) {
        return this.request({
            method: "GET",
            path: basePath13,
            queryParams: params
        });
    }
    async getUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath13, userId)
        });
    }
    async createUser(params) {
        return this.request({
            method: "POST",
            path: basePath13,
            bodyParams: params
        });
    }
    async updateUser(userId, params = {}) {
        this.requireId(userId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath13, userId),
            bodyParams: params
        });
    }
    async updateUserProfileImage(userId, params) {
        this.requireId(userId);
        const formData = new runtime_default.FormData();
        formData.append("file", params?.file);
        return this.request({
            method: "POST",
            path: joinPaths(basePath13, userId, "profile_image"),
            formData
        });
    }
    async updateUserMetadata(userId, params) {
        this.requireId(userId);
        return this.request({
            method: "PATCH",
            path: joinPaths(basePath13, userId, "metadata"),
            bodyParams: params
        });
    }
    async deleteUser(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath13, userId)
        });
    }
    async getCount(params = {}) {
        return this.request({
            method: "GET",
            path: joinPaths(basePath13, "count"),
            queryParams: params
        });
    }
    async getUserOauthAccessToken(userId, provider) {
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath13, userId, "oauth_access_tokens", provider)
        });
    }
    async disableUserMFA(userId) {
        this.requireId(userId);
        return this.request({
            method: "DELETE",
            path: joinPaths(basePath13, userId, "mfa")
        });
    }
    async getOrganizationMembershipList(params) {
        const { userId, limit, offset } = params;
        this.requireId(userId);
        return this.request({
            method: "GET",
            path: joinPaths(basePath13, userId, "organization_memberships"),
            queryParams: {
                limit,
                offset
            }
        });
    }
    async verifyPassword(params) {
        const { userId, password } = params;
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath13, userId, "verify_password"),
            bodyParams: {
                password
            }
        });
    }
    async verifyTOTP(params) {
        const { userId, code } = params;
        this.requireId(userId);
        return this.request({
            method: "POST",
            path: joinPaths(basePath13, userId, "verify_totp"),
            bodyParams: {
                code
            }
        });
    }
};
// src/api/request.ts
var import_deepmerge = __toESM(__webpack_require__(79089));
var import_snakecase_keys = __toESM(__webpack_require__(93330));
// src/constants.ts
var API_URL = "https://api.clerk.dev";
var API_VERSION = "v1";
var USER_AGENT = `@clerk/backend`;
var MAX_CACHE_LAST_UPDATED_AT_SECONDS = 5 * 60;
var Attributes = {
    AuthStatus: "__clerkAuthStatus",
    AuthReason: "__clerkAuthReason",
    AuthMessage: "__clerkAuthMessage"
};
var Cookies = {
    Session: "__session",
    ClientUat: "__client_uat"
};
var Headers = {
    AuthStatus: "x-clerk-auth-status",
    AuthReason: "x-clerk-auth-reason",
    AuthMessage: "x-clerk-auth-message",
    EnableDebug: "x-clerk-debug",
    ClerkRedirectTo: "x-clerk-redirect-to",
    Authorization: "authorization",
    ForwardedPort: "x-forwarded-port",
    ForwardedProto: "x-forwarded-proto",
    ForwardedHost: "x-forwarded-host",
    Referrer: "referer",
    UserAgent: "user-agent",
    Origin: "origin",
    Host: "host",
    ContentType: "content-type"
};
var SearchParams = {
    AuthStatus: Headers.AuthStatus
};
var ContentTypes = {
    Json: "application/json"
};
var constants = {
    Attributes,
    Cookies,
    Headers,
    SearchParams,
    ContentTypes
};
// src/util/assertValidSecretKey.ts
function assertValidSecretKey(val) {
    if (!val || typeof val !== "string") {
        throw Error("Missing Clerk Secret Key or API Key. Go to https://dashboard.clerk.com and get your key for your instance.");
    }
}
// src/api/resources/AllowlistIdentifier.ts
var AllowlistIdentifier = class {
    constructor(id, identifier, createdAt, updatedAt, invitationId){
        this.id = id;
        this.identifier = identifier;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.invitationId = invitationId;
    }
    static fromJSON(data) {
        return new AllowlistIdentifier(data.id, data.identifier, data.created_at, data.updated_at, data.invitation_id);
    }
};
// src/api/resources/Session.ts
var Session = class {
    constructor(id, clientId, userId, status, lastActiveAt, expireAt, abandonAt, createdAt, updatedAt){
        this.id = id;
        this.clientId = clientId;
        this.userId = userId;
        this.status = status;
        this.lastActiveAt = lastActiveAt;
        this.expireAt = expireAt;
        this.abandonAt = abandonAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new Session(data.id, data.client_id, data.user_id, data.status, data.last_active_at, data.expire_at, data.abandon_at, data.created_at, data.updated_at);
    }
};
// src/api/resources/Client.ts
var Client = class {
    constructor(id, sessionIds, sessions, signInId, signUpId, lastActiveSessionId, createdAt, updatedAt){
        this.id = id;
        this.sessionIds = sessionIds;
        this.sessions = sessions;
        this.signInId = signInId;
        this.signUpId = signUpId;
        this.lastActiveSessionId = lastActiveSessionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new Client(data.id, data.session_ids, data.sessions.map((x)=>Session.fromJSON(x)), data.sign_in_id, data.sign_up_id, data.last_active_session_id, data.created_at, data.updated_at);
    }
};
// src/api/resources/DeletedObject.ts
var DeletedObject = class {
    constructor(object, id, slug, deleted){
        this.object = object;
        this.id = id;
        this.slug = slug;
        this.deleted = deleted;
    }
    static fromJSON(data) {
        return new DeletedObject(data.object, data.id || null, data.slug || null, data.deleted);
    }
};
// src/api/resources/Email.ts
var Email = class {
    constructor(id, fromEmailName, emailAddressId, toEmailAddress, subject, body, bodyPlain, status, slug, data, deliveredByClerk){
        this.id = id;
        this.fromEmailName = fromEmailName;
        this.emailAddressId = emailAddressId;
        this.toEmailAddress = toEmailAddress;
        this.subject = subject;
        this.body = body;
        this.bodyPlain = bodyPlain;
        this.status = status;
        this.slug = slug;
        this.data = data;
        this.deliveredByClerk = deliveredByClerk;
    }
    static fromJSON(data) {
        return new Email(data.id, data.from_email_name, data.email_address_id, data.to_email_address, data.subject, data.body, data.body_plain, data.status, data.slug, data.data, data.delivered_by_clerk);
    }
};
// src/api/resources/IdentificationLink.ts
var IdentificationLink = class {
    constructor(id, type){
        this.id = id;
        this.type = type;
    }
    static fromJSON(data) {
        return new IdentificationLink(data.id, data.type);
    }
};
// src/api/resources/Verification.ts
var Verification = class {
    constructor(status, strategy, externalVerificationRedirectURL = null, attempts = null, expireAt = null, nonce = null){
        this.status = status;
        this.strategy = strategy;
        this.externalVerificationRedirectURL = externalVerificationRedirectURL;
        this.attempts = attempts;
        this.expireAt = expireAt;
        this.nonce = nonce;
    }
    static fromJSON(data) {
        return new Verification(data.status, data.strategy, data.external_verification_redirect_url ? new URL(data.external_verification_redirect_url) : null, data.attempts, data.expire_at, data.nonce);
    }
};
// src/api/resources/EmailAddress.ts
var EmailAddress = class {
    constructor(id, emailAddress, verification, linkedTo){
        this.id = id;
        this.emailAddress = emailAddress;
        this.verification = verification;
        this.linkedTo = linkedTo;
    }
    static fromJSON(data) {
        return new EmailAddress(data.id, data.email_address, data.verification && Verification.fromJSON(data.verification), data.linked_to.map((link)=>IdentificationLink.fromJSON(link)));
    }
};
// src/api/resources/ExternalAccount.ts
var ExternalAccount = class {
    constructor(id, provider, identificationId, externalId, approvedScopes, emailAddress, firstName, lastName, picture, imageUrl, username, publicMetadata = {}, label, verification){
        this.id = id;
        this.provider = provider;
        this.identificationId = identificationId;
        this.externalId = externalId;
        this.approvedScopes = approvedScopes;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.imageUrl = imageUrl;
        this.username = username;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.verification = verification;
    }
    static fromJSON(data) {
        return new ExternalAccount(data.id, data.provider, data.identification_id, data.provider_user_id, data.approved_scopes, data.email_address, data.first_name, data.last_name, data.avatar_url, data.image_url, data.username, data.public_metadata, data.label, data.verification && Verification.fromJSON(data.verification));
    }
};
// src/api/resources/Invitation.ts
var Invitation = class {
    constructor(id, emailAddress, publicMetadata, createdAt, updatedAt, status, revoked){
        this.id = id;
        this.emailAddress = emailAddress;
        this.publicMetadata = publicMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.revoked = revoked;
    }
    static fromJSON(data) {
        return new Invitation(data.id, data.email_address, data.public_metadata, data.created_at, data.updated_at, data.status, data.revoked);
    }
};
// src/api/resources/JSON.ts
var ObjectType = /* @__PURE__ */ ((ObjectType2)=>{
    ObjectType2["AllowlistIdentifier"] = "allowlist_identifier";
    ObjectType2["Client"] = "client";
    ObjectType2["Email"] = "email";
    ObjectType2["EmailAddress"] = "email_address";
    ObjectType2["ExternalAccount"] = "external_account";
    ObjectType2["FacebookAccount"] = "facebook_account";
    ObjectType2["GoogleAccount"] = "google_account";
    ObjectType2["Invitation"] = "invitation";
    ObjectType2["OauthAccessToken"] = "oauth_access_token";
    ObjectType2["Organization"] = "organization";
    ObjectType2["OrganizationInvitation"] = "organization_invitation";
    ObjectType2["OrganizationMembership"] = "organization_membership";
    ObjectType2["PhoneNumber"] = "phone_number";
    ObjectType2["RedirectUrl"] = "redirect_url";
    ObjectType2["Session"] = "session";
    ObjectType2["SignInAttempt"] = "sign_in_attempt";
    ObjectType2["SignInToken"] = "sign_in_token";
    ObjectType2["SignUpAttempt"] = "sign_up_attempt";
    ObjectType2["SmsMessage"] = "sms_message";
    ObjectType2["User"] = "user";
    ObjectType2["Web3Wallet"] = "web3_wallet";
    ObjectType2["Token"] = "token";
    ObjectType2["TotalCount"] = "total_count";
    return ObjectType2;
})(ObjectType || {});
// src/api/resources/OauthAccessToken.ts
var OauthAccessToken = class {
    constructor(provider, token, publicMetadata = {}, label, scopes, tokenSecret){
        this.provider = provider;
        this.token = token;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.scopes = scopes;
        this.tokenSecret = tokenSecret;
    }
    static fromJSON(data) {
        return new OauthAccessToken(data.provider, data.token, data.public_metadata, data.label, data.scopes, data.token_secret);
    }
};
// src/api/resources/Organization.ts
var Organization = class {
    constructor(id, name, slug, logoUrl, imageUrl, hasImage, createdBy, createdAt, updatedAt, publicMetadata = {}, privateMetadata = {}, maxAllowedMemberships, adminDeleteEnabled){
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.logoUrl = logoUrl;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.maxAllowedMemberships = maxAllowedMemberships;
        this.adminDeleteEnabled = adminDeleteEnabled;
    }
    static fromJSON(data) {
        return new Organization(data.id, data.name, data.slug, data.logo_url, data.image_url, data.has_image, data.created_by, data.created_at, data.updated_at, data.public_metadata, data.private_metadata, data.max_allowed_memberships, data.admin_delete_enabled);
    }
};
// src/api/resources/OrganizationInvitation.ts
var OrganizationInvitation = class {
    constructor(id, emailAddress, role, organizationId, createdAt, updatedAt, status, publicMetadata = {}, privateMetadata = {}){
        this.id = id;
        this.emailAddress = emailAddress;
        this.role = role;
        this.organizationId = organizationId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
    }
    static fromJSON(data) {
        return new OrganizationInvitation(data.id, data.email_address, data.role, data.organization_id, data.created_at, data.updated_at, data.status, data.public_metadata, data.private_metadata);
    }
};
// src/api/resources/OrganizationMembership.ts
var OrganizationMembership = class {
    constructor(id, role, publicMetadata = {}, privateMetadata = {}, createdAt, updatedAt, organization, publicUserData){
        this.id = id;
        this.role = role;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.organization = organization;
        this.publicUserData = publicUserData;
    }
    static fromJSON(data) {
        return new OrganizationMembership(data.id, data.role, data.public_metadata, data.private_metadata, data.created_at, data.updated_at, Organization.fromJSON(data.organization), OrganizationMembershipPublicUserData.fromJSON(data.public_user_data));
    }
};
var OrganizationMembershipPublicUserData = class {
    constructor(identifier, firstName, lastName, profileImageUrl, imageUrl, hasImage, userId){
        this.identifier = identifier;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profileImageUrl = profileImageUrl;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.userId = userId;
    }
    static fromJSON(data) {
        return new OrganizationMembershipPublicUserData(data.identifier, data.first_name, data.last_name, data.profile_image_url, data.image_url, data.has_image, data.user_id);
    }
};
// src/api/resources/PhoneNumber.ts
var PhoneNumber = class {
    constructor(id, phoneNumber, reservedForSecondFactor, defaultSecondFactor, verification, linkedTo){
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.reservedForSecondFactor = reservedForSecondFactor;
        this.defaultSecondFactor = defaultSecondFactor;
        this.verification = verification;
        this.linkedTo = linkedTo;
    }
    static fromJSON(data) {
        return new PhoneNumber(data.id, data.phone_number, data.reserved_for_second_factor, data.default_second_factor, data.verification && Verification.fromJSON(data.verification), data.linked_to.map((link)=>IdentificationLink.fromJSON(link)));
    }
};
// src/api/resources/RedirectUrl.ts
var RedirectUrl = class {
    constructor(id, url, createdAt, updatedAt){
        this.id = id;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new RedirectUrl(data.id, data.url, data.created_at, data.updated_at);
    }
};
// src/api/resources/SignInTokens.ts
var SignInToken = class {
    constructor(id, userId, token, status, url, createdAt, updatedAt){
        this.id = id;
        this.userId = userId;
        this.token = token;
        this.status = status;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(data) {
        return new SignInToken(data.id, data.user_id, data.token, data.status, data.url, data.created_at, data.updated_at);
    }
};
// src/api/resources/SMSMessage.ts
var SMSMessage = class {
    constructor(id, fromPhoneNumber, toPhoneNumber, message, status, phoneNumberId, data){
        this.id = id;
        this.fromPhoneNumber = fromPhoneNumber;
        this.toPhoneNumber = toPhoneNumber;
        this.message = message;
        this.status = status;
        this.phoneNumberId = phoneNumberId;
        this.data = data;
    }
    static fromJSON(data) {
        return new SMSMessage(data.id, data.from_phone_number, data.to_phone_number, data.message, data.status, data.phone_number_id, data.data);
    }
};
// src/api/resources/Token.ts
var Token = class {
    constructor(jwt){
        this.jwt = jwt;
    }
    static fromJSON(data) {
        return new Token(data.jwt);
    }
};
// src/api/resources/Web3Wallet.ts
var Web3Wallet = class {
    constructor(id, web3Wallet, verification){
        this.id = id;
        this.web3Wallet = web3Wallet;
        this.verification = verification;
    }
    static fromJSON(data) {
        return new Web3Wallet(data.id, data.web3_wallet, data.verification && Verification.fromJSON(data.verification));
    }
};
// src/api/resources/User.ts
var User = class {
    constructor(id, passwordEnabled, totpEnabled, backupCodeEnabled, twoFactorEnabled, banned, createdAt, updatedAt, profileImageUrl, imageUrl, hasImage, gender, birthday, primaryEmailAddressId, primaryPhoneNumberId, primaryWeb3WalletId, lastSignInAt, externalId, username, firstName, lastName, publicMetadata = {}, privateMetadata = {}, unsafeMetadata = {}, emailAddresses = [], phoneNumbers = [], web3Wallets = [], externalAccounts = []){
        this.id = id;
        this.passwordEnabled = passwordEnabled;
        this.totpEnabled = totpEnabled;
        this.backupCodeEnabled = backupCodeEnabled;
        this.twoFactorEnabled = twoFactorEnabled;
        this.banned = banned;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.profileImageUrl = profileImageUrl;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.gender = gender;
        this.birthday = birthday;
        this.primaryEmailAddressId = primaryEmailAddressId;
        this.primaryPhoneNumberId = primaryPhoneNumberId;
        this.primaryWeb3WalletId = primaryWeb3WalletId;
        this.lastSignInAt = lastSignInAt;
        this.externalId = externalId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.unsafeMetadata = unsafeMetadata;
        this.emailAddresses = emailAddresses;
        this.phoneNumbers = phoneNumbers;
        this.web3Wallets = web3Wallets;
        this.externalAccounts = externalAccounts;
    }
    static fromJSON(data) {
        return new User(data.id, data.password_enabled, data.totp_enabled, data.backup_code_enabled, data.two_factor_enabled, data.banned, data.created_at, data.updated_at, data.profile_image_url, data.image_url, data.has_image, data.gender, data.birthday, data.primary_email_address_id, data.primary_phone_number_id, data.primary_web3_wallet_id, data.last_sign_in_at, data.external_id, data.username, data.first_name, data.last_name, data.public_metadata, data.private_metadata, data.unsafe_metadata, (data.email_addresses || []).map((x)=>EmailAddress.fromJSON(x)), (data.phone_numbers || []).map((x)=>PhoneNumber.fromJSON(x)), (data.web3_wallets || []).map((x)=>Web3Wallet.fromJSON(x)), (data.external_accounts || []).map((x)=>ExternalAccount.fromJSON(x)));
    }
};
// src/api/resources/Deserializer.ts
function deserialize(payload) {
    if (Array.isArray(payload)) {
        return payload.map((item)=>jsonToObject(item));
    } else if (isPaginated(payload)) {
        return payload.data.map((item)=>jsonToObject(item));
    } else {
        return jsonToObject(payload);
    }
}
function isPaginated(payload) {
    return Array.isArray(payload.data) && payload.data !== void 0;
}
function getCount(item) {
    return item.total_count;
}
function jsonToObject(item) {
    if (typeof item !== "string" && "object" in item && "deleted" in item) {
        return DeletedObject.fromJSON(item);
    }
    switch(item.object){
        case "allowlist_identifier" /* AllowlistIdentifier */ :
            return AllowlistIdentifier.fromJSON(item);
        case "client" /* Client */ :
            return Client.fromJSON(item);
        case "email_address" /* EmailAddress */ :
            return EmailAddress.fromJSON(item);
        case "email" /* Email */ :
            return Email.fromJSON(item);
        case "invitation" /* Invitation */ :
            return Invitation.fromJSON(item);
        case "oauth_access_token" /* OauthAccessToken */ :
            return OauthAccessToken.fromJSON(item);
        case "organization" /* Organization */ :
            return Organization.fromJSON(item);
        case "organization_invitation" /* OrganizationInvitation */ :
            return OrganizationInvitation.fromJSON(item);
        case "organization_membership" /* OrganizationMembership */ :
            return OrganizationMembership.fromJSON(item);
        case "phone_number" /* PhoneNumber */ :
            return PhoneNumber.fromJSON(item);
        case "redirect_url" /* RedirectUrl */ :
            return RedirectUrl.fromJSON(item);
        case "sign_in_token" /* SignInToken */ :
            return SignInToken.fromJSON(item);
        case "session" /* Session */ :
            return Session.fromJSON(item);
        case "sms_message" /* SmsMessage */ :
            return SMSMessage.fromJSON(item);
        case "token" /* Token */ :
            return Token.fromJSON(item);
        case "total_count" /* TotalCount */ :
            return getCount(item);
        case "user" /* User */ :
            return User.fromJSON(item);
        default:
            return item;
    }
}
// src/api/request.ts
var withLegacyReturn = (cb)=>async (...args)=>{
        const { data, errors, status, statusText } = await cb(...args);
        if (errors === null) {
            return data;
        } else {
            throw new ClerkAPIResponseError(statusText || "", {
                data: errors,
                status: status || ""
            });
        }
    };
function buildRequest(options) {
    const request = async (requestOptions)=>{
        const { apiKey, secretKey, apiUrl = API_URL, apiVersion = API_VERSION, userAgent = USER_AGENT, httpOptions = {} } = options;
        const { path, method, queryParams, headerParams, bodyParams, formData } = requestOptions;
        const key = secretKey || apiKey;
        assertValidSecretKey(key);
        const url = joinPaths(apiUrl, apiVersion, path);
        const finalUrl = new URL(url);
        if (queryParams) {
            const snakecasedQueryParams = (0, import_snakecase_keys.default)({
                ...queryParams
            });
            for (const [key2, val] of Object.entries(snakecasedQueryParams)){
                if (val) {
                    [
                        val
                    ].flat().forEach((v)=>finalUrl.searchParams.append(key2, v));
                }
            }
        }
        const headers = {
            Authorization: `Bearer ${key}`,
            "Clerk-Backend-SDK": userAgent,
            ...headerParams
        };
        let res = void 0;
        try {
            if (formData) {
                res = await runtime_default.fetch(finalUrl.href, {
                    ...httpOptions,
                    method,
                    headers,
                    body: formData
                });
            } else {
                headers["Content-Type"] = "application/json";
                const hasBody = method !== "GET" && bodyParams && Object.keys(bodyParams).length > 0;
                const body = hasBody ? {
                    body: JSON.stringify((0, import_snakecase_keys.default)(bodyParams, {
                        deep: false
                    }))
                } : null;
                res = await runtime_default.fetch(finalUrl.href, (0, import_deepmerge.default)(httpOptions, {
                    method,
                    headers,
                    ...body
                }));
            }
            const isJSONResponse = res?.headers && res.headers?.get(constants.Headers.ContentType) === constants.ContentTypes.Json;
            const data = await (isJSONResponse ? res.json() : res.text());
            if (!res.ok) {
                throw data;
            }
            return {
                data: deserialize(data),
                errors: null
            };
        } catch (err) {
            if (err instanceof Error) {
                return {
                    data: null,
                    errors: [
                        {
                            code: "unexpected_error",
                            message: err.message || "Unexpected error"
                        }
                    ]
                };
            }
            return {
                data: null,
                errors: parseErrors(err),
                // TODO: To be removed with withLegacyReturn
                // @ts-expect-error
                status: res?.status,
                statusText: res?.statusText
            };
        }
    };
    return withLegacyReturn(request);
}
function parseErrors(data) {
    if (!!data && typeof data === "object" && "errors" in data) {
        const errors = data.errors;
        return errors.length > 0 ? errors.map(parseError) : [];
    }
    return [];
}
function parseError(error) {
    return {
        code: error.code,
        message: error.message,
        longMessage: error.long_message,
        meta: {
            paramName: error?.meta?.param_name,
            sessionId: error?.meta?.session_id
        }
    };
}
var ClerkAPIResponseError = class extends Error {
    constructor(message, { data, status }){
        super(message);
        Object.setPrototypeOf(this, ClerkAPIResponseError.prototype);
        this.clerkError = true;
        this.message = message;
        this.status = status;
        this.errors = data;
    }
};
// src/api/factory.ts
function createBackendApiClient(options) {
    const request = buildRequest(options);
    return {
        allowlistIdentifiers: new AllowlistIdentifierAPI(request),
        clients: new ClientAPI(request),
        emailAddresses: new EmailAddressAPI(request),
        emails: new EmailAPI(request),
        interstitial: new InterstitialAPI(request),
        invitations: new InvitationAPI(request),
        organizations: new OrganizationAPI(request),
        phoneNumbers: new PhoneNumberAPI(request),
        redirectUrls: new RedirectUrlAPI(request),
        sessions: new SessionAPI(request),
        signInTokens: new SignInTokenAPI(request),
        smsMessages: new SMSMessageAPI(request),
        users: new UserAPI(request),
        domains: new DomainAPI(request)
    };
}
// src/tokens/authObjects.ts
var createDebug = (data)=>{
    return ()=>{
        const res = {
            ...data
        };
        res.apiKey = (res.apiKey || "").substring(0, 7);
        res.secretKey = (res.secretKey || "").substring(0, 7);
        res.jwtKey = (res.jwtKey || "").substring(0, 7);
        return {
            ...res
        };
    };
};
function signedInAuthObject(sessionClaims, options, debugData) {
    const { act: actor, sid: sessionId, org_id: orgId, org_role: orgRole, org_slug: orgSlug, sub: userId } = sessionClaims;
    const { apiKey, secretKey, apiUrl, apiVersion, token, session, user, organization } = options;
    const { sessions } = createBackendApiClient({
        apiKey,
        secretKey,
        apiUrl,
        apiVersion
    });
    const getToken = createGetToken({
        sessionId,
        sessionToken: token,
        fetcher: (...args)=>sessions.getToken(...args)
    });
    return {
        actor,
        sessionClaims,
        sessionId,
        session,
        userId,
        user,
        orgId,
        orgRole,
        orgSlug,
        organization,
        getToken,
        debug: createDebug({
            ...options,
            ...debugData
        })
    };
}
function signedOutAuthObject(debugData) {
    return {
        sessionClaims: null,
        sessionId: null,
        session: null,
        userId: null,
        user: null,
        actor: null,
        orgId: null,
        orgRole: null,
        orgSlug: null,
        organization: null,
        getToken: ()=>Promise.resolve(null),
        debug: createDebug(debugData)
    };
}
function prunePrivateMetadata(resource) {
    if (resource) {
        delete resource["privateMetadata"];
        delete resource["private_metadata"];
    }
    return resource;
}
function sanitizeAuthObject(authObject) {
    const user = authObject.user ? {
        ...authObject.user
    } : authObject.user;
    const organization = authObject.organization ? {
        ...authObject.organization
    } : authObject.organization;
    prunePrivateMetadata(user);
    prunePrivateMetadata(organization);
    return {
        ...authObject,
        user,
        organization
    };
}
var makeAuthObjectSerializable = (obj)=>{
    const { debug, getToken, ...rest } = obj;
    return rest;
};
var createGetToken = (params)=>{
    const { fetcher, sessionToken, sessionId } = params || {};
    return async (options = {})=>{
        if (!sessionId) {
            return null;
        }
        if (options.template) {
            return fetcher(sessionId, options.template);
        }
        return sessionToken;
    };
};
// src/util/callWithRetry.ts
function wait(ms) {
    return new Promise((res)=>setTimeout(res, ms));
}
var MAX_NUMBER_OF_RETRIES = 5;
async function callWithRetry(fn, attempt = 1, maxAttempts = MAX_NUMBER_OF_RETRIES) {
    try {
        return await fn();
    } catch (e) {
        if (attempt >= maxAttempts) {
            throw e;
        }
        await wait(2 ** attempt * 100);
        return callWithRetry(fn, attempt + 1);
    }
}
// src/util/instance.ts
function isDevelopmentFromApiKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
function isProductionFromApiKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
}
function isStaging(frontendApi) {
    return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
}
// src/util/isDevOrStagingUrl.ts
function createDevOrStagingUrlCache() {
    const DEV_OR_STAGING_SUFFIXES = [
        ".lcl.dev",
        ".stg.dev",
        ".lclstage.dev",
        ".stgstage.dev",
        ".dev.lclclerk.com",
        ".stg.lclclerk.com",
        ".accounts.lclclerk.com",
        "accountsstage.dev",
        "accounts.dev"
    ];
    const devOrStagingUrlCache = /* @__PURE__ */ new Map();
    return {
        isDevOrStagingUrl: (url)=>{
            if (!url) {
                return false;
            }
            const hostname = typeof url === "string" ? url : url.hostname;
            let res = devOrStagingUrlCache.get(hostname);
            if (res === void 0) {
                res = DEV_OR_STAGING_SUFFIXES.some((s)=>hostname.endsWith(s));
                devOrStagingUrlCache.set(hostname, res);
            }
            return res;
        }
    };
}
var { isDevOrStagingUrl } = createDevOrStagingUrlCache();
// src/util/parsePublishableKey.ts
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
function parsePublishableKey(key) {
    key = key || "";
    if (!isPublishableKey(key)) {
        return null;
    }
    const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
    let frontendApi = isomorphicAtob(key.split("_")[2]);
    if (!frontendApi.endsWith("$")) {
        return null;
    }
    frontendApi = frontendApi.slice(0, -1);
    return {
        instanceType,
        frontendApi
    };
}
function isPublishableKey(key) {
    key = key || "";
    const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
    const hasValidFrontendApiPostfix = isomorphicAtob(key.split("_")[2] || "").endsWith("$");
    return hasValidPrefix && hasValidFrontendApiPostfix;
}
var isomorphicAtob = (data)=>{
    if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
    } else if (typeof globalThis !== "undefined" && globalThis.Buffer) {
        return new globalThis.Buffer(data, "base64").toString();
    }
    return data;
};
// src/tokens/errors.ts
var TokenVerificationError = class extends Error {
    constructor({ action, message, reason }){
        super(message);
        Object.setPrototypeOf(this, TokenVerificationError.prototype);
        this.reason = reason;
        this.message = message;
        this.action = action;
    }
    getFullMessage() {
        return `${[
            this.message,
            this.action
        ].filter((m)=>m).join(" ")} (reason=${this.reason}, token-carrier=${this.tokenCarrier})`;
    }
};
// src/tokens/interstitial.ts
function addClerkPrefix(str) {
    if (!str) {
        return "";
    }
    let regex;
    if (str.match(/^(clerk\.)+\w*$/)) {
        regex = /(clerk\.)*(?=clerk\.)/;
    } else if (str.match(/\.clerk.accounts/)) {
        return str;
    } else {
        regex = /^(clerk\.)*/gi;
    }
    const stripped = str.replace(regex, "");
    return `clerk.${stripped}`;
}
function loadInterstitialFromLocal(options) {
    options.frontendApi = parsePublishableKey(options.publishableKey)?.frontendApi || options.frontendApi || "";
    const domainOnlyInProd = !isDevOrStagingUrl(options.frontendApi) ? addClerkPrefix(options.domain) : "";
    const { debugData, frontendApi, pkgVersion, clerkJSUrl, clerkJSVersion, publishableKey, proxyUrl, isSatellite = false, domain, signInUrl } = options;
    return `
    <head>
        <meta charset="UTF-8" />
    </head>
    <body>
        <script>
            window.__clerk_frontend_api = '${frontendApi}';
            window.__clerk_debug = ${JSON.stringify(debugData || {})};
            ${proxyUrl ? `window.__clerk_proxy_url = '${proxyUrl}'` : ""}
            ${domain ? `window.__clerk_domain = '${domain}'` : ""}
            window.startClerk = async () => {
                function formRedirect(){
                    const form = '<form method="get" action="" name="redirect"></form>';
                    document.body.innerHTML = document.body.innerHTML + form;

                    const searchParams = new URLSearchParams(window.location.search);
                    for (let paramTuple of searchParams) {
                        const input = document.createElement("input");
                        input.type = "hidden";
                        input.name = paramTuple[0];
                        input.value = paramTuple[1];
                        document.forms.redirect.appendChild(input);
                    }
                    const url = new URL(window.location.origin + window.location.pathname + window.location.hash);
                    window.history.pushState({}, '', url);

                    document.forms.redirect.action = window.location.pathname + window.location.hash;
                    document.forms.redirect.submit();
                }

                const Clerk = window.Clerk;
                try {
                    await Clerk.load({
                        isSatellite: ${isSatellite},
                        isInterstitial: ${true},
                        signInUrl: ${signInUrl ? `'${signInUrl}'` : void 0}
                    });
                    if(Clerk.loaded){
                      if(window.location.href.indexOf("#") === -1){
                        window.location.href = window.location.href;
                      } else if (window.navigator.userAgent.toLowerCase().includes("firefox/")){
                          formRedirect();
                      } else {
                          window.location.reload();
                      }
                    }
                } catch (err) {
                    console.error('Clerk: ', err);
                }
            };
            (() => {
                const script = document.createElement('script');
                ${publishableKey ? `script.setAttribute('data-clerk-publishable-key', '${publishableKey}');` : `script.setAttribute('data-clerk-frontend-api', '${frontendApi}');`}

                ${domain ? `script.setAttribute('data-clerk-domain', '${domain}');` : ""}
                ${proxyUrl ? `script.setAttribute('data-clerk-proxy-url', '${proxyUrl}')` : ""};
                script.async = true;
                script.src = '${clerkJSUrl || getScriptUrl(proxyUrl || domainOnlyInProd || frontendApi, {
        pkgVersion,
        clerkJSVersion
    })}';
                script.crossOrigin = 'anonymous';
                script.addEventListener('load', startClerk);
                document.body.appendChild(script);
            })();
        </script>
    </body>
`;
}
async function loadInterstitialFromBAPI(options) {
    options.frontendApi = parsePublishableKey(options.publishableKey)?.frontendApi || options.frontendApi || "";
    const url = buildPublicInterstitialUrl(options);
    const response = await callWithRetry(()=>runtime_default.fetch(buildPublicInterstitialUrl(options), {
            method: "GET",
            headers: {
                "Clerk-Backend-SDK": options.userAgent || USER_AGENT
            }
        }));
    if (!response.ok) {
        throw new TokenVerificationError({
            action: "Contact support@clerk.com" /* ContactSupport */ ,
            message: `Error loading Clerk Interstitial from ${url} with code=${response.status}`,
            reason: "interstitial-remote-failed-to-load" /* RemoteInterstitialFailedToLoad */ 
        });
    }
    return response.text();
}
function buildPublicInterstitialUrl(options) {
    options.frontendApi = parsePublishableKey(options.publishableKey)?.frontendApi || options.frontendApi || "";
    const { apiUrl, frontendApi, pkgVersion, clerkJSVersion, publishableKey, proxyUrl, isSatellite, domain, signInUrl } = options;
    const url = new URL(apiUrl);
    url.pathname = joinPaths(url.pathname, API_VERSION, "/public/interstitial");
    url.searchParams.append("clerk_js_version", clerkJSVersion || getClerkJsMajorVersionOrTag(frontendApi, pkgVersion));
    if (publishableKey) {
        url.searchParams.append("publishable_key", publishableKey);
    } else {
        url.searchParams.append("frontend_api", frontendApi);
    }
    if (proxyUrl) {
        url.searchParams.append("proxy_url", proxyUrl);
    }
    if (isSatellite) {
        url.searchParams.append("is_satellite", "true");
    }
    url.searchParams.append("sign_in_url", signInUrl || "");
    if (!isDevOrStagingUrl(options.frontendApi)) {
        url.searchParams.append("use_domain_for_script", "true");
    }
    if (domain) {
        url.searchParams.append("domain", domain);
    }
    return url.href;
}
var getClerkJsMajorVersionOrTag = (frontendApi, pkgVersion)=>{
    if (!pkgVersion && isStaging(frontendApi)) {
        return "staging";
    }
    if (!pkgVersion) {
        return "latest";
    }
    if (pkgVersion.includes("next")) {
        return "next";
    }
    return pkgVersion.split(".")[0] || "latest";
};
var getScriptUrl = (frontendApi, { pkgVersion, clerkJSVersion })=>{
    const noSchemeFrontendApi = frontendApi.replace(/http(s)?:\/\//, "");
    const major = getClerkJsMajorVersionOrTag(frontendApi, pkgVersion);
    return `https://${noSchemeFrontendApi}/npm/@clerk/clerk-js@${clerkJSVersion || major}/dist/clerk.browser.js`;
};
// src/util/IsomorphicRequest.ts
var import_cookie = __webpack_require__(95128);
var createIsomorphicRequest = (cb)=>{
    return cb(runtime_default.Request, runtime_default.Headers);
};
var buildRequest2 = (req)=>{
    if (!req) {
        return {};
    }
    const cookies = parseIsomorphicRequestCookies(req);
    const headers = getHeaderFromIsomorphicRequest(req);
    const searchParams = getSearchParamsFromIsomorphicRequest(req);
    return {
        cookies,
        headers,
        searchParams
    };
};
var decode = (str)=>{
    if (!str) {
        return str;
    }
    return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
};
var parseIsomorphicRequestCookies = (req)=>{
    const cookies = req.headers && req.headers?.get("cookie") ? (0, import_cookie.parse)(req.headers.get("cookie")) : {};
    return (key)=>{
        const value = cookies?.[key];
        if (value === void 0) {
            return void 0;
        }
        return decode(value);
    };
};
var getHeaderFromIsomorphicRequest = (req)=>(key)=>req?.headers?.get(key) || void 0;
var getSearchParamsFromIsomorphicRequest = (req)=>req?.url ? new URL(req.url)?.searchParams : void 0;
var stripAuthorizationHeader = (authValue)=>{
    return authValue?.replace("Bearer ", "");
};
// src/tokens/authStatus.ts
var AuthStatus = /* @__PURE__ */ ((AuthStatus2)=>{
    AuthStatus2["SignedIn"] = "signed-in";
    AuthStatus2["SignedOut"] = "signed-out";
    AuthStatus2["Interstitial"] = "interstitial";
    AuthStatus2["Unknown"] = "unknown";
    return AuthStatus2;
})(AuthStatus || {});
async function signedIn(options, sessionClaims) {
    const { apiKey, secretKey, apiUrl, apiVersion, cookieToken, frontendApi, proxyUrl, publishableKey, domain, isSatellite, headerToken, loadSession, loadUser, loadOrganization, signInUrl, signUpUrl, afterSignInUrl, afterSignUpUrl } = options;
    const { sid: sessionId, org_id: orgId, sub: userId } = sessionClaims;
    const { sessions, users, organizations } = createBackendApiClient({
        apiKey,
        secretKey,
        apiUrl,
        apiVersion
    });
    const [sessionResp, userResp, organizationResp] = await Promise.all([
        loadSession ? sessions.getSession(sessionId) : Promise.resolve(void 0),
        loadUser ? users.getUser(userId) : Promise.resolve(void 0),
        loadOrganization && orgId ? organizations.getOrganization({
            organizationId: orgId
        }) : Promise.resolve(void 0)
    ]);
    const session = sessionResp;
    const user = userResp;
    const organization = organizationResp;
    const authObject = signedInAuthObject(sessionClaims, {
        secretKey,
        apiKey,
        apiUrl,
        apiVersion,
        token: cookieToken || headerToken || "",
        session,
        user,
        organization
    }, {
        ...options,
        status: "signed-in" /* SignedIn */ 
    });
    return {
        status: "signed-in" /* SignedIn */ ,
        reason: null,
        message: null,
        frontendApi,
        proxyUrl,
        publishableKey,
        domain,
        isSatellite,
        signInUrl,
        signUpUrl,
        afterSignInUrl,
        afterSignUpUrl,
        isSignedIn: true,
        isInterstitial: false,
        isUnknown: false,
        toAuth: ()=>authObject
    };
}
function signedOut(options, reason, message = "") {
    const { frontendApi, publishableKey, proxyUrl, isSatellite, domain, signInUrl, signUpUrl, afterSignInUrl, afterSignUpUrl } = options;
    return {
        status: "signed-out" /* SignedOut */ ,
        reason,
        message,
        frontendApi,
        proxyUrl,
        publishableKey,
        isSatellite,
        domain,
        signInUrl,
        signUpUrl,
        afterSignInUrl,
        afterSignUpUrl,
        isSignedIn: false,
        isInterstitial: false,
        isUnknown: false,
        toAuth: ()=>signedOutAuthObject({
                ...options,
                status: "signed-out" /* SignedOut */ ,
                reason,
                message
            })
    };
}
function interstitial(options, reason, message = "") {
    const { frontendApi, publishableKey, proxyUrl, isSatellite, domain, signInUrl, signUpUrl, afterSignInUrl, afterSignUpUrl } = options;
    return {
        status: "interstitial" /* Interstitial */ ,
        reason,
        message,
        frontendApi,
        publishableKey,
        isSatellite,
        domain,
        proxyUrl,
        signInUrl,
        signUpUrl,
        afterSignInUrl,
        afterSignUpUrl,
        isSignedIn: false,
        isInterstitial: true,
        isUnknown: false,
        toAuth: ()=>null
    };
}
function unknownState(options, reason, message = "") {
    const { frontendApi, publishableKey, isSatellite, domain, signInUrl, signUpUrl, afterSignInUrl, afterSignUpUrl } = options;
    return {
        status: "unknown" /* Unknown */ ,
        reason,
        message,
        frontendApi,
        publishableKey,
        isSatellite,
        domain,
        signInUrl,
        signUpUrl,
        afterSignInUrl,
        afterSignUpUrl,
        isSignedIn: false,
        isInterstitial: false,
        isUnknown: true,
        toAuth: ()=>null
    };
}
// src/utils.ts
var getHeader = (req, key)=>req.headers.get(key);
var getFirstValueFromHeader = (value)=>value?.split(",")[0];
var buildRequestUrl = (request, path)=>{
    const initialUrl = new URL(request.url);
    const forwardedProto = getHeader(request, constants.Headers.ForwardedProto);
    const forwardedHost = getHeader(request, constants.Headers.ForwardedHost);
    const host = getHeader(request, constants.Headers.Host);
    const protocol = initialUrl.protocol;
    const base = buildOrigin({
        protocol,
        forwardedProto,
        forwardedHost,
        host: host || initialUrl.host
    });
    return new URL(path || initialUrl.pathname, base);
};
var buildOrigin = ({ protocol, forwardedProto, forwardedHost, host })=>{
    const resolvedHost = getFirstValueFromHeader(forwardedHost) ?? host;
    const resolvedProtocol = getFirstValueFromHeader(forwardedProto) ?? protocol?.replace(/[:/]/, "");
    if (!resolvedHost || !resolvedProtocol) {
        return "";
    }
    return `${resolvedProtocol}://${resolvedHost}`;
};
// src/util/request.ts
function checkCrossOrigin({ originURL, host, forwardedHost, forwardedProto }) {
    const finalURL = buildOrigin({
        forwardedProto,
        forwardedHost,
        protocol: originURL.protocol,
        host
    });
    return finalURL && new URL(finalURL).origin !== originURL.origin;
}
var getErrorObjectByCode = (errors, code)=>{
    if (!errors) {
        return null;
    }
    return errors.find((err)=>err.code === code);
};
// src/util/rfc4648.ts
var base64url = {
    parse (string, opts) {
        return parse2(string, base64UrlEncoding, opts);
    },
    stringify (data, opts) {
        return stringify(data, base64UrlEncoding, opts);
    }
};
var base64UrlEncoding = {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bits: 6
};
function parse2(string, encoding, opts = {}) {
    if (!encoding.codes) {
        encoding.codes = {};
        for(let i = 0; i < encoding.chars.length; ++i){
            encoding.codes[encoding.chars[i]] = i;
        }
    }
    if (!opts.loose && string.length * encoding.bits & 7) {
        throw new SyntaxError("Invalid padding");
    }
    let end = string.length;
    while(string[end - 1] === "="){
        --end;
        if (!opts.loose && !((string.length - end) * encoding.bits & 7)) {
            throw new SyntaxError("Invalid padding");
        }
    }
    const out = new (opts.out ?? Uint8Array)(end * encoding.bits / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for(let i = 0; i < end; ++i){
        const value = encoding.codes[string[i]];
        if (value === void 0) {
            throw new SyntaxError("Invalid character " + string[i]);
        }
        buffer = buffer << encoding.bits | value;
        bits += encoding.bits;
        if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
        }
    }
    if (bits >= encoding.bits || 255 & buffer << 8 - bits) {
        throw new SyntaxError("Unexpected end of data");
    }
    return out;
}
function stringify(data, encoding, opts = {}) {
    const { pad = true } = opts;
    const mask = (1 << encoding.bits) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for(let i = 0; i < data.length; ++i){
        buffer = buffer << 8 | 255 & data[i];
        bits += 8;
        while(bits > encoding.bits){
            bits -= encoding.bits;
            out += encoding.chars[mask & buffer >> bits];
        }
    }
    if (bits) {
        out += encoding.chars[mask & buffer << encoding.bits - bits];
    }
    if (pad) {
        while(out.length * encoding.bits & 7){
            out += "=";
        }
    }
    return out;
}
// src/tokens/jwt/assertions.ts
var isArrayString = (s)=>{
    return Array.isArray(s) && s.length > 0 && s.every((a)=>typeof a === "string");
};
var assertAudienceClaim = (aud, audience)=>{
    const audienceList = [
        audience
    ].flat().filter((a)=>!!a);
    const audList = [
        aud
    ].flat().filter((a)=>!!a);
    const shouldVerifyAudience = audienceList.length > 0 && audList.length > 0;
    if (!shouldVerifyAudience) {
        return;
    }
    if (typeof aud === "string") {
        if (!audienceList.includes(aud)) {
            throw new TokenVerificationError({
                action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
                reason: "token-verification-failed" /* TokenVerificationFailed */ ,
                message: `Invalid JWT audience claim (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(audienceList)}".`
            });
        }
    } else if (isArrayString(aud)) {
        if (!aud.some((a)=>audienceList.includes(a))) {
            throw new TokenVerificationError({
                action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
                reason: "token-verification-failed" /* TokenVerificationFailed */ ,
                message: `Invalid JWT audience claim array (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(audienceList)}".`
            });
        }
    }
};
// src/tokens/jwt/verifyJwt.ts
var DEFAULT_CLOCK_SKEW_IN_SECONDS = 5 * 1e3;
var algToHash = {
    RS256: "SHA-256",
    RS384: "SHA-384",
    RS512: "SHA-512",
    ES256: "SHA-256",
    ES384: "SHA-384",
    ES512: "SHA-512"
};
var RSA_ALGORITHM_NAME = "RSASSA-PKCS1-v1_5";
var EC_ALGORITHM_NAME = "ECDSA";
var jwksAlgToCryptoAlg = {
    RS256: RSA_ALGORITHM_NAME,
    RS384: RSA_ALGORITHM_NAME,
    RS512: RSA_ALGORITHM_NAME,
    ES256: EC_ALGORITHM_NAME,
    ES384: EC_ALGORITHM_NAME,
    ES512: EC_ALGORITHM_NAME
};
var algs = Object.keys(algToHash);
async function hasValidSignature(jwt, jwk) {
    const { header, signature, raw } = jwt;
    const encoder = new TextEncoder();
    const data = encoder.encode([
        raw.header,
        raw.payload
    ].join("."));
    const cryptoKey = await runtime_default.crypto.subtle.importKey("jwk", jwk, {
        name: jwksAlgToCryptoAlg[header.alg],
        hash: algToHash[header.alg]
    }, false, [
        "verify"
    ]);
    return runtime_default.crypto.subtle.verify("RSASSA-PKCS1-v1_5", cryptoKey, signature, data);
}
function decodeJwt(token) {
    const tokenParts = (token || "").toString().split(".");
    if (tokenParts.length !== 3) {
        throw new TokenVerificationError({
            reason: "token-invalid" /* TokenInvalid */ ,
            message: `Invalid JWT form. A JWT consists of three parts separated by dots.`
        });
    }
    const [rawHeader, rawPayload, rawSignature] = tokenParts;
    const decoder = new TextDecoder();
    const header = JSON.parse(decoder.decode(base64url.parse(rawHeader, {
        loose: true
    })));
    const payload = JSON.parse(decoder.decode(base64url.parse(rawPayload, {
        loose: true
    })));
    const signature = base64url.parse(rawSignature, {
        loose: true
    });
    return {
        header,
        payload,
        signature,
        raw: {
            header: rawHeader,
            payload: rawPayload,
            signature: rawSignature,
            text: token
        }
    };
}
async function verifyJwt(token, { audience, authorizedParties, clockSkewInSeconds, clockSkewInMs, issuer, key }) {
    const clockSkew = clockSkewInMs || clockSkewInSeconds || DEFAULT_CLOCK_SKEW_IN_SECONDS;
    const decoded = decodeJwt(token);
    const { header, payload } = decoded;
    const { typ, alg } = header;
    if (typeof typ !== "undefined" && typ !== "JWT") {
        throw new TokenVerificationError({
            action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
            reason: "token-invalid" /* TokenInvalid */ ,
            message: `Invalid JWT type ${JSON.stringify(typ)}. Expected "JWT".`
        });
    }
    if (!algToHash[alg]) {
        throw new TokenVerificationError({
            action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
            reason: "token-invalid-algorithm" /* TokenInvalidAlgorithm */ ,
            message: `Invalid JWT algorithm ${JSON.stringify(alg)}. Supported: ${algs}.`
        });
    }
    const { azp, sub, aud, iss, iat, exp, nbf } = payload;
    if (typeof sub !== "string") {
        throw new TokenVerificationError({
            action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
            reason: "token-verification-failed" /* TokenVerificationFailed */ ,
            message: `Subject claim (sub) is required and must be a string. Received ${JSON.stringify(sub)}.`
        });
    }
    assertAudienceClaim([
        aud
    ], [
        audience
    ]);
    if (azp && authorizedParties && authorizedParties.length > 0 && !authorizedParties.includes(azp)) {
        throw new TokenVerificationError({
            reason: "token-invalid-authorized-parties" /* TokenInvalidAuthorizedParties */ ,
            message: `Invalid JWT Authorized party claim (azp) ${JSON.stringify(azp)}. Expected "${authorizedParties}".`
        });
    }
    if (typeof issuer === "function" && !issuer(iss)) {
        throw new TokenVerificationError({
            reason: "token-invalid-issuer" /* TokenInvalidIssuer */ ,
            message: "Failed JWT issuer resolver. Make sure that the resolver returns a truthy value."
        });
    } else if (typeof issuer === "string" && iss && iss !== issuer) {
        throw new TokenVerificationError({
            reason: "token-invalid-issuer" /* TokenInvalidIssuer */ ,
            message: `Invalid JWT issuer claim (iss) ${JSON.stringify(decoded.payload.iss)}. Expected "${issuer}".`
        });
    }
    if (typeof exp !== "number") {
        throw new TokenVerificationError({
            action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
            reason: "token-verification-failed" /* TokenVerificationFailed */ ,
            message: `Invalid JWT expiry date claim (exp) ${JSON.stringify(exp)}. Expected number.`
        });
    }
    const currentDate = new Date(Date.now());
    const expiryDate = /* @__PURE__ */ new Date(0);
    expiryDate.setUTCSeconds(exp);
    const expired = expiryDate.getTime() <= currentDate.getTime() - clockSkew;
    if (expired) {
        throw new TokenVerificationError({
            reason: "token-expired" /* TokenExpired */ ,
            message: `JWT is expired. Expiry date: ${expiryDate}, Current date: ${currentDate}.`
        });
    }
    if (nbf !== void 0) {
        if (typeof nbf !== "number") {
            throw new TokenVerificationError({
                action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
                reason: "token-verification-failed" /* TokenVerificationFailed */ ,
                message: `Invalid JWT not before date claim (nbf) ${JSON.stringify(nbf)}. Expected number.`
            });
        }
        const notBeforeDate = /* @__PURE__ */ new Date(0);
        notBeforeDate.setUTCSeconds(nbf);
        const early = notBeforeDate.getTime() > currentDate.getTime() + clockSkew;
        if (early) {
            throw new TokenVerificationError({
                action: "Make sure your system clock is in sync (e.g. turn off and on automatic time synchronization)." /* EnsureClockSync */ ,
                reason: "token-not-active-yet" /* TokenNotActiveYet */ ,
                message: `JWT cannot be used prior to not before date claim (nbf). Not before date: ${notBeforeDate}; Current date: ${currentDate};`
            });
        }
    }
    if (iat !== void 0) {
        if (typeof iat !== "number") {
            throw new TokenVerificationError({
                action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
                reason: "token-verification-failed" /* TokenVerificationFailed */ ,
                message: `Invalid JWT issued at date claim (iat) ${JSON.stringify(iat)}. Expected number.`
            });
        }
        const issuedAtDate = /* @__PURE__ */ new Date(0);
        issuedAtDate.setUTCSeconds(iat);
        const postIssued = issuedAtDate.getTime() > currentDate.getTime() + clockSkew;
        if (postIssued) {
            throw new TokenVerificationError({
                reason: "token-not-active-yet" /* TokenNotActiveYet */ ,
                message: `JWT issued at date claim (iat) is in the future. Issued at date: ${issuedAtDate}; Current date: ${currentDate};`
            });
        }
    }
    let signatureValid;
    try {
        signatureValid = await hasValidSignature(decoded, key);
    } catch (err) {
        throw new TokenVerificationError({
            action: "Make sure that this is a valid Clerk generate JWT." /* EnsureClerkJWT */ ,
            reason: "token-verification-failed" /* TokenVerificationFailed */ ,
            message: `Error verifying JWT signature. ${err}`
        });
    }
    if (!signatureValid) {
        throw new TokenVerificationError({
            reason: "token-invalid-signature" /* TokenInvalidSignature */ ,
            message: "JWT signature is invalid."
        });
    }
    return payload;
}
// src/tokens/keys.ts
var cache = {};
var lastUpdatedAt = 0;
function getFromCache(kid) {
    return cache[kid];
}
function setInCache(jwk, jwksCacheTtlInMs = 1e3 * 60 * 60) {
    cache[jwk.kid] = jwk;
    lastUpdatedAt = Date.now();
    if (jwksCacheTtlInMs >= 0) {
        setTimeout(()=>{
            if (jwk) {
                delete cache[jwk.kid];
            } else {
                cache = {};
            }
        }, jwksCacheTtlInMs);
    }
}
var LocalJwkKid = "local";
var PEM_HEADER = "-----BEGIN PUBLIC KEY-----";
var PEM_TRAILER = "-----END PUBLIC KEY-----";
var RSA_PREFIX = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA";
var RSA_SUFFIX = "IDAQAB";
function loadClerkJWKFromLocal(localKey) {
    if (!getFromCache(LocalJwkKid)) {
        if (!localKey) {
            throw new TokenVerificationError({
                action: "Set the CLERK_JWT_KEY environment variable." /* SetClerkJWTKey */ ,
                message: "Missing local JWK.",
                reason: "jwk-local-missing" /* LocalJWKMissing */ 
            });
        }
        const modulus = localKey.replace(/(\r\n|\n|\r)/gm, "").replace(PEM_HEADER, "").replace(PEM_TRAILER, "").replace(RSA_PREFIX, "").replace(RSA_SUFFIX, "").replace(/\+/g, "-").replace(/\//g, "_");
        setInCache({
            kid: "local",
            kty: "RSA",
            alg: "RS256",
            n: modulus,
            e: "AQAB"
        }, -1);
    }
    return getFromCache(LocalJwkKid);
}
async function loadClerkJWKFromRemote({ apiKey, secretKey, apiUrl = API_URL, apiVersion = API_VERSION, issuer, kid, jwksCacheTtlInMs = 1e3 * 60 * 60, // 1 hour,
skipJwksCache }) {
    const shouldRefreshCache = !getFromCache(kid) && reachedMaxCacheUpdatedAt();
    if (skipJwksCache || shouldRefreshCache) {
        let fetcher;
        const key = secretKey || apiKey;
        if (key) {
            fetcher = ()=>fetchJWKSFromBAPI(apiUrl, key, apiVersion);
        } else if (issuer) {
            fetcher = ()=>fetchJWKSFromFAPI(issuer);
        } else {
            throw new TokenVerificationError({
                action: "Contact support@clerk.com" /* ContactSupport */ ,
                message: "Failed to load JWKS from Clerk Backend or Frontend API.",
                reason: "jwk-remote-failed-to-load" /* RemoteJWKFailedToLoad */ 
            });
        }
        const { keys } = await callWithRetry(fetcher);
        if (!keys || !keys.length) {
            throw new TokenVerificationError({
                action: "Contact support@clerk.com" /* ContactSupport */ ,
                message: "The JWKS endpoint did not contain any signing keys. Contact support@clerk.com.",
                reason: "jwk-remote-failed-to-load" /* RemoteJWKFailedToLoad */ 
            });
        }
        keys.forEach((key2)=>setInCache(key2, jwksCacheTtlInMs));
    }
    const jwk = getFromCache(kid);
    if (!jwk) {
        throw new TokenVerificationError({
            action: "Contact support@clerk.com" /* ContactSupport */ ,
            message: `Unable to find a signing key in JWKS that matches the kid='${kid}' of the provided session token. Please make sure that the __session cookie or the HTTP authorization header contain a Clerk-generated session JWT.`,
            reason: "jwk-remote-missing" /* RemoteJWKMissing */ 
        });
    }
    return jwk;
}
async function fetchJWKSFromFAPI(issuer) {
    const url = new URL(issuer);
    url.pathname = joinPaths(url.pathname, ".well-known/jwks.json");
    const response = await runtime_default.fetch(url.href);
    if (!response.ok) {
        throw new TokenVerificationError({
            action: "Contact support@clerk.com" /* ContactSupport */ ,
            message: `Error loading Clerk JWKS from ${url.href} with code=${response.status}`,
            reason: "jwk-remote-failed-to-load" /* RemoteJWKFailedToLoad */ 
        });
    }
    return response.json();
}
async function fetchJWKSFromBAPI(apiUrl, key, apiVersion) {
    if (!key) {
        throw new TokenVerificationError({
            action: "Set the CLERK_SECRET_KEY or CLERK_API_KEY environment variable." /* SetClerkSecretKeyOrAPIKey */ ,
            message: "Missing Clerk Secret Key or API Key. Go to https://dashboard.clerk.com and get your key for your instance.",
            reason: "jwk-remote-failed-to-load" /* RemoteJWKFailedToLoad */ 
        });
    }
    const url = new URL(apiUrl);
    url.pathname = joinPaths(url.pathname, apiVersion, "/jwks");
    const response = await runtime_default.fetch(url.href, {
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        const json = await response.json();
        const invalidSecretKeyError = getErrorObjectByCode(json?.errors, "clerk_key_invalid" /* InvalidSecretKey */ );
        if (invalidSecretKeyError) {
            const reason = "secret-key-invalid" /* InvalidSecretKey */ ;
            throw new TokenVerificationError({
                action: "Contact support@clerk.com" /* ContactSupport */ ,
                message: invalidSecretKeyError.message,
                reason
            });
        }
        throw new TokenVerificationError({
            action: "Contact support@clerk.com" /* ContactSupport */ ,
            message: `Error loading Clerk JWKS from ${url.href} with code=${response.status}`,
            reason: "jwk-remote-failed-to-load" /* RemoteJWKFailedToLoad */ 
        });
    }
    return response.json();
}
function reachedMaxCacheUpdatedAt() {
    return Date.now() - lastUpdatedAt >= MAX_CACHE_LAST_UPDATED_AT_SECONDS * 1e3;
}
// src/tokens/verify.ts
async function verifyToken(token, options) {
    const { apiKey, secretKey, apiUrl, apiVersion, audience, authorizedParties, clockSkewInSeconds, clockSkewInMs, issuer, jwksCacheTtlInMs, jwtKey, skipJwksCache } = options;
    const { header } = decodeJwt(token);
    const { kid } = header;
    let key;
    if (jwtKey) {
        key = loadClerkJWKFromLocal(jwtKey);
    } else if (typeof issuer === "string") {
        key = await loadClerkJWKFromRemote({
            issuer,
            kid,
            jwksCacheTtlInMs,
            skipJwksCache
        });
    } else if (apiKey || secretKey) {
        key = await loadClerkJWKFromRemote({
            apiKey,
            secretKey,
            apiUrl,
            apiVersion,
            kid,
            jwksCacheTtlInMs,
            skipJwksCache
        });
    } else {
        throw new TokenVerificationError({
            action: "Set the CLERK_JWT_KEY environment variable." /* SetClerkJWTKey */ ,
            message: "Failed to resolve JWK during verification.",
            reason: "jwk-failed-to-resolve" /* JWKFailedToResolve */ 
        });
    }
    return await verifyJwt(token, {
        audience,
        authorizedParties,
        clockSkewInSeconds,
        clockSkewInMs,
        key,
        issuer
    });
}
// src/tokens/interstitialRule.ts
var shouldRedirectToSatelliteUrl = (qp)=>!!qp?.get("__clerk_satellite_url");
var hasJustSynced = (qp)=>qp?.get("__clerk_synced") === "true";
var isReturningFromPrimary = (qp)=>qp?.get("__clerk_referrer_primary") === "true";
var VALID_USER_AGENTS = /^Mozilla\/|(Amazon CloudFront)/;
var isBrowser = (userAgent)=>VALID_USER_AGENTS.test(userAgent || "");
var nonBrowserRequestInDevRule = (options)=>{
    const { apiKey, secretKey, userAgent } = options;
    const key = secretKey || apiKey || "";
    if (isDevelopmentFromApiKey(key) && !isBrowser(userAgent)) {
        return signedOut(options, "header-missing-non-browser" /* HeaderMissingNonBrowser */ );
    }
    return void 0;
};
var crossOriginRequestWithoutHeader = (options)=>{
    const { origin, host, forwardedHost, forwardedProto } = options;
    const isCrossOrigin = origin && checkCrossOrigin({
        originURL: new URL(origin),
        host,
        forwardedHost,
        forwardedProto
    });
    if (isCrossOrigin) {
        return signedOut(options, "header-missing-cors" /* HeaderMissingCORS */ );
    }
    return void 0;
};
var isPrimaryInDevAndRedirectsToSatellite = (options)=>{
    const { apiKey, secretKey, isSatellite, searchParams } = options;
    const key = secretKey || apiKey || "";
    const isDev = isDevelopmentFromApiKey(key);
    if (isDev && !isSatellite && shouldRedirectToSatelliteUrl(searchParams)) {
        return interstitial(options, "primary-responds-to-syncing" /* PrimaryRespondsToSyncing */ );
    }
    return void 0;
};
var potentialFirstLoadInDevWhenUATMissing = (options)=>{
    const { apiKey, secretKey, clientUat } = options;
    const key = secretKey || apiKey || "";
    const res = isDevelopmentFromApiKey(key);
    if (res && !clientUat) {
        return interstitial(options, "uat-missing" /* CookieUATMissing */ );
    }
    return void 0;
};
var potentialRequestAfterSignInOrOutFromClerkHostedUiInDev = (options)=>{
    const { apiKey, secretKey, referrer, host, forwardedHost, forwardedProto } = options;
    const crossOriginReferrer = referrer && checkCrossOrigin({
        originURL: new URL(referrer),
        host,
        forwardedHost,
        forwardedProto
    });
    const key = secretKey || apiKey || "";
    if (isDevelopmentFromApiKey(key) && crossOriginReferrer) {
        return interstitial(options, "cross-origin-referrer" /* CrossOriginReferrer */ );
    }
    return void 0;
};
var satelliteInDevReturningFromPrimary = (options)=>{
    const { apiKey, secretKey, isSatellite, searchParams } = options;
    const key = secretKey || apiKey || "";
    if (isSatellite && isReturningFromPrimary(searchParams) && isDevelopmentFromApiKey(key)) {
        return interstitial(options, "satellite-returns-from-primary" /* SatelliteReturnsFromPrimary */ );
    }
    return void 0;
};
var potentialFirstRequestOnProductionEnvironment = (options)=>{
    const { apiKey, secretKey, clientUat, cookieToken } = options;
    const key = secretKey || apiKey || "";
    if (isProductionFromApiKey(key) && !clientUat && !cookieToken) {
        return signedOut(options, "cookie-and-uat-missing" /* CookieAndUATMissing */ );
    }
    return void 0;
};
var isNormalSignedOutState = (options)=>{
    const { clientUat } = options;
    if (clientUat === "0") {
        return signedOut(options, "standard-signed-out" /* StandardSignedOut */ );
    }
    return void 0;
};
var hasPositiveClientUatButCookieIsMissing = (options)=>{
    const { clientUat, cookieToken } = options;
    if (clientUat && Number.parseInt(clientUat) > 0 && !cookieToken) {
        return interstitial(options, "cookie-missing" /* CookieMissing */ );
    }
    return void 0;
};
var hasValidHeaderToken = async (options)=>{
    const { headerToken } = options;
    const sessionClaims = await verifyRequestState(options, headerToken);
    return await signedIn(options, sessionClaims);
};
var hasValidCookieToken = async (options)=>{
    const { cookieToken, clientUat } = options;
    const sessionClaims = await verifyRequestState(options, cookieToken);
    const state = await signedIn(options, sessionClaims);
    const jwt = state.toAuth().sessionClaims;
    const cookieTokenIsOutdated = jwt.iat < Number.parseInt(clientUat);
    if (!clientUat || cookieTokenIsOutdated) {
        return interstitial(options, "cookie-outdated" /* CookieOutDated */ );
    }
    return state;
};
async function runInterstitialRules(opts, rules) {
    for (const rule of rules){
        const res = await rule(opts);
        if (res) {
            return res;
        }
    }
    return signedOut(opts, "unexpected-error" /* UnexpectedError */ );
}
async function verifyRequestState(options, token) {
    const { isSatellite, proxyUrl } = options;
    let issuer;
    if (isSatellite) {
        issuer = null;
    } else if (proxyUrl) {
        issuer = proxyUrl;
    } else {
        issuer = (iss)=>iss.startsWith("https://clerk.") || iss.includes(".clerk.accounts");
    }
    return verifyToken(token, {
        ...options,
        issuer
    });
}
var isSatelliteAndNeedsSyncing = (options)=>{
    const { clientUat, isSatellite, searchParams, userAgent } = options;
    const isSignedOut = !clientUat || clientUat === "0";
    if (isSatellite && isSignedOut && !isBrowser(userAgent)) {
        return signedOut(options, "satellite-needs-syncing" /* SatelliteCookieNeedsSyncing */ );
    }
    if (isSatellite && isSignedOut && !hasJustSynced(searchParams)) {
        return interstitial(options, "satellite-needs-syncing" /* SatelliteCookieNeedsSyncing */ );
    }
    return void 0;
};
// src/tokens/request.ts
function assertSignInUrlExists(signInUrl, key) {
    if (!signInUrl && isDevelopmentFromApiKey(key)) {
        throw new Error(`Missing signInUrl. Pass a signInUrl for dev instances if an app is satellite`);
    }
}
function assertProxyUrlOrDomain(proxyUrlOrDomain) {
    if (!proxyUrlOrDomain) {
        throw new Error(`Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl`);
    }
}
async function authenticateRequest(options) {
    const { cookies, headers, searchParams } = buildRequest2(options?.request);
    options = {
        ...options,
        frontendApi: parsePublishableKey(options.publishableKey)?.frontendApi || options.frontendApi,
        apiUrl: options.apiUrl || API_URL,
        apiVersion: options.apiVersion || API_VERSION,
        headerToken: stripAuthorizationHeader(options.headerToken || headers?.(constants.Headers.Authorization)),
        cookieToken: options.cookieToken || cookies?.(constants.Cookies.Session),
        clientUat: options.clientUat || cookies?.(constants.Cookies.ClientUat),
        origin: options.origin || headers?.(constants.Headers.Origin),
        host: options.host || headers?.(constants.Headers.Host),
        forwardedHost: options.forwardedHost || headers?.(constants.Headers.ForwardedHost),
        forwardedPort: options.forwardedPort || headers?.(constants.Headers.ForwardedPort),
        forwardedProto: options.forwardedProto || headers?.(constants.Headers.ForwardedProto),
        referrer: options.referrer || headers?.(constants.Headers.Referrer),
        userAgent: options.userAgent || headers?.(constants.Headers.UserAgent),
        searchParams: options.searchParams || searchParams || void 0
    };
    assertValidSecretKey(options.secretKey || options.apiKey);
    if (options.isSatellite) {
        assertSignInUrlExists(options.signInUrl, options.secretKey || options.apiKey);
        assertProxyUrlOrDomain(options.proxyUrl || options.domain);
    }
    async function authenticateRequestWithTokenInHeader() {
        try {
            const state = await runInterstitialRules(options, [
                hasValidHeaderToken
            ]);
            return state;
        } catch (err) {
            return handleError(err, "header");
        }
    }
    async function authenticateRequestWithTokenInCookie() {
        try {
            const state = await runInterstitialRules(options, [
                crossOriginRequestWithoutHeader,
                nonBrowserRequestInDevRule,
                isSatelliteAndNeedsSyncing,
                satelliteInDevReturningFromPrimary,
                isPrimaryInDevAndRedirectsToSatellite,
                potentialFirstRequestOnProductionEnvironment,
                potentialFirstLoadInDevWhenUATMissing,
                potentialRequestAfterSignInOrOutFromClerkHostedUiInDev,
                hasPositiveClientUatButCookieIsMissing,
                isNormalSignedOutState,
                hasValidCookieToken
            ]);
            return state;
        } catch (err) {
            return handleError(err, "cookie");
        }
    }
    function handleError(err, tokenCarrier) {
        if (err instanceof TokenVerificationError) {
            err.tokenCarrier = tokenCarrier;
            const reasonToReturnInterstitial = [
                "token-expired" /* TokenExpired */ ,
                "token-not-active-yet" /* TokenNotActiveYet */ 
            ].includes(err.reason);
            if (reasonToReturnInterstitial) {
                if (tokenCarrier === "header") {
                    return unknownState(options, err.reason, err.getFullMessage());
                }
                return interstitial(options, err.reason, err.getFullMessage());
            }
            return signedOut(options, err.reason, err.getFullMessage());
        }
        return signedOut(options, "unexpected-error" /* UnexpectedError */ , err.message);
    }
    if (options.headerToken) {
        return authenticateRequestWithTokenInHeader();
    }
    return authenticateRequestWithTokenInCookie();
}
var debugRequestState = (params)=>{
    const { frontendApi, isSignedIn, proxyUrl, isInterstitial, reason, message, publishableKey, isSatellite, domain } = params;
    return {
        frontendApi,
        isSignedIn,
        proxyUrl,
        isInterstitial,
        reason,
        message,
        publishableKey,
        isSatellite,
        domain
    };
};
// src/tokens/factory.ts
function createAuthenticateRequest(params) {
    const { apiClient } = params;
    const { apiKey: buildtimeApiKey = "", secretKey: buildtimeSecretKey = "", jwtKey: buildtimeJwtKey = "", apiUrl = API_URL, apiVersion = API_VERSION, frontendApi: buildtimeFrontendApi = "", proxyUrl: buildProxyUrl = "", publishableKey: buildtimePublishableKey = "", isSatellite: buildtimeIsSatellite = false, domain: buildtimeDomain = "", audience: buildtimeAudience = "", userAgent: buildUserAgent } = params.options;
    const authenticateRequest2 = ({ apiKey: runtimeApiKey, secretKey: runtimeSecretKey, audience: runtimeAudience, frontendApi: runtimeFrontendApi, proxyUrl: runtimeProxyUrl, publishableKey: runtimePublishableKey, jwtKey: runtimeJwtKey, isSatellite: runtimeIsSatellite, domain: runtimeDomain, searchParams, ...rest })=>{
        return authenticateRequest({
            ...rest,
            apiKey: runtimeApiKey || buildtimeApiKey,
            secretKey: runtimeSecretKey || buildtimeSecretKey,
            audience: runtimeAudience || buildtimeAudience,
            apiUrl,
            apiVersion,
            frontendApi: runtimeFrontendApi || buildtimeFrontendApi,
            proxyUrl: runtimeProxyUrl || buildProxyUrl,
            publishableKey: runtimePublishableKey || buildtimePublishableKey,
            isSatellite: runtimeIsSatellite || buildtimeIsSatellite,
            domain: runtimeDomain || buildtimeDomain,
            jwtKey: runtimeJwtKey || buildtimeJwtKey,
            searchParams
        });
    };
    const localInterstitial = ({ frontendApi: runtimeFrontendApi, publishableKey: runtimePublishableKey, proxyUrl: runtimeProxyUrl, isSatellite: runtimeIsSatellite, domain: runtimeDomain, ...rest })=>loadInterstitialFromLocal({
            ...rest,
            frontendApi: runtimeFrontendApi || buildtimeFrontendApi,
            proxyUrl: runtimeProxyUrl || buildProxyUrl,
            publishableKey: runtimePublishableKey || buildtimePublishableKey,
            isSatellite: runtimeIsSatellite || buildtimeIsSatellite,
            domain: runtimeDomain || buildtimeDomain
        });
    const remotePublicInterstitial = ({ frontendApi: runtimeFrontendApi, publishableKey: runtimePublishableKey, proxyUrl: runtimeProxyUrl, isSatellite: runtimeIsSatellite, domain: runtimeDomain, userAgent: runtimeUserAgent, ...rest })=>{
        return loadInterstitialFromBAPI({
            ...rest,
            apiUrl,
            frontendApi: runtimeFrontendApi || buildtimeFrontendApi,
            publishableKey: runtimePublishableKey || buildtimePublishableKey,
            proxyUrl: runtimeProxyUrl || buildProxyUrl,
            isSatellite: runtimeIsSatellite || buildtimeIsSatellite,
            domain: runtimeDomain || buildtimeDomain,
            userAgent: runtimeUserAgent || buildUserAgent
        });
    };
    const remotePublicInterstitialUrl = buildPublicInterstitialUrl;
    const remotePrivateInterstitial = ()=>apiClient.interstitial.getInterstitial();
    return {
        authenticateRequest: authenticateRequest2,
        localInterstitial,
        remotePublicInterstitial,
        remotePrivateInterstitial,
        remotePublicInterstitialUrl,
        debugRequestState
    };
}
// src/redirections.ts
var buildUrl = (targetUrl, redirectUrl)=>{
    let url;
    if (!targetUrl.startsWith("http")) {
        if (!redirectUrl || !redirectUrl.startsWith("http")) {
            throw new Error("destination url or return back url should be an absolute path url!");
        }
        const baseURL = new URL(redirectUrl);
        url = new URL(targetUrl, baseURL.origin);
    } else {
        url = new URL(targetUrl);
    }
    if (redirectUrl) {
        url.searchParams.set("redirect_url", redirectUrl);
    }
    return url.toString();
};
var missingPublishableKeyErrorMessage = `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`;
function redirect({ redirectAdapter, signUpUrl, signInUrl, frontendApi, publishableKey }) {
    if (!frontendApi) {
        frontendApi = parsePublishableKey(publishableKey)?.frontendApi;
    }
    const accountsBaseUrl = buildAccountsBaseUrl(frontendApi);
    const redirectToSignUp = ({ returnBackUrl } = {})=>{
        if (!signUpUrl && !accountsBaseUrl) {
            throw new Error(missingPublishableKeyErrorMessage);
        }
        const accountsSignUpUrl = `${accountsBaseUrl}/sign-up`;
        return redirectAdapter(buildUrl(signUpUrl || accountsSignUpUrl, returnBackUrl));
    };
    const redirectToSignIn = ({ returnBackUrl } = {})=>{
        if (!signInUrl && !accountsBaseUrl) {
            throw new Error(missingPublishableKeyErrorMessage);
        }
        const accountsSignInUrl = `${accountsBaseUrl}/sign-in`;
        return redirectAdapter(buildUrl(signInUrl || accountsSignInUrl, returnBackUrl));
    };
    return {
        redirectToSignUp,
        redirectToSignIn
    };
}
function buildAccountsBaseUrl(frontendApi) {
    if (!frontendApi) {
        return "";
    }
    const accountsBaseUrl = frontendApi.replace(/(clerk\.accountsstage\.)/, "accountsstage.").replace(/(clerk\.accounts\.|clerk\.)/, "accounts.");
    return `https://${accountsBaseUrl}`;
}
// src/index.ts
function Clerk(options) {
    const opts = {
        ...options
    };
    const apiClient = createBackendApiClient(opts);
    const requestState = createAuthenticateRequest({
        options: opts,
        apiClient
    });
    return {
        ...apiClient,
        ...requestState,
        /**
     * @deprecated This prop has been deprecated and will be removed in the next major release.
     */ __unstable_options: opts
    };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 61686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let webcrypto;
try {
    webcrypto = (__webpack_require__(6005).webcrypto);
    if (!webcrypto) {
        webcrypto = new (__webpack_require__(78581)/* .Crypto */ .w)();
    }
} catch (e) {
    webcrypto = new (__webpack_require__(78581)/* .Crypto */ .w)();
}
module.exports = webcrypto;


/***/ }),

/***/ 53150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { fetch, Blob, FormData, Headers, Request, Response, AbortController } = __webpack_require__(45430);
module.exports = fetch;
module.exports.RuntimeBlob = Blob;
module.exports.RuntimeFormData = FormData;
module.exports.RuntimeHeaders = Headers;
module.exports.RuntimeRequest = Request;
module.exports.RuntimeResponse = Response;
module.exports.RuntimeAbortController = AbortController;


/***/ }),

/***/ 24425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  El: () => (/* binding */ esm_ClerkProvider),
  I8: () => (/* binding */ esm_auth),
  ar: () => (/* binding */ esm_currentUser)
});

// UNUSED EXPORTS: AuthenticateWithRedirectCallback, ClerkLoaded, ClerkLoading, CreateOrganization, MagicLinkErrorCode, MultisessionAppSupport, OrganizationProfile, OrganizationSwitcher, RedirectToCreateOrganization, RedirectToOrganizationProfile, RedirectToSignIn, RedirectToSignUp, RedirectToUserProfile, SignIn, SignInButton, SignOutButton, SignUp, SignUpButton, SignedIn, SignedOut, UserButton, UserProfile, WithClerk, WithSession, WithUser, authMiddleware, clerkClient, isClerkAPIResponseError, isKnownError, isMagicLinkError, isMetamaskError, redirectToSignIn, redirectToSignUp, useAuth, useClerk, useMagicLink, useOrganization, useOrganizationList, useOrganizations, useSession, useSessionList, useSignIn, useSignUp, useUser, withClerk, withClerkMiddleware, withSession, withUser

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js
const mergeNextClerkPropsWithEnv = (props)=>{
    return {
        ...props,
        frontendApi: props.frontendApi || process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || "",
        publishableKey: props.publishableKey || "pk_test_bXVzaWNhbC1yYXR0bGVyLTUxLmNsZXJrLmFjY291bnRzLmRldiQ" || 0,
        clerkJSUrl: props.clerkJSUrl || process.env.NEXT_PUBLIC_CLERK_JS,
        clerkJSVersion: props.clerkJSVersion || process.env.NEXT_PUBLIC_CLERK_JS_VERSION,
        proxyUrl: props.proxyUrl || process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
        domain: props.domain || process.env.NEXT_PUBLIC_CLERK_DOMAIN || "",
        isSatellite: props.isSatellite || process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === "true",
        signInUrl: props.signInUrl || "/sign-in" || 0,
        signUpUrl: props.signUpUrl || "/sign-up" || 0,
        afterSignInUrl: props.afterSignInUrl || "/" || 0,
        afterSignUpUrl: props.afterSignUpUrl || "/" || 0
    };
};
 //# sourceMappingURL=mergeNextClerkPropsWithEnv.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js

const proxy = (0,module_proxy.createProxy)(String.raw`/home/mrchike/code/features/next13-lms-platform/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ClientClerkProvider"];

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/errors.js
const missingDomainAndProxy = `
Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.

1) With middleware
   e.g. export default withClerkMiddleware(req => {...}, {domain:'YOUR_DOMAIN',isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_DOMAIN='YOUR_DOMAIN'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'
   `;
const missingSignInUrlInDev = `
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL

1) With middleware
   e.g. export default withClerkMiddleware(req => {...}, {signInUrl:'SOME_URL',isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='SOME_URL'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'`;
const receivedRequestForIgnoredRoute = (url, matcher)=>`Clerk: The middleware was skipped for this request URL: ${url}. For performance reasons, it's recommended to your middleware matcher to:
export const config = {
  matcher: ${matcher},
};

Alternatively, you can set your own ignoredRoutes. See https://clerk.com/docs/nextjs/middleware
(This log only appears in development mode)
`;
const getAuthAuthHeaderMissing = ()=>'You need to use "authMiddleware" (or the deprecated "withClerkMiddleware") in your Next.js middleware file. You also need to make sure that your middleware matcher is configured correctly and matches this route or page. See https://clerk.com/docs/quickstarts/get-started-with-nextjs';
const authAuthHeaderMissing = ()=>"Clerk: auth() was called but it looks like you aren't using `authMiddleware` in your middleware file. Please use `authMiddleware` and make sure your middleware matcher is configured correctly and it matches this route or page. See https://clerk.com/docs/quickstarts/get-started-with-nextjs";
const clockSkewDetected = (verifyMessage)=>`Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will continuously try to issue new tokens, as the existing ones will be treated as "expired" due to clock skew.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${verifyMessage}`;
const infiniteRedirectLoopDetected = ()=>`Clerk: Infinite redirect loop detected. That usually means that we were not able to determine the auth state for this request. A list of common causes and solutions follows.

Reason 1:
Your Clerk instance keys are incorrect, or you recently changed keys (Publishable Key, Secret Key).
How to resolve:
-> Make sure you're using the correct keys from the Clerk Dashboard. If you changed keys recently, make sure to clear your browser application data and cookies.

Reason 2:
A bug that may have already been fixed in the latest version of Clerk NextJS package.
How to resolve:
-> Make sure you are using the latest version of '@clerk/nextjs' and 'next'.
`;
const informAboutProtectedRouteInfo = (path, hasPublicRoutes, hasIgnoredRoutes, isApiRoute, defaultIgnoredRoutes)=>{
    const infoText = isApiRoute ? `INFO: Clerk: The request to ${path} is being protected (401) because there is no signed-in user, and the path is included in \`apiRoutes\`. To prevent this behavior, choose one of:` : `INFO: Clerk: The request to ${path} is being redirected because there is no signed-in user, and the path is not included in \`ignoredRoutes\` or \`publicRoutes\`. To prevent this behavior, choose one of:`;
    const apiRoutesText = isApiRoute ? `To prevent Clerk authentication from protecting (401) the api route, remove the rule matching "${path}" from the \`apiRoutes\` array passed to authMiddleware` : void 0;
    const publicRoutesText = hasPublicRoutes ? `To make the route accessible to both signed in and signed out users, add "${path}" to the \`publicRoutes\` array passed to authMiddleware` : `To make the route accessible to both signed in and signed out users, pass \`publicRoutes: ["${path}"]\` to authMiddleware`;
    const ignoredRoutes = [
        ...defaultIgnoredRoutes,
        path
    ].map((r)=>`"${r}"`).join(", ");
    const ignoredRoutesText = hasIgnoredRoutes ? `To prevent Clerk authentication from running at all, add "${path}" to the \`ignoredRoutes\` array passed to authMiddleware` : `To prevent Clerk authentication from running at all, pass \`ignoredRoutes: [${ignoredRoutes}]\` to authMiddleware`;
    const afterAuthText = "Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of redirecting unless a route is included in publicRoutes";
    return `${infoText}

${[
        apiRoutesText,
        publicRoutesText,
        ignoredRoutesText,
        afterAuthText
    ].filter(Boolean).map((text, index)=>`${index + 1}. ${text}`).join("\n")}

For additional information about middleware, please visit https://clerk.com/docs/nextjs/middleware
(This log only appears in development mode, or if \`debug: true\` is passed to authMiddleware)`;
};
 //# sourceMappingURL=errors.js.map

// EXTERNAL MODULE: ./node_modules/@clerk/backend/dist/index.js
var dist = __webpack_require__(48936);
;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js
const maskSecretKey = (str)=>{
    if (!str || typeof str !== "string") {
        return str;
    }
    try {
        return (str || "").replace(/^(sk_(live|test)_)(.+?)(.{3})$/, "$1*********$4");
    } catch (e) {
        return "";
    }
};
const logFormatter = (entry)=>{
    return (Array.isArray(entry) ? entry : [
        entry
    ]).map((entry2)=>{
        if (typeof entry2 === "string") {
            return maskSecretKey(entry2);
        }
        const masked = Object.fromEntries(Object.entries(entry2).map(([k, v])=>[
                k,
                maskSecretKey(v)
            ]));
        return JSON.stringify(masked, null, 2);
    }).join(", ");
};
 //# sourceMappingURL=logFormatter.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js

const createDebugLogger = (name, formatter)=>()=>{
        const entries = [];
        let isEnabled = false;
        return {
            enable: ()=>{
                isEnabled = true;
            },
            debug: (...args)=>{
                if (isEnabled) {
                    entries.push(args.map((arg)=>typeof arg === "function" ? arg() : arg));
                }
            },
            commit: ()=>{
                if (isEnabled) {
                    const log = `Clerk debug start :: ${name}
${entries.map((log2)=>formatter(log2)).map((e)=>`-- ${e}
`).join("")}`;
                    if (process.env.VERCEL) {
                        console.log(truncate(log, 4096));
                    } else {
                        console.log(log);
                    }
                }
            }
        };
    };
const withLogger = (loggerFactoryOrName, handlerCtor)=>{
    return (...args)=>{
        const factory = typeof loggerFactoryOrName === "string" ? createDebugLogger(loggerFactoryOrName, logFormatter) : loggerFactoryOrName;
        const logger = factory();
        const handler = handlerCtor(logger);
        try {
            const res = handler(...args);
            if (typeof res === "object" && "then" in res && typeof res.then === "function") {
                return res.then((val)=>{
                    logger.commit();
                    return val;
                }).catch((err)=>{
                    logger.commit();
                    throw err;
                });
            }
            logger.commit();
            return res;
        } catch (err) {
            logger.commit();
            throw err;
        }
    };
};
function truncate(str, maxLength) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder("utf-8");
    const encodedString = encoder.encode(str);
    const truncatedString = encodedString.slice(0, maxLength);
    return decoder.decode(truncatedString).replace(/\uFFFD/g, "");
}
 //# sourceMappingURL=debugLogger.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js

const JS_VERSION = process.env.CLERK_JS_VERSION || "";
const CLERK_JS_VERSION = process.env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
const CLERK_JS_URL = process.env.NEXT_PUBLIC_CLERK_JS || "";
const API_URL = process.env.CLERK_API_URL || "https://api.clerk.dev";
const API_VERSION = process.env.CLERK_API_VERSION || "v1";
const API_KEY = process.env.CLERK_API_KEY || "";
const SECRET_KEY = process.env.CLERK_SECRET_KEY || "";
const FRONTEND_API = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || "";
const PUBLISHABLE_KEY = "pk_test_bXVzaWNhbC1yYXR0bGVyLTUxLmNsZXJrLmFjY291bnRzLmRldiQ" || 0;
const DOMAIN = process.env.NEXT_PUBLIC_CLERK_DOMAIN || "";
const PROXY_URL = process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
const IS_SATELLITE = process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === "true" || false;
const SIGN_IN_URL = "/sign-in" || 0;
const SIGN_UP_URL = "/sign-up" || 0;
const clerkClient = (0,dist.Clerk)({
    apiKey: API_KEY,
    secretKey: SECRET_KEY,
    apiUrl: API_URL,
    apiVersion: API_VERSION,
    // TODO: Fetch version from package.json
    userAgent: "@clerk/nextjs",
    proxyUrl: PROXY_URL,
    domain: DOMAIN,
    isSatellite: IS_SATELLITE
});
const createClerkClient = (/* unused pure expression or super */ null && (Clerk));

 //# sourceMappingURL=clerkClient.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/constants.js
const constants_Headers = {
    NextRewrite: "x-middleware-rewrite",
    NextResume: "x-middleware-next",
    NextRedirect: "Location"
};
const constants_constants = {
    Headers: constants_Headers
};
 //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/utils.js





function setCustomAttributeOnRequest(req, key, value) {
    Object.assign(req, {
        [key]: value
    });
}
function getCustomAttributeFromRequest(req, key) {
    return key in req ? req[key] : void 0;
}
function getAuthKeyFromRequest(req, key) {
    return getCustomAttributeFromRequest(req, dist.constants.Attributes[key]) || getHeader(req, dist.constants.Headers[key]) || (key === "AuthStatus" ? getQueryParam(req, dist.constants.SearchParams.AuthStatus) : void 0);
}
function getAuthStatusFromRequest(req) {
    return getCustomAttributeFromRequest(req, constants.Attributes.AuthStatus) || getHeader(req, constants.Headers.AuthStatus) || getQueryParam(req, constants.SearchParams.AuthStatus);
}
function getQueryParam(req, name) {
    if (isNextRequest(req)) {
        return req.nextUrl.searchParams.get(name);
    }
    let queryParam;
    if ("query" in req) {
        queryParam = req.query[name];
    }
    if (!queryParam) {
        const qs = (req.url || "").split("?")[1];
        queryParam = new URLSearchParams(qs).get(name);
    }
    return queryParam;
}
function getHeader(req, name) {
    if (isNextRequest(req)) {
        return req.headers.get(name);
    }
    return req.headers[name] || req.headers[name.toLowerCase()] || req.socket?._httpMessage?.getHeader(name);
}
function getCookie(req, name) {
    if (isNextRequest(req)) {
        const reqCookieOrString = req.cookies.get(name);
        if (!reqCookieOrString) {
            return void 0;
        }
        return typeof reqCookieOrString === "string" ? reqCookieOrString : reqCookieOrString.value;
    }
    return req.cookies[name];
}
function isNextRequest(val) {
    try {
        const { headers, nextUrl, cookies } = val || {};
        return typeof headers?.get === "function" && typeof nextUrl?.searchParams.get === "function" && typeof cookies?.get === "function";
    } catch (e) {
        return false;
    }
}
const OVERRIDE_HEADERS = "x-middleware-override-headers";
const MIDDLEWARE_HEADER_PREFIX = "x-middleware-request";
const setRequestHeadersOnNextResponse = (res, req, newHeaders)=>{
    if (!res.headers.get(OVERRIDE_HEADERS)) {
        res.headers.set(OVERRIDE_HEADERS, [
            ...req.headers.keys()
        ]);
        req.headers.forEach((val, key)=>{
            res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
        });
    }
    Object.entries(newHeaders).forEach(([key, val])=>{
        res.headers.set(OVERRIDE_HEADERS, `${res.headers.get(OVERRIDE_HEADERS)},${key}`);
        res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
    });
};
const nextJsVersionCanOverrideRequestHeaders = ()=>{
    try {
        const headerKey = "clerkTest";
        const headerKeyInRes = `${MIDDLEWARE_HEADER_PREFIX}-${headerKey}`;
        const res = next_response/* default */.Z.next({
            request: {
                headers: new Headers({
                    [headerKey]: "true"
                })
            }
        });
        return res.headers.has(headerKeyInRes);
    } catch (e) {
        return false;
    }
};
const injectSSRStateIntoObject = (obj, authObject)=>{
    const __clerk_ssr_state =  false ? 0 : {
        ...authObject
    };
    return {
        ...obj,
        __clerk_ssr_state
    };
};
function handleValueOrFn(value, url, defaultValue) {
    if (typeof value === "function") {
        return value(url);
    }
    if (typeof value !== "undefined") {
        return value;
    }
    if (typeof defaultValue !== "undefined") {
        return defaultValue;
    }
    return void 0;
}
function isHttpOrHttps(key) {
    return /^http(s)?:\/\//.test(key || "");
}
function isDevelopmentFromApiKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
function decorateRequest(req, res, requestState) {
    const { reason, message, status } = requestState;
    if (!res) {
        res = next_response/* default */.Z.next();
    }
    if (res.headers.get(constants_constants.Headers.NextRedirect)) {
        return res;
    }
    let rewriteURL;
    if (res.headers.get(constants_constants.Headers.NextResume) === "1") {
        res.headers.delete(constants_constants.Headers.NextResume);
        rewriteURL = new URL(req.url);
    }
    const rewriteURLHeader = res.headers.get(constants_constants.Headers.NextRewrite);
    if (rewriteURLHeader) {
        const reqURL = new URL(req.url);
        rewriteURL = new URL(rewriteURLHeader);
        if (rewriteURL.origin !== reqURL.origin) {
            return res;
        }
    }
    if (rewriteURL) {
        if (nextJsVersionCanOverrideRequestHeaders()) {
            setRequestHeadersOnNextResponse(res, req, {
                [dist.constants.Headers.AuthStatus]: status,
                [dist.constants.Headers.AuthMessage]: message || "",
                [dist.constants.Headers.AuthReason]: reason || ""
            });
        } else {
            res.headers.set(dist.constants.Headers.AuthStatus, status);
            res.headers.set(dist.constants.Headers.AuthMessage, message || "");
            res.headers.set(dist.constants.Headers.AuthReason, reason || "");
            rewriteURL.searchParams.set(dist.constants.SearchParams.AuthStatus, status);
            rewriteURL.searchParams.set(dist.constants.Headers.AuthMessage, message || "");
            rewriteURL.searchParams.set(dist.constants.Headers.AuthReason, reason || "");
        }
        res.headers.set(constants_constants.Headers.NextRewrite, rewriteURL.href);
    }
    return res;
}
const apiEndpointUnauthorizedNextResponse = ()=>{
    return next_response/* default */.Z.json(null, {
        status: 401,
        statusText: "Unauthorized"
    });
};
const isCrossOrigin = (from, to)=>{
    const fromUrl = new URL(from);
    const toUrl = new URL(to);
    return fromUrl.origin !== toUrl.origin;
};
const handleMultiDomainAndProxy = (req, opts)=>{
    const requestURL = (0,dist.buildRequestUrl)(req);
    const relativeOrAbsoluteProxyUrl = handleValueOrFn(opts?.proxyUrl, requestURL, PROXY_URL);
    let proxyUrl;
    if (!!relativeOrAbsoluteProxyUrl && !isHttpOrHttps(relativeOrAbsoluteProxyUrl)) {
        proxyUrl = new URL(relativeOrAbsoluteProxyUrl, requestURL).toString();
    } else {
        proxyUrl = relativeOrAbsoluteProxyUrl;
    }
    const isSatellite = handleValueOrFn(opts.isSatellite, new URL(req.url), IS_SATELLITE);
    const domain = handleValueOrFn(opts.domain, new URL(req.url), DOMAIN);
    const signInUrl = opts?.signInUrl || SIGN_IN_URL;
    if (isSatellite && !proxyUrl && !domain) {
        throw new Error(missingDomainAndProxy);
    }
    if (isSatellite && !isHttpOrHttps(signInUrl) && isDevelopmentFromApiKey(SECRET_KEY || API_KEY)) {
        throw new Error(missingSignInUrlInDev);
    }
    return {
        proxyUrl,
        isSatellite,
        domain,
        signInUrl
    };
};
 //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/getAuth.js





const createGetAuth = ({ debugLoggerName, noAuthStatusMessage })=>withLogger(debugLoggerName, (logger)=>{
        return (req, opts)=>{
            const debug = getHeader(req, dist.constants.Headers.EnableDebug) === "true";
            if (debug) {
                logger.enable();
            }
            const authStatus = getAuthKeyFromRequest(req, "AuthStatus");
            const authMessage = getAuthKeyFromRequest(req, "AuthMessage");
            const authReason = getAuthKeyFromRequest(req, "AuthReason");
            logger.debug("Headers debug", {
                authStatus,
                authMessage,
                authReason
            });
            if (!authStatus) {
                throw new Error(noAuthStatusMessage);
            }
            const options = {
                apiKey: opts?.apiKey || API_KEY,
                secretKey: opts?.secretKey || SECRET_KEY,
                apiUrl: API_URL,
                apiVersion: API_VERSION,
                authStatus,
                authMessage,
                authReason
            };
            logger.debug("Options debug", options);
            if (authStatus !== dist.AuthStatus.SignedIn) {
                return (0,dist.signedOutAuthObject)(options);
            }
            const jwt = parseJwt(req);
            logger.debug("JWT debug", jwt.raw.text);
            return (0,dist.signedInAuthObject)(jwt.payload, {
                ...options,
                token: jwt.raw.text
            });
        };
    });
const getAuth = createGetAuth({
    debugLoggerName: "getAuth()",
    noAuthStatusMessage: getAuthAuthHeaderMissing()
});
const buildClerkProps = (req, initState = {})=>{
    const authStatus = getAuthKeyFromRequest(req, "AuthStatus");
    const authMessage = getAuthKeyFromRequest(req, "AuthMessage");
    const authReason = getAuthKeyFromRequest(req, "AuthReason");
    const options = {
        apiKey: API_KEY,
        secretKey: SECRET_KEY,
        apiUrl: API_URL,
        apiVersion: API_VERSION,
        authStatus,
        authMessage,
        authReason
    };
    let authObject;
    if (!authStatus || authStatus !== dist.AuthStatus.SignedIn) {
        authObject = (0,dist.signedOutAuthObject)(options);
    } else {
        const { payload, raw } = parseJwt(req);
        authObject = (0,dist.signedInAuthObject)(payload, {
            ...options,
            token: raw.text
        });
    }
    const sanitizedAuthObject = (0,dist.makeAuthObjectSerializable)((0,dist.sanitizeAuthObject)({
        ...authObject,
        ...initState
    }));
    return injectSSRStateIntoObject({}, sanitizedAuthObject);
};
const parseJwt = (req)=>{
    const cookieToken = getCookie(req, dist.constants.Cookies.Session);
    const headerToken = getHeader(req, "authorization")?.replace("Bearer ", "");
    return (0,dist.decodeJwt)(cookieToken || headerToken || "");
};
 //# sourceMappingURL=getAuth.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-request.js
var next_request = __webpack_require__(25602);
;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js

const buildRequestLike = ()=>{
    try {
        const { headers } = __webpack_require__(40063);
        return new next_request/* default */.Z("https://placeholder.com", {
            headers: headers()
        });
    } catch (e) {
        if (e && "message" in e && typeof e.message === "string" && e.message.toLowerCase().includes("Dynamic server usage".toLowerCase())) {
            throw e;
        }
        throw new Error(`Clerk: auth() and currentUser() are only supported in App Router (/app directory).
If you're using /pages, try getAuth() instead.
Original error: ${e}`);
    }
};
 //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js



const auth = ()=>{
    return createGetAuth({
        debugLoggerName: "auth()",
        noAuthStatusMessage: authAuthHeaderMissing()
    })(buildRequestLike());
};
const initialState = ()=>{
    return buildClerkProps(buildRequestLike());
};
 //# sourceMappingURL=auth.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/app-router/server/ClerkProvider.js




function ClerkProvider(props) {
    const { children, ...rest } = props;
    const state = initialState()?.__clerk_ssr_state;
    return /* @__PURE__ */ /*#__PURE__*/ react_shared_subset.createElement(e0, {
        ...mergeNextClerkPropsWithEnv(rest),
        initialState: state
    }, children);
}
 //# sourceMappingURL=ClerkProvider.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/app-router/server/controlComponents.js


function SignedIn(props) {
    const { children } = props;
    const { userId } = auth();
    return userId ? /* @__PURE__ */ /*#__PURE__*/ react_shared_subset.createElement(react_shared_subset.Fragment, null, children) : null;
}
function SignedOut(props) {
    const { children } = props;
    const { userId } = auth();
    return userId ? null : /* @__PURE__ */ /*#__PURE__*/ react_shared_subset.createElement(react_shared_subset.Fragment, null, children);
}
 //# sourceMappingURL=controlComponents.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js


async function currentUser() {
    const { userId } = auth();
    return userId ? clerkClient.users.getUser(userId) : null;
}
 //# sourceMappingURL=currentUser.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/utils/response.js


const mergeResponses = (...responses)=>{
    const normalisedResponses = responses.filter(Boolean).map((res)=>new next_response/* default */.Z(res.body, res));
    if (normalisedResponses.length === 0) {
        return;
    }
    const lastResponse = normalisedResponses[normalisedResponses.length - 1];
    const finalResponse = new next_response/* default */.Z(lastResponse.body, lastResponse);
    for (const response of normalisedResponses){
        response.headers.forEach((value, name)=>{
            finalResponse.headers.set(name, value);
        });
        response.cookies.getAll().forEach((cookie)=>{
            finalResponse.cookies.set(cookie.name, cookie.value);
        });
    }
    return finalResponse;
};
const isRedirect = (res)=>{
    return res.headers.get(constants_constants.Headers.NextRedirect);
};
const setHeader = (res, name, val)=>{
    res.headers.set(name, val);
    return res;
};
const stringifyHeaders = (headers)=>{
    if (!headers) {
        return JSON.stringify({});
    }
    const obj = {};
    headers.forEach((value, name)=>{
        obj[name] = value;
    });
    return JSON.stringify(obj);
};
 //# sourceMappingURL=response.js.map

// EXTERNAL MODULE: ./node_modules/path-to-regexp/dist/index.js
var path_to_regexp_dist = __webpack_require__(45452);
;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/utils/pathMatchers.js

const paths = {
    toRegexp: (path)=>{
        try {
            return (0,path_to_regexp_dist/* pathToRegexp */.Bo)(path);
        } catch (e) {
            throw new Error(`Invalid path: ${path}.
Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp
${e.message}`);
        }
    }
};
 //# sourceMappingURL=pathMatchers.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/withClerkMiddleware.js




const decorateResponseWithObservabilityHeaders = (res, requestState)=>{
    requestState.message && res.headers.set(dist.constants.Headers.AuthMessage, encodeURIComponent(requestState.message));
    requestState.reason && res.headers.set(dist.constants.Headers.AuthReason, encodeURIComponent(requestState.reason));
    requestState.status && res.headers.set(dist.constants.Headers.AuthStatus, encodeURIComponent(requestState.status));
};
const withClerkMiddleware = (...args)=>{
    const noop = ()=>void 0;
    const [handler = noop, opts = {}] = args;
    return async (req, event)=>{
        const { isSatellite, domain, signInUrl, proxyUrl } = handleMultiDomainAndProxy(req, opts);
        const requestState = await clerkClient.authenticateRequest({
            ...opts,
            apiKey: opts.apiKey || API_KEY,
            secretKey: opts.secretKey || SECRET_KEY,
            frontendApi: opts.frontendApi || FRONTEND_API,
            publishableKey: opts.publishableKey || PUBLISHABLE_KEY,
            isSatellite,
            domain,
            signInUrl,
            proxyUrl,
            request: req
        });
        if (requestState.isUnknown) {
            const response = new next_response/* default */.Z(null, {
                status: 401,
                headers: {
                    "Content-Type": "text/html"
                }
            });
            decorateResponseWithObservabilityHeaders(response, requestState);
            return response;
        }
        if (requestState.isInterstitial) {
            const response = next_response/* default */.Z.rewrite(clerkClient.remotePublicInterstitialUrl({
                apiUrl: API_URL,
                frontendApi: opts.frontendApi || FRONTEND_API,
                publishableKey: opts.publishableKey || PUBLISHABLE_KEY,
                clerkJSUrl: CLERK_JS_URL,
                clerkJSVersion: CLERK_JS_VERSION,
                proxyUrl: requestState.proxyUrl,
                isSatellite: requestState.isSatellite,
                domain: requestState.domain,
                debugData: (0,dist.debugRequestState)(requestState),
                signInUrl: requestState.signInUrl
            }), {
                status: 401
            });
            decorateResponseWithObservabilityHeaders(response, requestState);
            return response;
        }
        setCustomAttributeOnRequest(req, dist.constants.Attributes.AuthStatus, requestState.status);
        setCustomAttributeOnRequest(req, dist.constants.Attributes.AuthMessage, requestState.message || "");
        setCustomAttributeOnRequest(req, dist.constants.Attributes.AuthReason, requestState.reason || "");
        const res = await handler(req, event);
        return decorateRequest(req, res, requestState);
    };
};
 //# sourceMappingURL=withClerkMiddleware.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/authenticateRequest.js




const authenticateRequest = async (req, opts)=>{
    const { isSatellite, domain, signInUrl, proxyUrl } = handleMultiDomainAndProxy(req, opts);
    return await clerkClient.authenticateRequest({
        ...opts,
        apiKey: opts.apiKey || API_KEY,
        secretKey: opts.secretKey || SECRET_KEY,
        frontendApi: opts.frontendApi || FRONTEND_API,
        publishableKey: opts.publishableKey || PUBLISHABLE_KEY,
        isSatellite,
        domain,
        signInUrl,
        proxyUrl,
        request: req
    });
};
const handleUnknownState = (requestState)=>{
    const response = apiEndpointUnauthorizedNextResponse();
    decorateResponseWithObservabilityHeaders(response, requestState);
    return response;
};
const handleInterstitialState = (requestState, opts)=>{
    const response = new next_response/* default */.Z(clerkClient.localInterstitial({
        frontendApi: opts.frontendApi || FRONTEND_API,
        publishableKey: opts.publishableKey || PUBLISHABLE_KEY,
        clerkJSUrl: CLERK_JS_URL,
        clerkJSVersion: CLERK_JS_VERSION,
        proxyUrl: requestState.proxyUrl,
        isSatellite: requestState.isSatellite,
        domain: requestState.domain,
        debugData: (0,dist.debugRequestState)(requestState),
        signInUrl: requestState.signInUrl
    }), {
        status: 401,
        headers: {
            "content-type": "text/html"
        }
    });
    decorateResponseWithObservabilityHeaders(response, requestState);
    return response;
};
 //# sourceMappingURL=authenticateRequest.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/devBrowser.js
const DEV_BROWSER_SSO_JWT_PARAMETER = "__dev_session";
const DEV_BROWSER_JWT_MARKER = "__clerk_db_jwt";
const DEV_BROWSER_JWT_MARKER_REGEXP = /__clerk_db_jwt\[(.*)\]/;
function setDevBrowserJWTInURL(url, jwt, asQueryParam) {
    const resultURL = new URL(url);
    const jwtFromHash = extractDevBrowserJWTFromHash(resultURL.hash);
    resultURL.hash = resultURL.hash.replace(DEV_BROWSER_JWT_MARKER_REGEXP, "");
    if (resultURL.href.endsWith("#")) {
        resultURL.hash = "";
    }
    const jwtFromSearch = resultURL.searchParams.get(DEV_BROWSER_SSO_JWT_PARAMETER);
    resultURL.searchParams.delete(DEV_BROWSER_SSO_JWT_PARAMETER);
    const jwtToSet = jwtFromHash || jwtFromSearch || jwt;
    if (jwtToSet) {
        if (asQueryParam) {
            resultURL.searchParams.append(DEV_BROWSER_SSO_JWT_PARAMETER, jwtToSet);
        } else {
            resultURL.hash = resultURL.hash + `${DEV_BROWSER_JWT_MARKER}[${jwtToSet}]`;
        }
    }
    return resultURL;
}
function extractDevBrowserJWTFromHash(hash) {
    const matches = hash.match(DEV_BROWSER_JWT_MARKER_REGEXP);
    return matches ? matches[1] : "";
}
 //# sourceMappingURL=devBrowser.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/redirect.js




const redirectAdapter = (url)=>{
    const res = next_response/* default */.Z.redirect(url);
    return setHeader(res, dist.constants.Headers.ClerkRedirectTo, "true");
};
const { redirectToSignIn, redirectToSignUp } = (0,dist.redirect)({
    redirectAdapter,
    signInUrl: SIGN_IN_URL,
    signUpUrl: SIGN_UP_URL,
    publishableKey: PUBLISHABLE_KEY,
    frontendApi: FRONTEND_API
});
 //# sourceMappingURL=redirect.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/url.js
const LEGACY_DEV_SUFFIXES = [
    ".lcl.dev",
    ".lclstage.dev",
    ".lclclerk.com"
];
const CURRENT_DEV_SUFFIXES = [
    ".accounts.dev",
    ".accountsstage.dev",
    ".accounts.lclclerk.com"
];
const accountPortalCache = /* @__PURE__ */ new Map();
function isDevAccountPortalOrigin(hostname) {
    if (!hostname) {
        return false;
    }
    let res = accountPortalCache.get(hostname);
    if (res === void 0) {
        res = isLegacyDevAccountPortalOrigin(hostname) || isCurrentDevAccountPortalOrigin(hostname);
        accountPortalCache.set(hostname, res);
    }
    return res;
}
function isLegacyDevAccountPortalOrigin(host) {
    return LEGACY_DEV_SUFFIXES.some((legacyDevSuffix)=>{
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
    });
}
function isCurrentDevAccountPortalOrigin(host) {
    return CURRENT_DEV_SUFFIXES.some((currentDevSuffix)=>{
        return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
    });
}
 //# sourceMappingURL=url.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/server/authMiddleware.js











const INFINITE_REDIRECTION_LOOP_COOKIE = "__clerk_redirection_loop";
const DEFAULT_CONFIG_MATCHER = [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)"
];
const DEFAULT_IGNORED_ROUTES = [
    "/((?!api|trpc))(_next|.+\\..+)(.*)"
];
const DEFAULT_API_ROUTES = [
    "/api/(.*)",
    "/trpc/(.*)"
];
const authMiddleware = (...args)=>{
    const [params = {}] = args;
    const { beforeAuth, afterAuth, publicRoutes, ignoredRoutes, apiRoutes, ...options } = params;
    const isIgnoredRoute = createRouteMatcher(ignoredRoutes || DEFAULT_IGNORED_ROUTES);
    const isPublicRoute = createRouteMatcher(withDefaultPublicRoutes(publicRoutes));
    const isApiRoute = createApiRoutes(apiRoutes);
    const defaultAfterAuth = createDefaultAfterAuth(isPublicRoute, isApiRoute, params);
    return withLogger("authMiddleware", (logger)=>async (_req, evt)=>{
            if (options.debug) {
                logger.enable();
            }
            const req = withNormalizedClerkUrl(_req);
            logger.debug("URL debug", {
                url: req.nextUrl.href,
                method: req.method,
                headers: stringifyHeaders(req.headers),
                nextUrl: req.nextUrl.href,
                clerkUrl: req.experimental_clerkUrl.href
            });
            logger.debug("Options debug", {
                ...options,
                beforeAuth: !!beforeAuth,
                afterAuth: !!afterAuth
            });
            if (isIgnoredRoute(req)) {
                logger.debug({
                    isIgnoredRoute: true
                });
                if (isDevelopmentFromApiKey(options.secretKey || SECRET_KEY) && !params.ignoredRoutes) {
                    console.warn(receivedRequestForIgnoredRoute(req.experimental_clerkUrl.href, JSON.stringify(DEFAULT_CONFIG_MATCHER)));
                }
                return setHeader(next_response/* default */.Z.next(), dist.constants.Headers.AuthReason, "ignored-route");
            }
            const beforeAuthRes = await (beforeAuth && beforeAuth(req, evt));
            if (beforeAuthRes === false) {
                logger.debug("Before auth returned false, skipping");
                return setHeader(next_response/* default */.Z.next(), dist.constants.Headers.AuthReason, "skip");
            } else if (beforeAuthRes && isRedirect(beforeAuthRes)) {
                logger.debug("Before auth returned redirect, following redirect");
                return setHeader(beforeAuthRes, dist.constants.Headers.AuthReason, "redirect");
            }
            const requestState = await authenticateRequest(req, options);
            if (requestState.isUnknown) {
                logger.debug("authenticateRequest state is unknown", requestState);
                return handleUnknownState(requestState);
            } else if (requestState.isInterstitial && isApiRoute(req)) {
                logger.debug("authenticateRequest state is interstitial in an API route", requestState);
                return handleUnknownState(requestState);
            } else if (requestState.isInterstitial) {
                logger.debug("authenticateRequest state is interstitial", requestState);
                assertClockSkew(requestState, options);
                const res = handleInterstitialState(requestState, options);
                return assertInfiniteRedirectionLoop(req, res, options, requestState);
            }
            const auth = Object.assign(requestState.toAuth(), {
                isPublicRoute: isPublicRoute(req),
                isApiRoute: isApiRoute(req)
            });
            logger.debug(()=>({
                    auth: JSON.stringify(auth),
                    debug: auth.debug()
                }));
            const afterAuthRes = await (afterAuth || defaultAfterAuth)(auth, req, evt);
            const finalRes = mergeResponses(beforeAuthRes, afterAuthRes) || next_response/* default */.Z.next();
            logger.debug(()=>({
                    mergedHeaders: stringifyHeaders(finalRes.headers)
                }));
            if (isRedirect(finalRes)) {
                logger.debug("Final response is redirect, following redirect");
                const res = setHeader(finalRes, dist.constants.Headers.AuthReason, "redirect");
                return appendDevBrowserOnCrossOrigin(req, res, options);
            }
            if (options.debug) {
                setRequestHeadersOnNextResponse(finalRes, req, {
                    [dist.constants.Headers.EnableDebug]: "true"
                });
                logger.debug(`Added ${dist.constants.Headers.EnableDebug} on request`);
            }
            return decorateRequest(req, finalRes, requestState);
        });
};
const createRouteMatcher = (routes)=>{
    if (typeof routes === "function") {
        return (req)=>routes(req);
    }
    const routePatterns = [
        routes || ""
    ].flat().filter(Boolean);
    const matchers = precomputePathRegex(routePatterns);
    return (req)=>matchers.some((matcher)=>matcher.test(req.nextUrl.pathname));
};
const createDefaultAfterAuth = (isPublicRoute, isApiRoute, params)=>{
    return (auth, req)=>{
        if (!auth.userId && !isPublicRoute(req)) {
            if (isApiRoute(req)) {
                informAboutProtectedRoute(req.experimental_clerkUrl.pathname, params, true);
                return apiEndpointUnauthorizedNextResponse();
            } else {
                informAboutProtectedRoute(req.experimental_clerkUrl.pathname, params, false);
            }
            return redirectToSignIn({
                returnBackUrl: req.experimental_clerkUrl.href
            });
        }
        return next_response/* default */.Z.next();
    };
};
const precomputePathRegex = (patterns)=>{
    return patterns.map((pattern)=>pattern instanceof RegExp ? pattern : paths.toRegexp(pattern));
};
const matchRoutesStartingWith = (path)=>{
    path = path.replace(/\/$/, "");
    return new RegExp(`^${path}(/.*)?$`);
};
const withDefaultPublicRoutes = (publicRoutes)=>{
    if (typeof publicRoutes === "function") {
        return publicRoutes;
    }
    const routes = [
        publicRoutes || ""
    ].flat().filter(Boolean);
    const signInUrl = "/sign-in" || 0;
    if (signInUrl) {
        routes.push(matchRoutesStartingWith(signInUrl));
    }
    const signUpUrl = "/sign-up" || 0;
    if (signUpUrl) {
        routes.push(matchRoutesStartingWith(signUpUrl));
    }
    return routes;
};
const appendDevBrowserOnCrossOrigin = (req, res, opts)=>{
    const location = res.headers.get("location");
    const shouldAppendDevBrowser = res.headers.get(dist.constants.Headers.ClerkRedirectTo) === "true";
    if (shouldAppendDevBrowser && !!location && isDevelopmentFromApiKey(opts.secretKey || SECRET_KEY) && isCrossOrigin(req.experimental_clerkUrl, location)) {
        const dbJwt = req.cookies.get(DEV_BROWSER_JWT_MARKER)?.value || "";
        const url = new URL(location);
        const asQueryParam = isDevAccountPortalOrigin(url.hostname);
        const urlWithDevBrowser = setDevBrowserJWTInURL(url, dbJwt, asQueryParam);
        return next_response/* default */.Z.redirect(urlWithDevBrowser.href, res);
    }
    return res;
};
const createApiRoutes = (apiRoutes)=>{
    if (apiRoutes) {
        return createRouteMatcher(apiRoutes);
    }
    const isDefaultApiRoute = createRouteMatcher(DEFAULT_API_ROUTES);
    return (req)=>isDefaultApiRoute(req) || isRequestMethodIndicatingApiRoute(req) || isRequestContentTypeJson(req);
};
const isRequestContentTypeJson = (req)=>{
    const requestContentType = req.headers.get(dist.constants.Headers.ContentType);
    return requestContentType === dist.constants.ContentTypes.Json;
};
const isRequestMethodIndicatingApiRoute = (req)=>{
    const requestMethod = req.method.toLowerCase();
    return ![
        "get",
        "head",
        "options"
    ].includes(requestMethod);
};
const assertClockSkew = (requestState, opts)=>{
    if (!isDevelopmentFromApiKey(opts.secretKey || SECRET_KEY)) {
        return;
    }
    if (requestState.reason === "token-not-active-yet") {
        throw new Error(clockSkewDetected(requestState.message));
    }
};
const assertInfiniteRedirectionLoop = (req, res, opts, requestState)=>{
    if (!isDevelopmentFromApiKey(opts.secretKey || SECRET_KEY)) {
        return res;
    }
    const infiniteRedirectsCounter = Number(req.cookies.get(INFINITE_REDIRECTION_LOOP_COOKIE)?.value) || 0;
    if (infiniteRedirectsCounter === 6) {
        if (requestState.reason === "token-expired") {
            throw new Error(clockSkewDetected(requestState.message));
        }
        throw new Error(infiniteRedirectLoopDetected());
    }
    if (req.headers.get("referer") === req.url) {
        res.cookies.set({
            name: INFINITE_REDIRECTION_LOOP_COOKIE,
            value: `${infiniteRedirectsCounter + 1}`,
            maxAge: 3
        });
    }
    return res;
};
const withNormalizedClerkUrl = (req)=>{
    const clerkUrl = req.nextUrl.clone();
    const originUrl = (0,dist.buildRequestUrl)(req);
    clerkUrl.port = originUrl.port;
    clerkUrl.protocol = originUrl.protocol;
    clerkUrl.host = originUrl.host;
    return Object.assign(req, {
        experimental_clerkUrl: clerkUrl
    });
};
const informAboutProtectedRoute = (path, params, isApiRoute)=>{
    if (params.debug || isDevelopmentFromApiKey(params.secretKey || SECRET_KEY)) {
        console.warn(informAboutProtectedRouteInfo(path, !!params.publicRoutes, !!params.ignoredRoutes, isApiRoute, DEFAULT_IGNORED_ROUTES));
    }
};
 //# sourceMappingURL=authMiddleware.js.map

;// CONCATENATED MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js





const esm_ClerkProvider = ClerkProvider;
const esm_SignedIn = SignedIn;
const esm_SignedOut = SignedOut;
const esm_auth = auth;
const esm_currentUser = currentUser;
const esm_clerkClient = clerkClient;
const esm_authMiddleware = authMiddleware;
const esm_redirectToSignIn = redirectToSignIn;
const esm_redirectToSignUp = redirectToSignUp;
const esm_withClerkMiddleware = withClerkMiddleware;
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 23079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnConvert = void 0;
const asn1js = __webpack_require__(45240);
const pvtsutils_1 = __webpack_require__(17367);
const parser_1 = __webpack_require__(86504);
const serializer_1 = __webpack_require__(38029);
class AsnConvert {
    static serialize(obj) {
        return serializer_1.AsnSerializer.serialize(obj);
    }
    static parse(data, target) {
        return parser_1.AsnParser.parse(data, target);
    }
    static toString(data) {
        const buf = pvtsutils_1.BufferSourceConverter.isBufferSource(data) ? pvtsutils_1.BufferSourceConverter.toArrayBuffer(data) : AsnConvert.serialize(data);
        const asn = asn1js.fromBER(buf);
        if (asn.offset === -1) {
            throw new Error(`Cannot decode ASN.1 data. ${asn.result.error}`);
        }
        return asn.result.toString();
    }
}
exports.AsnConvert = AsnConvert;


/***/ }),

/***/ 2705:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaultConverter = exports.AsnNullConverter = exports.AsnGeneralizedTimeConverter = exports.AsnUTCTimeConverter = exports.AsnCharacterStringConverter = exports.AsnGeneralStringConverter = exports.AsnVisibleStringConverter = exports.AsnGraphicStringConverter = exports.AsnIA5StringConverter = exports.AsnVideotexStringConverter = exports.AsnTeletexStringConverter = exports.AsnPrintableStringConverter = exports.AsnNumericStringConverter = exports.AsnUniversalStringConverter = exports.AsnBmpStringConverter = exports.AsnUtf8StringConverter = exports.AsnConstructedOctetStringConverter = exports.AsnOctetStringConverter = exports.AsnBooleanConverter = exports.AsnObjectIdentifierConverter = exports.AsnBitStringConverter = exports.AsnIntegerBigIntConverter = exports.AsnIntegerArrayBufferConverter = exports.AsnEnumeratedConverter = exports.AsnIntegerConverter = exports.AsnAnyConverter = void 0;
const asn1js = __webpack_require__(45240);
const enums_1 = __webpack_require__(8197);
const index_1 = __webpack_require__(47693);
exports.AsnAnyConverter = {
    fromASN: (value)=>value instanceof asn1js.Null ? null : value.valueBeforeDecodeView,
    toASN: (value)=>{
        if (value === null) {
            return new asn1js.Null();
        }
        const schema = asn1js.fromBER(value);
        if (schema.result.error) {
            throw new Error(schema.result.error);
        }
        return schema.result;
    }
};
exports.AsnIntegerConverter = {
    fromASN: (value)=>value.valueBlock.valueHexView.byteLength >= 4 ? value.valueBlock.toString() : value.valueBlock.valueDec,
    toASN: (value)=>new asn1js.Integer({
            value: +value
        })
};
exports.AsnEnumeratedConverter = {
    fromASN: (value)=>value.valueBlock.valueDec,
    toASN: (value)=>new asn1js.Enumerated({
            value
        })
};
exports.AsnIntegerArrayBufferConverter = {
    fromASN: (value)=>value.valueBlock.valueHexView,
    toASN: (value)=>new asn1js.Integer({
            valueHex: value
        })
};
exports.AsnIntegerBigIntConverter = {
    fromASN: (value)=>value.toBigInt(),
    toASN: (value)=>asn1js.Integer.fromBigInt(value)
};
exports.AsnBitStringConverter = {
    fromASN: (value)=>value.valueBlock.valueHexView,
    toASN: (value)=>new asn1js.BitString({
            valueHex: value
        })
};
exports.AsnObjectIdentifierConverter = {
    fromASN: (value)=>value.valueBlock.toString(),
    toASN: (value)=>new asn1js.ObjectIdentifier({
            value
        })
};
exports.AsnBooleanConverter = {
    fromASN: (value)=>value.valueBlock.value,
    toASN: (value)=>new asn1js.Boolean({
            value
        })
};
exports.AsnOctetStringConverter = {
    fromASN: (value)=>value.valueBlock.valueHexView,
    toASN: (value)=>new asn1js.OctetString({
            valueHex: value
        })
};
exports.AsnConstructedOctetStringConverter = {
    fromASN: (value)=>new index_1.OctetString(value.getValue()),
    toASN: (value)=>value.toASN()
};
function createStringConverter(Asn1Type) {
    return {
        fromASN: (value)=>value.valueBlock.value,
        toASN: (value)=>new Asn1Type({
                value
            })
    };
}
exports.AsnUtf8StringConverter = createStringConverter(asn1js.Utf8String);
exports.AsnBmpStringConverter = createStringConverter(asn1js.BmpString);
exports.AsnUniversalStringConverter = createStringConverter(asn1js.UniversalString);
exports.AsnNumericStringConverter = createStringConverter(asn1js.NumericString);
exports.AsnPrintableStringConverter = createStringConverter(asn1js.PrintableString);
exports.AsnTeletexStringConverter = createStringConverter(asn1js.TeletexString);
exports.AsnVideotexStringConverter = createStringConverter(asn1js.VideotexString);
exports.AsnIA5StringConverter = createStringConverter(asn1js.IA5String);
exports.AsnGraphicStringConverter = createStringConverter(asn1js.GraphicString);
exports.AsnVisibleStringConverter = createStringConverter(asn1js.VisibleString);
exports.AsnGeneralStringConverter = createStringConverter(asn1js.GeneralString);
exports.AsnCharacterStringConverter = createStringConverter(asn1js.CharacterString);
exports.AsnUTCTimeConverter = {
    fromASN: (value)=>value.toDate(),
    toASN: (value)=>new asn1js.UTCTime({
            valueDate: value
        })
};
exports.AsnGeneralizedTimeConverter = {
    fromASN: (value)=>value.toDate(),
    toASN: (value)=>new asn1js.GeneralizedTime({
            valueDate: value
        })
};
exports.AsnNullConverter = {
    fromASN: ()=>null,
    toASN: ()=>{
        return new asn1js.Null();
    }
};
function defaultConverter(type) {
    switch(type){
        case enums_1.AsnPropTypes.Any:
            return exports.AsnAnyConverter;
        case enums_1.AsnPropTypes.BitString:
            return exports.AsnBitStringConverter;
        case enums_1.AsnPropTypes.BmpString:
            return exports.AsnBmpStringConverter;
        case enums_1.AsnPropTypes.Boolean:
            return exports.AsnBooleanConverter;
        case enums_1.AsnPropTypes.CharacterString:
            return exports.AsnCharacterStringConverter;
        case enums_1.AsnPropTypes.Enumerated:
            return exports.AsnEnumeratedConverter;
        case enums_1.AsnPropTypes.GeneralString:
            return exports.AsnGeneralStringConverter;
        case enums_1.AsnPropTypes.GeneralizedTime:
            return exports.AsnGeneralizedTimeConverter;
        case enums_1.AsnPropTypes.GraphicString:
            return exports.AsnGraphicStringConverter;
        case enums_1.AsnPropTypes.IA5String:
            return exports.AsnIA5StringConverter;
        case enums_1.AsnPropTypes.Integer:
            return exports.AsnIntegerConverter;
        case enums_1.AsnPropTypes.Null:
            return exports.AsnNullConverter;
        case enums_1.AsnPropTypes.NumericString:
            return exports.AsnNumericStringConverter;
        case enums_1.AsnPropTypes.ObjectIdentifier:
            return exports.AsnObjectIdentifierConverter;
        case enums_1.AsnPropTypes.OctetString:
            return exports.AsnOctetStringConverter;
        case enums_1.AsnPropTypes.PrintableString:
            return exports.AsnPrintableStringConverter;
        case enums_1.AsnPropTypes.TeletexString:
            return exports.AsnTeletexStringConverter;
        case enums_1.AsnPropTypes.UTCTime:
            return exports.AsnUTCTimeConverter;
        case enums_1.AsnPropTypes.UniversalString:
            return exports.AsnUniversalStringConverter;
        case enums_1.AsnPropTypes.Utf8String:
            return exports.AsnUtf8StringConverter;
        case enums_1.AsnPropTypes.VideotexString:
            return exports.AsnVideotexStringConverter;
        case enums_1.AsnPropTypes.VisibleString:
            return exports.AsnVisibleStringConverter;
        default:
            return null;
    }
}
exports.defaultConverter = defaultConverter;


/***/ }),

/***/ 35953:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnProp = exports.AsnSequenceType = exports.AsnSetType = exports.AsnChoiceType = exports.AsnType = void 0;
const converters = __webpack_require__(2705);
const enums_1 = __webpack_require__(8197);
const storage_1 = __webpack_require__(64472);
const AsnType = (options)=>(target)=>{
        let schema;
        if (!storage_1.schemaStorage.has(target)) {
            schema = storage_1.schemaStorage.createDefault(target);
            storage_1.schemaStorage.set(target, schema);
        } else {
            schema = storage_1.schemaStorage.get(target);
        }
        Object.assign(schema, options);
    };
exports.AsnType = AsnType;
const AsnChoiceType = ()=>(0, exports.AsnType)({
        type: enums_1.AsnTypeTypes.Choice
    });
exports.AsnChoiceType = AsnChoiceType;
const AsnSetType = (options)=>(0, exports.AsnType)({
        type: enums_1.AsnTypeTypes.Set,
        ...options
    });
exports.AsnSetType = AsnSetType;
const AsnSequenceType = (options)=>(0, exports.AsnType)({
        type: enums_1.AsnTypeTypes.Sequence,
        ...options
    });
exports.AsnSequenceType = AsnSequenceType;
const AsnProp = (options)=>(target, propertyKey)=>{
        let schema;
        if (!storage_1.schemaStorage.has(target.constructor)) {
            schema = storage_1.schemaStorage.createDefault(target.constructor);
            storage_1.schemaStorage.set(target.constructor, schema);
        } else {
            schema = storage_1.schemaStorage.get(target.constructor);
        }
        const copyOptions = Object.assign({}, options);
        if (typeof copyOptions.type === "number" && !copyOptions.converter) {
            const defaultConverter = converters.defaultConverter(options.type);
            if (!defaultConverter) {
                throw new Error(`Cannot get default converter for property '${propertyKey}' of ${target.constructor.name}`);
            }
            copyOptions.converter = defaultConverter;
        }
        schema.items[propertyKey] = copyOptions;
    };
exports.AsnProp = AsnProp;


/***/ }),

/***/ 8197:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnPropTypes = exports.AsnTypeTypes = void 0;
var AsnTypeTypes;
(function(AsnTypeTypes) {
    AsnTypeTypes[AsnTypeTypes["Sequence"] = 0] = "Sequence";
    AsnTypeTypes[AsnTypeTypes["Set"] = 1] = "Set";
    AsnTypeTypes[AsnTypeTypes["Choice"] = 2] = "Choice";
})(AsnTypeTypes = exports.AsnTypeTypes || (exports.AsnTypeTypes = {}));
var AsnPropTypes;
(function(AsnPropTypes) {
    AsnPropTypes[AsnPropTypes["Any"] = 1] = "Any";
    AsnPropTypes[AsnPropTypes["Boolean"] = 2] = "Boolean";
    AsnPropTypes[AsnPropTypes["OctetString"] = 3] = "OctetString";
    AsnPropTypes[AsnPropTypes["BitString"] = 4] = "BitString";
    AsnPropTypes[AsnPropTypes["Integer"] = 5] = "Integer";
    AsnPropTypes[AsnPropTypes["Enumerated"] = 6] = "Enumerated";
    AsnPropTypes[AsnPropTypes["ObjectIdentifier"] = 7] = "ObjectIdentifier";
    AsnPropTypes[AsnPropTypes["Utf8String"] = 8] = "Utf8String";
    AsnPropTypes[AsnPropTypes["BmpString"] = 9] = "BmpString";
    AsnPropTypes[AsnPropTypes["UniversalString"] = 10] = "UniversalString";
    AsnPropTypes[AsnPropTypes["NumericString"] = 11] = "NumericString";
    AsnPropTypes[AsnPropTypes["PrintableString"] = 12] = "PrintableString";
    AsnPropTypes[AsnPropTypes["TeletexString"] = 13] = "TeletexString";
    AsnPropTypes[AsnPropTypes["VideotexString"] = 14] = "VideotexString";
    AsnPropTypes[AsnPropTypes["IA5String"] = 15] = "IA5String";
    AsnPropTypes[AsnPropTypes["GraphicString"] = 16] = "GraphicString";
    AsnPropTypes[AsnPropTypes["VisibleString"] = 17] = "VisibleString";
    AsnPropTypes[AsnPropTypes["GeneralString"] = 18] = "GeneralString";
    AsnPropTypes[AsnPropTypes["CharacterString"] = 19] = "CharacterString";
    AsnPropTypes[AsnPropTypes["UTCTime"] = 20] = "UTCTime";
    AsnPropTypes[AsnPropTypes["GeneralizedTime"] = 21] = "GeneralizedTime";
    AsnPropTypes[AsnPropTypes["DATE"] = 22] = "DATE";
    AsnPropTypes[AsnPropTypes["TimeOfDay"] = 23] = "TimeOfDay";
    AsnPropTypes[AsnPropTypes["DateTime"] = 24] = "DateTime";
    AsnPropTypes[AsnPropTypes["Duration"] = 25] = "Duration";
    AsnPropTypes[AsnPropTypes["TIME"] = 26] = "TIME";
    AsnPropTypes[AsnPropTypes["Null"] = 27] = "Null";
})(AsnPropTypes = exports.AsnPropTypes || (exports.AsnPropTypes = {}));


/***/ }),

/***/ 51054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(19138), exports);


/***/ }),

/***/ 19138:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnSchemaValidationError = void 0;
class AsnSchemaValidationError extends Error {
    constructor(){
        super(...arguments);
        this.schemas = [];
    }
}
exports.AsnSchemaValidationError = AsnSchemaValidationError;


/***/ }),

/***/ 29546:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isArrayEqual = exports.isTypeOfArray = exports.isConvertible = void 0;
function isConvertible(target) {
    if (typeof target === "function" && target.prototype) {
        if (target.prototype.toASN && target.prototype.fromASN) {
            return true;
        } else {
            return isConvertible(target.prototype);
        }
    } else {
        return !!(target && typeof target === "object" && "toASN" in target && "fromASN" in target);
    }
}
exports.isConvertible = isConvertible;
function isTypeOfArray(target) {
    var _a;
    if (target) {
        const proto = Object.getPrototypeOf(target);
        if (((_a = proto === null || proto === void 0 ? void 0 : proto.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === Array) {
            return true;
        }
        return isTypeOfArray(proto);
    }
    return false;
}
exports.isTypeOfArray = isTypeOfArray;
function isArrayEqual(bytes1, bytes2) {
    if (!(bytes1 && bytes2)) {
        return false;
    }
    if (bytes1.byteLength !== bytes2.byteLength) {
        return false;
    }
    const b1 = new Uint8Array(bytes1);
    const b2 = new Uint8Array(bytes2);
    for(let i = 0; i < bytes1.byteLength; i++){
        if (b1[i] !== b2[i]) {
            return false;
        }
    }
    return true;
}
exports.isArrayEqual = isArrayEqual;


/***/ }),

/***/ 73133:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnSerializer = exports.AsnParser = exports.AsnPropTypes = exports.AsnTypeTypes = exports.AsnSetType = exports.AsnSequenceType = exports.AsnChoiceType = exports.AsnType = exports.AsnProp = void 0;
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(2705), exports);
tslib_1.__exportStar(__webpack_require__(47693), exports);
var decorators_1 = __webpack_require__(35953);
Object.defineProperty(exports, "AsnProp", ({
    enumerable: true,
    get: function() {
        return decorators_1.AsnProp;
    }
}));
Object.defineProperty(exports, "AsnType", ({
    enumerable: true,
    get: function() {
        return decorators_1.AsnType;
    }
}));
Object.defineProperty(exports, "AsnChoiceType", ({
    enumerable: true,
    get: function() {
        return decorators_1.AsnChoiceType;
    }
}));
Object.defineProperty(exports, "AsnSequenceType", ({
    enumerable: true,
    get: function() {
        return decorators_1.AsnSequenceType;
    }
}));
Object.defineProperty(exports, "AsnSetType", ({
    enumerable: true,
    get: function() {
        return decorators_1.AsnSetType;
    }
}));
var enums_1 = __webpack_require__(8197);
Object.defineProperty(exports, "AsnTypeTypes", ({
    enumerable: true,
    get: function() {
        return enums_1.AsnTypeTypes;
    }
}));
Object.defineProperty(exports, "AsnPropTypes", ({
    enumerable: true,
    get: function() {
        return enums_1.AsnPropTypes;
    }
}));
var parser_1 = __webpack_require__(86504);
Object.defineProperty(exports, "AsnParser", ({
    enumerable: true,
    get: function() {
        return parser_1.AsnParser;
    }
}));
var serializer_1 = __webpack_require__(38029);
Object.defineProperty(exports, "AsnSerializer", ({
    enumerable: true,
    get: function() {
        return serializer_1.AsnSerializer;
    }
}));
tslib_1.__exportStar(__webpack_require__(51054), exports);
tslib_1.__exportStar(__webpack_require__(26745), exports);
tslib_1.__exportStar(__webpack_require__(23079), exports);


/***/ }),

/***/ 26745:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnArray = void 0;
class AsnArray extends Array {
    constructor(items = []){
        if (typeof items === "number") {
            super(items);
        } else {
            super();
            for (const item of items){
                this.push(item);
            }
        }
    }
}
exports.AsnArray = AsnArray;


/***/ }),

/***/ 86504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnParser = void 0;
const asn1js = __webpack_require__(45240);
const enums_1 = __webpack_require__(8197);
const converters = __webpack_require__(2705);
const errors_1 = __webpack_require__(51054);
const helper_1 = __webpack_require__(29546);
const storage_1 = __webpack_require__(64472);
class AsnParser {
    static parse(data, target) {
        const asn1Parsed = asn1js.fromBER(data);
        if (asn1Parsed.result.error) {
            throw new Error(asn1Parsed.result.error);
        }
        const res = this.fromASN(asn1Parsed.result, target);
        return res;
    }
    static fromASN(asn1Schema, target) {
        var _a;
        try {
            if ((0, helper_1.isConvertible)(target)) {
                const value = new target();
                return value.fromASN(asn1Schema);
            }
            const schema = storage_1.schemaStorage.get(target);
            storage_1.schemaStorage.cache(target);
            let targetSchema = schema.schema;
            if (asn1Schema.constructor === asn1js.Constructed && schema.type !== enums_1.AsnTypeTypes.Choice) {
                targetSchema = new asn1js.Constructed({
                    idBlock: {
                        tagClass: 3,
                        tagNumber: asn1Schema.idBlock.tagNumber
                    },
                    value: schema.schema.valueBlock.value
                });
                for(const key in schema.items){
                    delete asn1Schema[key];
                }
            }
            const asn1ComparedSchema = asn1js.compareSchema({}, asn1Schema, targetSchema);
            if (!asn1ComparedSchema.verified) {
                throw new errors_1.AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema. ${asn1ComparedSchema.result.error}`);
            }
            const res = new target();
            if ((0, helper_1.isTypeOfArray)(target)) {
                if (!("value" in asn1Schema.valueBlock && Array.isArray(asn1Schema.valueBlock.value))) {
                    throw new Error(`Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.`);
                }
                const itemType = schema.itemType;
                if (typeof itemType === "number") {
                    const converter = converters.defaultConverter(itemType);
                    if (!converter) {
                        throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
                    }
                    return target.from(asn1Schema.valueBlock.value, (element)=>converter.fromASN(element));
                } else {
                    return target.from(asn1Schema.valueBlock.value, (element)=>this.fromASN(element, itemType));
                }
            }
            for(const key in schema.items){
                const asn1SchemaValue = asn1ComparedSchema.result[key];
                if (!asn1SchemaValue) {
                    continue;
                }
                const schemaItem = schema.items[key];
                const schemaItemType = schemaItem.type;
                if (typeof schemaItemType === "number" || (0, helper_1.isConvertible)(schemaItemType)) {
                    const converter = (_a = schemaItem.converter) !== null && _a !== void 0 ? _a : (0, helper_1.isConvertible)(schemaItemType) ? new schemaItemType() : null;
                    if (!converter) {
                        throw new Error("Converter is empty");
                    }
                    if (schemaItem.repeated) {
                        if (schemaItem.implicit) {
                            const Container = schemaItem.repeated === "sequence" ? asn1js.Sequence : asn1js.Set;
                            const newItem = new Container();
                            newItem.valueBlock = asn1SchemaValue.valueBlock;
                            const newItemAsn = asn1js.fromBER(newItem.toBER(false));
                            if (newItemAsn.offset === -1) {
                                throw new Error(`Cannot parse the child item. ${newItemAsn.result.error}`);
                            }
                            if (!("value" in newItemAsn.result.valueBlock && Array.isArray(newItemAsn.result.valueBlock.value))) {
                                throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
                            }
                            const value = newItemAsn.result.valueBlock.value;
                            res[key] = Array.from(value, (element)=>converter.fromASN(element));
                        } else {
                            res[key] = Array.from(asn1SchemaValue, (element)=>converter.fromASN(element));
                        }
                    } else {
                        let value = asn1SchemaValue;
                        if (schemaItem.implicit) {
                            let newItem;
                            if ((0, helper_1.isConvertible)(schemaItemType)) {
                                newItem = new schemaItemType().toSchema("");
                            } else {
                                const Asn1TypeName = enums_1.AsnPropTypes[schemaItemType];
                                const Asn1Type = asn1js[Asn1TypeName];
                                if (!Asn1Type) {
                                    throw new Error(`Cannot get '${Asn1TypeName}' class from asn1js module`);
                                }
                                newItem = new Asn1Type();
                            }
                            newItem.valueBlock = value.valueBlock;
                            value = asn1js.fromBER(newItem.toBER(false)).result;
                        }
                        res[key] = converter.fromASN(value);
                    }
                } else {
                    if (schemaItem.repeated) {
                        if (!Array.isArray(asn1SchemaValue)) {
                            throw new Error("Cannot get list of items from the ASN.1 parsed value. ASN.1 value should be iterable.");
                        }
                        res[key] = Array.from(asn1SchemaValue, (element)=>this.fromASN(element, schemaItemType));
                    } else {
                        res[key] = this.fromASN(asn1SchemaValue, schemaItemType);
                    }
                }
            }
            return res;
        } catch (error) {
            if (error instanceof errors_1.AsnSchemaValidationError) {
                error.schemas.push(target.name);
            }
            throw error;
        }
    }
}
exports.AsnParser = AsnParser;


/***/ }),

/***/ 73678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnSchemaStorage = void 0;
const asn1js = __webpack_require__(45240);
const enums_1 = __webpack_require__(8197);
const helper_1 = __webpack_require__(29546);
class AsnSchemaStorage {
    constructor(){
        this.items = new WeakMap();
    }
    has(target) {
        return this.items.has(target);
    }
    get(target, checkSchema = false) {
        const schema = this.items.get(target);
        if (!schema) {
            throw new Error(`Cannot get schema for '${target.prototype.constructor.name}' target`);
        }
        if (checkSchema && !schema.schema) {
            throw new Error(`Schema '${target.prototype.constructor.name}' doesn't contain ASN.1 schema. Call 'AsnSchemaStorage.cache'.`);
        }
        return schema;
    }
    cache(target) {
        const schema = this.get(target);
        if (!schema.schema) {
            schema.schema = this.create(target, true);
        }
    }
    createDefault(target) {
        const schema = {
            type: enums_1.AsnTypeTypes.Sequence,
            items: {}
        };
        const parentSchema = this.findParentSchema(target);
        if (parentSchema) {
            Object.assign(schema, parentSchema);
            schema.items = Object.assign({}, schema.items, parentSchema.items);
        }
        return schema;
    }
    create(target, useNames) {
        const schema = this.items.get(target) || this.createDefault(target);
        const asn1Value = [];
        for(const key in schema.items){
            const item = schema.items[key];
            const name = useNames ? key : "";
            let asn1Item;
            if (typeof item.type === "number") {
                const Asn1TypeName = enums_1.AsnPropTypes[item.type];
                const Asn1Type = asn1js[Asn1TypeName];
                if (!Asn1Type) {
                    throw new Error(`Cannot get ASN1 class by name '${Asn1TypeName}'`);
                }
                asn1Item = new Asn1Type({
                    name
                });
            } else if ((0, helper_1.isConvertible)(item.type)) {
                const instance = new item.type();
                asn1Item = instance.toSchema(name);
            } else if (item.optional) {
                const itemSchema = this.get(item.type);
                if (itemSchema.type === enums_1.AsnTypeTypes.Choice) {
                    asn1Item = new asn1js.Any({
                        name
                    });
                } else {
                    asn1Item = this.create(item.type, false);
                    asn1Item.name = name;
                }
            } else {
                asn1Item = new asn1js.Any({
                    name
                });
            }
            const optional = !!item.optional || item.defaultValue !== undefined;
            if (item.repeated) {
                asn1Item.name = "";
                const Container = item.repeated === "set" ? asn1js.Set : asn1js.Sequence;
                asn1Item = new Container({
                    name: "",
                    value: [
                        new asn1js.Repeated({
                            name,
                            value: asn1Item
                        })
                    ]
                });
            }
            if (item.context !== null && item.context !== undefined) {
                if (item.implicit) {
                    if (typeof item.type === "number" || (0, helper_1.isConvertible)(item.type)) {
                        const Container = item.repeated ? asn1js.Constructed : asn1js.Primitive;
                        asn1Value.push(new Container({
                            name,
                            optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: item.context
                            }
                        }));
                    } else {
                        this.cache(item.type);
                        const isRepeated = !!item.repeated;
                        let value = !isRepeated ? this.get(item.type, true).schema : asn1Item;
                        value = "valueBlock" in value ? value.valueBlock.value : value.value;
                        asn1Value.push(new asn1js.Constructed({
                            name: !isRepeated ? name : "",
                            optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: item.context
                            },
                            value: value
                        }));
                    }
                } else {
                    asn1Value.push(new asn1js.Constructed({
                        optional,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: item.context
                        },
                        value: [
                            asn1Item
                        ]
                    }));
                }
            } else {
                asn1Item.optional = optional;
                asn1Value.push(asn1Item);
            }
        }
        switch(schema.type){
            case enums_1.AsnTypeTypes.Sequence:
                return new asn1js.Sequence({
                    value: asn1Value,
                    name: ""
                });
            case enums_1.AsnTypeTypes.Set:
                return new asn1js.Set({
                    value: asn1Value,
                    name: ""
                });
            case enums_1.AsnTypeTypes.Choice:
                return new asn1js.Choice({
                    value: asn1Value,
                    name: ""
                });
            default:
                throw new Error(`Unsupported ASN1 type in use`);
        }
    }
    set(target, schema) {
        this.items.set(target, schema);
        return this;
    }
    findParentSchema(target) {
        const parent = Object.getPrototypeOf(target);
        if (parent) {
            const schema = this.items.get(parent);
            return schema || this.findParentSchema(parent);
        }
        return null;
    }
}
exports.AsnSchemaStorage = AsnSchemaStorage;


/***/ }),

/***/ 38029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsnSerializer = void 0;
const asn1js = __webpack_require__(45240);
const converters = __webpack_require__(2705);
const enums_1 = __webpack_require__(8197);
const helper_1 = __webpack_require__(29546);
const storage_1 = __webpack_require__(64472);
class AsnSerializer {
    static serialize(obj) {
        if (obj instanceof asn1js.BaseBlock) {
            return obj.toBER(false);
        }
        return this.toASN(obj).toBER(false);
    }
    static toASN(obj) {
        if (obj && typeof obj === "object" && (0, helper_1.isConvertible)(obj)) {
            return obj.toASN();
        }
        if (!(obj && typeof obj === "object")) {
            throw new TypeError("Parameter 1 should be type of Object.");
        }
        const target = obj.constructor;
        const schema = storage_1.schemaStorage.get(target);
        storage_1.schemaStorage.cache(target);
        let asn1Value = [];
        if (schema.itemType) {
            if (!Array.isArray(obj)) {
                throw new TypeError("Parameter 1 should be type of Array.");
            }
            if (typeof schema.itemType === "number") {
                const converter = converters.defaultConverter(schema.itemType);
                if (!converter) {
                    throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
                }
                asn1Value = obj.map((o)=>converter.toASN(o));
            } else {
                asn1Value = obj.map((o)=>this.toAsnItem({
                        type: schema.itemType
                    }, "[]", target, o));
            }
        } else {
            for(const key in schema.items){
                const schemaItem = schema.items[key];
                const objProp = obj[key];
                if (objProp === undefined || schemaItem.defaultValue === objProp || typeof schemaItem.defaultValue === "object" && typeof objProp === "object" && (0, helper_1.isArrayEqual)(this.serialize(schemaItem.defaultValue), this.serialize(objProp))) {
                    continue;
                }
                const asn1Item = AsnSerializer.toAsnItem(schemaItem, key, target, objProp);
                if (typeof schemaItem.context === "number") {
                    if (schemaItem.implicit) {
                        if (!schemaItem.repeated && (typeof schemaItem.type === "number" || (0, helper_1.isConvertible)(schemaItem.type))) {
                            const value = {};
                            value.valueHex = asn1Item instanceof asn1js.Null ? asn1Item.valueBeforeDecodeView : asn1Item.valueBlock.toBER();
                            asn1Value.push(new asn1js.Primitive({
                                optional: schemaItem.optional,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context
                                },
                                ...value
                            }));
                        } else {
                            asn1Value.push(new asn1js.Constructed({
                                optional: schemaItem.optional,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context
                                },
                                value: asn1Item.valueBlock.value
                            }));
                        }
                    } else {
                        asn1Value.push(new asn1js.Constructed({
                            optional: schemaItem.optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: schemaItem.context
                            },
                            value: [
                                asn1Item
                            ]
                        }));
                    }
                } else if (schemaItem.repeated) {
                    asn1Value = asn1Value.concat(asn1Item);
                } else {
                    asn1Value.push(asn1Item);
                }
            }
        }
        let asnSchema;
        switch(schema.type){
            case enums_1.AsnTypeTypes.Sequence:
                asnSchema = new asn1js.Sequence({
                    value: asn1Value
                });
                break;
            case enums_1.AsnTypeTypes.Set:
                asnSchema = new asn1js.Set({
                    value: asn1Value
                });
                break;
            case enums_1.AsnTypeTypes.Choice:
                if (!asn1Value[0]) {
                    throw new Error(`Schema '${target.name}' has wrong data. Choice cannot be empty.`);
                }
                asnSchema = asn1Value[0];
                break;
        }
        return asnSchema;
    }
    static toAsnItem(schemaItem, key, target, objProp) {
        let asn1Item;
        if (typeof schemaItem.type === "number") {
            const converter = schemaItem.converter;
            if (!converter) {
                throw new Error(`Property '${key}' doesn't have converter for type ${enums_1.AsnPropTypes[schemaItem.type]} in schema '${target.name}'`);
            }
            if (schemaItem.repeated) {
                if (!Array.isArray(objProp)) {
                    throw new TypeError("Parameter 'objProp' should be type of Array.");
                }
                const items = Array.from(objProp, (element)=>converter.toASN(element));
                const Container = schemaItem.repeated === "sequence" ? asn1js.Sequence : asn1js.Set;
                asn1Item = new Container({
                    value: items
                });
            } else {
                asn1Item = converter.toASN(objProp);
            }
        } else {
            if (schemaItem.repeated) {
                if (!Array.isArray(objProp)) {
                    throw new TypeError("Parameter 'objProp' should be type of Array.");
                }
                const items = Array.from(objProp, (element)=>this.toASN(element));
                const Container = schemaItem.repeated === "sequence" ? asn1js.Sequence : asn1js.Set;
                asn1Item = new Container({
                    value: items
                });
            } else {
                asn1Item = this.toASN(objProp);
            }
        }
        return asn1Item;
    }
}
exports.AsnSerializer = AsnSerializer;


/***/ }),

/***/ 64472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.schemaStorage = void 0;
const schema_1 = __webpack_require__(73678);
exports.schemaStorage = new schema_1.AsnSchemaStorage();


/***/ }),

/***/ 40119:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.BitString = void 0;
const asn1js = __webpack_require__(45240);
const pvtsutils_1 = __webpack_require__(17367);
class BitString {
    constructor(params, unusedBits = 0){
        this.unusedBits = 0;
        this.value = new ArrayBuffer(0);
        if (params) {
            if (typeof params === "number") {
                this.fromNumber(params);
            } else if (pvtsutils_1.BufferSourceConverter.isBufferSource(params)) {
                this.unusedBits = unusedBits;
                this.value = pvtsutils_1.BufferSourceConverter.toArrayBuffer(params);
            } else {
                throw TypeError("Unsupported type of 'params' argument for BitString");
            }
        }
    }
    fromASN(asn) {
        if (!(asn instanceof asn1js.BitString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");
        }
        this.unusedBits = asn.valueBlock.unusedBits;
        this.value = asn.valueBlock.valueHex;
        return this;
    }
    toASN() {
        return new asn1js.BitString({
            unusedBits: this.unusedBits,
            valueHex: this.value
        });
    }
    toSchema(name) {
        return new asn1js.BitString({
            name
        });
    }
    toNumber() {
        let res = "";
        const uintArray = new Uint8Array(this.value);
        for (const octet of uintArray){
            res += octet.toString(2).padStart(8, "0");
        }
        res = res.split("").reverse().join("");
        if (this.unusedBits) {
            res = res.slice(this.unusedBits).padStart(this.unusedBits, "0");
        }
        return parseInt(res, 2);
    }
    fromNumber(value) {
        let bits = value.toString(2);
        const octetSize = bits.length + 7 >> 3;
        this.unusedBits = (octetSize << 3) - bits.length;
        const octets = new Uint8Array(octetSize);
        bits = bits.padStart(octetSize << 3, "0").split("").reverse().join("");
        let index = 0;
        while(index < octetSize){
            octets[index] = parseInt(bits.slice(index << 3, (index << 3) + 8), 2);
            index++;
        }
        this.value = octets.buffer;
    }
}
exports.BitString = BitString;


/***/ }),

/***/ 47693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(40119), exports);
tslib_1.__exportStar(__webpack_require__(72276), exports);


/***/ }),

/***/ 72276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OctetString = void 0;
const asn1js = __webpack_require__(45240);
const pvtsutils_1 = __webpack_require__(17367);
class OctetString {
    constructor(param){
        if (typeof param === "number") {
            this.buffer = new ArrayBuffer(param);
        } else {
            if (pvtsutils_1.BufferSourceConverter.isBufferSource(param)) {
                this.buffer = pvtsutils_1.BufferSourceConverter.toArrayBuffer(param);
            } else if (Array.isArray(param)) {
                this.buffer = new Uint8Array(param);
            } else {
                this.buffer = new ArrayBuffer(0);
            }
        }
    }
    get byteLength() {
        return this.buffer.byteLength;
    }
    get byteOffset() {
        return 0;
    }
    fromASN(asn) {
        if (!(asn instanceof asn1js.OctetString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
        }
        this.buffer = asn.valueBlock.valueHex;
        return this;
    }
    toASN() {
        return new asn1js.OctetString({
            valueHex: this.buffer
        });
    }
    toSchema(name) {
        return new asn1js.OctetString({
            name
        });
    }
}
exports.OctetString = OctetString;


/***/ }),

/***/ 13706:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Copyright (c) 2020, Peculiar Ventures, All rights reserved.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
class JsonError extends Error {
    constructor(message, innerError){
        super(innerError ? `${message}. See the inner exception for more details.` : message);
        this.message = message;
        this.innerError = innerError;
    }
}
class TransformError extends JsonError {
    constructor(schema, message, innerError){
        super(message, innerError);
        this.schema = schema;
    }
}
class ParserError extends TransformError {
    constructor(schema, message, innerError){
        super(schema, `JSON doesn't match to '${schema.target.name}' schema. ${message}`, innerError);
    }
}
class ValidationError extends JsonError {
}
class SerializerError extends JsonError {
    constructor(schemaName, message, innerError){
        super(`Cannot serialize by '${schemaName}' schema. ${message}`, innerError);
        this.schemaName = schemaName;
    }
}
class KeyError extends ParserError {
    constructor(schema, keys, errors = {}){
        super(schema, "Some keys doesn't match to schema");
        this.keys = keys;
        this.errors = errors;
    }
}
(function(JsonPropTypes) {
    JsonPropTypes[JsonPropTypes["Any"] = 0] = "Any";
    JsonPropTypes[JsonPropTypes["Boolean"] = 1] = "Boolean";
    JsonPropTypes[JsonPropTypes["Number"] = 2] = "Number";
    JsonPropTypes[JsonPropTypes["String"] = 3] = "String";
})(exports.JsonPropTypes || (exports.JsonPropTypes = {}));
function checkType(value, type) {
    switch(type){
        case exports.JsonPropTypes.Boolean:
            return typeof value === "boolean";
        case exports.JsonPropTypes.Number:
            return typeof value === "number";
        case exports.JsonPropTypes.String:
            return typeof value === "string";
    }
    return true;
}
function throwIfTypeIsWrong(value, type) {
    if (!checkType(value, type)) {
        throw new TypeError(`Value must be ${exports.JsonPropTypes[type]}`);
    }
}
function isConvertible(target) {
    if (target && target.prototype) {
        if (target.prototype.toJSON && target.prototype.fromJSON) {
            return true;
        } else {
            return isConvertible(target.prototype);
        }
    } else {
        return !!(target && target.toJSON && target.fromJSON);
    }
}
class JsonSchemaStorage {
    constructor(){
        this.items = new Map();
    }
    has(target) {
        return this.items.has(target) || !!this.findParentSchema(target);
    }
    get(target) {
        const schema = this.items.get(target) || this.findParentSchema(target);
        if (!schema) {
            throw new Error("Cannot get schema for current target");
        }
        return schema;
    }
    create(target) {
        const schema = {
            names: {}
        };
        const parentSchema = this.findParentSchema(target);
        if (parentSchema) {
            Object.assign(schema, parentSchema);
            schema.names = {};
            for(const name in parentSchema.names){
                schema.names[name] = Object.assign({}, parentSchema.names[name]);
            }
        }
        schema.target = target;
        return schema;
    }
    set(target, schema) {
        this.items.set(target, schema);
        return this;
    }
    findParentSchema(target) {
        const parent = target.__proto__;
        if (parent) {
            const schema = this.items.get(parent);
            return schema || this.findParentSchema(parent);
        }
        return null;
    }
}
const DEFAULT_SCHEMA = "default";
const schemaStorage = new JsonSchemaStorage();
class PatternValidation {
    constructor(pattern){
        this.pattern = new RegExp(pattern);
    }
    validate(value) {
        const pattern = new RegExp(this.pattern.source, this.pattern.flags);
        if (typeof value !== "string") {
            throw new ValidationError("Incoming value must be string");
        }
        if (!pattern.exec(value)) {
            throw new ValidationError(`Value doesn't match to pattern '${pattern.toString()}'`);
        }
    }
}
class InclusiveValidation {
    constructor(min = Number.MIN_VALUE, max = Number.MAX_VALUE){
        this.min = min;
        this.max = max;
    }
    validate(value) {
        throwIfTypeIsWrong(value, exports.JsonPropTypes.Number);
        if (!(this.min <= value && value <= this.max)) {
            const min = this.min === Number.MIN_VALUE ? "MIN" : this.min;
            const max = this.max === Number.MAX_VALUE ? "MAX" : this.max;
            throw new ValidationError(`Value doesn't match to diapason [${min},${max}]`);
        }
    }
}
class ExclusiveValidation {
    constructor(min = Number.MIN_VALUE, max = Number.MAX_VALUE){
        this.min = min;
        this.max = max;
    }
    validate(value) {
        throwIfTypeIsWrong(value, exports.JsonPropTypes.Number);
        if (!(this.min < value && value < this.max)) {
            const min = this.min === Number.MIN_VALUE ? "MIN" : this.min;
            const max = this.max === Number.MAX_VALUE ? "MAX" : this.max;
            throw new ValidationError(`Value doesn't match to diapason (${min},${max})`);
        }
    }
}
class LengthValidation {
    constructor(length, minLength, maxLength){
        this.length = length;
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
    validate(value) {
        if (this.length !== undefined) {
            if (value.length !== this.length) {
                throw new ValidationError(`Value length must be exactly ${this.length}.`);
            }
            return;
        }
        if (this.minLength !== undefined) {
            if (value.length < this.minLength) {
                throw new ValidationError(`Value length must be more than ${this.minLength}.`);
            }
        }
        if (this.maxLength !== undefined) {
            if (value.length > this.maxLength) {
                throw new ValidationError(`Value length must be less than ${this.maxLength}.`);
            }
        }
    }
}
class EnumerationValidation {
    constructor(enumeration){
        this.enumeration = enumeration;
    }
    validate(value) {
        throwIfTypeIsWrong(value, exports.JsonPropTypes.String);
        if (!this.enumeration.includes(value)) {
            throw new ValidationError(`Value must be one of ${this.enumeration.map((v)=>`'${v}'`).join(", ")}`);
        }
    }
}
class JsonTransform {
    static checkValues(data, schemaItem) {
        const values = Array.isArray(data) ? data : [
            data
        ];
        for (const value of values){
            for (const validation of schemaItem.validations){
                if (validation instanceof LengthValidation && schemaItem.repeated) {
                    validation.validate(data);
                } else {
                    validation.validate(value);
                }
            }
        }
    }
    static checkTypes(value, schemaItem) {
        if (schemaItem.repeated && !Array.isArray(value)) {
            throw new TypeError("Value must be Array");
        }
        if (typeof schemaItem.type === "number") {
            const values = Array.isArray(value) ? value : [
                value
            ];
            for (const v of values){
                throwIfTypeIsWrong(v, schemaItem.type);
            }
        }
    }
    static getSchemaByName(schema, name = DEFAULT_SCHEMA) {
        return {
            ...schema.names[DEFAULT_SCHEMA],
            ...schema.names[name]
        };
    }
}
class JsonSerializer extends JsonTransform {
    static serialize(obj, options, replacer, space) {
        const json = this.toJSON(obj, options);
        return JSON.stringify(json, replacer, space);
    }
    static toJSON(obj, options = {}) {
        let res;
        let targetSchema = options.targetSchema;
        const schemaName = options.schemaName || DEFAULT_SCHEMA;
        if (isConvertible(obj)) {
            return obj.toJSON();
        }
        if (Array.isArray(obj)) {
            res = [];
            for (const item of obj){
                res.push(this.toJSON(item, options));
            }
        } else if (typeof obj === "object") {
            if (targetSchema && !schemaStorage.has(targetSchema)) {
                throw new JsonError("Cannot get schema for `targetSchema` param");
            }
            targetSchema = targetSchema || obj.constructor;
            if (schemaStorage.has(targetSchema)) {
                const schema = schemaStorage.get(targetSchema);
                res = {};
                const namedSchema = this.getSchemaByName(schema, schemaName);
                for(const key in namedSchema){
                    try {
                        const item = namedSchema[key];
                        const objItem = obj[key];
                        let value;
                        if (item.optional && objItem === undefined || item.defaultValue !== undefined && objItem === item.defaultValue) {
                            continue;
                        }
                        if (!item.optional && objItem === undefined) {
                            throw new SerializerError(targetSchema.name, `Property '${key}' is required.`);
                        }
                        if (typeof item.type === "number") {
                            if (item.converter) {
                                if (item.repeated) {
                                    value = objItem.map((el)=>item.converter.toJSON(el, obj));
                                } else {
                                    value = item.converter.toJSON(objItem, obj);
                                }
                            } else {
                                value = objItem;
                            }
                        } else {
                            if (item.repeated) {
                                value = objItem.map((el)=>this.toJSON(el, {
                                        schemaName
                                    }));
                            } else {
                                value = this.toJSON(objItem, {
                                    schemaName
                                });
                            }
                        }
                        this.checkTypes(value, item);
                        this.checkValues(value, item);
                        res[item.name || key] = value;
                    } catch (e) {
                        if (e instanceof SerializerError) {
                            throw e;
                        } else {
                            throw new SerializerError(schema.target.name, `Property '${key}' is wrong. ${e.message}`, e);
                        }
                    }
                }
            } else {
                res = {};
                for(const key in obj){
                    res[key] = this.toJSON(obj[key], {
                        schemaName
                    });
                }
            }
        } else {
            res = obj;
        }
        return res;
    }
}
class JsonParser extends JsonTransform {
    static parse(data, options) {
        const obj = JSON.parse(data);
        return this.fromJSON(obj, options);
    }
    static fromJSON(target, options) {
        const targetSchema = options.targetSchema;
        const schemaName = options.schemaName || DEFAULT_SCHEMA;
        const obj = new targetSchema();
        if (isConvertible(obj)) {
            return obj.fromJSON(target);
        }
        const schema = schemaStorage.get(targetSchema);
        const namedSchema = this.getSchemaByName(schema, schemaName);
        const keyErrors = {};
        if (options.strictProperty && !Array.isArray(target)) {
            JsonParser.checkStrictProperty(target, namedSchema, schema);
        }
        for(const key in namedSchema){
            try {
                const item = namedSchema[key];
                const name = item.name || key;
                const value = target[name];
                if (value === undefined && (item.optional || item.defaultValue !== undefined)) {
                    continue;
                }
                if (!item.optional && value === undefined) {
                    throw new ParserError(schema, `Property '${name}' is required.`);
                }
                this.checkTypes(value, item);
                this.checkValues(value, item);
                if (typeof item.type === "number") {
                    if (item.converter) {
                        if (item.repeated) {
                            obj[key] = value.map((el)=>item.converter.fromJSON(el, obj));
                        } else {
                            obj[key] = item.converter.fromJSON(value, obj);
                        }
                    } else {
                        obj[key] = value;
                    }
                } else {
                    const newOptions = {
                        ...options,
                        targetSchema: item.type,
                        schemaName
                    };
                    if (item.repeated) {
                        obj[key] = value.map((el)=>this.fromJSON(el, newOptions));
                    } else {
                        obj[key] = this.fromJSON(value, newOptions);
                    }
                }
            } catch (e) {
                if (!(e instanceof ParserError)) {
                    e = new ParserError(schema, `Property '${key}' is wrong. ${e.message}`, e);
                }
                if (options.strictAllKeys) {
                    keyErrors[key] = e;
                } else {
                    throw e;
                }
            }
        }
        const keys = Object.keys(keyErrors);
        if (keys.length) {
            throw new KeyError(schema, keys, keyErrors);
        }
        return obj;
    }
    static checkStrictProperty(target, namedSchema, schema) {
        const jsonProps = Object.keys(target);
        const schemaProps = Object.keys(namedSchema);
        const keys = [];
        for (const key of jsonProps){
            if (schemaProps.indexOf(key) === -1) {
                keys.push(key);
            }
        }
        if (keys.length) {
            throw new KeyError(schema, keys);
        }
    }
}
function getValidations(item) {
    const validations = [];
    if (item.pattern) {
        validations.push(new PatternValidation(item.pattern));
    }
    if (item.type === exports.JsonPropTypes.Number || item.type === exports.JsonPropTypes.Any) {
        if (item.minInclusive !== undefined || item.maxInclusive !== undefined) {
            validations.push(new InclusiveValidation(item.minInclusive, item.maxInclusive));
        }
        if (item.minExclusive !== undefined || item.maxExclusive !== undefined) {
            validations.push(new ExclusiveValidation(item.minExclusive, item.maxExclusive));
        }
        if (item.enumeration !== undefined) {
            validations.push(new EnumerationValidation(item.enumeration));
        }
    }
    if (item.type === exports.JsonPropTypes.String || item.repeated || item.type === exports.JsonPropTypes.Any) {
        if (item.length !== undefined || item.minLength !== undefined || item.maxLength !== undefined) {
            validations.push(new LengthValidation(item.length, item.minLength, item.maxLength));
        }
    }
    return validations;
}
const JsonProp = (options = {})=>(target, propertyKey)=>{
        const errorMessage = `Cannot set type for ${propertyKey} property of ${target.constructor.name} schema`;
        let schema;
        if (!schemaStorage.has(target.constructor)) {
            schema = schemaStorage.create(target.constructor);
            schemaStorage.set(target.constructor, schema);
        } else {
            schema = schemaStorage.get(target.constructor);
            if (schema.target !== target.constructor) {
                schema = schemaStorage.create(target.constructor);
                schemaStorage.set(target.constructor, schema);
            }
        }
        const defaultSchema = {
            type: exports.JsonPropTypes.Any,
            validations: []
        };
        const copyOptions = Object.assign(defaultSchema, options);
        copyOptions.validations = getValidations(copyOptions);
        if (typeof copyOptions.type !== "number") {
            if (!schemaStorage.has(copyOptions.type) && !isConvertible(copyOptions.type)) {
                throw new Error(`${errorMessage}. Assigning type doesn't have schema.`);
            }
        }
        let schemaNames;
        if (Array.isArray(options.schema)) {
            schemaNames = options.schema;
        } else {
            schemaNames = [
                options.schema || DEFAULT_SCHEMA
            ];
        }
        for (const schemaName of schemaNames){
            if (!schema.names[schemaName]) {
                schema.names[schemaName] = {};
            }
            const namedSchema = schema.names[schemaName];
            namedSchema[propertyKey] = copyOptions;
        }
    };
exports.JsonError = JsonError;
exports.JsonParser = JsonParser;
exports.JsonProp = JsonProp;
exports.JsonSerializer = JsonSerializer;
exports.KeyError = KeyError;
exports.ParserError = ParserError;
exports.SerializerError = SerializerError;
exports.TransformError = TransformError;
exports.ValidationError = ValidationError;


/***/ }),

/***/ 78581:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/*!
 Copyright (c) Peculiar Ventures, LLC
*/ 
var core = __webpack_require__(53443);
var crypto = __webpack_require__(6113);
var process = __webpack_require__(77282);
var tslib = __webpack_require__(87422);
var jsonSchema = __webpack_require__(13706);
var pvtsutils = __webpack_require__(17367);
var asn1Schema = __webpack_require__(73133);
function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function(k) {
            if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function() {
                        return e[k];
                    }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}
var core__namespace = /*#__PURE__*/ _interopNamespaceDefault(core);
var crypto__namespace = /*#__PURE__*/ _interopNamespaceDefault(crypto);
var process__namespace = /*#__PURE__*/ _interopNamespaceDefault(process);
const JsonBase64UrlConverter = {
    fromJSON: (value)=>Buffer.from(pvtsutils.Convert.FromBase64Url(value)),
    toJSON: (value)=>pvtsutils.Convert.ToBase64Url(value)
};
class CryptoKey extends core__namespace.CryptoKey {
    constructor(){
        super(...arguments);
        this.data = Buffer.alloc(0);
        this.algorithm = {
            name: ""
        };
        this.extractable = false;
        this.type = "secret";
        this.usages = [];
        this.kty = "oct";
        this.alg = "";
    }
}
tslib.__decorate([
    jsonSchema.JsonProp({
        name: "ext",
        type: jsonSchema.JsonPropTypes.Boolean,
        optional: true
    })
], CryptoKey.prototype, "extractable", void 0);
tslib.__decorate([
    jsonSchema.JsonProp({
        name: "key_ops",
        type: jsonSchema.JsonPropTypes.String,
        repeated: true,
        optional: true
    })
], CryptoKey.prototype, "usages", void 0);
tslib.__decorate([
    jsonSchema.JsonProp({
        type: jsonSchema.JsonPropTypes.String
    })
], CryptoKey.prototype, "kty", void 0);
tslib.__decorate([
    jsonSchema.JsonProp({
        type: jsonSchema.JsonPropTypes.String,
        optional: true
    })
], CryptoKey.prototype, "alg", void 0);
class SymmetricKey extends CryptoKey {
    constructor(){
        super(...arguments);
        this.kty = "oct";
        this.type = "secret";
    }
}
class AsymmetricKey extends CryptoKey {
}
class AesCryptoKey extends SymmetricKey {
    get alg() {
        switch(this.algorithm.name.toUpperCase()){
            case "AES-CBC":
                return `A${this.algorithm.length}CBC`;
            case "AES-CTR":
                return `A${this.algorithm.length}CTR`;
            case "AES-GCM":
                return `A${this.algorithm.length}GCM`;
            case "AES-KW":
                return `A${this.algorithm.length}KW`;
            case "AES-CMAC":
                return `A${this.algorithm.length}CMAC`;
            case "AES-ECB":
                return `A${this.algorithm.length}ECB`;
            default:
                throw new core__namespace.AlgorithmError("Unsupported algorithm name");
        }
    }
    set alg(value) {}
}
tslib.__decorate([
    jsonSchema.JsonProp({
        name: "k",
        converter: JsonBase64UrlConverter
    })
], AesCryptoKey.prototype, "data", void 0);
const keyStorage = new WeakMap();
function getCryptoKey(key) {
    const res = keyStorage.get(key);
    if (!res) {
        throw new core__namespace.OperationError("Cannot get CryptoKey from secure storage");
    }
    return res;
}
function setCryptoKey(value) {
    const key = core__namespace.CryptoKey.create(value.algorithm, value.type, value.extractable, value.usages);
    Object.freeze(key);
    keyStorage.set(key, value);
    return key;
}
class AesCrypto {
    static async generateKey(algorithm, extractable, keyUsages) {
        const key = new AesCryptoKey();
        key.algorithm = algorithm;
        key.extractable = extractable;
        key.usages = keyUsages;
        key.data = crypto.randomBytes(algorithm.length >> 3);
        return key;
    }
    static async exportKey(format, key) {
        if (!(key instanceof AesCryptoKey)) {
            throw new Error("key: Is not AesCryptoKey");
        }
        switch(format.toLowerCase()){
            case "jwk":
                return jsonSchema.JsonSerializer.toJSON(key);
            case "raw":
                return new Uint8Array(key.data).buffer;
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk' or 'raw'");
        }
    }
    static async importKey(format, keyData, algorithm, extractable, keyUsages) {
        let key;
        switch(format.toLowerCase()){
            case "jwk":
                key = jsonSchema.JsonParser.fromJSON(keyData, {
                    targetSchema: AesCryptoKey
                });
                break;
            case "raw":
                key = new AesCryptoKey();
                key.data = Buffer.from(keyData);
                break;
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk' or 'raw'");
        }
        key.algorithm = algorithm;
        key.algorithm.length = key.data.length << 3;
        key.extractable = extractable;
        key.usages = keyUsages;
        switch(key.algorithm.length){
            case 128:
            case 192:
            case 256:
                break;
            default:
                throw new core__namespace.OperationError("keyData: Is wrong key length");
        }
        return key;
    }
    static async encrypt(algorithm, key, data) {
        switch(algorithm.name.toUpperCase()){
            case "AES-CBC":
                return this.encryptAesCBC(algorithm, key, Buffer.from(data));
            case "AES-CTR":
                return this.encryptAesCTR(algorithm, key, Buffer.from(data));
            case "AES-GCM":
                return this.encryptAesGCM(algorithm, key, Buffer.from(data));
            case "AES-KW":
                return this.encryptAesKW(algorithm, key, Buffer.from(data));
            case "AES-ECB":
                return this.encryptAesECB(algorithm, key, Buffer.from(data));
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static async decrypt(algorithm, key, data) {
        if (!(key instanceof AesCryptoKey)) {
            throw new Error("key: Is not AesCryptoKey");
        }
        switch(algorithm.name.toUpperCase()){
            case "AES-CBC":
                return this.decryptAesCBC(algorithm, key, Buffer.from(data));
            case "AES-CTR":
                return this.decryptAesCTR(algorithm, key, Buffer.from(data));
            case "AES-GCM":
                return this.decryptAesGCM(algorithm, key, Buffer.from(data));
            case "AES-KW":
                return this.decryptAesKW(algorithm, key, Buffer.from(data));
            case "AES-ECB":
                return this.decryptAesECB(algorithm, key, Buffer.from(data));
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static async encryptAesCBC(algorithm, key, data) {
        const cipher = crypto.createCipheriv(`aes-${key.algorithm.length}-cbc`, key.data, new Uint8Array(algorithm.iv));
        let enc = cipher.update(data);
        enc = Buffer.concat([
            enc,
            cipher.final()
        ]);
        const res = new Uint8Array(enc).buffer;
        return res;
    }
    static async decryptAesCBC(algorithm, key, data) {
        const decipher = crypto.createDecipheriv(`aes-${key.algorithm.length}-cbc`, key.data, new Uint8Array(algorithm.iv));
        let dec = decipher.update(data);
        dec = Buffer.concat([
            dec,
            decipher.final()
        ]);
        return new Uint8Array(dec).buffer;
    }
    static async encryptAesCTR(algorithm, key, data) {
        const cipher = crypto.createCipheriv(`aes-${key.algorithm.length}-ctr`, key.data, Buffer.from(algorithm.counter));
        let enc = cipher.update(data);
        enc = Buffer.concat([
            enc,
            cipher.final()
        ]);
        const res = new Uint8Array(enc).buffer;
        return res;
    }
    static async decryptAesCTR(algorithm, key, data) {
        const decipher = crypto.createDecipheriv(`aes-${key.algorithm.length}-ctr`, key.data, new Uint8Array(algorithm.counter));
        let dec = decipher.update(data);
        dec = Buffer.concat([
            dec,
            decipher.final()
        ]);
        return new Uint8Array(dec).buffer;
    }
    static async encryptAesGCM(algorithm, key, data) {
        const cipher = crypto.createCipheriv(`aes-${key.algorithm.length}-gcm`, key.data, Buffer.from(algorithm.iv), {
            authTagLength: (algorithm.tagLength || 128) >> 3
        });
        if (algorithm.additionalData) {
            cipher.setAAD(Buffer.from(algorithm.additionalData));
        }
        let enc = cipher.update(data);
        enc = Buffer.concat([
            enc,
            cipher.final(),
            cipher.getAuthTag()
        ]);
        const res = new Uint8Array(enc).buffer;
        return res;
    }
    static async decryptAesGCM(algorithm, key, data) {
        const decipher = crypto.createDecipheriv(`aes-${key.algorithm.length}-gcm`, key.data, new Uint8Array(algorithm.iv));
        const tagLength = (algorithm.tagLength || 128) >> 3;
        const enc = data.slice(0, data.length - tagLength);
        const tag = data.slice(data.length - tagLength);
        if (algorithm.additionalData) {
            decipher.setAAD(Buffer.from(algorithm.additionalData));
        }
        decipher.setAuthTag(tag);
        let dec = decipher.update(enc);
        dec = Buffer.concat([
            dec,
            decipher.final()
        ]);
        return new Uint8Array(dec).buffer;
    }
    static async encryptAesKW(algorithm, key, data) {
        const cipher = crypto.createCipheriv(`id-aes${key.algorithm.length}-wrap`, key.data, this.AES_KW_IV);
        let enc = cipher.update(data);
        enc = Buffer.concat([
            enc,
            cipher.final()
        ]);
        return new Uint8Array(enc).buffer;
    }
    static async decryptAesKW(algorithm, key, data) {
        const decipher = crypto.createDecipheriv(`id-aes${key.algorithm.length}-wrap`, key.data, this.AES_KW_IV);
        let dec = decipher.update(data);
        dec = Buffer.concat([
            dec,
            decipher.final()
        ]);
        return new Uint8Array(dec).buffer;
    }
    static async encryptAesECB(algorithm, key, data) {
        const cipher = crypto.createCipheriv(`aes-${key.algorithm.length}-ecb`, key.data, new Uint8Array(0));
        let enc = cipher.update(data);
        enc = Buffer.concat([
            enc,
            cipher.final()
        ]);
        const res = new Uint8Array(enc).buffer;
        return res;
    }
    static async decryptAesECB(algorithm, key, data) {
        const decipher = crypto.createDecipheriv(`aes-${key.algorithm.length}-ecb`, key.data, new Uint8Array(0));
        let dec = decipher.update(data);
        dec = Buffer.concat([
            dec,
            decipher.final()
        ]);
        return new Uint8Array(dec).buffer;
    }
}
AesCrypto.AES_KW_IV = Buffer.from("A6A6A6A6A6A6A6A6", "hex");
class AesCbcProvider extends core__namespace.AesCbcProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const key = await AesCrypto.generateKey({
            name: this.name,
            length: algorithm.length
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    async onEncrypt(algorithm, key, data) {
        return AesCrypto.encrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onDecrypt(algorithm, key, data) {
        return AesCrypto.decrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return AesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await AesCrypto.importKey(format, keyData, {
            name: algorithm.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof AesCryptoKey)) {
            throw new TypeError("key: Is not a AesCryptoKey");
        }
    }
}
const zero = Buffer.from([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
const rb = Buffer.from([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    135
]);
const blockSize = 16;
function bitShiftLeft(buffer) {
    const shifted = Buffer.alloc(buffer.length);
    const last = buffer.length - 1;
    for(let index = 0; index < last; index++){
        shifted[index] = buffer[index] << 1;
        if (buffer[index + 1] & 0x80) {
            shifted[index] += 0x01;
        }
    }
    shifted[last] = buffer[last] << 1;
    return shifted;
}
function xor(a, b) {
    const length = Math.min(a.length, b.length);
    const output = Buffer.alloc(length);
    for(let index = 0; index < length; index++){
        output[index] = a[index] ^ b[index];
    }
    return output;
}
function aes(key, message) {
    const cipher = crypto__namespace.createCipheriv(`aes${key.length << 3}`, key, zero);
    const result = cipher.update(message);
    cipher.final();
    return result;
}
function getMessageBlock(message, blockIndex) {
    const block = Buffer.alloc(blockSize);
    const start = blockIndex * blockSize;
    const end = start + blockSize;
    message.copy(block, 0, start, end);
    return block;
}
function getPaddedMessageBlock(message, blockIndex) {
    const block = Buffer.alloc(blockSize);
    const start = blockIndex * blockSize;
    const end = message.length;
    block.fill(0);
    message.copy(block, 0, start, end);
    block[end - start] = 0x80;
    return block;
}
function generateSubkeys(key) {
    const l = aes(key, zero);
    let subkey1 = bitShiftLeft(l);
    if (l[0] & 0x80) {
        subkey1 = xor(subkey1, rb);
    }
    let subkey2 = bitShiftLeft(subkey1);
    if (subkey1[0] & 0x80) {
        subkey2 = xor(subkey2, rb);
    }
    return {
        subkey1,
        subkey2
    };
}
function aesCmac(key, message) {
    const subkeys = generateSubkeys(key);
    let blockCount = Math.ceil(message.length / blockSize);
    let lastBlockCompleteFlag;
    let lastBlock;
    if (blockCount === 0) {
        blockCount = 1;
        lastBlockCompleteFlag = false;
    } else {
        lastBlockCompleteFlag = message.length % blockSize === 0;
    }
    const lastBlockIndex = blockCount - 1;
    if (lastBlockCompleteFlag) {
        lastBlock = xor(getMessageBlock(message, lastBlockIndex), subkeys.subkey1);
    } else {
        lastBlock = xor(getPaddedMessageBlock(message, lastBlockIndex), subkeys.subkey2);
    }
    let x = zero;
    let y;
    for(let index = 0; index < lastBlockIndex; index++){
        y = xor(x, getMessageBlock(message, index));
        x = aes(key, y);
    }
    y = xor(lastBlock, x);
    return aes(key, y);
}
class AesCmacProvider extends core__namespace.AesCmacProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const key = await AesCrypto.generateKey({
            name: this.name,
            length: algorithm.length
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    async onSign(algorithm, key, data) {
        const result = aesCmac(getCryptoKey(key).data, Buffer.from(data));
        return new Uint8Array(result).buffer;
    }
    async onVerify(algorithm, key, signature, data) {
        const signature2 = await this.sign(algorithm, key, data);
        return Buffer.from(signature).compare(Buffer.from(signature2)) === 0;
    }
    async onExportKey(format, key) {
        return AesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const res = await AesCrypto.importKey(format, keyData, {
            name: algorithm.name
        }, extractable, keyUsages);
        return setCryptoKey(res);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof AesCryptoKey)) {
            throw new TypeError("key: Is not a AesCryptoKey");
        }
    }
}
class AesCtrProvider extends core__namespace.AesCtrProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const key = await AesCrypto.generateKey({
            name: this.name,
            length: algorithm.length
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    async onEncrypt(algorithm, key, data) {
        return AesCrypto.encrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onDecrypt(algorithm, key, data) {
        return AesCrypto.decrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return AesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const res = await AesCrypto.importKey(format, keyData, {
            name: algorithm.name
        }, extractable, keyUsages);
        return setCryptoKey(res);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof AesCryptoKey)) {
            throw new TypeError("key: Is not a AesCryptoKey");
        }
    }
}
class AesGcmProvider extends core__namespace.AesGcmProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const key = await AesCrypto.generateKey({
            name: this.name,
            length: algorithm.length
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    async onEncrypt(algorithm, key, data) {
        return AesCrypto.encrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onDecrypt(algorithm, key, data) {
        return AesCrypto.decrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return AesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const res = await AesCrypto.importKey(format, keyData, {
            name: algorithm.name
        }, extractable, keyUsages);
        return setCryptoKey(res);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof AesCryptoKey)) {
            throw new TypeError("key: Is not a AesCryptoKey");
        }
    }
}
class AesKwProvider extends core__namespace.AesKwProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const res = await AesCrypto.generateKey({
            name: this.name,
            length: algorithm.length
        }, extractable, keyUsages);
        return setCryptoKey(res);
    }
    async onExportKey(format, key) {
        return AesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const res = await AesCrypto.importKey(format, keyData, {
            name: algorithm.name
        }, extractable, keyUsages);
        return setCryptoKey(res);
    }
    async onEncrypt(algorithm, key, data) {
        return AesCrypto.encrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onDecrypt(algorithm, key, data) {
        return AesCrypto.decrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof AesCryptoKey)) {
            throw new TypeError("key: Is not a AesCryptoKey");
        }
    }
}
class AesEcbProvider extends core__namespace.AesEcbProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const key = await AesCrypto.generateKey({
            name: this.name,
            length: algorithm.length
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    async onEncrypt(algorithm, key, data) {
        return AesCrypto.encrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onDecrypt(algorithm, key, data) {
        return AesCrypto.decrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return AesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const res = await AesCrypto.importKey(format, keyData, {
            name: algorithm.name
        }, extractable, keyUsages);
        return setCryptoKey(res);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof AesCryptoKey)) {
            throw new TypeError("key: Is not a AesCryptoKey");
        }
    }
}
class DesCryptoKey extends SymmetricKey {
    get alg() {
        switch(this.algorithm.name.toUpperCase()){
            case "DES-CBC":
                return `DES-CBC`;
            case "DES-EDE3-CBC":
                return `3DES-CBC`;
            default:
                throw new core__namespace.AlgorithmError("Unsupported algorithm name");
        }
    }
    set alg(value) {}
}
tslib.__decorate([
    jsonSchema.JsonProp({
        name: "k",
        converter: JsonBase64UrlConverter
    })
], DesCryptoKey.prototype, "data", void 0);
class DesCrypto {
    static async generateKey(algorithm, extractable, keyUsages) {
        const key = new DesCryptoKey();
        key.algorithm = algorithm;
        key.extractable = extractable;
        key.usages = keyUsages;
        key.data = crypto.randomBytes(algorithm.length >> 3);
        return key;
    }
    static async exportKey(format, key) {
        switch(format.toLowerCase()){
            case "jwk":
                return jsonSchema.JsonSerializer.toJSON(key);
            case "raw":
                return new Uint8Array(key.data).buffer;
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk' or 'raw'");
        }
    }
    static async importKey(format, keyData, algorithm, extractable, keyUsages) {
        let key;
        switch(format.toLowerCase()){
            case "jwk":
                key = jsonSchema.JsonParser.fromJSON(keyData, {
                    targetSchema: DesCryptoKey
                });
                break;
            case "raw":
                key = new DesCryptoKey();
                key.data = Buffer.from(keyData);
                break;
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk' or 'raw'");
        }
        key.algorithm = algorithm;
        key.extractable = extractable;
        key.usages = keyUsages;
        return key;
    }
    static async encrypt(algorithm, key, data) {
        switch(algorithm.name.toUpperCase()){
            case "DES-CBC":
                return this.encryptDesCBC(algorithm, key, Buffer.from(data));
            case "DES-EDE3-CBC":
                return this.encryptDesEDE3CBC(algorithm, key, Buffer.from(data));
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static async decrypt(algorithm, key, data) {
        if (!(key instanceof DesCryptoKey)) {
            throw new Error("key: Is not DesCryptoKey");
        }
        switch(algorithm.name.toUpperCase()){
            case "DES-CBC":
                return this.decryptDesCBC(algorithm, key, Buffer.from(data));
            case "DES-EDE3-CBC":
                return this.decryptDesEDE3CBC(algorithm, key, Buffer.from(data));
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static async encryptDesCBC(algorithm, key, data) {
        const cipher = crypto.createCipheriv(`des-cbc`, key.data, new Uint8Array(algorithm.iv));
        let enc = cipher.update(data);
        enc = Buffer.concat([
            enc,
            cipher.final()
        ]);
        const res = new Uint8Array(enc).buffer;
        return res;
    }
    static async decryptDesCBC(algorithm, key, data) {
        const decipher = crypto.createDecipheriv(`des-cbc`, key.data, new Uint8Array(algorithm.iv));
        let dec = decipher.update(data);
        dec = Buffer.concat([
            dec,
            decipher.final()
        ]);
        return new Uint8Array(dec).buffer;
    }
    static async encryptDesEDE3CBC(algorithm, key, data) {
        const cipher = crypto.createCipheriv(`des-ede3-cbc`, key.data, Buffer.from(algorithm.iv));
        let enc = cipher.update(data);
        enc = Buffer.concat([
            enc,
            cipher.final()
        ]);
        const res = new Uint8Array(enc).buffer;
        return res;
    }
    static async decryptDesEDE3CBC(algorithm, key, data) {
        const decipher = crypto.createDecipheriv(`des-ede3-cbc`, key.data, new Uint8Array(algorithm.iv));
        let dec = decipher.update(data);
        dec = Buffer.concat([
            dec,
            decipher.final()
        ]);
        return new Uint8Array(dec).buffer;
    }
}
class DesCbcProvider extends core__namespace.DesProvider {
    constructor(){
        super(...arguments);
        this.keySizeBits = 64;
        this.ivSize = 8;
        this.name = "DES-CBC";
    }
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const key = await DesCrypto.generateKey({
            name: this.name,
            length: this.keySizeBits
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    async onEncrypt(algorithm, key, data) {
        return DesCrypto.encrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onDecrypt(algorithm, key, data) {
        return DesCrypto.decrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return DesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await DesCrypto.importKey(format, keyData, {
            name: this.name,
            length: this.keySizeBits
        }, extractable, keyUsages);
        if (key.data.length !== this.keySizeBits >> 3) {
            throw new core__namespace.OperationError("keyData: Wrong key size");
        }
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof DesCryptoKey)) {
            throw new TypeError("key: Is not a DesCryptoKey");
        }
    }
}
class DesEde3CbcProvider extends core__namespace.DesProvider {
    constructor(){
        super(...arguments);
        this.keySizeBits = 192;
        this.ivSize = 8;
        this.name = "DES-EDE3-CBC";
    }
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const key = await DesCrypto.generateKey({
            name: this.name,
            length: this.keySizeBits
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    async onEncrypt(algorithm, key, data) {
        return DesCrypto.encrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onDecrypt(algorithm, key, data) {
        return DesCrypto.decrypt(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return DesCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await DesCrypto.importKey(format, keyData, {
            name: this.name,
            length: this.keySizeBits
        }, extractable, keyUsages);
        if (key.data.length !== this.keySizeBits >> 3) {
            throw new core__namespace.OperationError("keyData: Wrong key size");
        }
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof DesCryptoKey)) {
            throw new TypeError("key: Is not a DesCryptoKey");
        }
    }
}
function getJwkAlgorithm(algorithm) {
    switch(algorithm.name.toUpperCase()){
        case "RSA-OAEP":
            {
                const mdSize = /(\d+)$/.exec(algorithm.hash.name)[1];
                return `RSA-OAEP${mdSize !== "1" ? `-${mdSize}` : ""}`;
            }
        case "RSASSA-PKCS1-V1_5":
            return `RS${/(\d+)$/.exec(algorithm.hash.name)[1]}`;
        case "RSA-PSS":
            return `PS${/(\d+)$/.exec(algorithm.hash.name)[1]}`;
        case "RSA-PKCS1":
            return `RS1`;
        default:
            throw new core__namespace.OperationError("algorithm: Is not recognized");
    }
}
class RsaPrivateKey extends AsymmetricKey {
    constructor(){
        super(...arguments);
        this.type = "private";
    }
    getKey() {
        const keyInfo = asn1Schema.AsnParser.parse(this.data, core__namespace.asn1.PrivateKeyInfo);
        return asn1Schema.AsnParser.parse(keyInfo.privateKey, core__namespace.asn1.RsaPrivateKey);
    }
    toJSON() {
        const key = this.getKey();
        const json = {
            kty: "RSA",
            alg: getJwkAlgorithm(this.algorithm),
            key_ops: this.usages,
            ext: this.extractable
        };
        return Object.assign(json, jsonSchema.JsonSerializer.toJSON(key));
    }
    fromJSON(json) {
        const key = jsonSchema.JsonParser.fromJSON(json, {
            targetSchema: core__namespace.asn1.RsaPrivateKey
        });
        const keyInfo = new core__namespace.asn1.PrivateKeyInfo();
        keyInfo.privateKeyAlgorithm.algorithm = "1.2.840.113549.1.1.1";
        keyInfo.privateKeyAlgorithm.parameters = null;
        keyInfo.privateKey = asn1Schema.AsnSerializer.serialize(key);
        this.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
    }
}
class RsaPublicKey extends AsymmetricKey {
    constructor(){
        super(...arguments);
        this.type = "public";
    }
    getKey() {
        const keyInfo = asn1Schema.AsnParser.parse(this.data, core__namespace.asn1.PublicKeyInfo);
        return asn1Schema.AsnParser.parse(keyInfo.publicKey, core__namespace.asn1.RsaPublicKey);
    }
    toJSON() {
        const key = this.getKey();
        const json = {
            kty: "RSA",
            alg: getJwkAlgorithm(this.algorithm),
            key_ops: this.usages,
            ext: this.extractable
        };
        return Object.assign(json, jsonSchema.JsonSerializer.toJSON(key));
    }
    fromJSON(json) {
        const key = jsonSchema.JsonParser.fromJSON(json, {
            targetSchema: core__namespace.asn1.RsaPublicKey
        });
        const keyInfo = new core__namespace.asn1.PublicKeyInfo();
        keyInfo.publicKeyAlgorithm.algorithm = "1.2.840.113549.1.1.1";
        keyInfo.publicKeyAlgorithm.parameters = null;
        keyInfo.publicKey = asn1Schema.AsnSerializer.serialize(key);
        this.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
    }
}
class RsaCrypto {
    static async generateKey(algorithm, extractable, keyUsages) {
        const privateKey = new RsaPrivateKey();
        privateKey.algorithm = algorithm;
        privateKey.extractable = extractable;
        privateKey.usages = keyUsages.filter((usage)=>this.privateKeyUsages.indexOf(usage) !== -1);
        const publicKey = new RsaPublicKey();
        publicKey.algorithm = algorithm;
        publicKey.extractable = true;
        publicKey.usages = keyUsages.filter((usage)=>this.publicKeyUsages.indexOf(usage) !== -1);
        const publicExponent = Buffer.concat([
            Buffer.alloc(4 - algorithm.publicExponent.byteLength, 0),
            Buffer.from(algorithm.publicExponent)
        ]).readInt32BE(0);
        const keys = crypto.generateKeyPairSync("rsa", {
            modulusLength: algorithm.modulusLength,
            publicExponent,
            publicKeyEncoding: {
                format: "der",
                type: "spki"
            },
            privateKeyEncoding: {
                format: "der",
                type: "pkcs8"
            }
        });
        privateKey.data = keys.privateKey;
        publicKey.data = keys.publicKey;
        const res = {
            privateKey,
            publicKey
        };
        return res;
    }
    static async exportKey(format, key) {
        switch(format.toLowerCase()){
            case "jwk":
                return jsonSchema.JsonSerializer.toJSON(key);
            case "pkcs8":
            case "spki":
                return new Uint8Array(key.data).buffer;
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk', 'pkcs8' or 'spki'");
        }
    }
    static async importKey(format, keyData, algorithm, extractable, keyUsages) {
        switch(format.toLowerCase()){
            case "jwk":
                {
                    const jwk = keyData;
                    if (jwk.d) {
                        const asnKey = jsonSchema.JsonParser.fromJSON(keyData, {
                            targetSchema: core__namespace.asn1.RsaPrivateKey
                        });
                        return this.importPrivateKey(asnKey, algorithm, extractable, keyUsages);
                    } else {
                        const asnKey = jsonSchema.JsonParser.fromJSON(keyData, {
                            targetSchema: core__namespace.asn1.RsaPublicKey
                        });
                        return this.importPublicKey(asnKey, algorithm, extractable, keyUsages);
                    }
                }
            case "spki":
                {
                    const keyInfo = asn1Schema.AsnParser.parse(new Uint8Array(keyData), core__namespace.asn1.PublicKeyInfo);
                    const asnKey = asn1Schema.AsnParser.parse(keyInfo.publicKey, core__namespace.asn1.RsaPublicKey);
                    return this.importPublicKey(asnKey, algorithm, extractable, keyUsages);
                }
            case "pkcs8":
                {
                    const keyInfo = asn1Schema.AsnParser.parse(new Uint8Array(keyData), core__namespace.asn1.PrivateKeyInfo);
                    const asnKey = asn1Schema.AsnParser.parse(keyInfo.privateKey, core__namespace.asn1.RsaPrivateKey);
                    return this.importPrivateKey(asnKey, algorithm, extractable, keyUsages);
                }
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk', 'pkcs8' or 'spki'");
        }
    }
    static async sign(algorithm, key, data) {
        switch(algorithm.name.toUpperCase()){
            case "RSA-PSS":
            case "RSASSA-PKCS1-V1_5":
                return this.signRsa(algorithm, key, data);
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static async verify(algorithm, key, signature, data) {
        switch(algorithm.name.toUpperCase()){
            case "RSA-PSS":
            case "RSASSA-PKCS1-V1_5":
                return this.verifySSA(algorithm, key, data, signature);
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static async encrypt(algorithm, key, data) {
        switch(algorithm.name.toUpperCase()){
            case "RSA-OAEP":
                return this.encryptOAEP(algorithm, key, data);
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static async decrypt(algorithm, key, data) {
        switch(algorithm.name.toUpperCase()){
            case "RSA-OAEP":
                return this.decryptOAEP(algorithm, key, data);
            default:
                throw new core__namespace.OperationError("algorithm: Is not recognized");
        }
    }
    static importPrivateKey(asnKey, algorithm, extractable, keyUsages) {
        const keyInfo = new core__namespace.asn1.PrivateKeyInfo();
        keyInfo.privateKeyAlgorithm.algorithm = "1.2.840.113549.1.1.1";
        keyInfo.privateKeyAlgorithm.parameters = null;
        keyInfo.privateKey = asn1Schema.AsnSerializer.serialize(asnKey);
        const key = new RsaPrivateKey();
        key.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        key.algorithm = Object.assign({}, algorithm);
        key.algorithm.publicExponent = new Uint8Array(asnKey.publicExponent);
        key.algorithm.modulusLength = asnKey.modulus.byteLength << 3;
        key.extractable = extractable;
        key.usages = keyUsages;
        return key;
    }
    static importPublicKey(asnKey, algorithm, extractable, keyUsages) {
        const keyInfo = new core__namespace.asn1.PublicKeyInfo();
        keyInfo.publicKeyAlgorithm.algorithm = "1.2.840.113549.1.1.1";
        keyInfo.publicKeyAlgorithm.parameters = null;
        keyInfo.publicKey = asn1Schema.AsnSerializer.serialize(asnKey);
        const key = new RsaPublicKey();
        key.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        key.algorithm = Object.assign({}, algorithm);
        key.algorithm.publicExponent = new Uint8Array(asnKey.publicExponent);
        key.algorithm.modulusLength = asnKey.modulus.byteLength << 3;
        key.extractable = extractable;
        key.usages = keyUsages;
        return key;
    }
    static getCryptoAlgorithm(alg) {
        switch(alg.hash.name.toUpperCase()){
            case "SHA-1":
                return "RSA-SHA1";
            case "SHA-256":
                return "RSA-SHA256";
            case "SHA-384":
                return "RSA-SHA384";
            case "SHA-512":
                return "RSA-SHA512";
            case "SHA3-256":
                return "RSA-SHA3-256";
            case "SHA3-384":
                return "RSA-SHA3-384";
            case "SHA3-512":
                return "RSA-SHA3-512";
            default:
                throw new core__namespace.OperationError("algorithm.hash: Is not recognized");
        }
    }
    static signRsa(algorithm, key, data) {
        const cryptoAlg = this.getCryptoAlgorithm(key.algorithm);
        const signer = crypto.createSign(cryptoAlg);
        signer.update(Buffer.from(data));
        if (!key.pem) {
            key.pem = `-----BEGIN PRIVATE KEY-----\n${key.data.toString("base64")}\n-----END PRIVATE KEY-----`;
        }
        const options = {
            key: key.pem
        };
        if (algorithm.name.toUpperCase() === "RSA-PSS") {
            options.padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
            options.saltLength = algorithm.saltLength;
        }
        const signature = signer.sign(options);
        return new Uint8Array(signature).buffer;
    }
    static verifySSA(algorithm, key, data, signature) {
        const cryptoAlg = this.getCryptoAlgorithm(key.algorithm);
        const signer = crypto.createVerify(cryptoAlg);
        signer.update(Buffer.from(data));
        if (!key.pem) {
            key.pem = `-----BEGIN PUBLIC KEY-----\n${key.data.toString("base64")}\n-----END PUBLIC KEY-----`;
        }
        const options = {
            key: key.pem
        };
        if (algorithm.name.toUpperCase() === "RSA-PSS") {
            options.padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
            options.saltLength = algorithm.saltLength;
        }
        const ok = signer.verify(options, signature);
        return ok;
    }
    static encryptOAEP(algorithm, key, data) {
        const options = {
            key: `-----BEGIN PUBLIC KEY-----\n${key.data.toString("base64")}\n-----END PUBLIC KEY-----`,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
        };
        if (algorithm.label) ;
        return new Uint8Array(crypto.publicEncrypt(options, data)).buffer;
    }
    static decryptOAEP(algorithm, key, data) {
        const options = {
            key: `-----BEGIN PRIVATE KEY-----\n${key.data.toString("base64")}\n-----END PRIVATE KEY-----`,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
        };
        if (algorithm.label) ;
        return new Uint8Array(crypto.privateDecrypt(options, data)).buffer;
    }
}
RsaCrypto.publicKeyUsages = [
    "verify",
    "encrypt",
    "wrapKey"
];
RsaCrypto.privateKeyUsages = [
    "sign",
    "decrypt",
    "unwrapKey"
];
class RsaSsaProvider extends core__namespace.RsaSsaProvider {
    constructor(){
        super(...arguments);
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512",
            "shake128",
            "shake256",
            "SHA3-256",
            "SHA3-384",
            "SHA3-512"
        ];
    }
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await RsaCrypto.generateKey({
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    async onSign(algorithm, key, data) {
        return RsaCrypto.sign(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onVerify(algorithm, key, signature, data) {
        return RsaCrypto.verify(algorithm, getCryptoKey(key), new Uint8Array(signature), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return RsaCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await RsaCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        const internalKey = getCryptoKey(key);
        if (!(internalKey instanceof RsaPrivateKey || internalKey instanceof RsaPublicKey)) {
            throw new TypeError("key: Is not RSA CryptoKey");
        }
    }
}
class RsaPssProvider extends core__namespace.RsaPssProvider {
    constructor(){
        super(...arguments);
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512",
            "shake128",
            "shake256",
            "SHA3-256",
            "SHA3-384",
            "SHA3-512"
        ];
    }
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await RsaCrypto.generateKey({
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    async onSign(algorithm, key, data) {
        return RsaCrypto.sign(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onVerify(algorithm, key, signature, data) {
        return RsaCrypto.verify(algorithm, getCryptoKey(key), new Uint8Array(signature), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return RsaCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await RsaCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        const internalKey = getCryptoKey(key);
        if (!(internalKey instanceof RsaPrivateKey || internalKey instanceof RsaPublicKey)) {
            throw new TypeError("key: Is not RSA CryptoKey");
        }
    }
}
class ShaCrypto {
    static size(algorithm) {
        switch(algorithm.name.toUpperCase()){
            case "SHA-1":
                return 160;
            case "SHA-256":
            case "SHA3-256":
                return 256;
            case "SHA-384":
            case "SHA3-384":
                return 384;
            case "SHA-512":
            case "SHA3-512":
                return 512;
            default:
                throw new Error("Unrecognized name");
        }
    }
    static getAlgorithmName(algorithm) {
        switch(algorithm.name.toUpperCase()){
            case "SHA-1":
                return "sha1";
            case "SHA-256":
                return "sha256";
            case "SHA-384":
                return "sha384";
            case "SHA-512":
                return "sha512";
            case "SHA3-256":
                return "sha3-256";
            case "SHA3-384":
                return "sha3-384";
            case "SHA3-512":
                return "sha3-512";
            default:
                throw new Error("Unrecognized name");
        }
    }
    static digest(algorithm, data) {
        const hashAlg = this.getAlgorithmName(algorithm);
        const hash = crypto.createHash(hashAlg).update(Buffer.from(data)).digest();
        return new Uint8Array(hash).buffer;
    }
}
class RsaOaepProvider extends core__namespace.RsaOaepProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await RsaCrypto.generateKey({
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    async onEncrypt(algorithm, key, data) {
        const internalKey = getCryptoKey(key);
        const dataView = new Uint8Array(data);
        const keySize = Math.ceil(internalKey.algorithm.modulusLength >> 3);
        const hashSize = ShaCrypto.size(internalKey.algorithm.hash) >> 3;
        const dataLength = dataView.byteLength;
        const psLength = keySize - dataLength - 2 * hashSize - 2;
        if (dataLength > keySize - 2 * hashSize - 2) {
            throw new Error("Data too large");
        }
        const message = new Uint8Array(keySize);
        const seed = message.subarray(1, hashSize + 1);
        const dataBlock = message.subarray(hashSize + 1);
        dataBlock.set(dataView, hashSize + psLength + 1);
        const labelHash = crypto.createHash(internalKey.algorithm.hash.name.replace("-", "")).update(core__namespace.BufferSourceConverter.toUint8Array(algorithm.label || new Uint8Array(0))).digest();
        dataBlock.set(labelHash, 0);
        dataBlock[hashSize + psLength] = 1;
        crypto.randomFillSync(seed);
        const dataBlockMask = this.mgf1(internalKey.algorithm.hash, seed, dataBlock.length);
        for(let i = 0; i < dataBlock.length; i++){
            dataBlock[i] ^= dataBlockMask[i];
        }
        const seedMask = this.mgf1(internalKey.algorithm.hash, dataBlock, seed.length);
        for(let i = 0; i < seed.length; i++){
            seed[i] ^= seedMask[i];
        }
        if (!internalKey.pem) {
            internalKey.pem = `-----BEGIN PUBLIC KEY-----\n${internalKey.data.toString("base64")}\n-----END PUBLIC KEY-----`;
        }
        const pkcs0 = crypto.publicEncrypt({
            key: internalKey.pem,
            padding: crypto.constants.RSA_NO_PADDING
        }, Buffer.from(message));
        return new Uint8Array(pkcs0).buffer;
    }
    async onDecrypt(algorithm, key, data) {
        const internalKey = getCryptoKey(key);
        const keySize = Math.ceil(internalKey.algorithm.modulusLength >> 3);
        const hashSize = ShaCrypto.size(internalKey.algorithm.hash) >> 3;
        const dataLength = data.byteLength;
        if (dataLength !== keySize) {
            throw new Error("Bad data");
        }
        if (!internalKey.pem) {
            internalKey.pem = `-----BEGIN PRIVATE KEY-----\n${internalKey.data.toString("base64")}\n-----END PRIVATE KEY-----`;
        }
        let pkcs0 = crypto.privateDecrypt({
            key: internalKey.pem,
            padding: crypto.constants.RSA_NO_PADDING
        }, Buffer.from(data));
        const z = pkcs0[0];
        const seed = pkcs0.subarray(1, hashSize + 1);
        const dataBlock = pkcs0.subarray(hashSize + 1);
        if (z !== 0) {
            throw new Error("Decryption failed");
        }
        const seedMask = this.mgf1(internalKey.algorithm.hash, dataBlock, seed.length);
        for(let i = 0; i < seed.length; i++){
            seed[i] ^= seedMask[i];
        }
        const dataBlockMask = this.mgf1(internalKey.algorithm.hash, seed, dataBlock.length);
        for(let i = 0; i < dataBlock.length; i++){
            dataBlock[i] ^= dataBlockMask[i];
        }
        const labelHash = crypto.createHash(internalKey.algorithm.hash.name.replace("-", "")).update(core__namespace.BufferSourceConverter.toUint8Array(algorithm.label || new Uint8Array(0))).digest();
        for(let i = 0; i < hashSize; i++){
            if (labelHash[i] !== dataBlock[i]) {
                throw new Error("Decryption failed");
            }
        }
        let psEnd = hashSize;
        for(; psEnd < dataBlock.length; psEnd++){
            const psz = dataBlock[psEnd];
            if (psz === 1) {
                break;
            }
            if (psz !== 0) {
                throw new Error("Decryption failed");
            }
        }
        if (psEnd === dataBlock.length) {
            throw new Error("Decryption failed");
        }
        pkcs0 = dataBlock.subarray(psEnd + 1);
        return new Uint8Array(pkcs0).buffer;
    }
    async onExportKey(format, key) {
        return RsaCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await RsaCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        const internalKey = getCryptoKey(key);
        if (!(internalKey instanceof RsaPrivateKey || internalKey instanceof RsaPublicKey)) {
            throw new TypeError("key: Is not RSA CryptoKey");
        }
    }
    mgf1(algorithm, seed, length = 0) {
        const hashSize = ShaCrypto.size(algorithm) >> 3;
        const mask = new Uint8Array(length);
        const counter = new Uint8Array(4);
        const chunks = Math.ceil(length / hashSize);
        for(let i = 0; i < chunks; i++){
            counter[0] = i >>> 24;
            counter[1] = i >>> 16 & 255;
            counter[2] = i >>> 8 & 255;
            counter[3] = i & 255;
            const submask = mask.subarray(i * hashSize);
            let chunk = crypto.createHash(algorithm.name.replace("-", "")).update(seed).update(counter).digest();
            if (chunk.length > submask.length) {
                chunk = chunk.subarray(0, submask.length);
            }
            submask.set(chunk);
        }
        return mask;
    }
}
class RsaEsProvider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "RSAES-PKCS1-v1_5";
        this.usages = {
            publicKey: [
                "encrypt",
                "wrapKey"
            ],
            privateKey: [
                "decrypt",
                "unwrapKey"
            ]
        };
    }
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await RsaCrypto.generateKey({
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "publicExponent");
        if (!(algorithm.publicExponent && algorithm.publicExponent instanceof Uint8Array)) {
            throw new TypeError("publicExponent: Missing or not a Uint8Array");
        }
        const publicExponent = pvtsutils.Convert.ToBase64(algorithm.publicExponent);
        if (!(publicExponent === "Aw==" || publicExponent === "AQAB")) {
            throw new TypeError("publicExponent: Must be [3] or [1,0,1]");
        }
        this.checkRequiredProperty(algorithm, "modulusLength");
        switch(algorithm.modulusLength){
            case 1024:
            case 2048:
            case 4096:
                break;
            default:
                throw new TypeError("modulusLength: Must be 1024, 2048, or 4096");
        }
    }
    async onEncrypt(algorithm, key, data) {
        const options = this.toCryptoOptions(key);
        const enc = crypto__namespace.publicEncrypt(options, new Uint8Array(data));
        return new Uint8Array(enc).buffer;
    }
    async onDecrypt(algorithm, key, data) {
        const options = this.toCryptoOptions(key);
        const dec = crypto__namespace.privateDecrypt(options, new Uint8Array(data));
        return new Uint8Array(dec).buffer;
    }
    async onExportKey(format, key) {
        return RsaCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await RsaCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        const internalKey = getCryptoKey(key);
        if (!(internalKey instanceof RsaPrivateKey || internalKey instanceof RsaPublicKey)) {
            throw new TypeError("key: Is not RSA CryptoKey");
        }
    }
    toCryptoOptions(key) {
        const type = key.type.toUpperCase();
        return {
            key: `-----BEGIN ${type} KEY-----\n${getCryptoKey(key).data.toString("base64")}\n-----END ${type} KEY-----`,
            padding: crypto__namespace.constants.RSA_PKCS1_PADDING
        };
    }
}
const namedOIDs = {
    "1.2.840.10045.3.1.7": "P-256",
    "P-256": "1.2.840.10045.3.1.7",
    "1.3.132.0.34": "P-384",
    "P-384": "1.3.132.0.34",
    "1.3.132.0.35": "P-521",
    "P-521": "1.3.132.0.35",
    "1.3.132.0.10": "K-256",
    "K-256": "1.3.132.0.10",
    "brainpoolP160r1": "1.3.36.3.3.2.8.1.1.1",
    "1.3.36.3.3.2.8.1.1.1": "brainpoolP160r1",
    "brainpoolP160t1": "1.3.36.3.3.2.8.1.1.2",
    "1.3.36.3.3.2.8.1.1.2": "brainpoolP160t1",
    "brainpoolP192r1": "1.3.36.3.3.2.8.1.1.3",
    "1.3.36.3.3.2.8.1.1.3": "brainpoolP192r1",
    "brainpoolP192t1": "1.3.36.3.3.2.8.1.1.4",
    "1.3.36.3.3.2.8.1.1.4": "brainpoolP192t1",
    "brainpoolP224r1": "1.3.36.3.3.2.8.1.1.5",
    "1.3.36.3.3.2.8.1.1.5": "brainpoolP224r1",
    "brainpoolP224t1": "1.3.36.3.3.2.8.1.1.6",
    "1.3.36.3.3.2.8.1.1.6": "brainpoolP224t1",
    "brainpoolP256r1": "1.3.36.3.3.2.8.1.1.7",
    "1.3.36.3.3.2.8.1.1.7": "brainpoolP256r1",
    "brainpoolP256t1": "1.3.36.3.3.2.8.1.1.8",
    "1.3.36.3.3.2.8.1.1.8": "brainpoolP256t1",
    "brainpoolP320r1": "1.3.36.3.3.2.8.1.1.9",
    "1.3.36.3.3.2.8.1.1.9": "brainpoolP320r1",
    "brainpoolP320t1": "1.3.36.3.3.2.8.1.1.10",
    "1.3.36.3.3.2.8.1.1.10": "brainpoolP320t1",
    "brainpoolP384r1": "1.3.36.3.3.2.8.1.1.11",
    "1.3.36.3.3.2.8.1.1.11": "brainpoolP384r1",
    "brainpoolP384t1": "1.3.36.3.3.2.8.1.1.12",
    "1.3.36.3.3.2.8.1.1.12": "brainpoolP384t1",
    "brainpoolP512r1": "1.3.36.3.3.2.8.1.1.13",
    "1.3.36.3.3.2.8.1.1.13": "brainpoolP512r1",
    "brainpoolP512t1": "1.3.36.3.3.2.8.1.1.14",
    "1.3.36.3.3.2.8.1.1.14": "brainpoolP512t1"
};
function getOidByNamedCurve$1(namedCurve) {
    const oid = namedOIDs[namedCurve];
    if (!oid) {
        throw new core__namespace.OperationError(`Cannot convert WebCrypto named curve '${namedCurve}' to OID`);
    }
    return oid;
}
class EcPrivateKey extends AsymmetricKey {
    constructor(){
        super(...arguments);
        this.type = "private";
    }
    getKey() {
        const keyInfo = asn1Schema.AsnParser.parse(this.data, core__namespace.asn1.PrivateKeyInfo);
        return asn1Schema.AsnParser.parse(keyInfo.privateKey, core__namespace.asn1.EcPrivateKey);
    }
    toJSON() {
        const key = this.getKey();
        const json = {
            kty: "EC",
            crv: this.algorithm.namedCurve,
            key_ops: this.usages,
            ext: this.extractable
        };
        return Object.assign(json, jsonSchema.JsonSerializer.toJSON(key));
    }
    fromJSON(json) {
        if (!json.crv) {
            throw new core__namespace.OperationError(`Cannot get named curve from JWK. Property 'crv' is required`);
        }
        const keyInfo = new core__namespace.asn1.PrivateKeyInfo();
        keyInfo.privateKeyAlgorithm.algorithm = "1.2.840.10045.2.1";
        keyInfo.privateKeyAlgorithm.parameters = asn1Schema.AsnSerializer.serialize(new core__namespace.asn1.ObjectIdentifier(getOidByNamedCurve$1(json.crv)));
        const key = jsonSchema.JsonParser.fromJSON(json, {
            targetSchema: core__namespace.asn1.EcPrivateKey
        });
        keyInfo.privateKey = asn1Schema.AsnSerializer.serialize(key);
        this.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        return this;
    }
}
class EcPublicKey extends AsymmetricKey {
    constructor(){
        super(...arguments);
        this.type = "public";
    }
    getKey() {
        const keyInfo = asn1Schema.AsnParser.parse(this.data, core__namespace.asn1.PublicKeyInfo);
        return new core__namespace.asn1.EcPublicKey(keyInfo.publicKey);
    }
    toJSON() {
        const key = this.getKey();
        const json = {
            kty: "EC",
            crv: this.algorithm.namedCurve,
            key_ops: this.usages,
            ext: this.extractable
        };
        return Object.assign(json, jsonSchema.JsonSerializer.toJSON(key));
    }
    fromJSON(json) {
        if (!json.crv) {
            throw new core__namespace.OperationError(`Cannot get named curve from JWK. Property 'crv' is required`);
        }
        const key = jsonSchema.JsonParser.fromJSON(json, {
            targetSchema: core__namespace.asn1.EcPublicKey
        });
        const keyInfo = new core__namespace.asn1.PublicKeyInfo();
        keyInfo.publicKeyAlgorithm.algorithm = "1.2.840.10045.2.1";
        keyInfo.publicKeyAlgorithm.parameters = asn1Schema.AsnSerializer.serialize(new core__namespace.asn1.ObjectIdentifier(getOidByNamedCurve$1(json.crv)));
        keyInfo.publicKey = asn1Schema.AsnSerializer.toASN(key).valueHex;
        this.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        return this;
    }
}
class Sha1Provider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "SHA-1";
        this.usages = [];
    }
    async onDigest(algorithm, data) {
        return ShaCrypto.digest(algorithm, data);
    }
}
class Sha256Provider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "SHA-256";
        this.usages = [];
    }
    async onDigest(algorithm, data) {
        return ShaCrypto.digest(algorithm, data);
    }
}
class Sha384Provider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "SHA-384";
        this.usages = [];
    }
    async onDigest(algorithm, data) {
        return ShaCrypto.digest(algorithm, data);
    }
}
class Sha512Provider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "SHA-512";
        this.usages = [];
    }
    async onDigest(algorithm, data) {
        return ShaCrypto.digest(algorithm, data);
    }
}
class Sha3256Provider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "SHA3-256";
        this.usages = [];
    }
    async onDigest(algorithm, data) {
        return ShaCrypto.digest(algorithm, data);
    }
}
class Sha3384Provider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "SHA3-384";
        this.usages = [];
    }
    async onDigest(algorithm, data) {
        return ShaCrypto.digest(algorithm, data);
    }
}
class Sha3512Provider extends core__namespace.ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "SHA3-512";
        this.usages = [];
    }
    async onDigest(algorithm, data) {
        return ShaCrypto.digest(algorithm, data);
    }
}
class EcCrypto {
    static async generateKey(algorithm, extractable, keyUsages) {
        const privateKey = new EcPrivateKey();
        privateKey.algorithm = algorithm;
        privateKey.extractable = extractable;
        privateKey.usages = keyUsages.filter((usage)=>this.privateKeyUsages.indexOf(usage) !== -1);
        const publicKey = new EcPublicKey();
        publicKey.algorithm = algorithm;
        publicKey.extractable = true;
        publicKey.usages = keyUsages.filter((usage)=>this.publicKeyUsages.indexOf(usage) !== -1);
        const keys = crypto.generateKeyPairSync("ec", {
            namedCurve: this.getOpenSSLNamedCurve(algorithm.namedCurve),
            publicKeyEncoding: {
                format: "der",
                type: "spki"
            },
            privateKeyEncoding: {
                format: "der",
                type: "pkcs8"
            }
        });
        privateKey.data = keys.privateKey;
        publicKey.data = keys.publicKey;
        const res = {
            privateKey,
            publicKey
        };
        return res;
    }
    static async sign(algorithm, key, data) {
        const cryptoAlg = ShaCrypto.getAlgorithmName(algorithm.hash);
        const signer = crypto.createSign(cryptoAlg);
        signer.update(Buffer.from(data));
        if (!key.pem) {
            key.pem = `-----BEGIN PRIVATE KEY-----\n${key.data.toString("base64")}\n-----END PRIVATE KEY-----`;
        }
        const options = {
            key: key.pem
        };
        const signature = signer.sign(options);
        const ecSignature = asn1Schema.AsnParser.parse(signature, core__namespace.asn1.EcDsaSignature);
        const signatureRaw = core__namespace.EcUtils.encodeSignature(ecSignature, core__namespace.EcCurves.get(key.algorithm.namedCurve).size);
        return signatureRaw.buffer;
    }
    static async verify(algorithm, key, signature, data) {
        const cryptoAlg = ShaCrypto.getAlgorithmName(algorithm.hash);
        const signer = crypto.createVerify(cryptoAlg);
        signer.update(Buffer.from(data));
        if (!key.pem) {
            key.pem = `-----BEGIN PUBLIC KEY-----\n${key.data.toString("base64")}\n-----END PUBLIC KEY-----`;
        }
        const options = {
            key: key.pem
        };
        const ecSignature = new core__namespace.asn1.EcDsaSignature();
        const namedCurve = core__namespace.EcCurves.get(key.algorithm.namedCurve);
        const signaturePoint = core__namespace.EcUtils.decodeSignature(signature, namedCurve.size);
        ecSignature.r = pvtsutils.BufferSourceConverter.toArrayBuffer(signaturePoint.r);
        ecSignature.s = pvtsutils.BufferSourceConverter.toArrayBuffer(signaturePoint.s);
        const ecSignatureRaw = Buffer.from(asn1Schema.AsnSerializer.serialize(ecSignature));
        const ok = signer.verify(options, ecSignatureRaw);
        return ok;
    }
    static async deriveBits(algorithm, baseKey, length) {
        const cryptoAlg = this.getOpenSSLNamedCurve(baseKey.algorithm.namedCurve);
        const ecdh = crypto.createECDH(cryptoAlg);
        const asnPrivateKey = asn1Schema.AsnParser.parse(baseKey.data, core__namespace.asn1.PrivateKeyInfo);
        const asnEcPrivateKey = asn1Schema.AsnParser.parse(asnPrivateKey.privateKey, core__namespace.asn1.EcPrivateKey);
        ecdh.setPrivateKey(Buffer.from(asnEcPrivateKey.privateKey));
        const asnPublicKey = asn1Schema.AsnParser.parse(algorithm.public.data, core__namespace.asn1.PublicKeyInfo);
        const bits = ecdh.computeSecret(Buffer.from(asnPublicKey.publicKey));
        if (length === null) {
            return bits;
        }
        return new Uint8Array(bits).buffer.slice(0, length >> 3);
    }
    static async exportKey(format, key) {
        switch(format.toLowerCase()){
            case "jwk":
                return jsonSchema.JsonSerializer.toJSON(key);
            case "pkcs8":
            case "spki":
                return new Uint8Array(key.data).buffer;
            case "raw":
                {
                    const publicKeyInfo = asn1Schema.AsnParser.parse(key.data, core__namespace.asn1.PublicKeyInfo);
                    return publicKeyInfo.publicKey;
                }
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk', 'raw', pkcs8' or 'spki'");
        }
    }
    static async importKey(format, keyData, algorithm, extractable, keyUsages) {
        switch(format.toLowerCase()){
            case "jwk":
                {
                    const jwk = keyData;
                    if (jwk.d) {
                        const asnKey = jsonSchema.JsonParser.fromJSON(keyData, {
                            targetSchema: core__namespace.asn1.EcPrivateKey
                        });
                        return this.importPrivateKey(asnKey, algorithm, extractable, keyUsages);
                    } else {
                        const asnKey = jsonSchema.JsonParser.fromJSON(keyData, {
                            targetSchema: core__namespace.asn1.EcPublicKey
                        });
                        return this.importPublicKey(asnKey, algorithm, extractable, keyUsages);
                    }
                }
            case "raw":
                {
                    const asnKey = new core__namespace.asn1.EcPublicKey(keyData);
                    return this.importPublicKey(asnKey, algorithm, extractable, keyUsages);
                }
            case "spki":
                {
                    const keyInfo = asn1Schema.AsnParser.parse(new Uint8Array(keyData), core__namespace.asn1.PublicKeyInfo);
                    const asnKey = new core__namespace.asn1.EcPublicKey(keyInfo.publicKey);
                    this.assertKeyParameters(keyInfo.publicKeyAlgorithm.parameters, algorithm.namedCurve);
                    return this.importPublicKey(asnKey, algorithm, extractable, keyUsages);
                }
            case "pkcs8":
                {
                    const keyInfo = asn1Schema.AsnParser.parse(new Uint8Array(keyData), core__namespace.asn1.PrivateKeyInfo);
                    const asnKey = asn1Schema.AsnParser.parse(keyInfo.privateKey, core__namespace.asn1.EcPrivateKey);
                    this.assertKeyParameters(keyInfo.privateKeyAlgorithm.parameters, algorithm.namedCurve);
                    return this.importPrivateKey(asnKey, algorithm, extractable, keyUsages);
                }
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk', 'raw', 'pkcs8' or 'spki'");
        }
    }
    static assertKeyParameters(parameters, namedCurve) {
        if (!parameters) {
            throw new core__namespace.CryptoError("Key info doesn't have required parameters");
        }
        let namedCurveIdentifier = "";
        try {
            namedCurveIdentifier = asn1Schema.AsnParser.parse(parameters, core__namespace.asn1.ObjectIdentifier).value;
        } catch (e) {
            throw new core__namespace.CryptoError("Cannot read key info parameters");
        }
        if (getOidByNamedCurve$1(namedCurve) !== namedCurveIdentifier) {
            throw new core__namespace.CryptoError("Key info parameter doesn't match to named curve");
        }
    }
    static async importPrivateKey(asnKey, algorithm, extractable, keyUsages) {
        const keyInfo = new core__namespace.asn1.PrivateKeyInfo();
        keyInfo.privateKeyAlgorithm.algorithm = "1.2.840.10045.2.1";
        keyInfo.privateKeyAlgorithm.parameters = asn1Schema.AsnSerializer.serialize(new core__namespace.asn1.ObjectIdentifier(getOidByNamedCurve$1(algorithm.namedCurve)));
        keyInfo.privateKey = asn1Schema.AsnSerializer.serialize(asnKey);
        const key = new EcPrivateKey();
        key.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        key.algorithm = Object.assign({}, algorithm);
        key.extractable = extractable;
        key.usages = keyUsages;
        return key;
    }
    static async importPublicKey(asnKey, algorithm, extractable, keyUsages) {
        const keyInfo = new core__namespace.asn1.PublicKeyInfo();
        keyInfo.publicKeyAlgorithm.algorithm = "1.2.840.10045.2.1";
        const namedCurve = getOidByNamedCurve$1(algorithm.namedCurve);
        keyInfo.publicKeyAlgorithm.parameters = asn1Schema.AsnSerializer.serialize(new core__namespace.asn1.ObjectIdentifier(namedCurve));
        keyInfo.publicKey = asnKey.value;
        const key = new EcPublicKey();
        key.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        key.algorithm = Object.assign({}, algorithm);
        key.extractable = extractable;
        key.usages = keyUsages;
        return key;
    }
    static getOpenSSLNamedCurve(curve) {
        switch(curve.toUpperCase()){
            case "P-256":
                return "prime256v1";
            case "K-256":
                return "secp256k1";
            case "P-384":
                return "secp384r1";
            case "P-521":
                return "secp521r1";
            default:
                return curve;
        }
    }
}
EcCrypto.publicKeyUsages = [
    "verify"
];
EcCrypto.privateKeyUsages = [
    "sign",
    "deriveKey",
    "deriveBits"
];
class EcdsaProvider extends core__namespace.EcdsaProvider {
    constructor(){
        super(...arguments);
        this.namedCurves = core__namespace.EcCurves.names;
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512",
            "shake128",
            "shake256",
            "SHA3-256",
            "SHA3-384",
            "SHA3-512"
        ];
    }
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await EcCrypto.generateKey({
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    async onSign(algorithm, key, data) {
        return EcCrypto.sign(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onVerify(algorithm, key, signature, data) {
        return EcCrypto.verify(algorithm, getCryptoKey(key), new Uint8Array(signature), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return EcCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await EcCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        const internalKey = getCryptoKey(key);
        if (!(internalKey instanceof EcPrivateKey || internalKey instanceof EcPublicKey)) {
            throw new TypeError("key: Is not EC CryptoKey");
        }
    }
}
class EcdhProvider extends core__namespace.EcdhProvider {
    constructor(){
        super(...arguments);
        this.namedCurves = core__namespace.EcCurves.names;
    }
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await EcCrypto.generateKey({
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    async onExportKey(format, key) {
        return EcCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await EcCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        const internalKey = getCryptoKey(key);
        if (!(internalKey instanceof EcPrivateKey || internalKey instanceof EcPublicKey)) {
            throw new TypeError("key: Is not EC CryptoKey");
        }
    }
    async onDeriveBits(algorithm, baseKey, length) {
        const bits = await EcCrypto.deriveBits({
            ...algorithm,
            public: getCryptoKey(algorithm.public)
        }, getCryptoKey(baseKey), length);
        return bits;
    }
}
const edOIDs = {
    [core__namespace.asn1.idEd448]: "Ed448",
    "ed448": core__namespace.asn1.idEd448,
    [core__namespace.asn1.idX448]: "X448",
    "x448": core__namespace.asn1.idX448,
    [core__namespace.asn1.idEd25519]: "Ed25519",
    "ed25519": core__namespace.asn1.idEd25519,
    [core__namespace.asn1.idX25519]: "X25519",
    "x25519": core__namespace.asn1.idX25519
};
function getOidByNamedCurve(namedCurve) {
    const oid = edOIDs[namedCurve.toLowerCase()];
    if (!oid) {
        throw new core__namespace.OperationError(`Cannot convert WebCrypto named curve '${namedCurve}' to OID`);
    }
    return oid;
}
class EdPrivateKey extends AsymmetricKey {
    constructor(){
        super(...arguments);
        this.type = "private";
    }
    getKey() {
        const keyInfo = asn1Schema.AsnParser.parse(this.data, core__namespace.asn1.PrivateKeyInfo);
        return asn1Schema.AsnParser.parse(keyInfo.privateKey, core__namespace.asn1.CurvePrivateKey);
    }
    toJSON() {
        const key = this.getKey();
        const json = {
            kty: "OKP",
            crv: this.algorithm.namedCurve,
            key_ops: this.usages,
            ext: this.extractable
        };
        return Object.assign(json, jsonSchema.JsonSerializer.toJSON(key));
    }
    fromJSON(json) {
        if (!json.crv) {
            throw new core__namespace.OperationError(`Cannot get named curve from JWK. Property 'crv' is required`);
        }
        const keyInfo = new core__namespace.asn1.PrivateKeyInfo();
        keyInfo.privateKeyAlgorithm.algorithm = getOidByNamedCurve(json.crv);
        const key = jsonSchema.JsonParser.fromJSON(json, {
            targetSchema: core__namespace.asn1.CurvePrivateKey
        });
        keyInfo.privateKey = asn1Schema.AsnSerializer.serialize(key);
        this.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        return this;
    }
}
class EdPublicKey extends AsymmetricKey {
    constructor(){
        super(...arguments);
        this.type = "public";
    }
    getKey() {
        const keyInfo = asn1Schema.AsnParser.parse(this.data, core__namespace.asn1.PublicKeyInfo);
        return keyInfo.publicKey;
    }
    toJSON() {
        const key = this.getKey();
        const json = {
            kty: "OKP",
            crv: this.algorithm.namedCurve,
            key_ops: this.usages,
            ext: this.extractable
        };
        return Object.assign(json, {
            x: pvtsutils.Convert.ToBase64Url(key)
        });
    }
    fromJSON(json) {
        if (!json.crv) {
            throw new core__namespace.OperationError(`Cannot get named curve from JWK. Property 'crv' is required`);
        }
        if (!json.x) {
            throw new core__namespace.OperationError(`Cannot get property from JWK. Property 'x' is required`);
        }
        const keyInfo = new core__namespace.asn1.PublicKeyInfo();
        keyInfo.publicKeyAlgorithm.algorithm = getOidByNamedCurve(json.crv);
        keyInfo.publicKey = pvtsutils.Convert.FromBase64Url(json.x);
        this.data = Buffer.from(asn1Schema.AsnSerializer.serialize(keyInfo));
        return this;
    }
}
class EdCrypto {
    static async generateKey(algorithm, extractable, keyUsages) {
        const privateKey = new EdPrivateKey();
        privateKey.algorithm = algorithm;
        privateKey.extractable = extractable;
        privateKey.usages = keyUsages.filter((usage)=>this.privateKeyUsages.indexOf(usage) !== -1);
        const publicKey = new EdPublicKey();
        publicKey.algorithm = algorithm;
        publicKey.extractable = true;
        publicKey.usages = keyUsages.filter((usage)=>this.publicKeyUsages.indexOf(usage) !== -1);
        const type = algorithm.namedCurve.toLowerCase();
        const keys = crypto.generateKeyPairSync(type, {
            publicKeyEncoding: {
                format: "der",
                type: "spki"
            },
            privateKeyEncoding: {
                format: "der",
                type: "pkcs8"
            }
        });
        privateKey.data = keys.privateKey;
        publicKey.data = keys.publicKey;
        const res = {
            privateKey,
            publicKey
        };
        return res;
    }
    static async sign(algorithm, key, data) {
        if (!key.pem) {
            key.pem = `-----BEGIN PRIVATE KEY-----\n${key.data.toString("base64")}\n-----END PRIVATE KEY-----`;
        }
        const options = {
            key: key.pem
        };
        const signature = crypto.sign(null, Buffer.from(data), options);
        return core__namespace.BufferSourceConverter.toArrayBuffer(signature);
    }
    static async verify(algorithm, key, signature, data) {
        if (!key.pem) {
            key.pem = `-----BEGIN PUBLIC KEY-----\n${key.data.toString("base64")}\n-----END PUBLIC KEY-----`;
        }
        const options = {
            key: key.pem
        };
        const ok = crypto.verify(null, Buffer.from(data), options, Buffer.from(signature));
        return ok;
    }
    static async deriveBits(algorithm, baseKey, length) {
        const publicKey = crypto.createPublicKey({
            key: algorithm.public.data,
            format: "der",
            type: "spki"
        });
        const privateKey = crypto.createPrivateKey({
            key: baseKey.data,
            format: "der",
            type: "pkcs8"
        });
        const bits = crypto.diffieHellman({
            publicKey,
            privateKey
        });
        return new Uint8Array(bits).buffer.slice(0, length >> 3);
    }
    static async exportKey(format, key) {
        switch(format.toLowerCase()){
            case "jwk":
                return jsonSchema.JsonSerializer.toJSON(key);
            case "pkcs8":
            case "spki":
                return new Uint8Array(key.data).buffer;
            case "raw":
                {
                    const publicKeyInfo = asn1Schema.AsnParser.parse(key.data, core__namespace.asn1.PublicKeyInfo);
                    return publicKeyInfo.publicKey;
                }
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk', 'raw', pkcs8' or 'spki'");
        }
    }
    static async importKey(format, keyData, algorithm, extractable, keyUsages) {
        switch(format.toLowerCase()){
            case "jwk":
                {
                    const jwk = keyData;
                    if (jwk.d) {
                        const asnKey = jsonSchema.JsonParser.fromJSON(keyData, {
                            targetSchema: core__namespace.asn1.CurvePrivateKey
                        });
                        return this.importPrivateKey(asnKey, algorithm, extractable, keyUsages);
                    } else {
                        if (!jwk.x) {
                            throw new TypeError("keyData: Cannot get required 'x' filed");
                        }
                        return this.importPublicKey(pvtsutils.Convert.FromBase64Url(jwk.x), algorithm, extractable, keyUsages);
                    }
                }
            case "raw":
                {
                    return this.importPublicKey(keyData, algorithm, extractable, keyUsages);
                }
            case "spki":
                {
                    const keyInfo = asn1Schema.AsnParser.parse(new Uint8Array(keyData), core__namespace.asn1.PublicKeyInfo);
                    return this.importPublicKey(keyInfo.publicKey, algorithm, extractable, keyUsages);
                }
            case "pkcs8":
                {
                    const keyInfo = asn1Schema.AsnParser.parse(new Uint8Array(keyData), core__namespace.asn1.PrivateKeyInfo);
                    const asnKey = asn1Schema.AsnParser.parse(keyInfo.privateKey, core__namespace.asn1.CurvePrivateKey);
                    return this.importPrivateKey(asnKey, algorithm, extractable, keyUsages);
                }
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk', 'raw', 'pkcs8' or 'spki'");
        }
    }
    static importPrivateKey(asnKey, algorithm, extractable, keyUsages) {
        const key = new EdPrivateKey();
        key.fromJSON({
            crv: algorithm.namedCurve,
            d: pvtsutils.Convert.ToBase64Url(asnKey.d)
        });
        key.algorithm = Object.assign({}, algorithm);
        key.extractable = extractable;
        key.usages = keyUsages;
        return key;
    }
    static async importPublicKey(asnKey, algorithm, extractable, keyUsages) {
        const key = new EdPublicKey();
        key.fromJSON({
            crv: algorithm.namedCurve,
            x: pvtsutils.Convert.ToBase64Url(asnKey)
        });
        key.algorithm = Object.assign({}, algorithm);
        key.extractable = extractable;
        key.usages = keyUsages;
        return key;
    }
}
EdCrypto.publicKeyUsages = [
    "verify"
];
EdCrypto.privateKeyUsages = [
    "sign",
    "deriveKey",
    "deriveBits"
];
class EdDsaProvider extends core__namespace.EdDsaProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await EdCrypto.generateKey({
            name: this.name,
            namedCurve: algorithm.namedCurve.replace(/^ed/i, "Ed")
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    async onSign(algorithm, key, data) {
        return EdCrypto.sign(algorithm, getCryptoKey(key), new Uint8Array(data));
    }
    async onVerify(algorithm, key, signature, data) {
        return EdCrypto.verify(algorithm, getCryptoKey(key), new Uint8Array(signature), new Uint8Array(data));
    }
    async onExportKey(format, key) {
        return EdCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await EdCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
}
class EcdhEsProvider extends core__namespace.EcdhEsProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const keys = await EdCrypto.generateKey({
            name: this.name,
            namedCurve: algorithm.namedCurve.toUpperCase()
        }, extractable, keyUsages);
        return {
            privateKey: setCryptoKey(keys.privateKey),
            publicKey: setCryptoKey(keys.publicKey)
        };
    }
    async onDeriveBits(algorithm, baseKey, length) {
        const bits = await EdCrypto.deriveBits({
            ...algorithm,
            public: getCryptoKey(algorithm.public)
        }, getCryptoKey(baseKey), length);
        return bits;
    }
    async onExportKey(format, key) {
        return EdCrypto.exportKey(format, getCryptoKey(key));
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        const key = await EdCrypto.importKey(format, keyData, {
            ...algorithm,
            name: this.name
        }, extractable, keyUsages);
        return setCryptoKey(key);
    }
}
class PbkdfCryptoKey extends CryptoKey {
}
class Pbkdf2Provider extends core__namespace.Pbkdf2Provider {
    async onDeriveBits(algorithm, baseKey, length) {
        return new Promise((resolve, reject)=>{
            const salt = core__namespace.BufferSourceConverter.toArrayBuffer(algorithm.salt);
            const hash = algorithm.hash.name.replace("-", "");
            crypto.pbkdf2(getCryptoKey(baseKey).data, Buffer.from(salt), algorithm.iterations, length >> 3, hash, (err, derivedBits)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(new Uint8Array(derivedBits).buffer);
                }
            });
        });
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        if (format === "raw") {
            const key = new PbkdfCryptoKey();
            key.data = Buffer.from(keyData);
            key.algorithm = {
                name: this.name
            };
            key.extractable = false;
            key.usages = keyUsages;
            return setCryptoKey(key);
        }
        throw new core__namespace.OperationError("format: Must be 'raw'");
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof PbkdfCryptoKey)) {
            throw new TypeError("key: Is not PBKDF CryptoKey");
        }
    }
}
class HmacCryptoKey extends CryptoKey {
    get alg() {
        const hash = this.algorithm.hash.name.toUpperCase();
        return `HS${hash.replace("SHA-", "")}`;
    }
    set alg(value) {}
}
tslib.__decorate([
    jsonSchema.JsonProp({
        name: "k",
        converter: JsonBase64UrlConverter
    })
], HmacCryptoKey.prototype, "data", void 0);
class HmacProvider extends core__namespace.HmacProvider {
    async onGenerateKey(algorithm, extractable, keyUsages) {
        const length = (algorithm.length || this.getDefaultLength(algorithm.hash.name)) >> 3 << 3;
        const key = new HmacCryptoKey();
        key.algorithm = {
            ...algorithm,
            length,
            name: this.name
        };
        key.extractable = extractable;
        key.usages = keyUsages;
        key.data = crypto.randomBytes(length >> 3);
        return setCryptoKey(key);
    }
    async onSign(algorithm, key, data) {
        const cryptoAlg = ShaCrypto.getAlgorithmName(key.algorithm.hash);
        const hmac = crypto.createHmac(cryptoAlg, getCryptoKey(key).data).update(Buffer.from(data)).digest();
        return new Uint8Array(hmac).buffer;
    }
    async onVerify(algorithm, key, signature, data) {
        const cryptoAlg = ShaCrypto.getAlgorithmName(key.algorithm.hash);
        const hmac = crypto.createHmac(cryptoAlg, getCryptoKey(key).data).update(Buffer.from(data)).digest();
        return hmac.compare(Buffer.from(signature)) === 0;
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        let key;
        switch(format.toLowerCase()){
            case "jwk":
                key = jsonSchema.JsonParser.fromJSON(keyData, {
                    targetSchema: HmacCryptoKey
                });
                break;
            case "raw":
                key = new HmacCryptoKey();
                key.data = Buffer.from(keyData);
                break;
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk' or 'raw'");
        }
        key.algorithm = {
            hash: {
                name: algorithm.hash.name
            },
            name: this.name,
            length: key.data.length << 3
        };
        key.extractable = extractable;
        key.usages = keyUsages;
        return setCryptoKey(key);
    }
    async onExportKey(format, key) {
        switch(format.toLowerCase()){
            case "jwk":
                return jsonSchema.JsonSerializer.toJSON(getCryptoKey(key));
            case "raw":
                return new Uint8Array(getCryptoKey(key).data).buffer;
            default:
                throw new core__namespace.OperationError("format: Must be 'jwk' or 'raw'");
        }
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof HmacCryptoKey)) {
            throw new TypeError("key: Is not HMAC CryptoKey");
        }
    }
}
class HkdfCryptoKey extends CryptoKey {
}
class HkdfProvider extends core__namespace.HkdfProvider {
    async onImportKey(format, keyData, algorithm, extractable, keyUsages) {
        if (format.toLowerCase() !== "raw") {
            throw new core__namespace.OperationError("Operation not supported");
        }
        const key = new HkdfCryptoKey();
        key.data = Buffer.from(keyData);
        key.algorithm = {
            name: this.name
        };
        key.extractable = extractable;
        key.usages = keyUsages;
        return setCryptoKey(key);
    }
    async onDeriveBits(params, baseKey, length) {
        const hash = params.hash.name.replace("-", "");
        const hashLength = crypto.createHash(hash).digest().length;
        const byteLength = length / 8;
        const info = core.BufferSourceConverter.toUint8Array(params.info);
        const PRK = crypto.createHmac(hash, core.BufferSourceConverter.toUint8Array(params.salt)).update(core.BufferSourceConverter.toUint8Array(getCryptoKey(baseKey).data)).digest();
        const blocks = [
            Buffer.alloc(0)
        ];
        const blockCount = Math.ceil(byteLength / hashLength) + 1;
        for(let i = 1; i < blockCount; ++i){
            blocks.push(crypto.createHmac(hash, PRK).update(Buffer.concat([
                blocks[i - 1],
                info,
                Buffer.from([
                    i
                ])
            ])).digest());
        }
        return Buffer.concat(blocks).slice(0, byteLength);
    }
    checkCryptoKey(key, keyUsage) {
        super.checkCryptoKey(key, keyUsage);
        if (!(getCryptoKey(key) instanceof HkdfCryptoKey)) {
            throw new TypeError("key: Is not HKDF CryptoKey");
        }
    }
}
class ShakeCrypto {
    static digest(algorithm, data) {
        const hash = crypto.createHash(algorithm.name.toLowerCase(), {
            outputLength: algorithm.length
        }).update(Buffer.from(data)).digest();
        return new Uint8Array(hash).buffer;
    }
}
class Shake128Provider extends core__namespace.Shake128Provider {
    async onDigest(algorithm, data) {
        return ShakeCrypto.digest(algorithm, data);
    }
}
class Shake256Provider extends core__namespace.Shake256Provider {
    async onDigest(algorithm, data) {
        return ShakeCrypto.digest(algorithm, data);
    }
}
class SubtleCrypto extends core__namespace.SubtleCrypto {
    constructor(){
        var _a;
        super();
        this.providers.set(new AesCbcProvider());
        this.providers.set(new AesCtrProvider());
        this.providers.set(new AesGcmProvider());
        this.providers.set(new AesCmacProvider());
        this.providers.set(new AesKwProvider());
        this.providers.set(new AesEcbProvider());
        this.providers.set(new DesCbcProvider());
        this.providers.set(new DesEde3CbcProvider());
        this.providers.set(new RsaSsaProvider());
        this.providers.set(new RsaPssProvider());
        this.providers.set(new RsaOaepProvider());
        this.providers.set(new RsaEsProvider());
        this.providers.set(new EcdsaProvider());
        this.providers.set(new EcdhProvider());
        this.providers.set(new Sha1Provider());
        this.providers.set(new Sha256Provider());
        this.providers.set(new Sha384Provider());
        this.providers.set(new Sha512Provider());
        this.providers.set(new Pbkdf2Provider());
        this.providers.set(new HmacProvider());
        this.providers.set(new HkdfProvider());
        const nodeMajorVersion = (_a = /^v(\d+)/.exec(process__namespace.version)) === null || _a === void 0 ? void 0 : _a[1];
        if (nodeMajorVersion && parseInt(nodeMajorVersion, 10) >= 12) {
            this.providers.set(new Shake128Provider());
            this.providers.set(new Shake256Provider());
        }
        const hashes = crypto__namespace.getHashes();
        if (hashes.includes("sha3-256")) {
            this.providers.set(new Sha3256Provider());
        }
        if (hashes.includes("sha3-384")) {
            this.providers.set(new Sha3384Provider());
        }
        if (hashes.includes("sha3-512")) {
            this.providers.set(new Sha3512Provider());
        }
        if (nodeMajorVersion && parseInt(nodeMajorVersion, 10) >= 14) {
            this.providers.set(new EdDsaProvider());
            this.providers.set(new EcdhEsProvider());
        }
    }
}
class Crypto extends core__namespace.Crypto {
    constructor(){
        super(...arguments);
        this.subtle = new SubtleCrypto();
    }
    getRandomValues(array) {
        if (!ArrayBuffer.isView(array)) {
            throw new TypeError("Failed to execute 'getRandomValues' on 'Crypto': parameter 1 is not of type 'ArrayBufferView'");
        }
        const buffer = Buffer.from(array.buffer, array.byteOffset, array.byteLength);
        crypto.randomFillSync(buffer);
        return array;
    }
}
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return core.CryptoKey;
    }
});
exports.w = Crypto;


/***/ }),

/***/ 45240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*!
 * Copyright (c) 2014, GMO GlobalSign
 * Copyright (c) 2015-2022, Peculiar Ventures
 * All rights reserved.
 * 
 * Author 2014-2019, Yury Strozhevsky
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 * 
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var pvtsutils = __webpack_require__(17367);
var pvutils = __webpack_require__(5876);
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function(k) {
            if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function() {
                        return e[k];
                    }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}
var pvtsutils__namespace = /*#__PURE__*/ _interopNamespace(pvtsutils);
var pvutils__namespace = /*#__PURE__*/ _interopNamespace(pvutils);
function assertBigInt() {
    if (typeof BigInt === "undefined") {
        throw new Error("BigInt is not defined. Your environment doesn't implement BigInt.");
    }
}
function concat(buffers) {
    let outputLength = 0;
    let prevLength = 0;
    for(let i = 0; i < buffers.length; i++){
        const buffer = buffers[i];
        outputLength += buffer.byteLength;
    }
    const retView = new Uint8Array(outputLength);
    for(let i = 0; i < buffers.length; i++){
        const buffer = buffers[i];
        retView.set(new Uint8Array(buffer), prevLength);
        prevLength += buffer.byteLength;
    }
    return retView.buffer;
}
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
    if (!(inputBuffer instanceof Uint8Array)) {
        baseBlock.error = "Wrong parameter: inputBuffer must be 'Uint8Array'";
        return false;
    }
    if (!inputBuffer.byteLength) {
        baseBlock.error = "Wrong parameter: inputBuffer has zero length";
        return false;
    }
    if (inputOffset < 0) {
        baseBlock.error = "Wrong parameter: inputOffset less than zero";
        return false;
    }
    if (inputLength < 0) {
        baseBlock.error = "Wrong parameter: inputLength less than zero";
        return false;
    }
    if (inputBuffer.byteLength - inputOffset - inputLength < 0) {
        baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
        return false;
    }
    return true;
}
class ViewWriter {
    constructor(){
        this.items = [];
    }
    write(buf) {
        this.items.push(buf);
    }
    final() {
        return concat(this.items);
    }
}
const powers2 = [
    new Uint8Array([
        1
    ])
];
const digitsString = "0123456789";
const NAME = "name";
const VALUE_HEX_VIEW = "valueHexView";
const IS_HEX_ONLY = "isHexOnly";
const ID_BLOCK = "idBlock";
const TAG_CLASS = "tagClass";
const TAG_NUMBER = "tagNumber";
const IS_CONSTRUCTED = "isConstructed";
const FROM_BER = "fromBER";
const TO_BER = "toBER";
const LOCAL = "local";
const EMPTY_STRING = "";
const EMPTY_BUFFER = new ArrayBuffer(0);
const EMPTY_VIEW = new Uint8Array(0);
const END_OF_CONTENT_NAME = "EndOfContent";
const OCTET_STRING_NAME = "OCTET STRING";
const BIT_STRING_NAME = "BIT STRING";
function HexBlock(BaseClass) {
    var _a;
    return _a = class Some extends BaseClass {
        constructor(...args){
            var _a;
            super(...args);
            const params = args[0] || {};
            this.isHexOnly = (_a = params.isHexOnly) !== null && _a !== void 0 ? _a : false;
            this.valueHexView = params.valueHex ? pvtsutils__namespace.BufferSourceConverter.toUint8Array(params.valueHex) : EMPTY_VIEW;
        }
        get valueHex() {
            return this.valueHexView.slice().buffer;
        }
        set valueHex(value) {
            this.valueHexView = new Uint8Array(value);
        }
        fromBER(inputBuffer, inputOffset, inputLength) {
            const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
            if (!checkBufferParams(this, view, inputOffset, inputLength)) {
                return -1;
            }
            const endLength = inputOffset + inputLength;
            this.valueHexView = view.subarray(inputOffset, endLength);
            if (!this.valueHexView.length) {
                this.warnings.push("Zero buffer length");
                return inputOffset;
            }
            this.blockLength = inputLength;
            return endLength;
        }
        toBER(sizeOnly = false) {
            if (!this.isHexOnly) {
                this.error = "Flag 'isHexOnly' is not set, abort";
                return EMPTY_BUFFER;
            }
            if (sizeOnly) {
                return new ArrayBuffer(this.valueHexView.byteLength);
            }
            return this.valueHexView.byteLength === this.valueHexView.buffer.byteLength ? this.valueHexView.buffer : this.valueHexView.slice().buffer;
        }
        toJSON() {
            return {
                ...super.toJSON(),
                isHexOnly: this.isHexOnly,
                valueHex: pvtsutils__namespace.Convert.ToHex(this.valueHexView)
            };
        }
    }, _a.NAME = "hexBlock", _a;
}
class LocalBaseBlock {
    constructor({ blockLength = 0, error = EMPTY_STRING, warnings = [], valueBeforeDecode = EMPTY_VIEW } = {}){
        this.blockLength = blockLength;
        this.error = error;
        this.warnings = warnings;
        this.valueBeforeDecodeView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(valueBeforeDecode);
    }
    static blockName() {
        return this.NAME;
    }
    get valueBeforeDecode() {
        return this.valueBeforeDecodeView.slice().buffer;
    }
    set valueBeforeDecode(value) {
        this.valueBeforeDecodeView = new Uint8Array(value);
    }
    toJSON() {
        return {
            blockName: this.constructor.NAME,
            blockLength: this.blockLength,
            error: this.error,
            warnings: this.warnings,
            valueBeforeDecode: pvtsutils__namespace.Convert.ToHex(this.valueBeforeDecodeView)
        };
    }
}
LocalBaseBlock.NAME = "baseBlock";
class ValueBlock extends LocalBaseBlock {
    fromBER(inputBuffer, inputOffset, inputLength) {
        throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
    }
    toBER(sizeOnly, writer) {
        throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
    }
}
ValueBlock.NAME = "valueBlock";
class LocalIdentificationBlock extends HexBlock(LocalBaseBlock) {
    constructor({ idBlock = {} } = {}){
        var _a, _b, _c, _d;
        super();
        if (idBlock) {
            this.isHexOnly = (_a = idBlock.isHexOnly) !== null && _a !== void 0 ? _a : false;
            this.valueHexView = idBlock.valueHex ? pvtsutils__namespace.BufferSourceConverter.toUint8Array(idBlock.valueHex) : EMPTY_VIEW;
            this.tagClass = (_b = idBlock.tagClass) !== null && _b !== void 0 ? _b : -1;
            this.tagNumber = (_c = idBlock.tagNumber) !== null && _c !== void 0 ? _c : -1;
            this.isConstructed = (_d = idBlock.isConstructed) !== null && _d !== void 0 ? _d : false;
        } else {
            this.tagClass = -1;
            this.tagNumber = -1;
            this.isConstructed = false;
        }
    }
    toBER(sizeOnly = false) {
        let firstOctet = 0;
        switch(this.tagClass){
            case 1:
                firstOctet |= 0x00;
                break;
            case 2:
                firstOctet |= 0x40;
                break;
            case 3:
                firstOctet |= 0x80;
                break;
            case 4:
                firstOctet |= 0xC0;
                break;
            default:
                this.error = "Unknown tag class";
                return EMPTY_BUFFER;
        }
        if (this.isConstructed) firstOctet |= 0x20;
        if (this.tagNumber < 31 && !this.isHexOnly) {
            const retView = new Uint8Array(1);
            if (!sizeOnly) {
                let number = this.tagNumber;
                number &= 0x1F;
                firstOctet |= number;
                retView[0] = firstOctet;
            }
            return retView.buffer;
        }
        if (!this.isHexOnly) {
            const encodedBuf = pvutils__namespace.utilToBase(this.tagNumber, 7);
            const encodedView = new Uint8Array(encodedBuf);
            const size = encodedBuf.byteLength;
            const retView = new Uint8Array(size + 1);
            retView[0] = firstOctet | 0x1F;
            if (!sizeOnly) {
                for(let i = 0; i < size - 1; i++)retView[i + 1] = encodedView[i] | 0x80;
                retView[size] = encodedView[size - 1];
            }
            return retView.buffer;
        }
        const retView = new Uint8Array(this.valueHexView.byteLength + 1);
        retView[0] = firstOctet | 0x1F;
        if (!sizeOnly) {
            const curView = this.valueHexView;
            for(let i = 0; i < curView.length - 1; i++)retView[i + 1] = curView[i] | 0x80;
            retView[this.valueHexView.byteLength] = curView[curView.length - 1];
        }
        return retView.buffer;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
        }
        const tagClassMask = intBuffer[0] & 0xC0;
        switch(tagClassMask){
            case 0x00:
                this.tagClass = 1;
                break;
            case 0x40:
                this.tagClass = 2;
                break;
            case 0x80:
                this.tagClass = 3;
                break;
            case 0xC0:
                this.tagClass = 4;
                break;
            default:
                this.error = "Unknown tag class";
                return -1;
        }
        this.isConstructed = (intBuffer[0] & 0x20) === 0x20;
        this.isHexOnly = false;
        const tagNumberMask = intBuffer[0] & 0x1F;
        if (tagNumberMask !== 0x1F) {
            this.tagNumber = tagNumberMask;
            this.blockLength = 1;
        } else {
            let count = 1;
            let intTagNumberBuffer = this.valueHexView = new Uint8Array(255);
            let tagNumberBufferMaxLength = 255;
            while(intBuffer[count] & 0x80){
                intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
                count++;
                if (count >= intBuffer.length) {
                    this.error = "End of input reached before message was fully decoded";
                    return -1;
                }
                if (count === tagNumberBufferMaxLength) {
                    tagNumberBufferMaxLength += 255;
                    const tempBufferView = new Uint8Array(tagNumberBufferMaxLength);
                    for(let i = 0; i < intTagNumberBuffer.length; i++)tempBufferView[i] = intTagNumberBuffer[i];
                    intTagNumberBuffer = this.valueHexView = new Uint8Array(tagNumberBufferMaxLength);
                }
            }
            this.blockLength = count + 1;
            intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
            const tempBufferView = new Uint8Array(count);
            for(let i = 0; i < count; i++)tempBufferView[i] = intTagNumberBuffer[i];
            intTagNumberBuffer = this.valueHexView = new Uint8Array(count);
            intTagNumberBuffer.set(tempBufferView);
            if (this.blockLength <= 9) this.tagNumber = pvutils__namespace.utilFromBase(intTagNumberBuffer, 7);
            else {
                this.isHexOnly = true;
                this.warnings.push("Tag too long, represented as hex-coded");
            }
        }
        if (this.tagClass === 1 && this.isConstructed) {
            switch(this.tagNumber){
                case 1:
                case 2:
                case 5:
                case 6:
                case 9:
                case 13:
                case 14:
                case 23:
                case 24:
                case 31:
                case 32:
                case 33:
                case 34:
                    this.error = "Constructed encoding used for primitive type";
                    return -1;
            }
        }
        return inputOffset + this.blockLength;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            tagClass: this.tagClass,
            tagNumber: this.tagNumber,
            isConstructed: this.isConstructed
        };
    }
}
LocalIdentificationBlock.NAME = "identificationBlock";
class LocalLengthBlock extends LocalBaseBlock {
    constructor({ lenBlock = {} } = {}){
        var _a, _b, _c;
        super();
        this.isIndefiniteForm = (_a = lenBlock.isIndefiniteForm) !== null && _a !== void 0 ? _a : false;
        this.longFormUsed = (_b = lenBlock.longFormUsed) !== null && _b !== void 0 ? _b : false;
        this.length = (_c = lenBlock.length) !== null && _c !== void 0 ? _c : 0;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const view = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, view, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = view.subarray(inputOffset, inputOffset + inputLength);
        if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
        }
        if (intBuffer[0] === 0xFF) {
            this.error = "Length block 0xFF is reserved by standard";
            return -1;
        }
        this.isIndefiniteForm = intBuffer[0] === 0x80;
        if (this.isIndefiniteForm) {
            this.blockLength = 1;
            return inputOffset + this.blockLength;
        }
        this.longFormUsed = !!(intBuffer[0] & 0x80);
        if (this.longFormUsed === false) {
            this.length = intBuffer[0];
            this.blockLength = 1;
            return inputOffset + this.blockLength;
        }
        const count = intBuffer[0] & 0x7F;
        if (count > 8) {
            this.error = "Too big integer";
            return -1;
        }
        if (count + 1 > intBuffer.length) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
        }
        const lenOffset = inputOffset + 1;
        const lengthBufferView = view.subarray(lenOffset, lenOffset + count);
        if (lengthBufferView[count - 1] === 0x00) this.warnings.push("Needlessly long encoded length");
        this.length = pvutils__namespace.utilFromBase(lengthBufferView, 8);
        if (this.longFormUsed && this.length <= 127) this.warnings.push("Unnecessary usage of long length form");
        this.blockLength = count + 1;
        return inputOffset + this.blockLength;
    }
    toBER(sizeOnly = false) {
        let retBuf;
        let retView;
        if (this.length > 127) this.longFormUsed = true;
        if (this.isIndefiniteForm) {
            retBuf = new ArrayBuffer(1);
            if (sizeOnly === false) {
                retView = new Uint8Array(retBuf);
                retView[0] = 0x80;
            }
            return retBuf;
        }
        if (this.longFormUsed) {
            const encodedBuf = pvutils__namespace.utilToBase(this.length, 8);
            if (encodedBuf.byteLength > 127) {
                this.error = "Too big length";
                return EMPTY_BUFFER;
            }
            retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
            if (sizeOnly) return retBuf;
            const encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);
            retView[0] = encodedBuf.byteLength | 0x80;
            for(let i = 0; i < encodedBuf.byteLength; i++)retView[i + 1] = encodedView[i];
            return retBuf;
        }
        retBuf = new ArrayBuffer(1);
        if (sizeOnly === false) {
            retView = new Uint8Array(retBuf);
            retView[0] = this.length;
        }
        return retBuf;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            isIndefiniteForm: this.isIndefiniteForm,
            longFormUsed: this.longFormUsed,
            length: this.length
        };
    }
}
LocalLengthBlock.NAME = "lengthBlock";
const typeStore = {};
class BaseBlock extends LocalBaseBlock {
    constructor({ name = EMPTY_STRING, optional = false, primitiveSchema, ...parameters } = {}, valueBlockType){
        super(parameters);
        this.name = name;
        this.optional = optional;
        if (primitiveSchema) {
            this.primitiveSchema = primitiveSchema;
        }
        this.idBlock = new LocalIdentificationBlock(parameters);
        this.lenBlock = new LocalLengthBlock(parameters);
        this.valueBlock = valueBlockType ? new valueBlockType(parameters) : new ValueBlock(parameters);
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
        if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
        if (!this.valueBlock.error.length) this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    }
    toBER(sizeOnly, writer) {
        const _writer = writer || new ViewWriter();
        if (!writer) {
            prepareIndefiniteForm(this);
        }
        const idBlockBuf = this.idBlock.toBER(sizeOnly);
        _writer.write(idBlockBuf);
        if (this.lenBlock.isIndefiniteForm) {
            _writer.write(new Uint8Array([
                0x80
            ]).buffer);
            this.valueBlock.toBER(sizeOnly, _writer);
            _writer.write(new ArrayBuffer(2));
        } else {
            const valueBlockBuf = this.valueBlock.toBER(sizeOnly);
            this.lenBlock.length = valueBlockBuf.byteLength;
            const lenBlockBuf = this.lenBlock.toBER(sizeOnly);
            _writer.write(lenBlockBuf);
            _writer.write(valueBlockBuf);
        }
        if (!writer) {
            return _writer.final();
        }
        return EMPTY_BUFFER;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            idBlock: this.idBlock.toJSON(),
            lenBlock: this.lenBlock.toJSON(),
            valueBlock: this.valueBlock.toJSON(),
            name: this.name,
            optional: this.optional
        };
        if (this.primitiveSchema) object.primitiveSchema = this.primitiveSchema.toJSON();
        return object;
    }
    toString(encoding = "ascii") {
        if (encoding === "ascii") {
            return this.onAsciiEncoding();
        }
        return pvtsutils__namespace.Convert.ToHex(this.toBER());
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${pvtsutils__namespace.Convert.ToHex(this.valueBlock.valueBeforeDecodeView)}`;
    }
    isEqual(other) {
        if (this === other) {
            return true;
        }
        if (!(other instanceof this.constructor)) {
            return false;
        }
        const thisRaw = this.toBER();
        const otherRaw = other.toBER();
        return pvutils__namespace.isEqualBuffer(thisRaw, otherRaw);
    }
}
BaseBlock.NAME = "BaseBlock";
function prepareIndefiniteForm(baseBlock) {
    if (baseBlock instanceof typeStore.Constructed) {
        for (const value of baseBlock.valueBlock.value){
            if (prepareIndefiniteForm(value)) {
                baseBlock.lenBlock.isIndefiniteForm = true;
            }
        }
    }
    return !!baseBlock.lenBlock.isIndefiniteForm;
}
class BaseStringBlock extends BaseBlock {
    constructor({ value = EMPTY_STRING, ...parameters } = {}, stringValueBlockType){
        super(parameters, stringValueBlockType);
        if (value) {
            this.fromString(value);
        }
    }
    getValue() {
        return this.valueBlock.value;
    }
    setValue(value) {
        this.valueBlock.value = value;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
        if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHexView);
        if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
        if (!this.valueBlock.error.length) this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : '${this.valueBlock.value}'`;
    }
}
BaseStringBlock.NAME = "BaseStringBlock";
class LocalPrimitiveValueBlock extends HexBlock(ValueBlock) {
    constructor({ isHexOnly = true, ...parameters } = {}){
        super(parameters);
        this.isHexOnly = isHexOnly;
    }
}
LocalPrimitiveValueBlock.NAME = "PrimitiveValueBlock";
var _a$w;
class Primitive extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, LocalPrimitiveValueBlock);
        this.idBlock.isConstructed = false;
    }
}
_a$w = Primitive;
(()=>{
    typeStore.Primitive = _a$w;
})();
Primitive.NAME = "PRIMITIVE";
function localChangeType(inputObject, newType) {
    if (inputObject instanceof newType) {
        return inputObject;
    }
    const newObject = new newType();
    newObject.idBlock = inputObject.idBlock;
    newObject.lenBlock = inputObject.lenBlock;
    newObject.warnings = inputObject.warnings;
    newObject.valueBeforeDecodeView = inputObject.valueBeforeDecodeView;
    return newObject;
}
function localFromBER(inputBuffer, inputOffset = 0, inputLength = inputBuffer.length) {
    const incomingOffset = inputOffset;
    let returnObject = new BaseBlock({}, ValueBlock);
    const baseBlock = new LocalBaseBlock();
    if (!checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength)) {
        returnObject.error = baseBlock.error;
        return {
            offset: -1,
            result: returnObject
        };
    }
    const intBuffer = inputBuffer.subarray(inputOffset, inputOffset + inputLength);
    if (!intBuffer.length) {
        returnObject.error = "Zero buffer length";
        return {
            offset: -1,
            result: returnObject
        };
    }
    let resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
    if (returnObject.idBlock.warnings.length) {
        returnObject.warnings.concat(returnObject.idBlock.warnings);
    }
    if (resultOffset === -1) {
        returnObject.error = returnObject.idBlock.error;
        return {
            offset: -1,
            result: returnObject
        };
    }
    inputOffset = resultOffset;
    inputLength -= returnObject.idBlock.blockLength;
    resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
    if (returnObject.lenBlock.warnings.length) {
        returnObject.warnings.concat(returnObject.lenBlock.warnings);
    }
    if (resultOffset === -1) {
        returnObject.error = returnObject.lenBlock.error;
        return {
            offset: -1,
            result: returnObject
        };
    }
    inputOffset = resultOffset;
    inputLength -= returnObject.lenBlock.blockLength;
    if (!returnObject.idBlock.isConstructed && returnObject.lenBlock.isIndefiniteForm) {
        returnObject.error = "Indefinite length form used for primitive encoding form";
        return {
            offset: -1,
            result: returnObject
        };
    }
    let newASN1Type = BaseBlock;
    switch(returnObject.idBlock.tagClass){
        case 1:
            if (returnObject.idBlock.tagNumber >= 37 && returnObject.idBlock.isHexOnly === false) {
                returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
                return {
                    offset: -1,
                    result: returnObject
                };
            }
            switch(returnObject.idBlock.tagNumber){
                case 0:
                    if (returnObject.idBlock.isConstructed && returnObject.lenBlock.length > 0) {
                        returnObject.error = "Type [UNIVERSAL 0] is reserved";
                        return {
                            offset: -1,
                            result: returnObject
                        };
                    }
                    newASN1Type = typeStore.EndOfContent;
                    break;
                case 1:
                    newASN1Type = typeStore.Boolean;
                    break;
                case 2:
                    newASN1Type = typeStore.Integer;
                    break;
                case 3:
                    newASN1Type = typeStore.BitString;
                    break;
                case 4:
                    newASN1Type = typeStore.OctetString;
                    break;
                case 5:
                    newASN1Type = typeStore.Null;
                    break;
                case 6:
                    newASN1Type = typeStore.ObjectIdentifier;
                    break;
                case 10:
                    newASN1Type = typeStore.Enumerated;
                    break;
                case 12:
                    newASN1Type = typeStore.Utf8String;
                    break;
                case 13:
                    newASN1Type = typeStore.RelativeObjectIdentifier;
                    break;
                case 14:
                    newASN1Type = typeStore.TIME;
                    break;
                case 15:
                    returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
                    return {
                        offset: -1,
                        result: returnObject
                    };
                case 16:
                    newASN1Type = typeStore.Sequence;
                    break;
                case 17:
                    newASN1Type = typeStore.Set;
                    break;
                case 18:
                    newASN1Type = typeStore.NumericString;
                    break;
                case 19:
                    newASN1Type = typeStore.PrintableString;
                    break;
                case 20:
                    newASN1Type = typeStore.TeletexString;
                    break;
                case 21:
                    newASN1Type = typeStore.VideotexString;
                    break;
                case 22:
                    newASN1Type = typeStore.IA5String;
                    break;
                case 23:
                    newASN1Type = typeStore.UTCTime;
                    break;
                case 24:
                    newASN1Type = typeStore.GeneralizedTime;
                    break;
                case 25:
                    newASN1Type = typeStore.GraphicString;
                    break;
                case 26:
                    newASN1Type = typeStore.VisibleString;
                    break;
                case 27:
                    newASN1Type = typeStore.GeneralString;
                    break;
                case 28:
                    newASN1Type = typeStore.UniversalString;
                    break;
                case 29:
                    newASN1Type = typeStore.CharacterString;
                    break;
                case 30:
                    newASN1Type = typeStore.BmpString;
                    break;
                case 31:
                    newASN1Type = typeStore.DATE;
                    break;
                case 32:
                    newASN1Type = typeStore.TimeOfDay;
                    break;
                case 33:
                    newASN1Type = typeStore.DateTime;
                    break;
                case 34:
                    newASN1Type = typeStore.Duration;
                    break;
                default:
                    {
                        const newObject = returnObject.idBlock.isConstructed ? new typeStore.Constructed() : new typeStore.Primitive();
                        newObject.idBlock = returnObject.idBlock;
                        newObject.lenBlock = returnObject.lenBlock;
                        newObject.warnings = returnObject.warnings;
                        returnObject = newObject;
                    }
            }
            break;
        case 2:
        case 3:
        case 4:
        default:
            {
                newASN1Type = returnObject.idBlock.isConstructed ? typeStore.Constructed : typeStore.Primitive;
            }
    }
    returnObject = localChangeType(returnObject, newASN1Type);
    resultOffset = returnObject.fromBER(inputBuffer, inputOffset, returnObject.lenBlock.isIndefiniteForm ? inputLength : returnObject.lenBlock.length);
    returnObject.valueBeforeDecodeView = inputBuffer.subarray(incomingOffset, incomingOffset + returnObject.blockLength);
    return {
        offset: resultOffset,
        result: returnObject
    };
}
function fromBER(inputBuffer) {
    if (!inputBuffer.byteLength) {
        const result = new BaseBlock({}, ValueBlock);
        result.error = "Input buffer has zero length";
        return {
            offset: -1,
            result
        };
    }
    return localFromBER(pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer).slice(), 0, inputBuffer.byteLength);
}
function checkLen(indefiniteLength, length) {
    if (indefiniteLength) {
        return 1;
    }
    return length;
}
class LocalConstructedValueBlock extends ValueBlock {
    constructor({ value = [], isIndefiniteForm = false, ...parameters } = {}){
        super(parameters);
        this.value = value;
        this.isIndefiniteForm = isIndefiniteForm;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const view = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, view, inputOffset, inputLength)) {
            return -1;
        }
        this.valueBeforeDecodeView = view.subarray(inputOffset, inputOffset + inputLength);
        if (this.valueBeforeDecodeView.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
        }
        let currentOffset = inputOffset;
        while(checkLen(this.isIndefiniteForm, inputLength) > 0){
            const returnObject = localFromBER(view, currentOffset, inputLength);
            if (returnObject.offset === -1) {
                this.error = returnObject.result.error;
                this.warnings.concat(returnObject.result.warnings);
                return -1;
            }
            currentOffset = returnObject.offset;
            this.blockLength += returnObject.result.blockLength;
            inputLength -= returnObject.result.blockLength;
            this.value.push(returnObject.result);
            if (this.isIndefiniteForm && returnObject.result.constructor.NAME === END_OF_CONTENT_NAME) {
                break;
            }
        }
        if (this.isIndefiniteForm) {
            if (this.value[this.value.length - 1].constructor.NAME === END_OF_CONTENT_NAME) {
                this.value.pop();
            } else {
                this.warnings.push("No EndOfContent block encoded");
            }
        }
        return currentOffset;
    }
    toBER(sizeOnly, writer) {
        const _writer = writer || new ViewWriter();
        for(let i = 0; i < this.value.length; i++){
            this.value[i].toBER(sizeOnly, _writer);
        }
        if (!writer) {
            return _writer.final();
        }
        return EMPTY_BUFFER;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            isIndefiniteForm: this.isIndefiniteForm,
            value: []
        };
        for (const value of this.value){
            object.value.push(value.toJSON());
        }
        return object;
    }
}
LocalConstructedValueBlock.NAME = "ConstructedValueBlock";
var _a$v;
class Constructed extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, LocalConstructedValueBlock);
        this.idBlock.isConstructed = true;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
        if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
        if (!this.valueBlock.error.length) this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    }
    onAsciiEncoding() {
        const values = [];
        for (const value of this.valueBlock.value){
            values.push(value.toString("ascii").split("\n").map((o)=>`  ${o}`).join("\n"));
        }
        const blockName = this.idBlock.tagClass === 3 ? `[${this.idBlock.tagNumber}]` : this.constructor.NAME;
        return values.length ? `${blockName} :\n${values.join("\n")}` : `${blockName} :`;
    }
}
_a$v = Constructed;
(()=>{
    typeStore.Constructed = _a$v;
})();
Constructed.NAME = "CONSTRUCTED";
class LocalEndOfContentValueBlock extends ValueBlock {
    fromBER(inputBuffer, inputOffset, inputLength) {
        return inputOffset;
    }
    toBER(sizeOnly) {
        return EMPTY_BUFFER;
    }
}
LocalEndOfContentValueBlock.override = "EndOfContentValueBlock";
var _a$u;
class EndOfContent extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, LocalEndOfContentValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 0;
    }
}
_a$u = EndOfContent;
(()=>{
    typeStore.EndOfContent = _a$u;
})();
EndOfContent.NAME = END_OF_CONTENT_NAME;
var _a$t;
class Null extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, ValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 5;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (this.lenBlock.length > 0) this.warnings.push("Non-zero length of value block for Null type");
        if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
        this.blockLength += inputLength;
        if (inputOffset + inputLength > inputBuffer.byteLength) {
            this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
            return -1;
        }
        return inputOffset + inputLength;
    }
    toBER(sizeOnly, writer) {
        const retBuf = new ArrayBuffer(2);
        if (!sizeOnly) {
            const retView = new Uint8Array(retBuf);
            retView[0] = 0x05;
            retView[1] = 0x00;
        }
        if (writer) {
            writer.write(retBuf);
        }
        return retBuf;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME}`;
    }
}
_a$t = Null;
(()=>{
    typeStore.Null = _a$t;
})();
Null.NAME = "NULL";
class LocalBooleanValueBlock extends HexBlock(ValueBlock) {
    constructor({ value, ...parameters } = {}){
        super(parameters);
        if (parameters.valueHex) {
            this.valueHexView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(parameters.valueHex);
        } else {
            this.valueHexView = new Uint8Array(1);
        }
        if (value) {
            this.value = value;
        }
    }
    get value() {
        for (const octet of this.valueHexView){
            if (octet > 0) {
                return true;
            }
        }
        return false;
    }
    set value(value) {
        this.valueHexView[0] = value ? 0xFF : 0x00;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        this.valueHexView = inputView.subarray(inputOffset, inputOffset + inputLength);
        if (inputLength > 1) this.warnings.push("Boolean value encoded in more then 1 octet");
        this.isHexOnly = true;
        pvutils__namespace.utilDecodeTC.call(this);
        this.blockLength = inputLength;
        return inputOffset + inputLength;
    }
    toBER() {
        return this.valueHexView.slice();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.value
        };
    }
}
LocalBooleanValueBlock.NAME = "BooleanValueBlock";
var _a$s;
class Boolean extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, LocalBooleanValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 1;
    }
    getValue() {
        return this.valueBlock.value;
    }
    setValue(value) {
        this.valueBlock.value = value;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.getValue}`;
    }
}
_a$s = Boolean;
(()=>{
    typeStore.Boolean = _a$s;
})();
Boolean.NAME = "BOOLEAN";
class LocalOctetStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
    constructor({ isConstructed = false, ...parameters } = {}){
        super(parameters);
        this.isConstructed = isConstructed;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        let resultOffset = 0;
        if (this.isConstructed) {
            this.isHexOnly = false;
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1) return resultOffset;
            for(let i = 0; i < this.value.length; i++){
                const currentBlockName = this.value[i].constructor.NAME;
                if (currentBlockName === END_OF_CONTENT_NAME) {
                    if (this.isIndefiniteForm) break;
                    else {
                        this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
                        return -1;
                    }
                }
                if (currentBlockName !== OCTET_STRING_NAME) {
                    this.error = "OCTET STRING may consists of OCTET STRINGs only";
                    return -1;
                }
            }
        } else {
            this.isHexOnly = true;
            resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
            this.blockLength = inputLength;
        }
        return resultOffset;
    }
    toBER(sizeOnly, writer) {
        if (this.isConstructed) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
        return sizeOnly ? new ArrayBuffer(this.valueHexView.byteLength) : this.valueHexView.slice().buffer;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            isConstructed: this.isConstructed
        };
    }
}
LocalOctetStringValueBlock.NAME = "OctetStringValueBlock";
var _a$r;
class OctetString extends BaseBlock {
    constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}){
        var _b, _c;
        (_b = parameters.isConstructed) !== null && _b !== void 0 ? _b : parameters.isConstructed = !!((_c = parameters.value) === null || _c === void 0 ? void 0 : _c.length);
        super({
            idBlock: {
                isConstructed: parameters.isConstructed,
                ...idBlock
            },
            lenBlock: {
                ...lenBlock,
                isIndefiniteForm: !!parameters.isIndefiniteForm
            },
            ...parameters
        }, LocalOctetStringValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 4;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isConstructed = this.idBlock.isConstructed;
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        if (inputLength === 0) {
            if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
            if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
            return inputOffset;
        }
        if (!this.valueBlock.isConstructed) {
            const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
            const buf = view.subarray(inputOffset, inputOffset + inputLength);
            try {
                if (buf.byteLength) {
                    const asn = localFromBER(buf, 0, buf.byteLength);
                    if (asn.offset !== -1 && asn.offset === inputLength) {
                        this.valueBlock.value = [
                            asn.result
                        ];
                    }
                }
            } catch (e) {}
        }
        return super.fromBER(inputBuffer, inputOffset, inputLength);
    }
    onAsciiEncoding() {
        if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
            return Constructed.prototype.onAsciiEncoding.call(this);
        }
        return `${this.constructor.NAME} : ${pvtsutils__namespace.Convert.ToHex(this.valueBlock.valueHexView)}`;
    }
    getValue() {
        if (!this.idBlock.isConstructed) {
            return this.valueBlock.valueHexView.slice().buffer;
        }
        const array = [];
        for (const content of this.valueBlock.value){
            if (content instanceof OctetString) {
                array.push(content.valueBlock.valueHexView);
            }
        }
        return pvtsutils__namespace.BufferSourceConverter.concat(array);
    }
}
_a$r = OctetString;
(()=>{
    typeStore.OctetString = _a$r;
})();
OctetString.NAME = OCTET_STRING_NAME;
class LocalBitStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
    constructor({ unusedBits = 0, isConstructed = false, ...parameters } = {}){
        super(parameters);
        this.unusedBits = unusedBits;
        this.isConstructed = isConstructed;
        this.blockLength = this.valueHexView.byteLength;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (!inputLength) {
            return inputOffset;
        }
        let resultOffset = -1;
        if (this.isConstructed) {
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1) return resultOffset;
            for (const value of this.value){
                const currentBlockName = value.constructor.NAME;
                if (currentBlockName === END_OF_CONTENT_NAME) {
                    if (this.isIndefiniteForm) break;
                    else {
                        this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
                        return -1;
                    }
                }
                if (currentBlockName !== BIT_STRING_NAME) {
                    this.error = "BIT STRING may consists of BIT STRINGs only";
                    return -1;
                }
                const valueBlock = value.valueBlock;
                if (this.unusedBits > 0 && valueBlock.unusedBits > 0) {
                    this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only';
                    return -1;
                }
                this.unusedBits = valueBlock.unusedBits;
            }
            return resultOffset;
        }
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        this.unusedBits = intBuffer[0];
        if (this.unusedBits > 7) {
            this.error = "Unused bits for BitString must be in range 0-7";
            return -1;
        }
        if (!this.unusedBits) {
            const buf = intBuffer.subarray(1);
            try {
                if (buf.byteLength) {
                    const asn = localFromBER(buf, 0, buf.byteLength);
                    if (asn.offset !== -1 && asn.offset === inputLength - 1) {
                        this.value = [
                            asn.result
                        ];
                    }
                }
            } catch (e) {}
        }
        this.valueHexView = intBuffer.subarray(1);
        this.blockLength = intBuffer.length;
        return inputOffset + inputLength;
    }
    toBER(sizeOnly, writer) {
        if (this.isConstructed) {
            return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
        }
        if (sizeOnly) {
            return new ArrayBuffer(this.valueHexView.byteLength + 1);
        }
        if (!this.valueHexView.byteLength) {
            return EMPTY_BUFFER;
        }
        const retView = new Uint8Array(this.valueHexView.length + 1);
        retView[0] = this.unusedBits;
        retView.set(this.valueHexView, 1);
        return retView.buffer;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            unusedBits: this.unusedBits,
            isConstructed: this.isConstructed
        };
    }
}
LocalBitStringValueBlock.NAME = "BitStringValueBlock";
var _a$q;
class BitString extends BaseBlock {
    constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}){
        var _b, _c;
        (_b = parameters.isConstructed) !== null && _b !== void 0 ? _b : parameters.isConstructed = !!((_c = parameters.value) === null || _c === void 0 ? void 0 : _c.length);
        super({
            idBlock: {
                isConstructed: parameters.isConstructed,
                ...idBlock
            },
            lenBlock: {
                ...lenBlock,
                isIndefiniteForm: !!parameters.isIndefiniteForm
            },
            ...parameters
        }, LocalBitStringValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 3;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isConstructed = this.idBlock.isConstructed;
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        return super.fromBER(inputBuffer, inputOffset, inputLength);
    }
    onAsciiEncoding() {
        if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
            return Constructed.prototype.onAsciiEncoding.call(this);
        } else {
            const bits = [];
            const valueHex = this.valueBlock.valueHexView;
            for (const byte of valueHex){
                bits.push(byte.toString(2).padStart(8, "0"));
            }
            const bitsStr = bits.join("");
            return `${this.constructor.NAME} : ${bitsStr.substring(0, bitsStr.length - this.valueBlock.unusedBits)}`;
        }
    }
}
_a$q = BitString;
(()=>{
    typeStore.BitString = _a$q;
})();
BitString.NAME = BIT_STRING_NAME;
var _a$p;
function viewAdd(first, second) {
    const c = new Uint8Array([
        0
    ]);
    const firstView = new Uint8Array(first);
    const secondView = new Uint8Array(second);
    let firstViewCopy = firstView.slice(0);
    const firstViewCopyLength = firstViewCopy.length - 1;
    const secondViewCopy = secondView.slice(0);
    const secondViewCopyLength = secondViewCopy.length - 1;
    let value = 0;
    const max = secondViewCopyLength < firstViewCopyLength ? firstViewCopyLength : secondViewCopyLength;
    let counter = 0;
    for(let i = max; i >= 0; i--, counter++){
        switch(true){
            case counter < secondViewCopy.length:
                value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
                break;
            default:
                value = firstViewCopy[firstViewCopyLength - counter] + c[0];
        }
        c[0] = value / 10;
        switch(true){
            case counter >= firstViewCopy.length:
                firstViewCopy = pvutils__namespace.utilConcatView(new Uint8Array([
                    value % 10
                ]), firstViewCopy);
                break;
            default:
                firstViewCopy[firstViewCopyLength - counter] = value % 10;
        }
    }
    if (c[0] > 0) firstViewCopy = pvutils__namespace.utilConcatView(c, firstViewCopy);
    return firstViewCopy;
}
function power2(n) {
    if (n >= powers2.length) {
        for(let p = powers2.length; p <= n; p++){
            const c = new Uint8Array([
                0
            ]);
            let digits = powers2[p - 1].slice(0);
            for(let i = digits.length - 1; i >= 0; i--){
                const newValue = new Uint8Array([
                    (digits[i] << 1) + c[0]
                ]);
                c[0] = newValue[0] / 10;
                digits[i] = newValue[0] % 10;
            }
            if (c[0] > 0) digits = pvutils__namespace.utilConcatView(c, digits);
            powers2.push(digits);
        }
    }
    return powers2[n];
}
function viewSub(first, second) {
    let b = 0;
    const firstView = new Uint8Array(first);
    const secondView = new Uint8Array(second);
    const firstViewCopy = firstView.slice(0);
    const firstViewCopyLength = firstViewCopy.length - 1;
    const secondViewCopy = secondView.slice(0);
    const secondViewCopyLength = secondViewCopy.length - 1;
    let value;
    let counter = 0;
    for(let i = secondViewCopyLength; i >= 0; i--, counter++){
        value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;
        switch(true){
            case value < 0:
                b = 1;
                firstViewCopy[firstViewCopyLength - counter] = value + 10;
                break;
            default:
                b = 0;
                firstViewCopy[firstViewCopyLength - counter] = value;
        }
    }
    if (b > 0) {
        for(let i = firstViewCopyLength - secondViewCopyLength + 1; i >= 0; i--, counter++){
            value = firstViewCopy[firstViewCopyLength - counter] - b;
            if (value < 0) {
                b = 1;
                firstViewCopy[firstViewCopyLength - counter] = value + 10;
            } else {
                b = 0;
                firstViewCopy[firstViewCopyLength - counter] = value;
                break;
            }
        }
    }
    return firstViewCopy.slice();
}
class LocalIntegerValueBlock extends HexBlock(ValueBlock) {
    constructor({ value, ...parameters } = {}){
        super(parameters);
        this._valueDec = 0;
        if (parameters.valueHex) {
            this.setValueHex();
        }
        if (value !== undefined) {
            this.valueDec = value;
        }
    }
    setValueHex() {
        if (this.valueHexView.length >= 4) {
            this.warnings.push("Too big Integer for decoding, hex only");
            this.isHexOnly = true;
            this._valueDec = 0;
        } else {
            this.isHexOnly = false;
            if (this.valueHexView.length > 0) {
                this._valueDec = pvutils__namespace.utilDecodeTC.call(this);
            }
        }
    }
    set valueDec(v) {
        this._valueDec = v;
        this.isHexOnly = false;
        this.valueHexView = new Uint8Array(pvutils__namespace.utilEncodeTC(v));
    }
    get valueDec() {
        return this._valueDec;
    }
    fromDER(inputBuffer, inputOffset, inputLength, expectedLength = 0) {
        const offset = this.fromBER(inputBuffer, inputOffset, inputLength);
        if (offset === -1) return offset;
        const view = this.valueHexView;
        if (view[0] === 0x00 && (view[1] & 0x80) !== 0) {
            this.valueHexView = view.subarray(1);
        } else {
            if (expectedLength !== 0) {
                if (view.length < expectedLength) {
                    if (expectedLength - view.length > 1) expectedLength = view.length + 1;
                    this.valueHexView = view.subarray(expectedLength - view.length);
                }
            }
        }
        return offset;
    }
    toDER(sizeOnly = false) {
        const view = this.valueHexView;
        switch(true){
            case (view[0] & 0x80) !== 0:
                {
                    const updatedView = new Uint8Array(this.valueHexView.length + 1);
                    updatedView[0] = 0x00;
                    updatedView.set(view, 1);
                    this.valueHexView = updatedView;
                }
                break;
            case view[0] === 0x00 && (view[1] & 0x80) === 0:
                {
                    this.valueHexView = this.valueHexView.subarray(1);
                }
                break;
        }
        return this.toBER(sizeOnly);
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
        if (resultOffset === -1) {
            return resultOffset;
        }
        this.setValueHex();
        return resultOffset;
    }
    toBER(sizeOnly) {
        return sizeOnly ? new ArrayBuffer(this.valueHexView.length) : this.valueHexView.slice().buffer;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            valueDec: this.valueDec
        };
    }
    toString() {
        const firstBit = this.valueHexView.length * 8 - 1;
        let digits = new Uint8Array(this.valueHexView.length * 8 / 3);
        let bitNumber = 0;
        let currentByte;
        const asn1View = this.valueHexView;
        let result = "";
        let flag = false;
        for(let byteNumber = asn1View.byteLength - 1; byteNumber >= 0; byteNumber--){
            currentByte = asn1View[byteNumber];
            for(let i = 0; i < 8; i++){
                if ((currentByte & 1) === 1) {
                    switch(bitNumber){
                        case firstBit:
                            digits = viewSub(power2(bitNumber), digits);
                            result = "-";
                            break;
                        default:
                            digits = viewAdd(digits, power2(bitNumber));
                    }
                }
                bitNumber++;
                currentByte >>= 1;
            }
        }
        for(let i = 0; i < digits.length; i++){
            if (digits[i]) flag = true;
            if (flag) result += digitsString.charAt(digits[i]);
        }
        if (flag === false) result += digitsString.charAt(0);
        return result;
    }
}
_a$p = LocalIntegerValueBlock;
LocalIntegerValueBlock.NAME = "IntegerValueBlock";
(()=>{
    Object.defineProperty(_a$p.prototype, "valueHex", {
        set: function(v) {
            this.valueHexView = new Uint8Array(v);
            this.setValueHex();
        },
        get: function() {
            return this.valueHexView.slice().buffer;
        }
    });
})();
var _a$o;
class Integer extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, LocalIntegerValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 2;
    }
    toBigInt() {
        assertBigInt();
        return BigInt(this.valueBlock.toString());
    }
    static fromBigInt(value) {
        assertBigInt();
        const bigIntValue = BigInt(value);
        const writer = new ViewWriter();
        const hex = bigIntValue.toString(16).replace(/^-/, "");
        const view = new Uint8Array(pvtsutils__namespace.Convert.FromHex(hex));
        if (bigIntValue < 0) {
            const first = new Uint8Array(view.length + (view[0] & 0x80 ? 1 : 0));
            first[0] |= 0x80;
            const firstInt = BigInt(`0x${pvtsutils__namespace.Convert.ToHex(first)}`);
            const secondInt = firstInt + bigIntValue;
            const second = pvtsutils__namespace.BufferSourceConverter.toUint8Array(pvtsutils__namespace.Convert.FromHex(secondInt.toString(16)));
            second[0] |= 0x80;
            writer.write(second);
        } else {
            if (view[0] & 0x80) {
                writer.write(new Uint8Array([
                    0
                ]));
            }
            writer.write(view);
        }
        const res = new Integer({
            valueHex: writer.final()
        });
        return res;
    }
    convertToDER() {
        const integer = new Integer({
            valueHex: this.valueBlock.valueHexView
        });
        integer.valueBlock.toDER();
        return integer;
    }
    convertFromDER() {
        return new Integer({
            valueHex: this.valueBlock.valueHexView[0] === 0 ? this.valueBlock.valueHexView.subarray(1) : this.valueBlock.valueHexView
        });
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.valueBlock.toString()}`;
    }
}
_a$o = Integer;
(()=>{
    typeStore.Integer = _a$o;
})();
Integer.NAME = "INTEGER";
var _a$n;
class Enumerated extends Integer {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 10;
    }
}
_a$n = Enumerated;
(()=>{
    typeStore.Enumerated = _a$n;
})();
Enumerated.NAME = "ENUMERATED";
class LocalSidValueBlock extends HexBlock(ValueBlock) {
    constructor({ valueDec = -1, isFirstSid = false, ...parameters } = {}){
        super(parameters);
        this.valueDec = valueDec;
        this.isFirstSid = isFirstSid;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (!inputLength) {
            return inputOffset;
        }
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        this.valueHexView = new Uint8Array(inputLength);
        for(let i = 0; i < inputLength; i++){
            this.valueHexView[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00) break;
        }
        const tempView = new Uint8Array(this.blockLength);
        for(let i = 0; i < this.blockLength; i++){
            tempView[i] = this.valueHexView[i];
        }
        this.valueHexView = tempView;
        if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
        }
        if (this.valueHexView[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
        if (this.blockLength <= 8) this.valueDec = pvutils__namespace.utilFromBase(this.valueHexView, 7);
        else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
        }
        return inputOffset + this.blockLength;
    }
    set valueBigInt(value) {
        assertBigInt();
        let bits = BigInt(value).toString(2);
        while(bits.length % 7){
            bits = "0" + bits;
        }
        const bytes = new Uint8Array(bits.length / 7);
        for(let i = 0; i < bytes.length; i++){
            bytes[i] = parseInt(bits.slice(i * 7, i * 7 + 7), 2) + (i + 1 < bytes.length ? 0x80 : 0);
        }
        this.fromBER(bytes.buffer, 0, bytes.length);
    }
    toBER(sizeOnly) {
        if (this.isHexOnly) {
            if (sizeOnly) return new ArrayBuffer(this.valueHexView.byteLength);
            const curView = this.valueHexView;
            const retView = new Uint8Array(this.blockLength);
            for(let i = 0; i < this.blockLength - 1; i++)retView[i] = curView[i] | 0x80;
            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retView.buffer;
        }
        const encodedBuf = pvutils__namespace.utilToBase(this.valueDec, 7);
        if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return EMPTY_BUFFER;
        }
        const retView = new Uint8Array(encodedBuf.byteLength);
        if (!sizeOnly) {
            const encodedView = new Uint8Array(encodedBuf);
            const len = encodedBuf.byteLength - 1;
            for(let i = 0; i < len; i++)retView[i] = encodedView[i] | 0x80;
            retView[len] = encodedView[len];
        }
        return retView;
    }
    toString() {
        let result = "";
        if (this.isHexOnly) result = pvtsutils__namespace.Convert.ToHex(this.valueHexView);
        else {
            if (this.isFirstSid) {
                let sidValue = this.valueDec;
                if (this.valueDec <= 39) result = "0.";
                else {
                    if (this.valueDec <= 79) {
                        result = "1.";
                        sidValue -= 40;
                    } else {
                        result = "2.";
                        sidValue -= 80;
                    }
                }
                result += sidValue.toString();
            } else result = this.valueDec.toString();
        }
        return result;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            valueDec: this.valueDec,
            isFirstSid: this.isFirstSid
        };
    }
}
LocalSidValueBlock.NAME = "sidBlock";
class LocalObjectIdentifierValueBlock extends ValueBlock {
    constructor({ value = EMPTY_STRING, ...parameters } = {}){
        super(parameters);
        this.value = [];
        if (value) {
            this.fromString(value);
        }
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        let resultOffset = inputOffset;
        while(inputLength > 0){
            const sidBlock = new LocalSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
            if (resultOffset === -1) {
                this.blockLength = 0;
                this.error = sidBlock.error;
                return resultOffset;
            }
            if (this.value.length === 0) sidBlock.isFirstSid = true;
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
        }
        return resultOffset;
    }
    toBER(sizeOnly) {
        const retBuffers = [];
        for(let i = 0; i < this.value.length; i++){
            const valueBuf = this.value[i].toBER(sizeOnly);
            if (valueBuf.byteLength === 0) {
                this.error = this.value[i].error;
                return EMPTY_BUFFER;
            }
            retBuffers.push(valueBuf);
        }
        return concat(retBuffers);
    }
    fromString(string) {
        this.value = [];
        let pos1 = 0;
        let pos2 = 0;
        let sid = "";
        let flag = false;
        do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1) sid = string.substring(pos1);
            else sid = string.substring(pos1, pos2);
            pos1 = pos2 + 1;
            if (flag) {
                const sidBlock = this.value[0];
                let plus = 0;
                switch(sidBlock.valueDec){
                    case 0:
                        break;
                    case 1:
                        plus = 40;
                        break;
                    case 2:
                        plus = 80;
                        break;
                    default:
                        this.value = [];
                        return;
                }
                const parsedSID = parseInt(sid, 10);
                if (isNaN(parsedSID)) return;
                sidBlock.valueDec = parsedSID + plus;
                flag = false;
            } else {
                const sidBlock = new LocalSidValueBlock();
                if (sid > Number.MAX_SAFE_INTEGER) {
                    assertBigInt();
                    const sidValue = BigInt(sid);
                    sidBlock.valueBigInt = sidValue;
                } else {
                    sidBlock.valueDec = parseInt(sid, 10);
                    if (isNaN(sidBlock.valueDec)) return;
                }
                if (!this.value.length) {
                    sidBlock.isFirstSid = true;
                    flag = true;
                }
                this.value.push(sidBlock);
            }
        }while (pos2 !== -1);
    }
    toString() {
        let result = "";
        let isHexOnly = false;
        for(let i = 0; i < this.value.length; i++){
            isHexOnly = this.value[i].isHexOnly;
            let sidStr = this.value[i].toString();
            if (i !== 0) result = `${result}.`;
            if (isHexOnly) {
                sidStr = `{${sidStr}}`;
                if (this.value[i].isFirstSid) result = `2.{${sidStr} - 80}`;
                else result += sidStr;
            } else result += sidStr;
        }
        return result;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            value: this.toString(),
            sidArray: []
        };
        for(let i = 0; i < this.value.length; i++){
            object.sidArray.push(this.value[i].toJSON());
        }
        return object;
    }
}
LocalObjectIdentifierValueBlock.NAME = "ObjectIdentifierValueBlock";
var _a$m;
class ObjectIdentifier extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, LocalObjectIdentifierValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 6;
    }
    getValue() {
        return this.valueBlock.toString();
    }
    setValue(value) {
        this.valueBlock.fromString(value);
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.getValue()
        };
    }
}
_a$m = ObjectIdentifier;
(()=>{
    typeStore.ObjectIdentifier = _a$m;
})();
ObjectIdentifier.NAME = "OBJECT IDENTIFIER";
class LocalRelativeSidValueBlock extends HexBlock(LocalBaseBlock) {
    constructor({ valueDec = 0, ...parameters } = {}){
        super(parameters);
        this.valueDec = valueDec;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (inputLength === 0) return inputOffset;
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) return -1;
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        this.valueHexView = new Uint8Array(inputLength);
        for(let i = 0; i < inputLength; i++){
            this.valueHexView[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00) break;
        }
        const tempView = new Uint8Array(this.blockLength);
        for(let i = 0; i < this.blockLength; i++)tempView[i] = this.valueHexView[i];
        this.valueHexView = tempView;
        if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
        }
        if (this.valueHexView[0] === 0x00) this.warnings.push("Needlessly long format of SID encoding");
        if (this.blockLength <= 8) this.valueDec = pvutils__namespace.utilFromBase(this.valueHexView, 7);
        else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
        }
        return inputOffset + this.blockLength;
    }
    toBER(sizeOnly) {
        if (this.isHexOnly) {
            if (sizeOnly) return new ArrayBuffer(this.valueHexView.byteLength);
            const curView = this.valueHexView;
            const retView = new Uint8Array(this.blockLength);
            for(let i = 0; i < this.blockLength - 1; i++)retView[i] = curView[i] | 0x80;
            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retView.buffer;
        }
        const encodedBuf = pvutils__namespace.utilToBase(this.valueDec, 7);
        if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return EMPTY_BUFFER;
        }
        const retView = new Uint8Array(encodedBuf.byteLength);
        if (!sizeOnly) {
            const encodedView = new Uint8Array(encodedBuf);
            const len = encodedBuf.byteLength - 1;
            for(let i = 0; i < len; i++)retView[i] = encodedView[i] | 0x80;
            retView[len] = encodedView[len];
        }
        return retView.buffer;
    }
    toString() {
        let result = "";
        if (this.isHexOnly) result = pvtsutils__namespace.Convert.ToHex(this.valueHexView);
        else {
            result = this.valueDec.toString();
        }
        return result;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            valueDec: this.valueDec
        };
    }
}
LocalRelativeSidValueBlock.NAME = "relativeSidBlock";
class LocalRelativeObjectIdentifierValueBlock extends ValueBlock {
    constructor({ value = EMPTY_STRING, ...parameters } = {}){
        super(parameters);
        this.value = [];
        if (value) {
            this.fromString(value);
        }
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        let resultOffset = inputOffset;
        while(inputLength > 0){
            const sidBlock = new LocalRelativeSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
            if (resultOffset === -1) {
                this.blockLength = 0;
                this.error = sidBlock.error;
                return resultOffset;
            }
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
        }
        return resultOffset;
    }
    toBER(sizeOnly, writer) {
        const retBuffers = [];
        for(let i = 0; i < this.value.length; i++){
            const valueBuf = this.value[i].toBER(sizeOnly);
            if (valueBuf.byteLength === 0) {
                this.error = this.value[i].error;
                return EMPTY_BUFFER;
            }
            retBuffers.push(valueBuf);
        }
        return concat(retBuffers);
    }
    fromString(string) {
        this.value = [];
        let pos1 = 0;
        let pos2 = 0;
        let sid = "";
        do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1) sid = string.substring(pos1);
            else sid = string.substring(pos1, pos2);
            pos1 = pos2 + 1;
            const sidBlock = new LocalRelativeSidValueBlock();
            sidBlock.valueDec = parseInt(sid, 10);
            if (isNaN(sidBlock.valueDec)) return true;
            this.value.push(sidBlock);
        }while (pos2 !== -1);
        return true;
    }
    toString() {
        let result = "";
        let isHexOnly = false;
        for(let i = 0; i < this.value.length; i++){
            isHexOnly = this.value[i].isHexOnly;
            let sidStr = this.value[i].toString();
            if (i !== 0) result = `${result}.`;
            if (isHexOnly) {
                sidStr = `{${sidStr}}`;
                result += sidStr;
            } else result += sidStr;
        }
        return result;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            value: this.toString(),
            sidArray: []
        };
        for(let i = 0; i < this.value.length; i++)object.sidArray.push(this.value[i].toJSON());
        return object;
    }
}
LocalRelativeObjectIdentifierValueBlock.NAME = "RelativeObjectIdentifierValueBlock";
var _a$l;
class RelativeObjectIdentifier extends BaseBlock {
    constructor(parameters = {}){
        super(parameters, LocalRelativeObjectIdentifierValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 13;
    }
    getValue() {
        return this.valueBlock.toString();
    }
    setValue(value) {
        this.valueBlock.fromString(value);
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.getValue()
        };
    }
}
_a$l = RelativeObjectIdentifier;
(()=>{
    typeStore.RelativeObjectIdentifier = _a$l;
})();
RelativeObjectIdentifier.NAME = "RelativeObjectIdentifier";
var _a$k;
class Sequence extends Constructed {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 16;
    }
}
_a$k = Sequence;
(()=>{
    typeStore.Sequence = _a$k;
})();
Sequence.NAME = "SEQUENCE";
var _a$j;
class Set extends Constructed {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 17;
    }
}
_a$j = Set;
(()=>{
    typeStore.Set = _a$j;
})();
Set.NAME = "SET";
class LocalStringValueBlock extends HexBlock(ValueBlock) {
    constructor({ ...parameters } = {}){
        super(parameters);
        this.isHexOnly = true;
        this.value = EMPTY_STRING;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.value
        };
    }
}
LocalStringValueBlock.NAME = "StringValueBlock";
class LocalSimpleStringValueBlock extends LocalStringValueBlock {
}
LocalSimpleStringValueBlock.NAME = "SimpleStringValueBlock";
class LocalSimpleStringBlock extends BaseStringBlock {
    constructor({ ...parameters } = {}){
        super(parameters, LocalSimpleStringValueBlock);
    }
    fromBuffer(inputBuffer) {
        this.valueBlock.value = String.fromCharCode.apply(null, pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer));
    }
    fromString(inputString) {
        const strLen = inputString.length;
        const view = this.valueBlock.valueHexView = new Uint8Array(strLen);
        for(let i = 0; i < strLen; i++)view[i] = inputString.charCodeAt(i);
        this.valueBlock.value = inputString;
    }
}
LocalSimpleStringBlock.NAME = "SIMPLE STRING";
class LocalUtf8StringValueBlock extends LocalSimpleStringBlock {
    fromBuffer(inputBuffer) {
        this.valueBlock.valueHexView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        try {
            this.valueBlock.value = pvtsutils__namespace.Convert.ToUtf8String(inputBuffer);
        } catch (ex) {
            this.warnings.push(`Error during "decodeURIComponent": ${ex}, using raw string`);
            this.valueBlock.value = pvtsutils__namespace.Convert.ToBinary(inputBuffer);
        }
    }
    fromString(inputString) {
        this.valueBlock.valueHexView = new Uint8Array(pvtsutils__namespace.Convert.FromUtf8String(inputString));
        this.valueBlock.value = inputString;
    }
}
LocalUtf8StringValueBlock.NAME = "Utf8StringValueBlock";
var _a$i;
class Utf8String extends LocalUtf8StringValueBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 12;
    }
}
_a$i = Utf8String;
(()=>{
    typeStore.Utf8String = _a$i;
})();
Utf8String.NAME = "UTF8String";
class LocalBmpStringValueBlock extends LocalSimpleStringBlock {
    fromBuffer(inputBuffer) {
        this.valueBlock.value = pvtsutils__namespace.Convert.ToUtf16String(inputBuffer);
        this.valueBlock.valueHexView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
    }
    fromString(inputString) {
        this.valueBlock.value = inputString;
        this.valueBlock.valueHexView = new Uint8Array(pvtsutils__namespace.Convert.FromUtf16String(inputString));
    }
}
LocalBmpStringValueBlock.NAME = "BmpStringValueBlock";
var _a$h;
class BmpString extends LocalBmpStringValueBlock {
    constructor({ ...parameters } = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 30;
    }
}
_a$h = BmpString;
(()=>{
    typeStore.BmpString = _a$h;
})();
BmpString.NAME = "BMPString";
class LocalUniversalStringValueBlock extends LocalSimpleStringBlock {
    fromBuffer(inputBuffer) {
        const copyBuffer = ArrayBuffer.isView(inputBuffer) ? inputBuffer.slice().buffer : inputBuffer.slice(0);
        const valueView = new Uint8Array(copyBuffer);
        for(let i = 0; i < valueView.length; i += 4){
            valueView[i] = valueView[i + 3];
            valueView[i + 1] = valueView[i + 2];
            valueView[i + 2] = 0x00;
            valueView[i + 3] = 0x00;
        }
        this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
    }
    fromString(inputString) {
        const strLength = inputString.length;
        const valueHexView = this.valueBlock.valueHexView = new Uint8Array(strLength * 4);
        for(let i = 0; i < strLength; i++){
            const codeBuf = pvutils__namespace.utilToBase(inputString.charCodeAt(i), 8);
            const codeView = new Uint8Array(codeBuf);
            if (codeView.length > 4) continue;
            const dif = 4 - codeView.length;
            for(let j = codeView.length - 1; j >= 0; j--)valueHexView[i * 4 + j + dif] = codeView[j];
        }
        this.valueBlock.value = inputString;
    }
}
LocalUniversalStringValueBlock.NAME = "UniversalStringValueBlock";
var _a$g;
class UniversalString extends LocalUniversalStringValueBlock {
    constructor({ ...parameters } = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 28;
    }
}
_a$g = UniversalString;
(()=>{
    typeStore.UniversalString = _a$g;
})();
UniversalString.NAME = "UniversalString";
var _a$f;
class NumericString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 18;
    }
}
_a$f = NumericString;
(()=>{
    typeStore.NumericString = _a$f;
})();
NumericString.NAME = "NumericString";
var _a$e;
class PrintableString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 19;
    }
}
_a$e = PrintableString;
(()=>{
    typeStore.PrintableString = _a$e;
})();
PrintableString.NAME = "PrintableString";
var _a$d;
class TeletexString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 20;
    }
}
_a$d = TeletexString;
(()=>{
    typeStore.TeletexString = _a$d;
})();
TeletexString.NAME = "TeletexString";
var _a$c;
class VideotexString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 21;
    }
}
_a$c = VideotexString;
(()=>{
    typeStore.VideotexString = _a$c;
})();
VideotexString.NAME = "VideotexString";
var _a$b;
class IA5String extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 22;
    }
}
_a$b = IA5String;
(()=>{
    typeStore.IA5String = _a$b;
})();
IA5String.NAME = "IA5String";
var _a$a;
class GraphicString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 25;
    }
}
_a$a = GraphicString;
(()=>{
    typeStore.GraphicString = _a$a;
})();
GraphicString.NAME = "GraphicString";
var _a$9;
class VisibleString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 26;
    }
}
_a$9 = VisibleString;
(()=>{
    typeStore.VisibleString = _a$9;
})();
VisibleString.NAME = "VisibleString";
var _a$8;
class GeneralString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 27;
    }
}
_a$8 = GeneralString;
(()=>{
    typeStore.GeneralString = _a$8;
})();
GeneralString.NAME = "GeneralString";
var _a$7;
class CharacterString extends LocalSimpleStringBlock {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 29;
    }
}
_a$7 = CharacterString;
(()=>{
    typeStore.CharacterString = _a$7;
})();
CharacterString.NAME = "CharacterString";
var _a$6;
class UTCTime extends VisibleString {
    constructor({ value, valueDate, ...parameters } = {}){
        super(parameters);
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        if (value) {
            this.fromString(value);
            this.valueBlock.valueHexView = new Uint8Array(value.length);
            for(let i = 0; i < value.length; i++)this.valueBlock.valueHexView[i] = value.charCodeAt(i);
        }
        if (valueDate) {
            this.fromDate(valueDate);
            this.valueBlock.valueHexView = new Uint8Array(this.toBuffer());
        }
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 23;
    }
    fromBuffer(inputBuffer) {
        this.fromString(String.fromCharCode.apply(null, pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer)));
    }
    toBuffer() {
        const str = this.toString();
        const buffer = new ArrayBuffer(str.length);
        const view = new Uint8Array(buffer);
        for(let i = 0; i < str.length; i++)view[i] = str.charCodeAt(i);
        return buffer;
    }
    fromDate(inputDate) {
        this.year = inputDate.getUTCFullYear();
        this.month = inputDate.getUTCMonth() + 1;
        this.day = inputDate.getUTCDate();
        this.hour = inputDate.getUTCHours();
        this.minute = inputDate.getUTCMinutes();
        this.second = inputDate.getUTCSeconds();
    }
    toDate() {
        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
    }
    fromString(inputString) {
        const parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
        const parserArray = parser.exec(inputString);
        if (parserArray === null) {
            this.error = "Wrong input string for conversion";
            return;
        }
        const year = parseInt(parserArray[1], 10);
        if (year >= 50) this.year = 1900 + year;
        else this.year = 2000 + year;
        this.month = parseInt(parserArray[2], 10);
        this.day = parseInt(parserArray[3], 10);
        this.hour = parseInt(parserArray[4], 10);
        this.minute = parseInt(parserArray[5], 10);
        this.second = parseInt(parserArray[6], 10);
    }
    toString(encoding = "iso") {
        if (encoding === "iso") {
            const outputArray = new Array(7);
            outputArray[0] = pvutils__namespace.padNumber(this.year < 2000 ? this.year - 1900 : this.year - 2000, 2);
            outputArray[1] = pvutils__namespace.padNumber(this.month, 2);
            outputArray[2] = pvutils__namespace.padNumber(this.day, 2);
            outputArray[3] = pvutils__namespace.padNumber(this.hour, 2);
            outputArray[4] = pvutils__namespace.padNumber(this.minute, 2);
            outputArray[5] = pvutils__namespace.padNumber(this.second, 2);
            outputArray[6] = "Z";
            return outputArray.join("");
        }
        return super.toString(encoding);
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.toDate().toISOString()}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            second: this.second
        };
    }
}
_a$6 = UTCTime;
(()=>{
    typeStore.UTCTime = _a$6;
})();
UTCTime.NAME = "UTCTime";
var _a$5;
class GeneralizedTime extends UTCTime {
    constructor(parameters = {}){
        var _b;
        super(parameters);
        (_b = this.millisecond) !== null && _b !== void 0 ? _b : this.millisecond = 0;
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 24;
    }
    fromDate(inputDate) {
        super.fromDate(inputDate);
        this.millisecond = inputDate.getUTCMilliseconds();
    }
    toDate() {
        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
    }
    fromString(inputString) {
        let isUTC = false;
        let timeString = "";
        let dateTimeString = "";
        let fractionPart = 0;
        let parser;
        let hourDifference = 0;
        let minuteDifference = 0;
        if (inputString[inputString.length - 1] === "Z") {
            timeString = inputString.substring(0, inputString.length - 1);
            isUTC = true;
        } else {
            const number = new Number(inputString[inputString.length - 1]);
            if (isNaN(number.valueOf())) throw new Error("Wrong input string for conversion");
            timeString = inputString;
        }
        if (isUTC) {
            if (timeString.indexOf("+") !== -1) throw new Error("Wrong input string for conversion");
            if (timeString.indexOf("-") !== -1) throw new Error("Wrong input string for conversion");
        } else {
            let multiplier = 1;
            let differencePosition = timeString.indexOf("+");
            let differenceString = "";
            if (differencePosition === -1) {
                differencePosition = timeString.indexOf("-");
                multiplier = -1;
            }
            if (differencePosition !== -1) {
                differenceString = timeString.substring(differencePosition + 1);
                timeString = timeString.substring(0, differencePosition);
                if (differenceString.length !== 2 && differenceString.length !== 4) throw new Error("Wrong input string for conversion");
                let number = parseInt(differenceString.substring(0, 2), 10);
                if (isNaN(number.valueOf())) throw new Error("Wrong input string for conversion");
                hourDifference = multiplier * number;
                if (differenceString.length === 4) {
                    number = parseInt(differenceString.substring(2, 4), 10);
                    if (isNaN(number.valueOf())) throw new Error("Wrong input string for conversion");
                    minuteDifference = multiplier * number;
                }
            }
        }
        let fractionPointPosition = timeString.indexOf(".");
        if (fractionPointPosition === -1) fractionPointPosition = timeString.indexOf(",");
        if (fractionPointPosition !== -1) {
            const fractionPartCheck = new Number(`0${timeString.substring(fractionPointPosition)}`);
            if (isNaN(fractionPartCheck.valueOf())) throw new Error("Wrong input string for conversion");
            fractionPart = fractionPartCheck.valueOf();
            dateTimeString = timeString.substring(0, fractionPointPosition);
        } else dateTimeString = timeString;
        switch(true){
            case dateTimeString.length === 8:
                parser = /(\d{4})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1) throw new Error("Wrong input string for conversion");
                break;
            case dateTimeString.length === 10:
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1) {
                    let fractionResult = 60 * fractionPart;
                    this.minute = Math.floor(fractionResult);
                    fractionResult = 60 * (fractionResult - this.minute);
                    this.second = Math.floor(fractionResult);
                    fractionResult = 1000 * (fractionResult - this.second);
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            case dateTimeString.length === 12:
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1) {
                    let fractionResult = 60 * fractionPart;
                    this.second = Math.floor(fractionResult);
                    fractionResult = 1000 * (fractionResult - this.second);
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            case dateTimeString.length === 14:
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1) {
                    const fractionResult = 1000 * fractionPart;
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            default:
                throw new Error("Wrong input string for conversion");
        }
        const parserArray = parser.exec(dateTimeString);
        if (parserArray === null) throw new Error("Wrong input string for conversion");
        for(let j = 1; j < parserArray.length; j++){
            switch(j){
                case 1:
                    this.year = parseInt(parserArray[j], 10);
                    break;
                case 2:
                    this.month = parseInt(parserArray[j], 10);
                    break;
                case 3:
                    this.day = parseInt(parserArray[j], 10);
                    break;
                case 4:
                    this.hour = parseInt(parserArray[j], 10) + hourDifference;
                    break;
                case 5:
                    this.minute = parseInt(parserArray[j], 10) + minuteDifference;
                    break;
                case 6:
                    this.second = parseInt(parserArray[j], 10);
                    break;
                default:
                    throw new Error("Wrong input string for conversion");
            }
        }
        if (isUTC === false) {
            const tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
            this.year = tempDate.getUTCFullYear();
            this.month = tempDate.getUTCMonth();
            this.day = tempDate.getUTCDay();
            this.hour = tempDate.getUTCHours();
            this.minute = tempDate.getUTCMinutes();
            this.second = tempDate.getUTCSeconds();
            this.millisecond = tempDate.getUTCMilliseconds();
        }
    }
    toString(encoding = "iso") {
        if (encoding === "iso") {
            const outputArray = [];
            outputArray.push(pvutils__namespace.padNumber(this.year, 4));
            outputArray.push(pvutils__namespace.padNumber(this.month, 2));
            outputArray.push(pvutils__namespace.padNumber(this.day, 2));
            outputArray.push(pvutils__namespace.padNumber(this.hour, 2));
            outputArray.push(pvutils__namespace.padNumber(this.minute, 2));
            outputArray.push(pvutils__namespace.padNumber(this.second, 2));
            if (this.millisecond !== 0) {
                outputArray.push(".");
                outputArray.push(pvutils__namespace.padNumber(this.millisecond, 3));
            }
            outputArray.push("Z");
            return outputArray.join("");
        }
        return super.toString(encoding);
    }
    toJSON() {
        return {
            ...super.toJSON(),
            millisecond: this.millisecond
        };
    }
}
_a$5 = GeneralizedTime;
(()=>{
    typeStore.GeneralizedTime = _a$5;
})();
GeneralizedTime.NAME = "GeneralizedTime";
var _a$4;
class DATE extends Utf8String {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 31;
    }
}
_a$4 = DATE;
(()=>{
    typeStore.DATE = _a$4;
})();
DATE.NAME = "DATE";
var _a$3;
class TimeOfDay extends Utf8String {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 32;
    }
}
_a$3 = TimeOfDay;
(()=>{
    typeStore.TimeOfDay = _a$3;
})();
TimeOfDay.NAME = "TimeOfDay";
var _a$2;
class DateTime extends Utf8String {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 33;
    }
}
_a$2 = DateTime;
(()=>{
    typeStore.DateTime = _a$2;
})();
DateTime.NAME = "DateTime";
var _a$1;
class Duration extends Utf8String {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 34;
    }
}
_a$1 = Duration;
(()=>{
    typeStore.Duration = _a$1;
})();
Duration.NAME = "Duration";
var _a;
class TIME extends Utf8String {
    constructor(parameters = {}){
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 14;
    }
}
_a = TIME;
(()=>{
    typeStore.TIME = _a;
})();
TIME.NAME = "TIME";
class Any {
    constructor({ name = EMPTY_STRING, optional = false } = {}){
        this.name = name;
        this.optional = optional;
    }
}
class Choice extends Any {
    constructor({ value = [], ...parameters } = {}){
        super(parameters);
        this.value = value;
    }
}
class Repeated extends Any {
    constructor({ value = new Any(), local = false, ...parameters } = {}){
        super(parameters);
        this.value = value;
        this.local = local;
    }
}
class RawData {
    constructor({ data = EMPTY_VIEW } = {}){
        this.dataView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(data);
    }
    get data() {
        return this.dataView.slice().buffer;
    }
    set data(value) {
        this.dataView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(value);
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const endLength = inputOffset + inputLength;
        this.dataView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer).subarray(inputOffset, endLength);
        return endLength;
    }
    toBER(sizeOnly) {
        return this.dataView.slice().buffer;
    }
}
function compareSchema(root, inputData, inputSchema) {
    if (inputSchema instanceof Choice) {
        for(let j = 0; j < inputSchema.value.length; j++){
            const result = compareSchema(root, inputData, inputSchema.value[j]);
            if (result.verified) {
                return {
                    verified: true,
                    result: root
                };
            }
        }
        {
            const _result = {
                verified: false,
                result: {
                    error: "Wrong values for Choice type"
                }
            };
            if (inputSchema.hasOwnProperty(NAME)) _result.name = inputSchema.name;
            return _result;
        }
    }
    if (inputSchema instanceof Any) {
        if (inputSchema.hasOwnProperty(NAME)) root[inputSchema.name] = inputData;
        return {
            verified: true,
            result: root
        };
    }
    if (root instanceof Object === false) {
        return {
            verified: false,
            result: {
                error: "Wrong root object"
            }
        };
    }
    if (inputData instanceof Object === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 data"
            }
        };
    }
    if (inputSchema instanceof Object === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    if (ID_BLOCK in inputSchema === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    if (FROM_BER in inputSchema.idBlock === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    if (TO_BER in inputSchema.idBlock === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    const encodedId = inputSchema.idBlock.toBER(false);
    if (encodedId.byteLength === 0) {
        return {
            verified: false,
            result: {
                error: "Error encoding idBlock for ASN.1 schema"
            }
        };
    }
    const decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);
    if (decodedOffset === -1) {
        return {
            verified: false,
            result: {
                error: "Error decoding idBlock for ASN.1 schema"
            }
        };
    }
    if (inputSchema.idBlock.hasOwnProperty(TAG_CLASS) === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
        return {
            verified: false,
            result: root
        };
    }
    if (inputSchema.idBlock.hasOwnProperty(TAG_NUMBER) === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
        return {
            verified: false,
            result: root
        };
    }
    if (inputSchema.idBlock.hasOwnProperty(IS_CONSTRUCTED) === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
        return {
            verified: false,
            result: root
        };
    }
    if (!(IS_HEX_ONLY in inputSchema.idBlock)) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema"
            }
        };
    }
    if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
        return {
            verified: false,
            result: root
        };
    }
    if (inputSchema.idBlock.isHexOnly) {
        if (VALUE_HEX_VIEW in inputSchema.idBlock === false) {
            return {
                verified: false,
                result: {
                    error: "Wrong ASN.1 schema"
                }
            };
        }
        const schemaView = inputSchema.idBlock.valueHexView;
        const asn1View = inputData.idBlock.valueHexView;
        if (schemaView.length !== asn1View.length) {
            return {
                verified: false,
                result: root
            };
        }
        for(let i = 0; i < schemaView.length; i++){
            if (schemaView[i] !== asn1View[1]) {
                return {
                    verified: false,
                    result: root
                };
            }
        }
    }
    if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) root[inputSchema.name] = inputData;
    }
    if (inputSchema instanceof typeStore.Constructed) {
        let admission = 0;
        let result = {
            verified: false,
            result: {
                error: "Unknown error"
            }
        };
        let maxLength = inputSchema.valueBlock.value.length;
        if (maxLength > 0) {
            if (inputSchema.valueBlock.value[0] instanceof Repeated) {
                maxLength = inputData.valueBlock.value.length;
            }
        }
        if (maxLength === 0) {
            return {
                verified: true,
                result: root
            };
        }
        if (inputData.valueBlock.value.length === 0 && inputSchema.valueBlock.value.length !== 0) {
            let _optional = true;
            for(let i = 0; i < inputSchema.valueBlock.value.length; i++)_optional = _optional && (inputSchema.valueBlock.value[i].optional || false);
            if (_optional) {
                return {
                    verified: true,
                    result: root
                };
            }
            if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name) delete root[inputSchema.name];
            }
            root.error = "Inconsistent object length";
            return {
                verified: false,
                result: root
            };
        }
        for(let i = 0; i < maxLength; i++){
            if (i - admission >= inputData.valueBlock.value.length) {
                if (inputSchema.valueBlock.value[i].optional === false) {
                    const _result = {
                        verified: false,
                        result: root
                    };
                    root.error = "Inconsistent length between ASN.1 data and schema";
                    if (inputSchema.name) {
                        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                        if (inputSchema.name) {
                            delete root[inputSchema.name];
                            _result.name = inputSchema.name;
                        }
                    }
                    return _result;
                }
            } else {
                if (inputSchema.valueBlock.value[0] instanceof Repeated) {
                    result = compareSchema(root, inputData.valueBlock.value[i], inputSchema.valueBlock.value[0].value);
                    if (result.verified === false) {
                        if (inputSchema.valueBlock.value[0].optional) admission++;
                        else {
                            if (inputSchema.name) {
                                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                                if (inputSchema.name) delete root[inputSchema.name];
                            }
                            return result;
                        }
                    }
                    if (NAME in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].name.length > 0) {
                        let arrayRoot = {};
                        if (LOCAL in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].local) arrayRoot = inputData;
                        else arrayRoot = root;
                        if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined") arrayRoot[inputSchema.valueBlock.value[0].name] = [];
                        arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[i]);
                    }
                } else {
                    result = compareSchema(root, inputData.valueBlock.value[i - admission], inputSchema.valueBlock.value[i]);
                    if (result.verified === false) {
                        if (inputSchema.valueBlock.value[i].optional) admission++;
                        else {
                            if (inputSchema.name) {
                                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                                if (inputSchema.name) delete root[inputSchema.name];
                            }
                            return result;
                        }
                    }
                }
            }
        }
        if (result.verified === false) {
            const _result = {
                verified: false,
                result: root
            };
            if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name) {
                    delete root[inputSchema.name];
                    _result.name = inputSchema.name;
                }
            }
            return _result;
        }
        return {
            verified: true,
            result: root
        };
    }
    if (inputSchema.primitiveSchema && VALUE_HEX_VIEW in inputData.valueBlock) {
        const asn1 = localFromBER(inputData.valueBlock.valueHexView);
        if (asn1.offset === -1) {
            const _result = {
                verified: false,
                result: asn1.result
            };
            if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name) {
                    delete root[inputSchema.name];
                    _result.name = inputSchema.name;
                }
            }
            return _result;
        }
        return compareSchema(root, asn1.result, inputSchema.primitiveSchema);
    }
    return {
        verified: true,
        result: root
    };
}
function verifySchema(inputBuffer, inputSchema) {
    if (inputSchema instanceof Object === false) {
        return {
            verified: false,
            result: {
                error: "Wrong ASN.1 schema type"
            }
        };
    }
    const asn1 = localFromBER(pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer));
    if (asn1.offset === -1) {
        return {
            verified: false,
            result: asn1.result
        };
    }
    return compareSchema(asn1.result, asn1.result, inputSchema);
}
exports.Any = Any;
exports.BaseBlock = BaseBlock;
exports.BaseStringBlock = BaseStringBlock;
exports.BitString = BitString;
exports.BmpString = BmpString;
exports.Boolean = Boolean;
exports.CharacterString = CharacterString;
exports.Choice = Choice;
exports.Constructed = Constructed;
exports.DATE = DATE;
exports.DateTime = DateTime;
exports.Duration = Duration;
exports.EndOfContent = EndOfContent;
exports.Enumerated = Enumerated;
exports.GeneralString = GeneralString;
exports.GeneralizedTime = GeneralizedTime;
exports.GraphicString = GraphicString;
exports.HexBlock = HexBlock;
exports.IA5String = IA5String;
exports.Integer = Integer;
exports.Null = Null;
exports.NumericString = NumericString;
exports.ObjectIdentifier = ObjectIdentifier;
exports.OctetString = OctetString;
exports.Primitive = Primitive;
exports.PrintableString = PrintableString;
exports.RawData = RawData;
exports.RelativeObjectIdentifier = RelativeObjectIdentifier;
exports.Repeated = Repeated;
exports.Sequence = Sequence;
exports.Set = Set;
exports.TIME = TIME;
exports.TeletexString = TeletexString;
exports.TimeOfDay = TimeOfDay;
exports.UTCTime = UTCTime;
exports.UniversalString = UniversalString;
exports.Utf8String = Utf8String;
exports.ValueBlock = ValueBlock;
exports.VideotexString = VideotexString;
exports.ViewWriter = ViewWriter;
exports.VisibleString = VisibleString;
exports.compareSchema = compareSchema;
exports.fromBER = fromBER;
exports.verifySchema = verifySchema;


/***/ }),

/***/ 95128:
/***/ ((__unused_webpack_module, exports) => {

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ exports.parse = parse;
exports.serialize = serialize;
/**
 * Module variables.
 * @private
 */ var __toString = Object.prototype.toString;
/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */ var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */ function parse(str, options) {
    if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
    }
    var obj = {};
    var opt = options || {};
    var dec = opt.decode || decode;
    var index = 0;
    while(index < str.length){
        var eqIdx = str.indexOf("=", index);
        // no more cookie pairs
        if (eqIdx === -1) {
            break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
            endIdx = str.length;
        } else if (endIdx < eqIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        var key = str.slice(index, eqIdx).trim();
        // only assign once
        if (undefined === obj[key]) {
            var val = str.slice(eqIdx + 1, endIdx).trim();
            // quoted values
            if (val.charCodeAt(0) === 0x22) {
                val = val.slice(1, -1);
            }
            obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
    }
    return obj;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */ function serialize(name, val, options) {
    var opt = options || {};
    var enc = opt.encode || encode;
    if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
    }
    if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
    }
    var value = enc(val);
    if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
    }
    var str = name + "=" + value;
    if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
            throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
    }
    if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
            throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
    }
    if (opt.httpOnly) {
        str += "; HttpOnly";
    }
    if (opt.secure) {
        str += "; Secure";
    }
    if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError("option priority is invalid");
        }
    }
    if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch(sameSite){
            case true:
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid");
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */ function decode(str) {
    return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */ function encode(val) {
    return encodeURIComponent(val);
}
/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]" || val instanceof Date;
}
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */ function tryDecode(str, decode) {
    try {
        return decode(str);
    } catch (e) {
        return str;
    }
}


/***/ }),

/***/ 79089:
/***/ ((module) => {


var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return target.propertyIsEnumerable(symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
    );
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;


/***/ }),

/***/ 59647:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dotCase = void 0;
var tslib_1 = __webpack_require__(87422);
var no_case_1 = __webpack_require__(15087);
function dotCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return no_case_1.noCase(input, tslib_1.__assign({
        delimiter: "."
    }, options));
}
exports.dotCase = dotCase; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 17810:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.lowerCase = exports.localeLowerCase = void 0;
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */ var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "i",
            I: "ı",
            İ: "i"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "i",
            I: "ı",
            İ: "i"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "i̇",
            J: "j̇",
            Į: "į̇",
            Ì: "i̇̀",
            Í: "i̇́",
            Ĩ: "i̇̃"
        }
    }
};
/**
 * Localized lower case.
 */ function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {
        return lang.map[m];
    }));
    return lowerCase(str);
}
exports.localeLowerCase = localeLowerCase;
/**
 * Lower case as a function.
 */ function lowerCase(str) {
    return str.toLowerCase();
}
exports.lowerCase = lowerCase; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 60095:
/***/ ((module) => {


const isObject = (value)=>typeof value === "object" && value !== null;
const mapObjectSkip = Symbol("skip");
// Customized for this use-case
const isObjectCustom = (value)=>isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
const mapObject = (object, mapper, options, isSeen = new WeakMap())=>{
    options = {
        deep: false,
        target: {},
        ...options
    };
    if (isSeen.has(object)) {
        return isSeen.get(object);
    }
    isSeen.set(object, options.target);
    const { target } = options;
    delete options.target;
    const mapArray = (array)=>array.map((element)=>isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
    if (Array.isArray(object)) {
        return mapArray(object);
    }
    for (const [key, value] of Object.entries(object)){
        const mapResult = mapper(key, value, object);
        if (mapResult === mapObjectSkip) {
            continue;
        }
        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
        // Drop `__proto__` keys.
        if (newKey === "__proto__") {
            continue;
        }
        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
            newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);
        }
        target[newKey] = newValue;
    }
    return target;
};
module.exports = (object, mapper, options)=>{
    if (!isObject(object)) {
        throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
    }
    return mapObject(object, mapper, options);
};
module.exports.mapObjectSkip = mapObjectSkip;


/***/ }),

/***/ 61363:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Modified from https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackNodeRegister.js

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const CLIENT_REFERENCE = Symbol.for("react.client.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const deepProxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            case "displayName":
                return undefined;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw new Error(`Cannot render a Client Context Provider on the Server. ` + `Instead, you can export a Client Component wrapper ` + `that itself renders a Client Context Provider.`);
            default:
                break;
        }
        const expression = String(target.name) + "." + String(name);
        throw new Error(`Cannot access ${expression} on the server. ` + "You cannot dot into a client module from a server component. " + "You can only pass the imported name through.");
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                // Something is conditionally checking which export to use. We'll pretend to be
                // an ESM compat module but then we'll check again on the client.
                const moduleId = target.$$id;
                target.default = Object.defineProperties(function() {
                    throw new Error(`Attempted to call the default export of ${moduleId} from the server ` + `but it's on the client. It's not possible to invoke a client function from ` + `the server, it can only be rendered as a Component or passed to props of a ` + `Client Component.`);
                }, {
                    $$typeof: {
                        value: CLIENT_REFERENCE
                    },
                    // This a placeholder value that tells the client to conditionally use the
                    // whole object or just the default export.
                    $$id: {
                        value: target.$$id + "#"
                    },
                    $$async: {
                        value: target.$$async
                    }
                });
                return true;
            case "then":
                if (target.then) {
                    // Use a cached value
                    return target.then;
                }
                if (!target.$$async) {
                    // If this module is expected to return a Promise (such as an AsyncModule) then
                    // we should resolve that with a client reference that unwraps the Promise on
                    // the client.
                    const clientReference = Object.defineProperties({}, {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: true
                        }
                    });
                    const proxy = new Proxy(clientReference, proxyHandlers);
                    // Treat this as a resolved Promise for React's use()
                    target.status = "fulfilled";
                    target.value = proxy;
                    const then = target.then = Object.defineProperties(function then(resolve, _reject) {
                        // Expose to React.
                        return Promise.resolve(resolve(proxy));
                    }, // export then we should treat it as a reference to that name.
                    {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: false
                        }
                    });
                    return then;
                } else {
                    // Since typeof .then === 'function' is a feature test we'd continue recursing
                    // indefinitely if we return a function. Instead, we return an object reference
                    // if we check further.
                    return undefined;
                }
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            const reference = Object.defineProperties(function() {
                throw new Error(`Attempted to call ${String(name)}() from the server but ${String(name)} is on the client. ` + `It's not possible to invoke a client function from the server, it can ` + `only be rendered as a Component or passed to props of a Client Component.`);
            }, {
                $$typeof: {
                    value: CLIENT_REFERENCE
                },
                $$id: {
                    value: target.$$id + "#" + name
                },
                $$async: {
                    value: target.$$async
                }
            });
            cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        // Pretend to be a Promise in case anyone asks.
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const clientReference = Object.defineProperties({}, {
        $$typeof: {
            value: CLIENT_REFERENCE
        },
        // Represents the whole Module object instead of a particular import.
        $$id: {
            value: moduleId
        },
        $$async: {
            value: false
        }
    });
    return new Proxy(clientReference, proxyHandlers);
} //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 29446:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-canary-9377e1010-20230712";


/***/ }),

/***/ 62947:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(29446);
} else {}


/***/ }),

/***/ 26460:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PageSignatureError: function() {
        return PageSignatureError;
    },
    RemovedPageError: function() {
        return RemovedPageError;
    },
    RemovedUAError: function() {
        return RemovedUAError;
    }
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map


/***/ }),

/***/ 25602:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _request.NextRequest;
    }
}));
const _request = __webpack_require__(40087); //# sourceMappingURL=next-request.js.map


/***/ }),

/***/ 40087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERNALS: function() {
        return INTERNALS;
    },
    NextRequest: function() {
        return NextRequest;
    }
});
const _nexturl = __webpack_require__(12284);
const _utils = __webpack_require__(28217);
const _error = __webpack_require__(26460);
const _cookies = __webpack_require__(81220);
const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils.validateURL)(url);
        super(url, init);
        const nextUrl = new _nexturl.NextURL(url, {
            headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new _cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new _error.RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new _error.RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map


/***/ }),

/***/ 15087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.noCase = void 0;
var lower_case_1 = __webpack_require__(17810);
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [
    /([a-z0-9])([A-Z])/g,
    /([A-Z])([A-Z][a-z])/g
];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */ function noCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\x00$2"), stripRegexp, "\x00");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while(result.charAt(start) === "\x00")start++;
    while(result.charAt(end - 1) === "\x00")end--;
    // Transform each token independently.
    return result.slice(start, end).split("\x00").map(transform).join(delimiter);
}
exports.noCase = noCase;
/**
 * Replace `re` in the input string with the replacement value.
 */ function replace(input, re, value) {
    if (re instanceof RegExp) return input.replace(re, value);
    return re.reduce(function(input, re) {
        return input.replace(re, value);
    }, input);
} //# sourceMappingURL=index.js.map


/***/ }),

/***/ 45452:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Bo = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
/**
 * Tokenize input string.
 */ function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError('Pattern cannot start with "?" at '.concat(j));
            }
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */ function parse(str, options) {
    if (options === void 0) {
        options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function() {
        var result = "";
        var value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
            result += value;
        }
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
__webpack_unused_export__ = parse;
/**
 * Compile a string to a template function for the path.
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
__webpack_unused_export__ = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens, options) {
    if (options === void 0) {
        options = {};
    }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
                }
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
        }
        return path;
    };
}
__webpack_unused_export__ = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */ function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
__webpack_unused_export__ = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */ function regexpToFunction(re, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                    return decode(value, key);
                });
            } else {
                params[key.name] = decode(m[i], key);
            }
        };
        for(var i = 1; i < m.length; i++){
            _loop_1(i);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
__webpack_unused_export__ = regexpToFunction;
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        } else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    } else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                } else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                    } else {
                        route += "(".concat(token.pattern, ")").concat(token.modifier);
                    }
                }
            } else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict) route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
__webpack_unused_export__ = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.Bo = pathToRegexp; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 17367:
/***/ ((__unused_webpack_module, exports) => {

/*!
 * MIT License
 * 
 * Copyright (c) 2017-2022 Peculiar Ventures, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */ 
const ARRAY_BUFFER_NAME = "[object ArrayBuffer]";
class BufferSourceConverter {
    static isArrayBuffer(data) {
        return Object.prototype.toString.call(data) === ARRAY_BUFFER_NAME;
    }
    static toArrayBuffer(data) {
        if (this.isArrayBuffer(data)) {
            return data;
        }
        if (data.byteLength === data.buffer.byteLength) {
            return data.buffer;
        }
        if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
            return data.buffer;
        }
        return this.toUint8Array(data.buffer).slice(data.byteOffset, data.byteOffset + data.byteLength).buffer;
    }
    static toUint8Array(data) {
        return this.toView(data, Uint8Array);
    }
    static toView(data, type) {
        if (data.constructor === type) {
            return data;
        }
        if (this.isArrayBuffer(data)) {
            return new type(data);
        }
        if (this.isArrayBufferView(data)) {
            return new type(data.buffer, data.byteOffset, data.byteLength);
        }
        throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
    }
    static isBufferSource(data) {
        return this.isArrayBufferView(data) || this.isArrayBuffer(data);
    }
    static isArrayBufferView(data) {
        return ArrayBuffer.isView(data) || data && this.isArrayBuffer(data.buffer);
    }
    static isEqual(a, b) {
        const aView = BufferSourceConverter.toUint8Array(a);
        const bView = BufferSourceConverter.toUint8Array(b);
        if (aView.length !== bView.byteLength) {
            return false;
        }
        for(let i = 0; i < aView.length; i++){
            if (aView[i] !== bView[i]) {
                return false;
            }
        }
        return true;
    }
    static concat(...args) {
        let buffers;
        if (Array.isArray(args[0]) && !(args[1] instanceof Function)) {
            buffers = args[0];
        } else if (Array.isArray(args[0]) && args[1] instanceof Function) {
            buffers = args[0];
        } else {
            if (args[args.length - 1] instanceof Function) {
                buffers = args.slice(0, args.length - 1);
            } else {
                buffers = args;
            }
        }
        let size = 0;
        for (const buffer of buffers){
            size += buffer.byteLength;
        }
        const res = new Uint8Array(size);
        let offset = 0;
        for (const buffer of buffers){
            const view = this.toUint8Array(buffer);
            res.set(view, offset);
            offset += view.length;
        }
        if (args[args.length - 1] instanceof Function) {
            return this.toView(res, args[args.length - 1]);
        }
        return res.buffer;
    }
}
const STRING_TYPE = "string";
const HEX_REGEX = /^[0-9a-f]+$/i;
const BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
const BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;
class Utf8Converter {
    static fromString(text) {
        const s = unescape(encodeURIComponent(text));
        const uintArray = new Uint8Array(s.length);
        for(let i = 0; i < s.length; i++){
            uintArray[i] = s.charCodeAt(i);
        }
        return uintArray.buffer;
    }
    static toString(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        let encodedString = "";
        for(let i = 0; i < buf.length; i++){
            encodedString += String.fromCharCode(buf[i]);
        }
        const decodedString = decodeURIComponent(escape(encodedString));
        return decodedString;
    }
}
class Utf16Converter {
    static toString(buffer, littleEndian = false) {
        const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);
        const dataView = new DataView(arrayBuffer);
        let res = "";
        for(let i = 0; i < arrayBuffer.byteLength; i += 2){
            const code = dataView.getUint16(i, littleEndian);
            res += String.fromCharCode(code);
        }
        return res;
    }
    static fromString(text, littleEndian = false) {
        const res = new ArrayBuffer(text.length * 2);
        const dataView = new DataView(res);
        for(let i = 0; i < text.length; i++){
            dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);
        }
        return res;
    }
}
class Convert {
    static isHex(data) {
        return typeof data === STRING_TYPE && HEX_REGEX.test(data);
    }
    static isBase64(data) {
        return typeof data === STRING_TYPE && BASE64_REGEX.test(data);
    }
    static isBase64Url(data) {
        return typeof data === STRING_TYPE && BASE64URL_REGEX.test(data);
    }
    static ToString(buffer, enc = "utf8") {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        switch(enc.toLowerCase()){
            case "utf8":
                return this.ToUtf8String(buf);
            case "binary":
                return this.ToBinary(buf);
            case "hex":
                return this.ToHex(buf);
            case "base64":
                return this.ToBase64(buf);
            case "base64url":
                return this.ToBase64Url(buf);
            case "utf16le":
                return Utf16Converter.toString(buf, true);
            case "utf16":
            case "utf16be":
                return Utf16Converter.toString(buf);
            default:
                throw new Error(`Unknown type of encoding '${enc}'`);
        }
    }
    static FromString(str, enc = "utf8") {
        if (!str) {
            return new ArrayBuffer(0);
        }
        switch(enc.toLowerCase()){
            case "utf8":
                return this.FromUtf8String(str);
            case "binary":
                return this.FromBinary(str);
            case "hex":
                return this.FromHex(str);
            case "base64":
                return this.FromBase64(str);
            case "base64url":
                return this.FromBase64Url(str);
            case "utf16le":
                return Utf16Converter.fromString(str, true);
            case "utf16":
            case "utf16be":
                return Utf16Converter.fromString(str);
            default:
                throw new Error(`Unknown type of encoding '${enc}'`);
        }
    }
    static ToBase64(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        if (typeof btoa !== "undefined") {
            const binary = this.ToString(buf, "binary");
            return btoa(binary);
        } else {
            return Buffer.from(buf).toString("base64");
        }
    }
    static FromBase64(base64) {
        const formatted = this.formatString(base64);
        if (!formatted) {
            return new ArrayBuffer(0);
        }
        if (!Convert.isBase64(formatted)) {
            throw new TypeError("Argument 'base64Text' is not Base64 encoded");
        }
        if (typeof atob !== "undefined") {
            return this.FromBinary(atob(formatted));
        } else {
            return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
        }
    }
    static FromBase64Url(base64url) {
        const formatted = this.formatString(base64url);
        if (!formatted) {
            return new ArrayBuffer(0);
        }
        if (!Convert.isBase64Url(formatted)) {
            throw new TypeError("Argument 'base64url' is not Base64Url encoded");
        }
        return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
    }
    static ToBase64Url(data) {
        return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
    }
    static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {
        switch(encoding){
            case "ascii":
                return this.FromBinary(text);
            case "utf8":
                return Utf8Converter.fromString(text);
            case "utf16":
            case "utf16be":
                return Utf16Converter.fromString(text);
            case "utf16le":
            case "usc2":
                return Utf16Converter.fromString(text, true);
            default:
                throw new Error(`Unknown type of encoding '${encoding}'`);
        }
    }
    static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {
        switch(encoding){
            case "ascii":
                return this.ToBinary(buffer);
            case "utf8":
                return Utf8Converter.toString(buffer);
            case "utf16":
            case "utf16be":
                return Utf16Converter.toString(buffer);
            case "utf16le":
            case "usc2":
                return Utf16Converter.toString(buffer, true);
            default:
                throw new Error(`Unknown type of encoding '${encoding}'`);
        }
    }
    static FromBinary(text) {
        const stringLength = text.length;
        const resultView = new Uint8Array(stringLength);
        for(let i = 0; i < stringLength; i++){
            resultView[i] = text.charCodeAt(i);
        }
        return resultView.buffer;
    }
    static ToBinary(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        let res = "";
        for(let i = 0; i < buf.length; i++){
            res += String.fromCharCode(buf[i]);
        }
        return res;
    }
    static ToHex(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        let result = "";
        const len = buf.length;
        for(let i = 0; i < len; i++){
            const byte = buf[i];
            if (byte < 16) {
                result += "0";
            }
            result += byte.toString(16);
        }
        return result;
    }
    static FromHex(hexString) {
        let formatted = this.formatString(hexString);
        if (!formatted) {
            return new ArrayBuffer(0);
        }
        if (!Convert.isHex(formatted)) {
            throw new TypeError("Argument 'hexString' is not HEX encoded");
        }
        if (formatted.length % 2) {
            formatted = `0${formatted}`;
        }
        const res = new Uint8Array(formatted.length / 2);
        for(let i = 0; i < formatted.length; i = i + 2){
            const c = formatted.slice(i, i + 2);
            res[i / 2] = parseInt(c, 16);
        }
        return res.buffer;
    }
    static ToUtf16String(buffer, littleEndian = false) {
        return Utf16Converter.toString(buffer, littleEndian);
    }
    static FromUtf16String(text, littleEndian = false) {
        return Utf16Converter.fromString(text, littleEndian);
    }
    static Base64Padding(base64) {
        const padCount = 4 - base64.length % 4;
        if (padCount < 4) {
            for(let i = 0; i < padCount; i++){
                base64 += "=";
            }
        }
        return base64;
    }
    static formatString(data) {
        return (data === null || data === void 0 ? void 0 : data.replace(/[\n\r\t ]/g, "")) || "";
    }
}
Convert.DEFAULT_UTF8_ENCODING = "utf8";
function assign(target, ...sources) {
    const res = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        const obj = arguments[i];
        for(const prop in obj){
            res[prop] = obj[prop];
        }
    }
    return res;
}
function combine(...buf) {
    const totalByteLength = buf.map((item)=>item.byteLength).reduce((prev, cur)=>prev + cur);
    const res = new Uint8Array(totalByteLength);
    let currentPos = 0;
    buf.map((item)=>new Uint8Array(item)).forEach((arr)=>{
        for (const item2 of arr){
            res[currentPos++] = item2;
        }
    });
    return res.buffer;
}
function isEqual(bytes1, bytes2) {
    if (!(bytes1 && bytes2)) {
        return false;
    }
    if (bytes1.byteLength !== bytes2.byteLength) {
        return false;
    }
    const b1 = new Uint8Array(bytes1);
    const b2 = new Uint8Array(bytes2);
    for(let i = 0; i < bytes1.byteLength; i++){
        if (b1[i] !== b2[i]) {
            return false;
        }
    }
    return true;
}
exports.BufferSourceConverter = BufferSourceConverter;
exports.Convert = Convert;
exports.assign = assign;
exports.combine = combine;
exports.isEqual = isEqual;


/***/ }),

/***/ 5876:
/***/ ((__unused_webpack_module, exports) => {

/*!
 Copyright (c) Peculiar Ventures, LLC
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function getUTCDate(date) {
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
}
function getParametersValue(parameters, name, defaultValue) {
    var _a;
    if (parameters instanceof Object === false) {
        return defaultValue;
    }
    return (_a = parameters[name]) !== null && _a !== void 0 ? _a : defaultValue;
}
function bufferToHexCodes(inputBuffer, inputOffset = 0, inputLength = inputBuffer.byteLength - inputOffset, insertSpace = false) {
    let result = "";
    for (const item of new Uint8Array(inputBuffer, inputOffset, inputLength)){
        const str = item.toString(16).toUpperCase();
        if (str.length === 1) {
            result += "0";
        }
        result += str;
        if (insertSpace) {
            result += " ";
        }
    }
    return result.trim();
}
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
    if (!(inputBuffer instanceof ArrayBuffer)) {
        baseBlock.error = 'Wrong parameter: inputBuffer must be "ArrayBuffer"';
        return false;
    }
    if (!inputBuffer.byteLength) {
        baseBlock.error = "Wrong parameter: inputBuffer has zero length";
        return false;
    }
    if (inputOffset < 0) {
        baseBlock.error = "Wrong parameter: inputOffset less than zero";
        return false;
    }
    if (inputLength < 0) {
        baseBlock.error = "Wrong parameter: inputLength less than zero";
        return false;
    }
    if (inputBuffer.byteLength - inputOffset - inputLength < 0) {
        baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
        return false;
    }
    return true;
}
function utilFromBase(inputBuffer, inputBase) {
    let result = 0;
    if (inputBuffer.length === 1) {
        return inputBuffer[0];
    }
    for(let i = inputBuffer.length - 1; i >= 0; i--){
        result += inputBuffer[inputBuffer.length - 1 - i] * Math.pow(2, inputBase * i);
    }
    return result;
}
function utilToBase(value, base, reserved = -1) {
    const internalReserved = reserved;
    let internalValue = value;
    let result = 0;
    let biggest = Math.pow(2, base);
    for(let i = 1; i < 8; i++){
        if (value < biggest) {
            let retBuf;
            if (internalReserved < 0) {
                retBuf = new ArrayBuffer(i);
                result = i;
            } else {
                if (internalReserved < i) {
                    return new ArrayBuffer(0);
                }
                retBuf = new ArrayBuffer(internalReserved);
                result = internalReserved;
            }
            const retView = new Uint8Array(retBuf);
            for(let j = i - 1; j >= 0; j--){
                const basis = Math.pow(2, j * base);
                retView[result - j - 1] = Math.floor(internalValue / basis);
                internalValue -= retView[result - j - 1] * basis;
            }
            return retBuf;
        }
        biggest *= Math.pow(2, base);
    }
    return new ArrayBuffer(0);
}
function utilConcatBuf(...buffers) {
    let outputLength = 0;
    let prevLength = 0;
    for (const buffer of buffers){
        outputLength += buffer.byteLength;
    }
    const retBuf = new ArrayBuffer(outputLength);
    const retView = new Uint8Array(retBuf);
    for (const buffer of buffers){
        retView.set(new Uint8Array(buffer), prevLength);
        prevLength += buffer.byteLength;
    }
    return retBuf;
}
function utilConcatView(...views) {
    let outputLength = 0;
    let prevLength = 0;
    for (const view of views){
        outputLength += view.length;
    }
    const retBuf = new ArrayBuffer(outputLength);
    const retView = new Uint8Array(retBuf);
    for (const view of views){
        retView.set(view, prevLength);
        prevLength += view.length;
    }
    return retView;
}
function utilDecodeTC() {
    const buf = new Uint8Array(this.valueHex);
    if (this.valueHex.byteLength >= 2) {
        const condition1 = buf[0] === 0xFF && buf[1] & 0x80;
        const condition2 = buf[0] === 0x00 && (buf[1] & 0x80) === 0x00;
        if (condition1 || condition2) {
            this.warnings.push("Needlessly long format");
        }
    }
    const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    const bigIntView = new Uint8Array(bigIntBuffer);
    for(let i = 0; i < this.valueHex.byteLength; i++){
        bigIntView[i] = 0;
    }
    bigIntView[0] = buf[0] & 0x80;
    const bigInt = utilFromBase(bigIntView, 8);
    const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    const smallIntView = new Uint8Array(smallIntBuffer);
    for(let j = 0; j < this.valueHex.byteLength; j++){
        smallIntView[j] = buf[j];
    }
    smallIntView[0] &= 0x7F;
    const smallInt = utilFromBase(smallIntView, 8);
    return smallInt - bigInt;
}
function utilEncodeTC(value) {
    const modValue = value < 0 ? value * -1 : value;
    let bigInt = 128;
    for(let i = 1; i < 8; i++){
        if (modValue <= bigInt) {
            if (value < 0) {
                const smallInt = bigInt - modValue;
                const retBuf = utilToBase(smallInt, 8, i);
                const retView = new Uint8Array(retBuf);
                retView[0] |= 0x80;
                return retBuf;
            }
            let retBuf = utilToBase(modValue, 8, i);
            let retView = new Uint8Array(retBuf);
            if (retView[0] & 0x80) {
                const tempBuf = retBuf.slice(0);
                const tempView = new Uint8Array(tempBuf);
                retBuf = new ArrayBuffer(retBuf.byteLength + 1);
                retView = new Uint8Array(retBuf);
                for(let k = 0; k < tempBuf.byteLength; k++){
                    retView[k + 1] = tempView[k];
                }
                retView[0] = 0x00;
            }
            return retBuf;
        }
        bigInt *= Math.pow(2, 8);
    }
    return new ArrayBuffer(0);
}
function isEqualBuffer(inputBuffer1, inputBuffer2) {
    if (inputBuffer1.byteLength !== inputBuffer2.byteLength) {
        return false;
    }
    const view1 = new Uint8Array(inputBuffer1);
    const view2 = new Uint8Array(inputBuffer2);
    for(let i = 0; i < view1.length; i++){
        if (view1[i] !== view2[i]) {
            return false;
        }
    }
    return true;
}
function padNumber(inputNumber, fullLength) {
    const str = inputNumber.toString(10);
    if (fullLength < str.length) {
        return "";
    }
    const dif = fullLength - str.length;
    const padding = new Array(dif);
    for(let i = 0; i < dif; i++){
        padding[i] = "0";
    }
    const paddingString = padding.join("");
    return paddingString.concat(str);
}
const base64Template = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const base64UrlTemplate = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
function toBase64(input, useUrlTemplate = false, skipPadding = false, skipLeadingZeros = false) {
    let i = 0;
    let flag1 = 0;
    let flag2 = 0;
    let output = "";
    const template = useUrlTemplate ? base64UrlTemplate : base64Template;
    if (skipLeadingZeros) {
        let nonZeroPosition = 0;
        for(let i = 0; i < input.length; i++){
            if (input.charCodeAt(i) !== 0) {
                nonZeroPosition = i;
                break;
            }
        }
        input = input.slice(nonZeroPosition);
    }
    while(i < input.length){
        const chr1 = input.charCodeAt(i++);
        if (i >= input.length) {
            flag1 = 1;
        }
        const chr2 = input.charCodeAt(i++);
        if (i >= input.length) {
            flag2 = 1;
        }
        const chr3 = input.charCodeAt(i++);
        const enc1 = chr1 >> 2;
        const enc2 = (chr1 & 0x03) << 4 | chr2 >> 4;
        let enc3 = (chr2 & 0x0F) << 2 | chr3 >> 6;
        let enc4 = chr3 & 0x3F;
        if (flag1 === 1) {
            enc3 = enc4 = 64;
        } else {
            if (flag2 === 1) {
                enc4 = 64;
            }
        }
        if (skipPadding) {
            if (enc3 === 64) {
                output += `${template.charAt(enc1)}${template.charAt(enc2)}`;
            } else {
                if (enc4 === 64) {
                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}`;
                } else {
                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;
                }
            }
        } else {
            output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;
        }
    }
    return output;
}
function fromBase64(input, useUrlTemplate = false, cutTailZeros = false) {
    const template = useUrlTemplate ? base64UrlTemplate : base64Template;
    function indexOf(toSearch) {
        for(let i = 0; i < 64; i++){
            if (template.charAt(i) === toSearch) return i;
        }
        return 64;
    }
    function test(incoming) {
        return incoming === 64 ? 0x00 : incoming;
    }
    let i = 0;
    let output = "";
    while(i < input.length){
        const enc1 = indexOf(input.charAt(i++));
        const enc2 = i >= input.length ? 0x00 : indexOf(input.charAt(i++));
        const enc3 = i >= input.length ? 0x00 : indexOf(input.charAt(i++));
        const enc4 = i >= input.length ? 0x00 : indexOf(input.charAt(i++));
        const chr1 = test(enc1) << 2 | test(enc2) >> 4;
        const chr2 = (test(enc2) & 0x0F) << 4 | test(enc3) >> 2;
        const chr3 = (test(enc3) & 0x03) << 6 | test(enc4);
        output += String.fromCharCode(chr1);
        if (enc3 !== 64) {
            output += String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
            output += String.fromCharCode(chr3);
        }
    }
    if (cutTailZeros) {
        const outputLength = output.length;
        let nonZeroStart = -1;
        for(let i = outputLength - 1; i >= 0; i--){
            if (output.charCodeAt(i) !== 0) {
                nonZeroStart = i;
                break;
            }
        }
        if (nonZeroStart !== -1) {
            output = output.slice(0, nonZeroStart + 1);
        } else {
            output = "";
        }
    }
    return output;
}
function arrayBufferToString(buffer) {
    let resultString = "";
    const view = new Uint8Array(buffer);
    for (const element of view){
        resultString += String.fromCharCode(element);
    }
    return resultString;
}
function stringToArrayBuffer(str) {
    const stringLength = str.length;
    const resultBuffer = new ArrayBuffer(stringLength);
    const resultView = new Uint8Array(resultBuffer);
    for(let i = 0; i < stringLength; i++){
        resultView[i] = str.charCodeAt(i);
    }
    return resultBuffer;
}
const log2 = Math.log(2);
function nearestPowerOf2(length) {
    const base = Math.log(length) / log2;
    const floor = Math.floor(base);
    const round = Math.round(base);
    return floor === round ? floor : round;
}
function clearProps(object, propsArray) {
    for (const prop of propsArray){
        delete object[prop];
    }
}
exports.arrayBufferToString = arrayBufferToString;
exports.bufferToHexCodes = bufferToHexCodes;
exports.checkBufferParams = checkBufferParams;
exports.clearProps = clearProps;
exports.fromBase64 = fromBase64;
exports.getParametersValue = getParametersValue;
exports.getUTCDate = getUTCDate;
exports.isEqualBuffer = isEqualBuffer;
exports.nearestPowerOf2 = nearestPowerOf2;
exports.padNumber = padNumber;
exports.stringToArrayBuffer = stringToArrayBuffer;
exports.toBase64 = toBase64;
exports.utilConcatBuf = utilConcatBuf;
exports.utilConcatView = utilConcatView;
exports.utilDecodeTC = utilDecodeTC;
exports.utilEncodeTC = utilEncodeTC;
exports.utilFromBase = utilFromBase;
exports.utilToBase = utilToBase;


/***/ }),

/***/ 37772:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.snakeCase = void 0;
var tslib_1 = __webpack_require__(87422);
var dot_case_1 = __webpack_require__(59647);
function snakeCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return dot_case_1.dotCase(input, tslib_1.__assign({
        delimiter: "_"
    }, options));
}
exports.snakeCase = snakeCase; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 93330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const map = __webpack_require__(60095);
const { snakeCase } = __webpack_require__(37772);
module.exports = function(obj, options) {
    options = Object.assign({
        deep: true,
        exclude: [],
        parsingOptions: {}
    }, options);
    return map(obj, function(key, val) {
        return [
            matches(options.exclude, key) ? key : snakeCase(key, options.parsingOptions),
            val
        ];
    }, options);
};
function matches(patterns, value) {
    return patterns.some(function(pattern) {
        return typeof pattern === "string" ? pattern === value : pattern.test(value);
    });
}


/***/ }),

/***/ 53443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*!
 Copyright (c) Peculiar Ventures, LLC
*/ 
var pvtsutils = __webpack_require__(17367);
var asn1Schema = __webpack_require__(73133);
var tslib = __webpack_require__(87422);
var jsonSchema = __webpack_require__(13706);
var asn1 = __webpack_require__(45240);
function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function(k) {
            if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function() {
                        return e[k];
                    }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}
var asn1__namespace = /*#__PURE__*/ _interopNamespaceDefault(asn1);
class CryptoError extends Error {
}
class AlgorithmError extends CryptoError {
}
class UnsupportedOperationError extends CryptoError {
    constructor(methodName){
        super(`Unsupported operation: ${methodName ? `${methodName}` : ""}`);
    }
}
class OperationError extends CryptoError {
}
class RequiredPropertyError extends CryptoError {
    constructor(propName){
        super(`${propName}: Missing required property`);
    }
}
class PemConverter {
    static toArrayBuffer(pem) {
        const base64 = pem.replace(/-{5}(BEGIN|END) .*-{5}/g, "").replace("\r", "").replace("\n", "");
        return pvtsutils.Convert.FromBase64(base64);
    }
    static toUint8Array(pem) {
        const bytes = this.toArrayBuffer(pem);
        return new Uint8Array(bytes);
    }
    static fromBufferSource(buffer, tag) {
        const base64 = pvtsutils.Convert.ToBase64(buffer);
        let sliced;
        let offset = 0;
        const rows = [];
        while(true){
            sliced = base64.slice(offset, offset = offset + 64);
            if (sliced.length) {
                rows.push(sliced);
                if (sliced.length < 64) {
                    break;
                }
            } else {
                break;
            }
        }
        const upperCaseTag = tag.toUpperCase();
        return `-----BEGIN ${upperCaseTag}-----\n${rows.join("\n")}\n-----END ${upperCaseTag}-----`;
    }
    static isPEM(data) {
        return /-----BEGIN .+-----[A-Za-z0-9+\/\+\=\s\n]+-----END .+-----/i.test(data);
    }
    static getTagName(pem) {
        if (!this.isPEM(pem)) {
            throw new Error("Bad parameter. Incoming data is not right PEM");
        }
        const res = /-----BEGIN (.+)-----/.exec(pem);
        if (!res) {
            throw new Error("Cannot get tag from PEM");
        }
        return res[1];
    }
    static hasTagName(pem, tagName) {
        const tag = this.getTagName(pem);
        return tagName.toLowerCase() === tag.toLowerCase();
    }
    static isCertificate(pem) {
        return this.hasTagName(pem, "certificate");
    }
    static isCertificateRequest(pem) {
        return this.hasTagName(pem, "certificate request");
    }
    static isCRL(pem) {
        return this.hasTagName(pem, "x509 crl");
    }
    static isPublicKey(pem) {
        return this.hasTagName(pem, "public key");
    }
}
function isJWK(data) {
    return typeof data === "object" && "kty" in data;
}
class ProviderCrypto {
    async digest(...args) {
        this.checkDigest.apply(this, args);
        return this.onDigest.apply(this, args);
    }
    checkDigest(algorithm, data) {
        this.checkAlgorithmName(algorithm);
    }
    async onDigest(algorithm, data) {
        throw new UnsupportedOperationError("digest");
    }
    async generateKey(...args) {
        this.checkGenerateKey.apply(this, args);
        return this.onGenerateKey.apply(this, args);
    }
    checkGenerateKey(algorithm, extractable, keyUsages, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkGenerateKeyParams(algorithm);
        if (!(keyUsages && keyUsages.length)) {
            throw new TypeError(`Usages cannot be empty when creating a key.`);
        }
        let allowedUsages;
        if (Array.isArray(this.usages)) {
            allowedUsages = this.usages;
        } else {
            allowedUsages = this.usages.privateKey.concat(this.usages.publicKey);
        }
        this.checkKeyUsages(keyUsages, allowedUsages);
    }
    checkGenerateKeyParams(algorithm) {}
    async onGenerateKey(algorithm, extractable, keyUsages, ...args) {
        throw new UnsupportedOperationError("generateKey");
    }
    async sign(...args) {
        this.checkSign.apply(this, args);
        return this.onSign.apply(this, args);
    }
    checkSign(algorithm, key, data, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, "sign");
    }
    async onSign(algorithm, key, data, ...args) {
        throw new UnsupportedOperationError("sign");
    }
    async verify(...args) {
        this.checkVerify.apply(this, args);
        return this.onVerify.apply(this, args);
    }
    checkVerify(algorithm, key, signature, data, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, "verify");
    }
    async onVerify(algorithm, key, signature, data, ...args) {
        throw new UnsupportedOperationError("verify");
    }
    async encrypt(...args) {
        this.checkEncrypt.apply(this, args);
        return this.onEncrypt.apply(this, args);
    }
    checkEncrypt(algorithm, key, data, options = {}, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, options.keyUsage ? "encrypt" : void 0);
    }
    async onEncrypt(algorithm, key, data, ...args) {
        throw new UnsupportedOperationError("encrypt");
    }
    async decrypt(...args) {
        this.checkDecrypt.apply(this, args);
        return this.onDecrypt.apply(this, args);
    }
    checkDecrypt(algorithm, key, data, options = {}, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(key, options.keyUsage ? "decrypt" : void 0);
    }
    async onDecrypt(algorithm, key, data, ...args) {
        throw new UnsupportedOperationError("decrypt");
    }
    async deriveBits(...args) {
        this.checkDeriveBits.apply(this, args);
        return this.onDeriveBits.apply(this, args);
    }
    checkDeriveBits(algorithm, baseKey, length, options = {}, ...args) {
        this.checkAlgorithmName(algorithm);
        this.checkAlgorithmParams(algorithm);
        this.checkCryptoKey(baseKey, options.keyUsage ? "deriveBits" : void 0);
        if (length % 8 !== 0) {
            throw new OperationError("length: Is not multiple of 8");
        }
    }
    async onDeriveBits(algorithm, baseKey, length, ...args) {
        throw new UnsupportedOperationError("deriveBits");
    }
    async exportKey(...args) {
        this.checkExportKey.apply(this, args);
        return this.onExportKey.apply(this, args);
    }
    checkExportKey(format, key, ...args) {
        this.checkKeyFormat(format);
        this.checkCryptoKey(key);
        if (!key.extractable) {
            throw new CryptoError("key: Is not extractable");
        }
    }
    async onExportKey(format, key, ...args) {
        throw new UnsupportedOperationError("exportKey");
    }
    async importKey(...args) {
        this.checkImportKey.apply(this, args);
        return this.onImportKey.apply(this, args);
    }
    checkImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        this.checkKeyFormat(format);
        this.checkKeyData(format, keyData);
        this.checkAlgorithmName(algorithm);
        this.checkImportParams(algorithm);
        if (Array.isArray(this.usages)) {
            this.checkKeyUsages(keyUsages, this.usages);
        }
    }
    async onImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        throw new UnsupportedOperationError("importKey");
    }
    checkAlgorithmName(algorithm) {
        if (algorithm.name.toLowerCase() !== this.name.toLowerCase()) {
            throw new AlgorithmError("Unrecognized name");
        }
    }
    checkAlgorithmParams(algorithm) {}
    checkDerivedKeyParams(algorithm) {}
    checkKeyUsages(usages, allowed) {
        for (const usage of usages){
            if (allowed.indexOf(usage) === -1) {
                throw new TypeError("Cannot create a key using the specified key usages");
            }
        }
    }
    checkCryptoKey(key, keyUsage) {
        this.checkAlgorithmName(key.algorithm);
        if (keyUsage && key.usages.indexOf(keyUsage) === -1) {
            throw new CryptoError(`key does not match that of operation`);
        }
    }
    checkRequiredProperty(data, propName) {
        if (!(propName in data)) {
            throw new RequiredPropertyError(propName);
        }
    }
    checkHashAlgorithm(algorithm, hashAlgorithms) {
        for (const item of hashAlgorithms){
            if (item.toLowerCase() === algorithm.name.toLowerCase()) {
                return;
            }
        }
        throw new OperationError(`hash: Must be one of ${hashAlgorithms.join(", ")}`);
    }
    checkImportParams(algorithm) {}
    checkKeyFormat(format) {
        switch(format){
            case "raw":
            case "pkcs8":
            case "spki":
            case "jwk":
                break;
            default:
                throw new TypeError("format: Is invalid value. Must be 'jwk', 'raw', 'spki', or 'pkcs8'");
        }
    }
    checkKeyData(format, keyData) {
        if (!keyData) {
            throw new TypeError("keyData: Cannot be empty on empty on key importing");
        }
        if (format === "jwk") {
            if (!isJWK(keyData)) {
                throw new TypeError("keyData: Is not JsonWebToken");
            }
        } else if (!pvtsutils.BufferSourceConverter.isBufferSource(keyData)) {
            throw new TypeError("keyData: Is not ArrayBufferView or ArrayBuffer");
        }
    }
    prepareData(data) {
        return pvtsutils.BufferSourceConverter.toArrayBuffer(data);
    }
}
class AesProvider extends ProviderCrypto {
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not of type Number");
        }
        switch(algorithm.length){
            case 128:
            case 192:
            case 256:
                break;
            default:
                throw new TypeError("length: Must be 128, 192, or 256");
        }
    }
    checkDerivedKeyParams(algorithm) {
        this.checkGenerateKeyParams(algorithm);
    }
}
class AesCbcProvider extends AesProvider {
    constructor(){
        super(...arguments);
        this.name = "AES-CBC";
        this.usages = [
            "encrypt",
            "decrypt",
            "wrapKey",
            "unwrapKey"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "iv");
        if (!(algorithm.iv instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.iv))) {
            throw new TypeError("iv: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        if (algorithm.iv.byteLength !== 16) {
            throw new TypeError("iv: Must have length 16 bytes");
        }
    }
}
class AesCmacProvider extends AesProvider {
    constructor(){
        super(...arguments);
        this.name = "AES-CMAC";
        this.usages = [
            "sign",
            "verify"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not a Number");
        }
        if (algorithm.length < 1) {
            throw new OperationError("length: Must be more than 0");
        }
    }
}
class AesCtrProvider extends AesProvider {
    constructor(){
        super(...arguments);
        this.name = "AES-CTR";
        this.usages = [
            "encrypt",
            "decrypt",
            "wrapKey",
            "unwrapKey"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "counter");
        if (!(algorithm.counter instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.counter))) {
            throw new TypeError("counter: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        if (algorithm.counter.byteLength !== 16) {
            throw new TypeError("iv: Must have length 16 bytes");
        }
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not a Number");
        }
        if (algorithm.length < 1) {
            throw new OperationError("length: Must be more than 0");
        }
    }
}
class AesEcbProvider extends AesProvider {
    constructor(){
        super(...arguments);
        this.name = "AES-ECB";
        this.usages = [
            "encrypt",
            "decrypt",
            "wrapKey",
            "unwrapKey"
        ];
    }
}
class AesGcmProvider extends AesProvider {
    constructor(){
        super(...arguments);
        this.name = "AES-GCM";
        this.usages = [
            "encrypt",
            "decrypt",
            "wrapKey",
            "unwrapKey"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "iv");
        if (!(algorithm.iv instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.iv))) {
            throw new TypeError("iv: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        if (algorithm.iv.byteLength < 1) {
            throw new OperationError("iv: Must have length more than 0 and less than 2^64 - 1");
        }
        if (!("tagLength" in algorithm)) {
            algorithm.tagLength = 128;
        }
        switch(algorithm.tagLength){
            case 32:
            case 64:
            case 96:
            case 104:
            case 112:
            case 120:
            case 128:
                break;
            default:
                throw new OperationError("tagLength: Must be one of 32, 64, 96, 104, 112, 120 or 128");
        }
    }
}
class AesKwProvider extends AesProvider {
    constructor(){
        super(...arguments);
        this.name = "AES-KW";
        this.usages = [
            "wrapKey",
            "unwrapKey"
        ];
    }
}
class DesProvider extends ProviderCrypto {
    constructor(){
        super(...arguments);
        this.usages = [
            "encrypt",
            "decrypt",
            "wrapKey",
            "unwrapKey"
        ];
    }
    checkAlgorithmParams(algorithm) {
        if (this.ivSize) {
            this.checkRequiredProperty(algorithm, "iv");
            if (!(algorithm.iv instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.iv))) {
                throw new TypeError("iv: Is not of type '(ArrayBuffer or ArrayBufferView)'");
            }
            if (algorithm.iv.byteLength !== this.ivSize) {
                throw new TypeError(`iv: Must have length ${this.ivSize} bytes`);
            }
        }
    }
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "length");
        if (typeof algorithm.length !== "number") {
            throw new TypeError("length: Is not of type Number");
        }
        if (algorithm.length !== this.keySizeBits) {
            throw new OperationError(`algorithm.length: Must be ${this.keySizeBits}`);
        }
    }
    checkDerivedKeyParams(algorithm) {
        this.checkGenerateKeyParams(algorithm);
    }
}
class RsaProvider extends ProviderCrypto {
    constructor(){
        super(...arguments);
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512"
        ];
    }
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        this.checkRequiredProperty(algorithm, "publicExponent");
        if (!(algorithm.publicExponent && algorithm.publicExponent instanceof Uint8Array)) {
            throw new TypeError("publicExponent: Missing or not a Uint8Array");
        }
        const publicExponent = pvtsutils.Convert.ToBase64(algorithm.publicExponent);
        if (!(publicExponent === "Aw==" || publicExponent === "AQAB")) {
            throw new TypeError("publicExponent: Must be [3] or [1,0,1]");
        }
        this.checkRequiredProperty(algorithm, "modulusLength");
        if (algorithm.modulusLength % 8 || algorithm.modulusLength < 256 || algorithm.modulusLength > 16384) {
            throw new TypeError("The modulus length must be a multiple of 8 bits and >= 256 and <= 16384");
        }
    }
    checkImportParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
    }
}
class RsaSsaProvider extends RsaProvider {
    constructor(){
        super(...arguments);
        this.name = "RSASSA-PKCS1-v1_5";
        this.usages = {
            privateKey: [
                "sign"
            ],
            publicKey: [
                "verify"
            ]
        };
    }
}
class RsaPssProvider extends RsaProvider {
    constructor(){
        super(...arguments);
        this.name = "RSA-PSS";
        this.usages = {
            privateKey: [
                "sign"
            ],
            publicKey: [
                "verify"
            ]
        };
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "saltLength");
        if (typeof algorithm.saltLength !== "number") {
            throw new TypeError("saltLength: Is not a Number");
        }
        if (algorithm.saltLength < 0) {
            throw new RangeError("saltLength: Must be positive number");
        }
    }
}
class RsaOaepProvider extends RsaProvider {
    constructor(){
        super(...arguments);
        this.name = "RSA-OAEP";
        this.usages = {
            privateKey: [
                "decrypt",
                "unwrapKey"
            ],
            publicKey: [
                "encrypt",
                "wrapKey"
            ]
        };
    }
    checkAlgorithmParams(algorithm) {
        if (algorithm.label && !(algorithm.label instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.label))) {
            throw new TypeError("label: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
    }
}
class EllipticProvider extends ProviderCrypto {
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "namedCurve");
        this.checkNamedCurve(algorithm.namedCurve);
    }
    checkNamedCurve(namedCurve) {
        for (const item of this.namedCurves){
            if (item.toLowerCase() === namedCurve.toLowerCase()) {
                return;
            }
        }
        throw new OperationError(`namedCurve: Must be one of ${this.namedCurves.join(", ")}`);
    }
}
class EcdsaProvider extends EllipticProvider {
    constructor(){
        super(...arguments);
        this.name = "ECDSA";
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512"
        ];
        this.usages = {
            privateKey: [
                "sign"
            ],
            publicKey: [
                "verify"
            ]
        };
        this.namedCurves = [
            "P-256",
            "P-384",
            "P-521",
            "K-256"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
    }
}
const KEY_TYPES = [
    "secret",
    "private",
    "public"
];
class CryptoKey {
    static create(algorithm, type, extractable, usages) {
        const key = new this();
        key.algorithm = algorithm;
        key.type = type;
        key.extractable = extractable;
        key.usages = usages;
        return key;
    }
    static isKeyType(data) {
        return KEY_TYPES.indexOf(data) !== -1;
    }
    get [Symbol.toStringTag]() {
        return "CryptoKey";
    }
}
class EcdhProvider extends EllipticProvider {
    constructor(){
        super(...arguments);
        this.name = "ECDH";
        this.usages = {
            privateKey: [
                "deriveBits",
                "deriveKey"
            ],
            publicKey: []
        };
        this.namedCurves = [
            "P-256",
            "P-384",
            "P-521",
            "K-256"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "public");
        if (!(algorithm.public instanceof CryptoKey)) {
            throw new TypeError("public: Is not a CryptoKey");
        }
        if (algorithm.public.type !== "public") {
            throw new OperationError("public: Is not a public key");
        }
        if (algorithm.public.algorithm.name !== this.name) {
            throw new OperationError(`public: Is not ${this.name} key`);
        }
    }
}
class EcdhEsProvider extends EcdhProvider {
    constructor(){
        super(...arguments);
        this.name = "ECDH-ES";
        this.namedCurves = [
            "X25519",
            "X448"
        ];
    }
}
class EdDsaProvider extends EllipticProvider {
    constructor(){
        super(...arguments);
        this.name = "EdDSA";
        this.usages = {
            privateKey: [
                "sign"
            ],
            publicKey: [
                "verify"
            ]
        };
        this.namedCurves = [
            "Ed25519",
            "Ed448"
        ];
    }
}
let ObjectIdentifier = class ObjectIdentifier {
    constructor(value){
        if (value) {
            this.value = value;
        }
    }
};
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.ObjectIdentifier
    })
], ObjectIdentifier.prototype, "value", void 0);
ObjectIdentifier = tslib.__decorate([
    asn1Schema.AsnType({
        type: asn1Schema.AsnTypeTypes.Choice
    })
], ObjectIdentifier);
class AlgorithmIdentifier {
    constructor(params){
        Object.assign(this, params);
    }
}
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.ObjectIdentifier
    })
], AlgorithmIdentifier.prototype, "algorithm", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Any,
        optional: true
    })
], AlgorithmIdentifier.prototype, "parameters", void 0);
class PrivateKeyInfo {
    constructor(){
        this.version = 0;
        this.privateKeyAlgorithm = new AlgorithmIdentifier();
        this.privateKey = new ArrayBuffer(0);
    }
}
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer
    })
], PrivateKeyInfo.prototype, "version", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: AlgorithmIdentifier
    })
], PrivateKeyInfo.prototype, "privateKeyAlgorithm", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.OctetString
    })
], PrivateKeyInfo.prototype, "privateKey", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Any,
        optional: true
    })
], PrivateKeyInfo.prototype, "attributes", void 0);
class PublicKeyInfo {
    constructor(){
        this.publicKeyAlgorithm = new AlgorithmIdentifier();
        this.publicKey = new ArrayBuffer(0);
    }
}
tslib.__decorate([
    asn1Schema.AsnProp({
        type: AlgorithmIdentifier
    })
], PublicKeyInfo.prototype, "publicKeyAlgorithm", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.BitString
    })
], PublicKeyInfo.prototype, "publicKey", void 0);
const JsonBase64UrlArrayBufferConverter = {
    fromJSON: (value)=>pvtsutils.Convert.FromBase64Url(value),
    toJSON: (value)=>pvtsutils.Convert.ToBase64Url(new Uint8Array(value))
};
const AsnIntegerArrayBufferConverter = {
    fromASN: (value)=>{
        const valueHex = value.valueBlock.valueHex;
        return !new Uint8Array(valueHex)[0] ? value.valueBlock.valueHex.slice(1) : value.valueBlock.valueHex;
    },
    toASN: (value)=>{
        const valueHex = new Uint8Array(value)[0] > 127 ? pvtsutils.combine(new Uint8Array([
            0
        ]).buffer, value) : value;
        return new asn1__namespace.Integer({
            valueHex
        });
    }
};
var index$3 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    AsnIntegerArrayBufferConverter: AsnIntegerArrayBufferConverter,
    JsonBase64UrlArrayBufferConverter: JsonBase64UrlArrayBufferConverter
});
class RsaPrivateKey {
    constructor(){
        this.version = 0;
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
        this.privateExponent = new ArrayBuffer(0);
        this.prime1 = new ArrayBuffer(0);
        this.prime2 = new ArrayBuffer(0);
        this.exponent1 = new ArrayBuffer(0);
        this.exponent2 = new ArrayBuffer(0);
        this.coefficient = new ArrayBuffer(0);
    }
}
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: asn1Schema.AsnIntegerConverter
    })
], RsaPrivateKey.prototype, "version", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "n",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "modulus", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "e",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "publicExponent", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "d",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "privateExponent", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "p",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "prime1", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "q",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "prime2", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "dp",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "exponent1", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "dq",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "exponent2", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "qi",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPrivateKey.prototype, "coefficient", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Any,
        optional: true
    })
], RsaPrivateKey.prototype, "otherPrimeInfos", void 0);
class RsaPublicKey {
    constructor(){
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
    }
}
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "n",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPublicKey.prototype, "modulus", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter
    }),
    jsonSchema.JsonProp({
        name: "e",
        converter: JsonBase64UrlArrayBufferConverter
    })
], RsaPublicKey.prototype, "publicExponent", void 0);
let EcPublicKey = class EcPublicKey {
    constructor(value){
        this.value = new ArrayBuffer(0);
        if (value) {
            this.value = value;
        }
    }
    toJSON() {
        let bytes = new Uint8Array(this.value);
        if (bytes[0] !== 0x04) {
            throw new CryptoError("Wrong ECPoint. Current version supports only Uncompressed (0x04) point");
        }
        bytes = new Uint8Array(this.value.slice(1));
        const size = bytes.length / 2;
        const offset = 0;
        const json = {
            x: pvtsutils.Convert.ToBase64Url(bytes.buffer.slice(offset, offset + size)),
            y: pvtsutils.Convert.ToBase64Url(bytes.buffer.slice(offset + size, offset + size + size))
        };
        return json;
    }
    fromJSON(json) {
        if (!("x" in json)) {
            throw new Error("x: Missing required property");
        }
        if (!("y" in json)) {
            throw new Error("y: Missing required property");
        }
        const x = pvtsutils.Convert.FromBase64Url(json.x);
        const y = pvtsutils.Convert.FromBase64Url(json.y);
        const value = pvtsutils.combine(new Uint8Array([
            0x04
        ]).buffer, x, y);
        this.value = new Uint8Array(value).buffer;
        return this;
    }
};
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.OctetString
    })
], EcPublicKey.prototype, "value", void 0);
EcPublicKey = tslib.__decorate([
    asn1Schema.AsnType({
        type: asn1Schema.AsnTypeTypes.Choice
    })
], EcPublicKey);
class EcPrivateKey {
    constructor(){
        this.version = 1;
        this.privateKey = new ArrayBuffer(0);
    }
    fromJSON(json) {
        if (!("d" in json)) {
            throw new Error("d: Missing required property");
        }
        this.privateKey = pvtsutils.Convert.FromBase64Url(json.d);
        if ("x" in json) {
            const publicKey = new EcPublicKey();
            publicKey.fromJSON(json);
            const asn = asn1Schema.AsnSerializer.toASN(publicKey);
            if ("valueHex" in asn.valueBlock) {
                this.publicKey = asn.valueBlock.valueHex;
            }
        }
        return this;
    }
    toJSON() {
        const jwk = {};
        jwk.d = pvtsutils.Convert.ToBase64Url(this.privateKey);
        if (this.publicKey) {
            Object.assign(jwk, new EcPublicKey(this.publicKey).toJSON());
        }
        return jwk;
    }
}
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: asn1Schema.AsnIntegerConverter
    })
], EcPrivateKey.prototype, "version", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.OctetString
    })
], EcPrivateKey.prototype, "privateKey", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        context: 0,
        type: asn1Schema.AsnPropTypes.Any,
        optional: true
    })
], EcPrivateKey.prototype, "parameters", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        context: 1,
        type: asn1Schema.AsnPropTypes.BitString,
        optional: true
    })
], EcPrivateKey.prototype, "publicKey", void 0);
const AsnIntegerWithoutPaddingConverter = {
    fromASN: (value)=>{
        const bytes = new Uint8Array(value.valueBlock.valueHex);
        return bytes[0] === 0 ? bytes.buffer.slice(1) : bytes.buffer;
    },
    toASN: (value)=>{
        const bytes = new Uint8Array(value);
        if (bytes[0] > 127) {
            const newValue = new Uint8Array(bytes.length + 1);
            newValue.set(bytes, 1);
            return new asn1__namespace.Integer({
                valueHex: newValue.buffer
            });
        }
        return new asn1__namespace.Integer({
            valueHex: value
        });
    }
};
var index$2 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    AsnIntegerWithoutPaddingConverter: AsnIntegerWithoutPaddingConverter
});
class EcUtils {
    static decodePoint(data, pointSize) {
        const view = pvtsutils.BufferSourceConverter.toUint8Array(data);
        if (view.length === 0 || view[0] !== 4) {
            throw new Error("Only uncompressed point format supported");
        }
        const n = (view.length - 1) / 2;
        if (n !== Math.ceil(pointSize / 8)) {
            throw new Error("Point does not match field size");
        }
        const xb = view.slice(1, n + 1);
        const yb = view.slice(n + 1, n + 1 + n);
        return {
            x: xb,
            y: yb
        };
    }
    static encodePoint(point, pointSize) {
        const size = Math.ceil(pointSize / 8);
        if (point.x.byteLength !== size || point.y.byteLength !== size) {
            throw new Error("X,Y coordinates don't match point size criteria");
        }
        const x = pvtsutils.BufferSourceConverter.toUint8Array(point.x);
        const y = pvtsutils.BufferSourceConverter.toUint8Array(point.y);
        const res = new Uint8Array(size * 2 + 1);
        res[0] = 4;
        res.set(x, 1);
        res.set(y, size + 1);
        return res;
    }
    static getSize(pointSize) {
        return Math.ceil(pointSize / 8);
    }
    static encodeSignature(signature, pointSize) {
        const size = this.getSize(pointSize);
        const r = pvtsutils.BufferSourceConverter.toUint8Array(signature.r);
        const s = pvtsutils.BufferSourceConverter.toUint8Array(signature.s);
        const res = new Uint8Array(size * 2);
        res.set(this.padStart(r, size));
        res.set(this.padStart(s, size), size);
        return res;
    }
    static decodeSignature(data, pointSize) {
        const size = this.getSize(pointSize);
        const view = pvtsutils.BufferSourceConverter.toUint8Array(data);
        if (view.length !== size * 2) {
            throw new Error("Incorrect size of the signature");
        }
        const r = view.slice(0, size);
        const s = view.slice(size);
        return {
            r: this.trimStart(r),
            s: this.trimStart(s)
        };
    }
    static trimStart(data) {
        let i = 0;
        while(i < data.length - 1 && data[i] === 0){
            i++;
        }
        if (i === 0) {
            return data;
        }
        return data.slice(i, data.length);
    }
    static padStart(data, size) {
        if (size === data.length) {
            return data;
        }
        const res = new Uint8Array(size);
        res.set(data, size - data.length);
        return res;
    }
}
class EcDsaSignature {
    constructor(){
        this.r = new ArrayBuffer(0);
        this.s = new ArrayBuffer(0);
    }
    static fromWebCryptoSignature(value) {
        const pointSize = value.byteLength / 2;
        const point = EcUtils.decodeSignature(value, pointSize * 8);
        const ecSignature = new EcDsaSignature();
        ecSignature.r = pvtsutils.BufferSourceConverter.toArrayBuffer(point.r);
        ecSignature.s = pvtsutils.BufferSourceConverter.toArrayBuffer(point.s);
        return ecSignature;
    }
    toWebCryptoSignature(pointSize) {
        pointSize !== null && pointSize !== void 0 ? pointSize : pointSize = Math.max(this.r.byteLength, this.s.byteLength) * 8;
        const signature = EcUtils.encodeSignature(this, pointSize);
        return signature.buffer;
    }
}
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerWithoutPaddingConverter
    })
], EcDsaSignature.prototype, "r", void 0);
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.Integer,
        converter: AsnIntegerWithoutPaddingConverter
    })
], EcDsaSignature.prototype, "s", void 0);
class OneAsymmetricKey extends PrivateKeyInfo {
}
tslib.__decorate([
    asn1Schema.AsnProp({
        context: 1,
        implicit: true,
        type: asn1Schema.AsnPropTypes.BitString,
        optional: true
    })
], OneAsymmetricKey.prototype, "publicKey", void 0);
let EdPrivateKey = class EdPrivateKey {
    constructor(){
        this.value = new ArrayBuffer(0);
    }
    fromJSON(json) {
        if (!json.d) {
            throw new Error("d: Missing required property");
        }
        this.value = pvtsutils.Convert.FromBase64Url(json.d);
        return this;
    }
    toJSON() {
        const jwk = {
            d: pvtsutils.Convert.ToBase64Url(this.value)
        };
        return jwk;
    }
};
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.OctetString
    })
], EdPrivateKey.prototype, "value", void 0);
EdPrivateKey = tslib.__decorate([
    asn1Schema.AsnType({
        type: asn1Schema.AsnTypeTypes.Choice
    })
], EdPrivateKey);
let EdPublicKey = class EdPublicKey {
    constructor(value){
        this.value = new ArrayBuffer(0);
        if (value) {
            this.value = value;
        }
    }
    toJSON() {
        const json = {
            x: pvtsutils.Convert.ToBase64Url(this.value)
        };
        return json;
    }
    fromJSON(json) {
        if (!("x" in json)) {
            throw new Error("x: Missing required property");
        }
        this.value = pvtsutils.Convert.FromBase64Url(json.x);
        return this;
    }
};
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.BitString
    })
], EdPublicKey.prototype, "value", void 0);
EdPublicKey = tslib.__decorate([
    asn1Schema.AsnType({
        type: asn1Schema.AsnTypeTypes.Choice
    })
], EdPublicKey);
let CurvePrivateKey = class CurvePrivateKey {
};
tslib.__decorate([
    asn1Schema.AsnProp({
        type: asn1Schema.AsnPropTypes.OctetString
    }),
    jsonSchema.JsonProp({
        type: jsonSchema.JsonPropTypes.String,
        converter: JsonBase64UrlArrayBufferConverter
    })
], CurvePrivateKey.prototype, "d", void 0);
CurvePrivateKey = tslib.__decorate([
    asn1Schema.AsnType({
        type: asn1Schema.AsnTypeTypes.Choice
    })
], CurvePrivateKey);
const idSecp256r1 = "1.2.840.10045.3.1.7";
const idEllipticCurve = "1.3.132.0";
const idSecp384r1 = `${idEllipticCurve}.34`;
const idSecp521r1 = `${idEllipticCurve}.35`;
const idSecp256k1 = `${idEllipticCurve}.10`;
const idVersionOne = "1.3.36.3.3.2.8.1.1";
const idBrainpoolP160r1 = `${idVersionOne}.1`;
const idBrainpoolP160t1 = `${idVersionOne}.2`;
const idBrainpoolP192r1 = `${idVersionOne}.3`;
const idBrainpoolP192t1 = `${idVersionOne}.4`;
const idBrainpoolP224r1 = `${idVersionOne}.5`;
const idBrainpoolP224t1 = `${idVersionOne}.6`;
const idBrainpoolP256r1 = `${idVersionOne}.7`;
const idBrainpoolP256t1 = `${idVersionOne}.8`;
const idBrainpoolP320r1 = `${idVersionOne}.9`;
const idBrainpoolP320t1 = `${idVersionOne}.10`;
const idBrainpoolP384r1 = `${idVersionOne}.11`;
const idBrainpoolP384t1 = `${idVersionOne}.12`;
const idBrainpoolP512r1 = `${idVersionOne}.13`;
const idBrainpoolP512t1 = `${idVersionOne}.14`;
const idX25519 = "1.3.101.110";
const idX448 = "1.3.101.111";
const idEd25519 = "1.3.101.112";
const idEd448 = "1.3.101.113";
var index$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    AlgorithmIdentifier: AlgorithmIdentifier,
    get CurvePrivateKey () {
        return CurvePrivateKey;
    },
    EcDsaSignature: EcDsaSignature,
    EcPrivateKey: EcPrivateKey,
    get EcPublicKey () {
        return EcPublicKey;
    },
    get EdPrivateKey () {
        return EdPrivateKey;
    },
    get EdPublicKey () {
        return EdPublicKey;
    },
    get ObjectIdentifier () {
        return ObjectIdentifier;
    },
    OneAsymmetricKey: OneAsymmetricKey,
    PrivateKeyInfo: PrivateKeyInfo,
    PublicKeyInfo: PublicKeyInfo,
    RsaPrivateKey: RsaPrivateKey,
    RsaPublicKey: RsaPublicKey,
    converters: index$2,
    idBrainpoolP160r1: idBrainpoolP160r1,
    idBrainpoolP160t1: idBrainpoolP160t1,
    idBrainpoolP192r1: idBrainpoolP192r1,
    idBrainpoolP192t1: idBrainpoolP192t1,
    idBrainpoolP224r1: idBrainpoolP224r1,
    idBrainpoolP224t1: idBrainpoolP224t1,
    idBrainpoolP256r1: idBrainpoolP256r1,
    idBrainpoolP256t1: idBrainpoolP256t1,
    idBrainpoolP320r1: idBrainpoolP320r1,
    idBrainpoolP320t1: idBrainpoolP320t1,
    idBrainpoolP384r1: idBrainpoolP384r1,
    idBrainpoolP384t1: idBrainpoolP384t1,
    idBrainpoolP512r1: idBrainpoolP512r1,
    idBrainpoolP512t1: idBrainpoolP512t1,
    idEd25519: idEd25519,
    idEd448: idEd448,
    idEllipticCurve: idEllipticCurve,
    idSecp256k1: idSecp256k1,
    idSecp256r1: idSecp256r1,
    idSecp384r1: idSecp384r1,
    idSecp521r1: idSecp521r1,
    idVersionOne: idVersionOne,
    idX25519: idX25519,
    idX448: idX448
});
class EcCurves {
    constructor(){}
    static register(item) {
        const oid = new ObjectIdentifier();
        oid.value = item.id;
        const raw = asn1Schema.AsnConvert.serialize(oid);
        this.items.push({
            ...item,
            raw
        });
        this.names.push(item.name);
    }
    static find(nameOrId) {
        nameOrId = nameOrId.toUpperCase();
        for (const item of this.items){
            if (item.name.toUpperCase() === nameOrId || item.id.toUpperCase() === nameOrId) {
                return item;
            }
        }
        return null;
    }
    static get(nameOrId) {
        const res = this.find(nameOrId);
        if (!res) {
            throw new Error(`Unsupported EC named curve '${nameOrId}'`);
        }
        return res;
    }
}
EcCurves.items = [];
EcCurves.names = [];
EcCurves.register({
    name: "P-256",
    id: idSecp256r1,
    size: 256
});
EcCurves.register({
    name: "P-384",
    id: idSecp384r1,
    size: 384
});
EcCurves.register({
    name: "P-521",
    id: idSecp521r1,
    size: 521
});
EcCurves.register({
    name: "K-256",
    id: idSecp256k1,
    size: 256
});
EcCurves.register({
    name: "brainpoolP160r1",
    id: idBrainpoolP160r1,
    size: 160
});
EcCurves.register({
    name: "brainpoolP160t1",
    id: idBrainpoolP160t1,
    size: 160
});
EcCurves.register({
    name: "brainpoolP192r1",
    id: idBrainpoolP192r1,
    size: 192
});
EcCurves.register({
    name: "brainpoolP192t1",
    id: idBrainpoolP192t1,
    size: 192
});
EcCurves.register({
    name: "brainpoolP224r1",
    id: idBrainpoolP224r1,
    size: 224
});
EcCurves.register({
    name: "brainpoolP224t1",
    id: idBrainpoolP224t1,
    size: 224
});
EcCurves.register({
    name: "brainpoolP256r1",
    id: idBrainpoolP256r1,
    size: 256
});
EcCurves.register({
    name: "brainpoolP256t1",
    id: idBrainpoolP256t1,
    size: 256
});
EcCurves.register({
    name: "brainpoolP320r1",
    id: idBrainpoolP320r1,
    size: 320
});
EcCurves.register({
    name: "brainpoolP320t1",
    id: idBrainpoolP320t1,
    size: 320
});
EcCurves.register({
    name: "brainpoolP384r1",
    id: idBrainpoolP384r1,
    size: 384
});
EcCurves.register({
    name: "brainpoolP384t1",
    id: idBrainpoolP384t1,
    size: 384
});
EcCurves.register({
    name: "brainpoolP512r1",
    id: idBrainpoolP512r1,
    size: 512
});
EcCurves.register({
    name: "brainpoolP512t1",
    id: idBrainpoolP512t1,
    size: 512
});
class HmacProvider extends ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "HMAC";
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512"
        ];
        this.usages = [
            "sign",
            "verify"
        ];
    }
    getDefaultLength(algName) {
        switch(algName.toUpperCase()){
            case "SHA-1":
            case "SHA-256":
            case "SHA-384":
            case "SHA-512":
                return 512;
            default:
                throw new Error(`Unknown algorithm name '${algName}'`);
        }
    }
    checkGenerateKeyParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        if ("length" in algorithm) {
            if (typeof algorithm.length !== "number") {
                throw new TypeError("length: Is not a Number");
            }
            if (algorithm.length < 1) {
                throw new RangeError("length: Number is out of range");
            }
        }
    }
    checkImportParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
    }
}
class Pbkdf2Provider extends ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "PBKDF2";
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512"
        ];
        this.usages = [
            "deriveBits",
            "deriveKey"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        this.checkRequiredProperty(algorithm, "salt");
        if (!(algorithm.salt instanceof ArrayBuffer || ArrayBuffer.isView(algorithm.salt))) {
            throw new TypeError("salt: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        this.checkRequiredProperty(algorithm, "iterations");
        if (typeof algorithm.iterations !== "number") {
            throw new TypeError("iterations: Is not a Number");
        }
        if (algorithm.iterations < 1) {
            throw new TypeError("iterations: Is less than 1");
        }
    }
    checkImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        super.checkImportKey(format, keyData, algorithm, extractable, keyUsages);
        if (extractable) {
            throw new SyntaxError("extractable: Must be 'false'");
        }
    }
}
class HkdfProvider extends ProviderCrypto {
    constructor(){
        super(...arguments);
        this.name = "HKDF";
        this.hashAlgorithms = [
            "SHA-1",
            "SHA-256",
            "SHA-384",
            "SHA-512"
        ];
        this.usages = [
            "deriveKey",
            "deriveBits"
        ];
    }
    checkAlgorithmParams(algorithm) {
        this.checkRequiredProperty(algorithm, "hash");
        this.checkHashAlgorithm(algorithm.hash, this.hashAlgorithms);
        this.checkRequiredProperty(algorithm, "salt");
        if (!pvtsutils.BufferSourceConverter.isBufferSource(algorithm.salt)) {
            throw new TypeError("salt: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        this.checkRequiredProperty(algorithm, "info");
        if (!pvtsutils.BufferSourceConverter.isBufferSource(algorithm.info)) {
            throw new TypeError("salt: Is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
    }
    checkImportKey(format, keyData, algorithm, extractable, keyUsages, ...args) {
        super.checkImportKey(format, keyData, algorithm, extractable, keyUsages);
        if (extractable) {
            throw new SyntaxError("extractable: Must be 'false'");
        }
    }
}
class ShakeProvider extends ProviderCrypto {
    constructor(){
        super(...arguments);
        this.usages = [];
        this.defaultLength = 0;
    }
    digest(...args) {
        args[0] = {
            length: this.defaultLength,
            ...args[0]
        };
        return super.digest.apply(this, args);
    }
    checkDigest(algorithm, data) {
        super.checkDigest(algorithm, data);
        const length = algorithm.length || 0;
        if (typeof length !== "number") {
            throw new TypeError("length: Is not a Number");
        }
        if (length < 0) {
            throw new TypeError("length: Is negative");
        }
    }
}
class Shake128Provider extends ShakeProvider {
    constructor(){
        super(...arguments);
        this.name = "shake128";
        this.defaultLength = 16;
    }
}
class Shake256Provider extends ShakeProvider {
    constructor(){
        super(...arguments);
        this.name = "shake256";
        this.defaultLength = 32;
    }
}
class Crypto {
    get [Symbol.toStringTag]() {
        return "Crypto";
    }
    randomUUID() {
        const b = this.getRandomValues(new Uint8Array(16));
        b[6] = b[6] & 0x0f | 0x40;
        b[8] = b[8] & 0x3f | 0x80;
        const uuid = pvtsutils.Convert.ToHex(b).toLowerCase();
        return `${uuid.substring(0, 8)}-${uuid.substring(8, 12)}-${uuid.substring(12, 16)}-${uuid.substring(16, 20)}-${uuid.substring(20)}`;
    }
}
class ProviderStorage {
    constructor(){
        this.items = {};
    }
    get(algorithmName) {
        return this.items[algorithmName.toLowerCase()] || null;
    }
    set(provider) {
        this.items[provider.name.toLowerCase()] = provider;
    }
    removeAt(algorithmName) {
        const provider = this.get(algorithmName.toLowerCase());
        if (provider) {
            delete this.items[algorithmName];
        }
        return provider;
    }
    has(name) {
        return !!this.get(name);
    }
    get length() {
        return Object.keys(this.items).length;
    }
    get algorithms() {
        const algorithms = [];
        for(const key in this.items){
            const provider = this.items[key];
            algorithms.push(provider.name);
        }
        return algorithms.sort();
    }
}
class SubtleCrypto {
    constructor(){
        this.providers = new ProviderStorage();
    }
    static isHashedAlgorithm(data) {
        return data && typeof data === "object" && "name" in data && "hash" in data ? true : false;
    }
    get [Symbol.toStringTag]() {
        return "SubtleCrypto";
    }
    async digest(...args) {
        this.checkRequiredArguments(args, 2, "digest");
        const [algorithm, data, ...params] = args;
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.digest(preparedAlgorithm, preparedData, ...params);
        return result;
    }
    async generateKey(...args) {
        this.checkRequiredArguments(args, 3, "generateKey");
        const [algorithm, extractable, keyUsages, ...params] = args;
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.generateKey({
            ...preparedAlgorithm,
            name: provider.name
        }, extractable, keyUsages, ...params);
        return result;
    }
    async sign(...args) {
        this.checkRequiredArguments(args, 3, "sign");
        const [algorithm, key, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.sign({
            ...preparedAlgorithm,
            name: provider.name
        }, key, preparedData, ...params);
        return result;
    }
    async verify(...args) {
        this.checkRequiredArguments(args, 4, "verify");
        const [algorithm, key, signature, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(data);
        const preparedSignature = pvtsutils.BufferSourceConverter.toArrayBuffer(signature);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.verify({
            ...preparedAlgorithm,
            name: provider.name
        }, key, preparedSignature, preparedData, ...params);
        return result;
    }
    async encrypt(...args) {
        this.checkRequiredArguments(args, 3, "encrypt");
        const [algorithm, key, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.encrypt({
            ...preparedAlgorithm,
            name: provider.name
        }, key, preparedData, {
            keyUsage: true
        }, ...params);
        return result;
    }
    async decrypt(...args) {
        this.checkRequiredArguments(args, 3, "decrypt");
        const [algorithm, key, data, ...params] = args;
        this.checkCryptoKey(key);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(data);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.decrypt({
            ...preparedAlgorithm,
            name: provider.name
        }, key, preparedData, {
            keyUsage: true
        }, ...params);
        return result;
    }
    async deriveBits(...args) {
        this.checkRequiredArguments(args, 3, "deriveBits");
        const [algorithm, baseKey, length, ...params] = args;
        this.checkCryptoKey(baseKey);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        const result = await provider.deriveBits({
            ...preparedAlgorithm,
            name: provider.name
        }, baseKey, length, {
            keyUsage: true
        }, ...params);
        return result;
    }
    async deriveKey(...args) {
        this.checkRequiredArguments(args, 5, "deriveKey");
        const [algorithm, baseKey, derivedKeyType, extractable, keyUsages, ...params] = args;
        const preparedDerivedKeyType = this.prepareAlgorithm(derivedKeyType);
        const importProvider = this.getProvider(preparedDerivedKeyType.name);
        importProvider.checkDerivedKeyParams(preparedDerivedKeyType);
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        provider.checkCryptoKey(baseKey, "deriveKey");
        const derivedBits = await provider.deriveBits({
            ...preparedAlgorithm,
            name: provider.name
        }, baseKey, derivedKeyType.length || 512, {
            keyUsage: false
        }, ...params);
        return this.importKey("raw", derivedBits, derivedKeyType, extractable, keyUsages, ...params);
    }
    async exportKey(...args) {
        this.checkRequiredArguments(args, 2, "exportKey");
        const [format, key, ...params] = args;
        this.checkCryptoKey(key);
        const provider = this.getProvider(key.algorithm.name);
        const result = await provider.exportKey(format, key, ...params);
        return result;
    }
    async importKey(...args) {
        this.checkRequiredArguments(args, 5, "importKey");
        const [format, keyData, algorithm, extractable, keyUsages, ...params] = args;
        const preparedAlgorithm = this.prepareAlgorithm(algorithm);
        const provider = this.getProvider(preparedAlgorithm.name);
        if ([
            "pkcs8",
            "spki",
            "raw"
        ].indexOf(format) !== -1) {
            const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(keyData);
            return provider.importKey(format, preparedData, {
                ...preparedAlgorithm,
                name: provider.name
            }, extractable, keyUsages, ...params);
        } else {
            if (!keyData.kty) {
                throw new TypeError("keyData: Is not JSON");
            }
        }
        return provider.importKey(format, keyData, {
            ...preparedAlgorithm,
            name: provider.name
        }, extractable, keyUsages, ...params);
    }
    async wrapKey(format, key, wrappingKey, wrapAlgorithm, ...args) {
        let keyData = await this.exportKey(format, key, ...args);
        if (format === "jwk") {
            const json = JSON.stringify(keyData);
            keyData = pvtsutils.Convert.FromUtf8String(json);
        }
        const preparedAlgorithm = this.prepareAlgorithm(wrapAlgorithm);
        const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(keyData);
        const provider = this.getProvider(preparedAlgorithm.name);
        return provider.encrypt({
            ...preparedAlgorithm,
            name: provider.name
        }, wrappingKey, preparedData, {
            keyUsage: false
        }, ...args);
    }
    async unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages, ...args) {
        const preparedAlgorithm = this.prepareAlgorithm(unwrapAlgorithm);
        const preparedData = pvtsutils.BufferSourceConverter.toArrayBuffer(wrappedKey);
        const provider = this.getProvider(preparedAlgorithm.name);
        let keyData = await provider.decrypt({
            ...preparedAlgorithm,
            name: provider.name
        }, unwrappingKey, preparedData, {
            keyUsage: false
        }, ...args);
        if (format === "jwk") {
            try {
                keyData = JSON.parse(pvtsutils.Convert.ToUtf8String(keyData));
            } catch (e) {
                const error = new TypeError("wrappedKey: Is not a JSON");
                error.internal = e;
                throw error;
            }
        }
        return this.importKey(format, keyData, unwrappedKeyAlgorithm, extractable, keyUsages, ...args);
    }
    checkRequiredArguments(args, size, methodName) {
        if (args.length < size) {
            throw new TypeError(`Failed to execute '${methodName}' on 'SubtleCrypto': ${size} arguments required, but only ${args.length} present`);
        }
    }
    prepareAlgorithm(algorithm) {
        if (typeof algorithm === "string") {
            return {
                name: algorithm
            };
        }
        if (SubtleCrypto.isHashedAlgorithm(algorithm)) {
            const preparedAlgorithm = {
                ...algorithm
            };
            preparedAlgorithm.hash = this.prepareAlgorithm(algorithm.hash);
            return preparedAlgorithm;
        }
        return {
            ...algorithm
        };
    }
    getProvider(name) {
        const provider = this.providers.get(name);
        if (!provider) {
            throw new AlgorithmError("Unrecognized name");
        }
        return provider;
    }
    checkCryptoKey(key) {
        if (!(key instanceof CryptoKey)) {
            throw new TypeError(`Key is not of type 'CryptoKey'`);
        }
    }
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    converters: index$3
});
const REQUIRED_FIELDS = [
    "crv",
    "e",
    "k",
    "kty",
    "n",
    "x",
    "y"
];
class JwkUtils {
    static async thumbprint(hash, jwk, crypto) {
        const data = this.format(jwk, true);
        return crypto.subtle.digest(hash, pvtsutils.Convert.FromBinary(JSON.stringify(data)));
    }
    static format(jwk, remove = false) {
        let res = Object.entries(jwk);
        if (remove) {
            res = res.filter((o)=>REQUIRED_FIELDS.includes(o[0]));
        }
        res = res.sort(([keyA], [keyB])=>keyA > keyB ? 1 : keyA < keyB ? -1 : 0);
        return Object.fromEntries(res);
    }
}
Object.defineProperty(exports, "BufferSourceConverter", ({
    enumerable: true,
    get: function() {
        return pvtsutils.BufferSourceConverter;
    }
}));
exports.AesCbcProvider = AesCbcProvider;
exports.AesCmacProvider = AesCmacProvider;
exports.AesCtrProvider = AesCtrProvider;
exports.AesEcbProvider = AesEcbProvider;
exports.AesGcmProvider = AesGcmProvider;
exports.AesKwProvider = AesKwProvider;
exports.AesProvider = AesProvider;
exports.AlgorithmError = AlgorithmError;
exports.Crypto = Crypto;
exports.CryptoError = CryptoError;
exports.CryptoKey = CryptoKey;
exports.DesProvider = DesProvider;
exports.EcCurves = EcCurves;
exports.EcUtils = EcUtils;
exports.EcdhEsProvider = EcdhEsProvider;
exports.EcdhProvider = EcdhProvider;
exports.EcdsaProvider = EcdsaProvider;
exports.EdDsaProvider = EdDsaProvider;
exports.EllipticProvider = EllipticProvider;
exports.HkdfProvider = HkdfProvider;
exports.HmacProvider = HmacProvider;
exports.JwkUtils = JwkUtils;
exports.OperationError = OperationError;
exports.Pbkdf2Provider = Pbkdf2Provider;
exports.PemConverter = PemConverter;
exports.ProviderCrypto = ProviderCrypto;
exports.ProviderStorage = ProviderStorage;
exports.RequiredPropertyError = RequiredPropertyError;
exports.RsaOaepProvider = RsaOaepProvider;
exports.RsaProvider = RsaProvider;
exports.RsaPssProvider = RsaPssProvider;
exports.RsaSsaProvider = RsaSsaProvider;
exports.Shake128Provider = Shake128Provider;
exports.Shake256Provider = Shake256Provider;
exports.ShakeProvider = ShakeProvider;
exports.SubtleCrypto = SubtleCrypto;
exports.UnsupportedOperationError = UnsupportedOperationError;
exports.asn1 = index$1;
exports.isJWK = isJWK;
exports.json = index;


/***/ }),

/***/ 28378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const abortController = __webpack_require__(13169);
const node_fs = __webpack_require__(87561);
const node_path = __webpack_require__(49411);
__webpack_require__(88849);
__webpack_require__(22286);
__webpack_require__(65628);
__webpack_require__(84492);
__webpack_require__(72254);
__webpack_require__(47261);
__webpack_require__(41041);
__webpack_require__(87503);
const { stat } = node_fs.promises;
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 */ const blobFromSync = (path, type)=>fromBlob(node_fs.statSync(path), path, type);
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 * @returns {Promise<Blob>}
 */ const blobFrom = (path, type)=>stat(path).then((stat)=>fromBlob(stat, path, type));
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 * @returns {Promise<File>}
 */ const fileFrom = (path, type)=>stat(path).then((stat)=>fromFile(stat, path, type));
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 */ const fileFromSync = (path, type)=>fromFile(node_fs.statSync(path), path, type);
// @ts-ignore
const fromBlob = (stat, path, type = "")=>new abortController._Blob([
        new BlobDataItem({
            path,
            size: stat.size,
            lastModified: stat.mtimeMs,
            start: 0
        })
    ], {
        type
    });
// @ts-ignore
const fromFile = (stat, path, type = "")=>new abortController.File([
        new BlobDataItem({
            path,
            size: stat.size,
            lastModified: stat.mtimeMs,
            start: 0
        })
    ], node_path.basename(path), {
        type,
        lastModified: stat.mtimeMs
    });
/**
 * This is a blob backed up by a file on the disk
 * with minium requirement. Its wrapped around a Blob as a blobPart
 * so you have no direct access to this.
 *
 * @private
 */ class BlobDataItem {
    #path;
    #start;
    constructor(options){
        this.#path = options.path;
        this.#start = options.start;
        this.size = options.size;
        this.lastModified = options.lastModified;
        this.originalSize = options.originalSize === undefined ? options.size : options.originalSize;
    }
    /**
   * Slicing arguments is first validated and formatted
   * to not be out of range by Blob.prototype.slice
   */ slice(start, end) {
        return new BlobDataItem({
            path: this.#path,
            lastModified: this.lastModified,
            originalSize: this.originalSize,
            size: end - start,
            start: this.#start + start
        });
    }
    async *stream() {
        const { mtimeMs, size } = await stat(this.#path);
        if (mtimeMs > this.lastModified || this.originalSize !== size) {
            throw new abortController.nodeDomexception("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        }
        yield* node_fs.createReadStream(this.#path, {
            start: this.#start,
            end: this.#start + this.size - 1
        });
    }
    get [Symbol.toStringTag]() {
        return "Blob";
    }
}
const fetch = globalThis.fetch || abortController.fetch;
const Blob = globalThis.Blob || abortController._Blob;
const File = globalThis.File || abortController.File;
const FormData = globalThis.FormData || abortController.FormData;
const Headers = globalThis.Headers || abortController.Headers;
const Request = globalThis.Request || abortController.Request;
const Response = globalThis.Response || abortController.Response;
const AbortController = globalThis.AbortController || abortController.AbortController;
exports.AbortError = abortController.AbortError;
exports.FetchError = abortController.FetchError;
exports.isRedirect = abortController.isRedirect;
exports.AbortController = AbortController;
exports.Blob = Blob;
exports.File = File;
exports.FormData = FormData;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.blobFrom = blobFrom;
exports.blobFromSync = blobFromSync;
exports["default"] = fetch;
exports.fetch = fetch;
exports.fileFrom = fileFrom;
exports.fileFromSync = fileFromSync;


/***/ }),

/***/ 13169:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const http = __webpack_require__(88849);
const https = __webpack_require__(22286);
const zlib = __webpack_require__(65628);
const Stream = __webpack_require__(84492);
const node_buffer = __webpack_require__(72254);
const node_util = __webpack_require__(47261);
const node_url = __webpack_require__(41041);
const node_net = __webpack_require__(87503);
__webpack_require__(87561);
__webpack_require__(49411);
/**
 * Returns a `Buffer` instance from the given data URI `uri`.
 *
 * @param {String} uri Data URI to turn into a Buffer instance
 * @returns {Buffer} Buffer instance from Data URI
 * @api public
 */ function dataUriToBuffer(uri) {
    if (!/^data:/i.test(uri)) {
        throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    }
    // strip newlines
    uri = uri.replace(/\r?\n/g, "");
    // split the URI up into the "metadata" and the "data" portions
    const firstComma = uri.indexOf(",");
    if (firstComma === -1 || firstComma <= 4) {
        throw new TypeError("malformed data: URI");
    }
    // remove the "data:" scheme and parse the metadata
    const meta = uri.substring(5, firstComma).split(";");
    let charset = "";
    let base64 = false;
    const type = meta[0] || "text/plain";
    let typeFull = type;
    for(let i = 1; i < meta.length; i++){
        if (meta[i] === "base64") {
            base64 = true;
        } else {
            typeFull += `;${meta[i]}`;
            if (meta[i].indexOf("charset=") === 0) {
                charset = meta[i].substring(8);
            }
        }
    }
    // defaults to US-ASCII only if type is not provided
    if (!meta[0] && !charset.length) {
        typeFull += ";charset=US-ASCII";
        charset = "US-ASCII";
    }
    // get the encoded data portion and decode URI-encoded chars
    const encoding = base64 ? "base64" : "ascii";
    const data = unescape(uri.substring(firstComma + 1));
    const buffer = Buffer.from(data, encoding);
    // set `.type` and `.typeFull` properties to MIME type
    buffer.type = type;
    buffer.typeFull = typeFull;
    // set the `.charset` property
    buffer.charset = charset;
    return buffer;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis :  false ? 0 : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var ponyfill_es2018 = {
    exports: {}
};
/**
 * web-streams-polyfill v3.2.1
 */ var hasRequiredPonyfill_es2018;
function requirePonyfill_es2018() {
    if (hasRequiredPonyfill_es2018) return ponyfill_es2018.exports;
    hasRequiredPonyfill_es2018 = 1;
    (function(module, exports1) {
        (function(global1, factory) {
            factory(exports1);
        })(commonjsGlobal, function(exports1) {
            /// <reference lib="es2015.symbol" />
            const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description)=>`Symbol(${description})`;
            /// <reference lib="dom" />
            function noop() {
                return undefined;
            }
            function getGlobals() {
                if (typeof self !== "undefined") {
                    return self;
                } else if (false) {} else if (typeof commonjsGlobal !== "undefined") {
                    return commonjsGlobal;
                }
                return undefined;
            }
            const globals = getGlobals();
            function typeIsObject(x) {
                return typeof x === "object" && x !== null || typeof x === "function";
            }
            const rethrowAssertionErrorRejection = noop;
            const originalPromise = Promise;
            const originalPromiseThen = Promise.prototype.then;
            const originalPromiseResolve = Promise.resolve.bind(originalPromise);
            const originalPromiseReject = Promise.reject.bind(originalPromise);
            function newPromise(executor) {
                return new originalPromise(executor);
            }
            function promiseResolvedWith(value1) {
                return originalPromiseResolve(value1);
            }
            function promiseRejectedWith(reason) {
                return originalPromiseReject(reason);
            }
            function PerformPromiseThen(promise, onFulfilled, onRejected) {
                // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
                // approximation.
                return originalPromiseThen.call(promise, onFulfilled, onRejected);
            }
            function uponPromise(promise, onFulfilled, onRejected) {
                PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
            }
            function uponFulfillment(promise, onFulfilled) {
                uponPromise(promise, onFulfilled);
            }
            function uponRejection(promise, onRejected) {
                uponPromise(promise, undefined, onRejected);
            }
            function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
                return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
            }
            function setPromiseIsHandledToTrue(promise) {
                PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
            }
            const queueMicrotask = (()=>{
                const globalQueueMicrotask = globals && globals.queueMicrotask;
                if (typeof globalQueueMicrotask === "function") {
                    return globalQueueMicrotask;
                }
                const resolvedPromise = promiseResolvedWith(undefined);
                return (fn)=>PerformPromiseThen(resolvedPromise, fn);
            })();
            function reflectCall(F, V, args) {
                if (typeof F !== "function") {
                    throw new TypeError("Argument is not a function");
                }
                return Function.prototype.apply.call(F, V, args);
            }
            function promiseCall(F, V, args) {
                try {
                    return promiseResolvedWith(reflectCall(F, V, args));
                } catch (value1) {
                    return promiseRejectedWith(value1);
                }
            }
            // Original from Chromium
            // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
            const QUEUE_MAX_ARRAY_SIZE = 16384;
            /**
		     * Simple queue structure.
		     *
		     * Avoids scalability issues with using a packed array directly by using
		     * multiple arrays in a linked list and keeping the array size bounded.
		     */ class SimpleQueue {
                constructor(){
                    this._cursor = 0;
                    this._size = 0;
                    // _front and _back are always defined.
                    this._front = {
                        _elements: [],
                        _next: undefined
                    };
                    this._back = this._front;
                    // The cursor is used to avoid calling Array.shift().
                    // It contains the index of the front element of the array inside the
                    // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
                    this._cursor = 0;
                    // When there is only one node, size === elements.length - cursor.
                    this._size = 0;
                }
                get length() {
                    return this._size;
                }
                // For exception safety, this method is structured in order:
                // 1. Read state
                // 2. Calculate required state mutations
                // 3. Perform state mutations
                push(element) {
                    const oldBack = this._back;
                    let newBack = oldBack;
                    if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
                        newBack = {
                            _elements: [],
                            _next: undefined
                        };
                    }
                    // push() is the mutation most likely to throw an exception, so it
                    // goes first.
                    oldBack._elements.push(element);
                    if (newBack !== oldBack) {
                        this._back = newBack;
                        oldBack._next = newBack;
                    }
                    ++this._size;
                }
                // Like push(), shift() follows the read -> calculate -> mutate pattern for
                // exception safety.
                shift() {
                    const oldFront = this._front;
                    let newFront = oldFront;
                    const oldCursor = this._cursor;
                    let newCursor = oldCursor + 1;
                    const elements = oldFront._elements;
                    const element = elements[oldCursor];
                    if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
                        newFront = oldFront._next;
                        newCursor = 0;
                    }
                    // No mutations before this point.
                    --this._size;
                    this._cursor = newCursor;
                    if (oldFront !== newFront) {
                        this._front = newFront;
                    }
                    // Permit shifted element to be garbage collected.
                    elements[oldCursor] = undefined;
                    return element;
                }
                // The tricky thing about forEach() is that it can be called
                // re-entrantly. The queue may be mutated inside the callback. It is easy to
                // see that push() within the callback has no negative effects since the end
                // of the queue is checked for on every iteration. If shift() is called
                // repeatedly within the callback then the next iteration may return an
                // element that has been removed. In this case the callback will be called
                // with undefined values until we either "catch up" with elements that still
                // exist or reach the back of the queue.
                forEach(callback) {
                    let i = this._cursor;
                    let node = this._front;
                    let elements = node._elements;
                    while(i !== elements.length || node._next !== undefined){
                        if (i === elements.length) {
                            node = node._next;
                            elements = node._elements;
                            i = 0;
                            if (elements.length === 0) {
                                break;
                            }
                        }
                        callback(elements[i]);
                        ++i;
                    }
                }
                // Return the element that would be returned if shift() was called now,
                // without modifying the queue.
                peek() {
                    const front = this._front;
                    const cursor = this._cursor;
                    return front._elements[cursor];
                }
            }
            function ReadableStreamReaderGenericInitialize(reader, stream) {
                reader._ownerReadableStream = stream;
                stream._reader = reader;
                if (stream._state === "readable") {
                    defaultReaderClosedPromiseInitialize(reader);
                } else if (stream._state === "closed") {
                    defaultReaderClosedPromiseInitializeAsResolved(reader);
                } else {
                    defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
                }
            }
            // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
            // check.
            function ReadableStreamReaderGenericCancel(reader, reason) {
                const stream = reader._ownerReadableStream;
                return ReadableStreamCancel(stream, reason);
            }
            function ReadableStreamReaderGenericRelease(reader) {
                if (reader._ownerReadableStream._state === "readable") {
                    defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
                } else {
                    defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
                }
                reader._ownerReadableStream._reader = undefined;
                reader._ownerReadableStream = undefined;
            }
            // Helper functions for the readers.
            function readerLockException(name) {
                return new TypeError("Cannot " + name + " a stream using a released reader");
            }
            // Helper functions for the ReadableStreamDefaultReader.
            function defaultReaderClosedPromiseInitialize(reader) {
                reader._closedPromise = newPromise((resolve, reject)=>{
                    reader._closedPromise_resolve = resolve;
                    reader._closedPromise_reject = reject;
                });
            }
            function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
                defaultReaderClosedPromiseInitialize(reader);
                defaultReaderClosedPromiseReject(reader, reason);
            }
            function defaultReaderClosedPromiseInitializeAsResolved(reader) {
                defaultReaderClosedPromiseInitialize(reader);
                defaultReaderClosedPromiseResolve(reader);
            }
            function defaultReaderClosedPromiseReject(reader, reason) {
                if (reader._closedPromise_reject === undefined) {
                    return;
                }
                setPromiseIsHandledToTrue(reader._closedPromise);
                reader._closedPromise_reject(reason);
                reader._closedPromise_resolve = undefined;
                reader._closedPromise_reject = undefined;
            }
            function defaultReaderClosedPromiseResetToRejected(reader, reason) {
                defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
            }
            function defaultReaderClosedPromiseResolve(reader) {
                if (reader._closedPromise_resolve === undefined) {
                    return;
                }
                reader._closedPromise_resolve(undefined);
                reader._closedPromise_resolve = undefined;
                reader._closedPromise_reject = undefined;
            }
            const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
            const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
            const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
            const PullSteps = SymbolPolyfill("[[PullSteps]]");
            /// <reference lib="es2015.core" />
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
            const NumberIsFinite = Number.isFinite || function(x) {
                return typeof x === "number" && isFinite(x);
            };
            /// <reference lib="es2015.core" />
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
            const MathTrunc = Math.trunc || function(v) {
                return v < 0 ? Math.ceil(v) : Math.floor(v);
            };
            // https://heycam.github.io/webidl/#idl-dictionaries
            function isDictionary(x) {
                return typeof x === "object" || typeof x === "function";
            }
            function assertDictionary(obj, context) {
                if (obj !== undefined && !isDictionary(obj)) {
                    throw new TypeError(`${context} is not an object.`);
                }
            }
            // https://heycam.github.io/webidl/#idl-callback-functions
            function assertFunction(x, context) {
                if (typeof x !== "function") {
                    throw new TypeError(`${context} is not a function.`);
                }
            }
            // https://heycam.github.io/webidl/#idl-object
            function isObject(x) {
                return typeof x === "object" && x !== null || typeof x === "function";
            }
            function assertObject(x, context) {
                if (!isObject(x)) {
                    throw new TypeError(`${context} is not an object.`);
                }
            }
            function assertRequiredArgument(x, position, context) {
                if (x === undefined) {
                    throw new TypeError(`Parameter ${position} is required in '${context}'.`);
                }
            }
            function assertRequiredField(x, field, context) {
                if (x === undefined) {
                    throw new TypeError(`${field} is required in '${context}'.`);
                }
            }
            // https://heycam.github.io/webidl/#idl-unrestricted-double
            function convertUnrestrictedDouble(value1) {
                return Number(value1);
            }
            function censorNegativeZero(x) {
                return x === 0 ? 0 : x;
            }
            function integerPart(x) {
                return censorNegativeZero(MathTrunc(x));
            }
            // https://heycam.github.io/webidl/#idl-unsigned-long-long
            function convertUnsignedLongLongWithEnforceRange(value1, context) {
                const lowerBound = 0;
                const upperBound = Number.MAX_SAFE_INTEGER;
                let x = Number(value1);
                x = censorNegativeZero(x);
                if (!NumberIsFinite(x)) {
                    throw new TypeError(`${context} is not a finite number`);
                }
                x = integerPart(x);
                if (x < lowerBound || x > upperBound) {
                    throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
                }
                if (!NumberIsFinite(x) || x === 0) {
                    return 0;
                }
                // TODO Use BigInt if supported?
                // let xBigInt = BigInt(integerPart(x));
                // xBigInt = BigInt.asUintN(64, xBigInt);
                // return Number(xBigInt);
                return x;
            }
            function assertReadableStream(x, context) {
                if (!IsReadableStream(x)) {
                    throw new TypeError(`${context} is not a ReadableStream.`);
                }
            }
            // Abstract operations for the ReadableStream.
            function AcquireReadableStreamDefaultReader(stream) {
                return new ReadableStreamDefaultReader(stream);
            }
            // ReadableStream API exposed for controllers.
            function ReadableStreamAddReadRequest(stream, readRequest) {
                stream._reader._readRequests.push(readRequest);
            }
            function ReadableStreamFulfillReadRequest(stream, chunk, done) {
                const reader = stream._reader;
                const readRequest = reader._readRequests.shift();
                if (done) {
                    readRequest._closeSteps();
                } else {
                    readRequest._chunkSteps(chunk);
                }
            }
            function ReadableStreamGetNumReadRequests(stream) {
                return stream._reader._readRequests.length;
            }
            function ReadableStreamHasDefaultReader(stream) {
                const reader = stream._reader;
                if (reader === undefined) {
                    return false;
                }
                if (!IsReadableStreamDefaultReader(reader)) {
                    return false;
                }
                return true;
            }
            /**
		     * A default reader vended by a {@link ReadableStream}.
		     *
		     * @public
		     */ class ReadableStreamDefaultReader {
                constructor(stream){
                    assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
                    assertReadableStream(stream, "First parameter");
                    if (IsReadableStreamLocked(stream)) {
                        throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    }
                    ReadableStreamReaderGenericInitialize(this, stream);
                    this._readRequests = new SimpleQueue();
                }
                /**
		         * Returns a promise that will be fulfilled when the stream becomes closed,
		         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
		         */ get closed() {
                    if (!IsReadableStreamDefaultReader(this)) {
                        return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
                    }
                    return this._closedPromise;
                }
                /**
		         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
		         */ cancel(reason = undefined) {
                    if (!IsReadableStreamDefaultReader(this)) {
                        return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
                    }
                    if (this._ownerReadableStream === undefined) {
                        return promiseRejectedWith(readerLockException("cancel"));
                    }
                    return ReadableStreamReaderGenericCancel(this, reason);
                }
                /**
		         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
		         *
		         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
		         */ read() {
                    if (!IsReadableStreamDefaultReader(this)) {
                        return promiseRejectedWith(defaultReaderBrandCheckException("read"));
                    }
                    if (this._ownerReadableStream === undefined) {
                        return promiseRejectedWith(readerLockException("read from"));
                    }
                    let resolvePromise;
                    let rejectPromise;
                    const promise = newPromise((resolve, reject)=>{
                        resolvePromise = resolve;
                        rejectPromise = reject;
                    });
                    const readRequest = {
                        _chunkSteps: (chunk)=>resolvePromise({
                                value: chunk,
                                done: false
                            }),
                        _closeSteps: ()=>resolvePromise({
                                value: undefined,
                                done: true
                            }),
                        _errorSteps: (e)=>rejectPromise(e)
                    };
                    ReadableStreamDefaultReaderRead(this, readRequest);
                    return promise;
                }
                /**
		         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
		         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
		         * from now on; otherwise, the reader will appear closed.
		         *
		         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
		         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
		         * do so will throw a `TypeError` and leave the reader locked to the stream.
		         */ releaseLock() {
                    if (!IsReadableStreamDefaultReader(this)) {
                        throw defaultReaderBrandCheckException("releaseLock");
                    }
                    if (this._ownerReadableStream === undefined) {
                        return;
                    }
                    if (this._readRequests.length > 0) {
                        throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
                    }
                    ReadableStreamReaderGenericRelease(this);
                }
            }
            Object.defineProperties(ReadableStreamDefaultReader.prototype, {
                cancel: {
                    enumerable: true
                },
                read: {
                    enumerable: true
                },
                releaseLock: {
                    enumerable: true
                },
                closed: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
                    value: "ReadableStreamDefaultReader",
                    configurable: true
                });
            }
            // Abstract operations for the readers.
            function IsReadableStreamDefaultReader(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_readRequests")) {
                    return false;
                }
                return x instanceof ReadableStreamDefaultReader;
            }
            function ReadableStreamDefaultReaderRead(reader, readRequest) {
                const stream = reader._ownerReadableStream;
                stream._disturbed = true;
                if (stream._state === "closed") {
                    readRequest._closeSteps();
                } else if (stream._state === "errored") {
                    readRequest._errorSteps(stream._storedError);
                } else {
                    stream._readableStreamController[PullSteps](readRequest);
                }
            }
            // Helper functions for the ReadableStreamDefaultReader.
            function defaultReaderBrandCheckException(name) {
                return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
            }
            /// <reference lib="es2018.asynciterable" />
            /* eslint-disable @typescript-eslint/no-empty-function */ const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {}).prototype);
            /// <reference lib="es2018.asynciterable" />
            class ReadableStreamAsyncIteratorImpl {
                constructor(reader, preventCancel){
                    this._ongoingPromise = undefined;
                    this._isFinished = false;
                    this._reader = reader;
                    this._preventCancel = preventCancel;
                }
                next() {
                    const nextSteps = ()=>this._nextSteps();
                    this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
                    return this._ongoingPromise;
                }
                return(value1) {
                    const returnSteps = ()=>this._returnSteps(value1);
                    return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
                }
                _nextSteps() {
                    if (this._isFinished) {
                        return Promise.resolve({
                            value: undefined,
                            done: true
                        });
                    }
                    const reader = this._reader;
                    if (reader._ownerReadableStream === undefined) {
                        return promiseRejectedWith(readerLockException("iterate"));
                    }
                    let resolvePromise;
                    let rejectPromise;
                    const promise = newPromise((resolve, reject)=>{
                        resolvePromise = resolve;
                        rejectPromise = reject;
                    });
                    const readRequest = {
                        _chunkSteps: (chunk)=>{
                            this._ongoingPromise = undefined;
                            // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                            // FIXME Is this a bug in the specification, or in the test?
                            queueMicrotask(()=>resolvePromise({
                                    value: chunk,
                                    done: false
                                }));
                        },
                        _closeSteps: ()=>{
                            this._ongoingPromise = undefined;
                            this._isFinished = true;
                            ReadableStreamReaderGenericRelease(reader);
                            resolvePromise({
                                value: undefined,
                                done: true
                            });
                        },
                        _errorSteps: (reason)=>{
                            this._ongoingPromise = undefined;
                            this._isFinished = true;
                            ReadableStreamReaderGenericRelease(reader);
                            rejectPromise(reason);
                        }
                    };
                    ReadableStreamDefaultReaderRead(reader, readRequest);
                    return promise;
                }
                _returnSteps(value1) {
                    if (this._isFinished) {
                        return Promise.resolve({
                            value: value1,
                            done: true
                        });
                    }
                    this._isFinished = true;
                    const reader = this._reader;
                    if (reader._ownerReadableStream === undefined) {
                        return promiseRejectedWith(readerLockException("finish iterating"));
                    }
                    if (!this._preventCancel) {
                        const result = ReadableStreamReaderGenericCancel(reader, value1);
                        ReadableStreamReaderGenericRelease(reader);
                        return transformPromiseWith(result, ()=>({
                                value: value1,
                                done: true
                            }));
                    }
                    ReadableStreamReaderGenericRelease(reader);
                    return promiseResolvedWith({
                        value: value1,
                        done: true
                    });
                }
            }
            const ReadableStreamAsyncIteratorPrototype = {
                next () {
                    if (!IsReadableStreamAsyncIterator(this)) {
                        return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
                    }
                    return this._asyncIteratorImpl.next();
                },
                return (value1) {
                    if (!IsReadableStreamAsyncIterator(this)) {
                        return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
                    }
                    return this._asyncIteratorImpl.return(value1);
                }
            };
            if (AsyncIteratorPrototype !== undefined) {
                Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
            }
            // Abstract operations for the ReadableStream.
            function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
                const reader = AcquireReadableStreamDefaultReader(stream);
                const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
                const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
                iterator._asyncIteratorImpl = impl;
                return iterator;
            }
            function IsReadableStreamAsyncIterator(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_asyncIteratorImpl")) {
                    return false;
                }
                try {
                    // noinspection SuspiciousTypeOfGuard
                    return x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
                } catch (_a) {
                    return false;
                }
            }
            // Helper functions for the ReadableStream.
            function streamAsyncIteratorBrandCheckException(name) {
                return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
            }
            /// <reference lib="es2015.core" />
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
            const NumberIsNaN = Number.isNaN || function(x) {
                // eslint-disable-next-line no-self-compare
                return x !== x;
            };
            function CreateArrayFromList(elements) {
                // We use arrays to represent lists, so this is basically a no-op.
                // Do a slice though just in case we happen to depend on the unique-ness.
                return elements.slice();
            }
            function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
                new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
            }
            // Not implemented correctly
            function TransferArrayBuffer(O) {
                return O;
            }
            // Not implemented correctly
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            function IsDetachedBuffer(O) {
                return false;
            }
            function ArrayBufferSlice(buffer, begin, end) {
                // ArrayBuffer.prototype.slice is not available on IE10
                // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
                if (buffer.slice) {
                    return buffer.slice(begin, end);
                }
                const length = end - begin;
                const slice = new ArrayBuffer(length);
                CopyDataBlockBytes(slice, 0, buffer, begin, length);
                return slice;
            }
            function IsNonNegativeNumber(v) {
                if (typeof v !== "number") {
                    return false;
                }
                if (NumberIsNaN(v)) {
                    return false;
                }
                if (v < 0) {
                    return false;
                }
                return true;
            }
            function CloneAsUint8Array(O) {
                const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
                return new Uint8Array(buffer);
            }
            function DequeueValue(container) {
                const pair = container._queue.shift();
                container._queueTotalSize -= pair.size;
                if (container._queueTotalSize < 0) {
                    container._queueTotalSize = 0;
                }
                return pair.value;
            }
            function EnqueueValueWithSize(container, value1, size) {
                if (!IsNonNegativeNumber(size) || size === Infinity) {
                    throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
                }
                container._queue.push({
                    value: value1,
                    size
                });
                container._queueTotalSize += size;
            }
            function PeekQueueValue(container) {
                const pair = container._queue.peek();
                return pair.value;
            }
            function ResetQueue(container) {
                container._queue = new SimpleQueue();
                container._queueTotalSize = 0;
            }
            /**
		     * A pull-into request in a {@link ReadableByteStreamController}.
		     *
		     * @public
		     */ class ReadableStreamBYOBRequest {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                /**
		         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
		         */ get view() {
                    if (!IsReadableStreamBYOBRequest(this)) {
                        throw byobRequestBrandCheckException("view");
                    }
                    return this._view;
                }
                respond(bytesWritten) {
                    if (!IsReadableStreamBYOBRequest(this)) {
                        throw byobRequestBrandCheckException("respond");
                    }
                    assertRequiredArgument(bytesWritten, 1, "respond");
                    bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
                    if (this._associatedReadableByteStreamController === undefined) {
                        throw new TypeError("This BYOB request has been invalidated");
                    }
                    if (IsDetachedBuffer(this._view.buffer)) ;
                    ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
                }
                respondWithNewView(view) {
                    if (!IsReadableStreamBYOBRequest(this)) {
                        throw byobRequestBrandCheckException("respondWithNewView");
                    }
                    assertRequiredArgument(view, 1, "respondWithNewView");
                    if (!ArrayBuffer.isView(view)) {
                        throw new TypeError("You can only respond with array buffer views");
                    }
                    if (this._associatedReadableByteStreamController === undefined) {
                        throw new TypeError("This BYOB request has been invalidated");
                    }
                    if (IsDetachedBuffer(view.buffer)) ;
                    ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
                }
            }
            Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
                respond: {
                    enumerable: true
                },
                respondWithNewView: {
                    enumerable: true
                },
                view: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
                    value: "ReadableStreamBYOBRequest",
                    configurable: true
                });
            }
            /**
		     * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
		     *
		     * @public
		     */ class ReadableByteStreamController {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                /**
		         * Returns the current BYOB pull request, or `null` if there isn't one.
		         */ get byobRequest() {
                    if (!IsReadableByteStreamController(this)) {
                        throw byteStreamControllerBrandCheckException("byobRequest");
                    }
                    return ReadableByteStreamControllerGetBYOBRequest(this);
                }
                /**
		         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
		         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
		         */ get desiredSize() {
                    if (!IsReadableByteStreamController(this)) {
                        throw byteStreamControllerBrandCheckException("desiredSize");
                    }
                    return ReadableByteStreamControllerGetDesiredSize(this);
                }
                /**
		         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
		         * the stream, but once those are read, the stream will become closed.
		         */ close() {
                    if (!IsReadableByteStreamController(this)) {
                        throw byteStreamControllerBrandCheckException("close");
                    }
                    if (this._closeRequested) {
                        throw new TypeError("The stream has already been closed; do not close it again!");
                    }
                    const state = this._controlledReadableByteStream._state;
                    if (state !== "readable") {
                        throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
                    }
                    ReadableByteStreamControllerClose(this);
                }
                enqueue(chunk) {
                    if (!IsReadableByteStreamController(this)) {
                        throw byteStreamControllerBrandCheckException("enqueue");
                    }
                    assertRequiredArgument(chunk, 1, "enqueue");
                    if (!ArrayBuffer.isView(chunk)) {
                        throw new TypeError("chunk must be an array buffer view");
                    }
                    if (chunk.byteLength === 0) {
                        throw new TypeError("chunk must have non-zero byteLength");
                    }
                    if (chunk.buffer.byteLength === 0) {
                        throw new TypeError(`chunk's buffer must have non-zero byteLength`);
                    }
                    if (this._closeRequested) {
                        throw new TypeError("stream is closed or draining");
                    }
                    const state = this._controlledReadableByteStream._state;
                    if (state !== "readable") {
                        throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
                    }
                    ReadableByteStreamControllerEnqueue(this, chunk);
                }
                /**
		         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
		         */ error(e = undefined) {
                    if (!IsReadableByteStreamController(this)) {
                        throw byteStreamControllerBrandCheckException("error");
                    }
                    ReadableByteStreamControllerError(this, e);
                }
                /** @internal */ [CancelSteps](reason) {
                    ReadableByteStreamControllerClearPendingPullIntos(this);
                    ResetQueue(this);
                    const result = this._cancelAlgorithm(reason);
                    ReadableByteStreamControllerClearAlgorithms(this);
                    return result;
                }
                /** @internal */ [PullSteps](readRequest) {
                    const stream = this._controlledReadableByteStream;
                    if (this._queueTotalSize > 0) {
                        const entry = this._queue.shift();
                        this._queueTotalSize -= entry.byteLength;
                        ReadableByteStreamControllerHandleQueueDrain(this);
                        const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
                        readRequest._chunkSteps(view);
                        return;
                    }
                    const autoAllocateChunkSize = this._autoAllocateChunkSize;
                    if (autoAllocateChunkSize !== undefined) {
                        let buffer;
                        try {
                            buffer = new ArrayBuffer(autoAllocateChunkSize);
                        } catch (bufferE) {
                            readRequest._errorSteps(bufferE);
                            return;
                        }
                        const pullIntoDescriptor = {
                            buffer,
                            bufferByteLength: autoAllocateChunkSize,
                            byteOffset: 0,
                            byteLength: autoAllocateChunkSize,
                            bytesFilled: 0,
                            elementSize: 1,
                            viewConstructor: Uint8Array,
                            readerType: "default"
                        };
                        this._pendingPullIntos.push(pullIntoDescriptor);
                    }
                    ReadableStreamAddReadRequest(stream, readRequest);
                    ReadableByteStreamControllerCallPullIfNeeded(this);
                }
            }
            Object.defineProperties(ReadableByteStreamController.prototype, {
                close: {
                    enumerable: true
                },
                enqueue: {
                    enumerable: true
                },
                error: {
                    enumerable: true
                },
                byobRequest: {
                    enumerable: true
                },
                desiredSize: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
                    value: "ReadableByteStreamController",
                    configurable: true
                });
            }
            // Abstract operations for the ReadableByteStreamController.
            function IsReadableByteStreamController(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableByteStream")) {
                    return false;
                }
                return x instanceof ReadableByteStreamController;
            }
            function IsReadableStreamBYOBRequest(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_associatedReadableByteStreamController")) {
                    return false;
                }
                return x instanceof ReadableStreamBYOBRequest;
            }
            function ReadableByteStreamControllerCallPullIfNeeded(controller) {
                const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
                if (!shouldPull) {
                    return;
                }
                if (controller._pulling) {
                    controller._pullAgain = true;
                    return;
                }
                controller._pulling = true;
                // TODO: Test controller argument
                const pullPromise = controller._pullAlgorithm();
                uponPromise(pullPromise, ()=>{
                    controller._pulling = false;
                    if (controller._pullAgain) {
                        controller._pullAgain = false;
                        ReadableByteStreamControllerCallPullIfNeeded(controller);
                    }
                }, (e)=>{
                    ReadableByteStreamControllerError(controller, e);
                });
            }
            function ReadableByteStreamControllerClearPendingPullIntos(controller) {
                ReadableByteStreamControllerInvalidateBYOBRequest(controller);
                controller._pendingPullIntos = new SimpleQueue();
            }
            function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
                let done = false;
                if (stream._state === "closed") {
                    done = true;
                }
                const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                if (pullIntoDescriptor.readerType === "default") {
                    ReadableStreamFulfillReadRequest(stream, filledView, done);
                } else {
                    ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
                }
            }
            function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
                const bytesFilled = pullIntoDescriptor.bytesFilled;
                const elementSize = pullIntoDescriptor.elementSize;
                return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
            }
            function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
                controller._queue.push({
                    buffer,
                    byteOffset,
                    byteLength
                });
                controller._queueTotalSize += byteLength;
            }
            function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
                const elementSize = pullIntoDescriptor.elementSize;
                const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
                const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
                const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
                const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
                let totalBytesToCopyRemaining = maxBytesToCopy;
                let ready = false;
                if (maxAlignedBytes > currentAlignedBytes) {
                    totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
                    ready = true;
                }
                const queue = controller._queue;
                while(totalBytesToCopyRemaining > 0){
                    const headOfQueue = queue.peek();
                    const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
                    const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
                    CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
                    if (headOfQueue.byteLength === bytesToCopy) {
                        queue.shift();
                    } else {
                        headOfQueue.byteOffset += bytesToCopy;
                        headOfQueue.byteLength -= bytesToCopy;
                    }
                    controller._queueTotalSize -= bytesToCopy;
                    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
                    totalBytesToCopyRemaining -= bytesToCopy;
                }
                return ready;
            }
            function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
                pullIntoDescriptor.bytesFilled += size;
            }
            function ReadableByteStreamControllerHandleQueueDrain(controller) {
                if (controller._queueTotalSize === 0 && controller._closeRequested) {
                    ReadableByteStreamControllerClearAlgorithms(controller);
                    ReadableStreamClose(controller._controlledReadableByteStream);
                } else {
                    ReadableByteStreamControllerCallPullIfNeeded(controller);
                }
            }
            function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
                if (controller._byobRequest === null) {
                    return;
                }
                controller._byobRequest._associatedReadableByteStreamController = undefined;
                controller._byobRequest._view = null;
                controller._byobRequest = null;
            }
            function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
                while(controller._pendingPullIntos.length > 0){
                    if (controller._queueTotalSize === 0) {
                        return;
                    }
                    const pullIntoDescriptor = controller._pendingPullIntos.peek();
                    if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                        ReadableByteStreamControllerShiftPendingPullInto(controller);
                        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
                    }
                }
            }
            function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
                const stream = controller._controlledReadableByteStream;
                let elementSize = 1;
                if (view.constructor !== DataView) {
                    elementSize = view.constructor.BYTES_PER_ELEMENT;
                }
                const ctor = view.constructor;
                // try {
                const buffer = TransferArrayBuffer(view.buffer);
                // } catch (e) {
                //   readIntoRequest._errorSteps(e);
                //   return;
                // }
                const pullIntoDescriptor = {
                    buffer,
                    bufferByteLength: buffer.byteLength,
                    byteOffset: view.byteOffset,
                    byteLength: view.byteLength,
                    bytesFilled: 0,
                    elementSize,
                    viewConstructor: ctor,
                    readerType: "byob"
                };
                if (controller._pendingPullIntos.length > 0) {
                    controller._pendingPullIntos.push(pullIntoDescriptor);
                    // No ReadableByteStreamControllerCallPullIfNeeded() call since:
                    // - No change happens on desiredSize
                    // - The source has already been notified of that there's at least 1 pending read(view)
                    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
                    return;
                }
                if (stream._state === "closed") {
                    const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
                    readIntoRequest._closeSteps(emptyView);
                    return;
                }
                if (controller._queueTotalSize > 0) {
                    if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                        ReadableByteStreamControllerHandleQueueDrain(controller);
                        readIntoRequest._chunkSteps(filledView);
                        return;
                    }
                    if (controller._closeRequested) {
                        const e = new TypeError("Insufficient bytes to fill elements in the given buffer");
                        ReadableByteStreamControllerError(controller, e);
                        readIntoRequest._errorSteps(e);
                        return;
                    }
                }
                controller._pendingPullIntos.push(pullIntoDescriptor);
                ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
                ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
            function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
                const stream = controller._controlledReadableByteStream;
                if (ReadableStreamHasBYOBReader(stream)) {
                    while(ReadableStreamGetNumReadIntoRequests(stream) > 0){
                        const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
                        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
                    }
                }
            }
            function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
                ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
                if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
                    return;
                }
                ReadableByteStreamControllerShiftPendingPullInto(controller);
                const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
                if (remainderSize > 0) {
                    const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
                    const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
                    ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
                }
                pullIntoDescriptor.bytesFilled -= remainderSize;
                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
                ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
            }
            function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
                const firstDescriptor = controller._pendingPullIntos.peek();
                ReadableByteStreamControllerInvalidateBYOBRequest(controller);
                const state = controller._controlledReadableByteStream._state;
                if (state === "closed") {
                    ReadableByteStreamControllerRespondInClosedState(controller);
                } else {
                    ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
                }
                ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
            function ReadableByteStreamControllerShiftPendingPullInto(controller) {
                const descriptor = controller._pendingPullIntos.shift();
                return descriptor;
            }
            function ReadableByteStreamControllerShouldCallPull(controller) {
                const stream = controller._controlledReadableByteStream;
                if (stream._state !== "readable") {
                    return false;
                }
                if (controller._closeRequested) {
                    return false;
                }
                if (!controller._started) {
                    return false;
                }
                if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
                    return true;
                }
                if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
                    return true;
                }
                const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
                if (desiredSize > 0) {
                    return true;
                }
                return false;
            }
            function ReadableByteStreamControllerClearAlgorithms(controller) {
                controller._pullAlgorithm = undefined;
                controller._cancelAlgorithm = undefined;
            }
            // A client of ReadableByteStreamController may use these functions directly to bypass state check.
            function ReadableByteStreamControllerClose(controller) {
                const stream = controller._controlledReadableByteStream;
                if (controller._closeRequested || stream._state !== "readable") {
                    return;
                }
                if (controller._queueTotalSize > 0) {
                    controller._closeRequested = true;
                    return;
                }
                if (controller._pendingPullIntos.length > 0) {
                    const firstPendingPullInto = controller._pendingPullIntos.peek();
                    if (firstPendingPullInto.bytesFilled > 0) {
                        const e = new TypeError("Insufficient bytes to fill elements in the given buffer");
                        ReadableByteStreamControllerError(controller, e);
                        throw e;
                    }
                }
                ReadableByteStreamControllerClearAlgorithms(controller);
                ReadableStreamClose(stream);
            }
            function ReadableByteStreamControllerEnqueue(controller, chunk) {
                const stream = controller._controlledReadableByteStream;
                if (controller._closeRequested || stream._state !== "readable") {
                    return;
                }
                const buffer = chunk.buffer;
                const byteOffset = chunk.byteOffset;
                const byteLength = chunk.byteLength;
                const transferredBuffer = TransferArrayBuffer(buffer);
                if (controller._pendingPullIntos.length > 0) {
                    const firstPendingPullInto = controller._pendingPullIntos.peek();
                    if (IsDetachedBuffer(firstPendingPullInto.buffer)) ;
                    firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
                }
                ReadableByteStreamControllerInvalidateBYOBRequest(controller);
                if (ReadableStreamHasDefaultReader(stream)) {
                    if (ReadableStreamGetNumReadRequests(stream) === 0) {
                        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
                    } else {
                        if (controller._pendingPullIntos.length > 0) {
                            ReadableByteStreamControllerShiftPendingPullInto(controller);
                        }
                        const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
                        ReadableStreamFulfillReadRequest(stream, transferredView, false);
                    }
                } else if (ReadableStreamHasBYOBReader(stream)) {
                    // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
                    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
                    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
                } else {
                    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
                }
                ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
            function ReadableByteStreamControllerError(controller, e) {
                const stream = controller._controlledReadableByteStream;
                if (stream._state !== "readable") {
                    return;
                }
                ReadableByteStreamControllerClearPendingPullIntos(controller);
                ResetQueue(controller);
                ReadableByteStreamControllerClearAlgorithms(controller);
                ReadableStreamError(stream, e);
            }
            function ReadableByteStreamControllerGetBYOBRequest(controller) {
                if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
                    const firstDescriptor = controller._pendingPullIntos.peek();
                    const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
                    const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
                    SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
                    controller._byobRequest = byobRequest;
                }
                return controller._byobRequest;
            }
            function ReadableByteStreamControllerGetDesiredSize(controller) {
                const state = controller._controlledReadableByteStream._state;
                if (state === "errored") {
                    return null;
                }
                if (state === "closed") {
                    return 0;
                }
                return controller._strategyHWM - controller._queueTotalSize;
            }
            function ReadableByteStreamControllerRespond(controller, bytesWritten) {
                const firstDescriptor = controller._pendingPullIntos.peek();
                const state = controller._controlledReadableByteStream._state;
                if (state === "closed") {
                    if (bytesWritten !== 0) {
                        throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
                    }
                } else {
                    if (bytesWritten === 0) {
                        throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                    }
                    if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
                        throw new RangeError("bytesWritten out of range");
                    }
                }
                firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
                ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
            }
            function ReadableByteStreamControllerRespondWithNewView(controller, view) {
                const firstDescriptor = controller._pendingPullIntos.peek();
                const state = controller._controlledReadableByteStream._state;
                if (state === "closed") {
                    if (view.byteLength !== 0) {
                        throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
                    }
                } else {
                    if (view.byteLength === 0) {
                        throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
                    }
                }
                if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
                    throw new RangeError("The region specified by view does not match byobRequest");
                }
                if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
                    throw new RangeError("The buffer of view has different capacity than byobRequest");
                }
                if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
                    throw new RangeError("The region specified by view is larger than byobRequest");
                }
                const viewByteLength = view.byteLength;
                firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
                ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
            }
            function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
                controller._controlledReadableByteStream = stream;
                controller._pullAgain = false;
                controller._pulling = false;
                controller._byobRequest = null;
                // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
                controller._queue = controller._queueTotalSize = undefined;
                ResetQueue(controller);
                controller._closeRequested = false;
                controller._started = false;
                controller._strategyHWM = highWaterMark;
                controller._pullAlgorithm = pullAlgorithm;
                controller._cancelAlgorithm = cancelAlgorithm;
                controller._autoAllocateChunkSize = autoAllocateChunkSize;
                controller._pendingPullIntos = new SimpleQueue();
                stream._readableStreamController = controller;
                const startResult = startAlgorithm();
                uponPromise(promiseResolvedWith(startResult), ()=>{
                    controller._started = true;
                    ReadableByteStreamControllerCallPullIfNeeded(controller);
                }, (r)=>{
                    ReadableByteStreamControllerError(controller, r);
                });
            }
            function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
                const controller = Object.create(ReadableByteStreamController.prototype);
                let startAlgorithm = ()=>undefined;
                let pullAlgorithm = ()=>promiseResolvedWith(undefined);
                let cancelAlgorithm = ()=>promiseResolvedWith(undefined);
                if (underlyingByteSource.start !== undefined) {
                    startAlgorithm = ()=>underlyingByteSource.start(controller);
                }
                if (underlyingByteSource.pull !== undefined) {
                    pullAlgorithm = ()=>underlyingByteSource.pull(controller);
                }
                if (underlyingByteSource.cancel !== undefined) {
                    cancelAlgorithm = (reason)=>underlyingByteSource.cancel(reason);
                }
                const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
                if (autoAllocateChunkSize === 0) {
                    throw new TypeError("autoAllocateChunkSize must be greater than 0");
                }
                SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
            }
            function SetUpReadableStreamBYOBRequest(request, controller, view) {
                request._associatedReadableByteStreamController = controller;
                request._view = view;
            }
            // Helper functions for the ReadableStreamBYOBRequest.
            function byobRequestBrandCheckException(name) {
                return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
            }
            // Helper functions for the ReadableByteStreamController.
            function byteStreamControllerBrandCheckException(name) {
                return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
            }
            // Abstract operations for the ReadableStream.
            function AcquireReadableStreamBYOBReader(stream) {
                return new ReadableStreamBYOBReader(stream);
            }
            // ReadableStream API exposed for controllers.
            function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
                stream._reader._readIntoRequests.push(readIntoRequest);
            }
            function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
                const reader = stream._reader;
                const readIntoRequest = reader._readIntoRequests.shift();
                if (done) {
                    readIntoRequest._closeSteps(chunk);
                } else {
                    readIntoRequest._chunkSteps(chunk);
                }
            }
            function ReadableStreamGetNumReadIntoRequests(stream) {
                return stream._reader._readIntoRequests.length;
            }
            function ReadableStreamHasBYOBReader(stream) {
                const reader = stream._reader;
                if (reader === undefined) {
                    return false;
                }
                if (!IsReadableStreamBYOBReader(reader)) {
                    return false;
                }
                return true;
            }
            /**
		     * A BYOB reader vended by a {@link ReadableStream}.
		     *
		     * @public
		     */ class ReadableStreamBYOBReader {
                constructor(stream){
                    assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
                    assertReadableStream(stream, "First parameter");
                    if (IsReadableStreamLocked(stream)) {
                        throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    }
                    if (!IsReadableByteStreamController(stream._readableStreamController)) {
                        throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte " + "source");
                    }
                    ReadableStreamReaderGenericInitialize(this, stream);
                    this._readIntoRequests = new SimpleQueue();
                }
                /**
		         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
		         * the reader's lock is released before the stream finishes closing.
		         */ get closed() {
                    if (!IsReadableStreamBYOBReader(this)) {
                        return promiseRejectedWith(byobReaderBrandCheckException("closed"));
                    }
                    return this._closedPromise;
                }
                /**
		         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
		         */ cancel(reason = undefined) {
                    if (!IsReadableStreamBYOBReader(this)) {
                        return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
                    }
                    if (this._ownerReadableStream === undefined) {
                        return promiseRejectedWith(readerLockException("cancel"));
                    }
                    return ReadableStreamReaderGenericCancel(this, reason);
                }
                /**
		         * Attempts to reads bytes into view, and returns a promise resolved with the result.
		         *
		         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
		         */ read(view) {
                    if (!IsReadableStreamBYOBReader(this)) {
                        return promiseRejectedWith(byobReaderBrandCheckException("read"));
                    }
                    if (!ArrayBuffer.isView(view)) {
                        return promiseRejectedWith(new TypeError("view must be an array buffer view"));
                    }
                    if (view.byteLength === 0) {
                        return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
                    }
                    if (view.buffer.byteLength === 0) {
                        return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
                    }
                    if (IsDetachedBuffer(view.buffer)) ;
                    if (this._ownerReadableStream === undefined) {
                        return promiseRejectedWith(readerLockException("read from"));
                    }
                    let resolvePromise;
                    let rejectPromise;
                    const promise = newPromise((resolve, reject)=>{
                        resolvePromise = resolve;
                        rejectPromise = reject;
                    });
                    const readIntoRequest = {
                        _chunkSteps: (chunk)=>resolvePromise({
                                value: chunk,
                                done: false
                            }),
                        _closeSteps: (chunk)=>resolvePromise({
                                value: chunk,
                                done: true
                            }),
                        _errorSteps: (e)=>rejectPromise(e)
                    };
                    ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
                    return promise;
                }
                /**
		         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
		         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
		         * from now on; otherwise, the reader will appear closed.
		         *
		         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
		         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
		         * do so will throw a `TypeError` and leave the reader locked to the stream.
		         */ releaseLock() {
                    if (!IsReadableStreamBYOBReader(this)) {
                        throw byobReaderBrandCheckException("releaseLock");
                    }
                    if (this._ownerReadableStream === undefined) {
                        return;
                    }
                    if (this._readIntoRequests.length > 0) {
                        throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
                    }
                    ReadableStreamReaderGenericRelease(this);
                }
            }
            Object.defineProperties(ReadableStreamBYOBReader.prototype, {
                cancel: {
                    enumerable: true
                },
                read: {
                    enumerable: true
                },
                releaseLock: {
                    enumerable: true
                },
                closed: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
                    value: "ReadableStreamBYOBReader",
                    configurable: true
                });
            }
            // Abstract operations for the readers.
            function IsReadableStreamBYOBReader(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_readIntoRequests")) {
                    return false;
                }
                return x instanceof ReadableStreamBYOBReader;
            }
            function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
                const stream = reader._ownerReadableStream;
                stream._disturbed = true;
                if (stream._state === "errored") {
                    readIntoRequest._errorSteps(stream._storedError);
                } else {
                    ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
                }
            }
            // Helper functions for the ReadableStreamBYOBReader.
            function byobReaderBrandCheckException(name) {
                return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
            }
            function ExtractHighWaterMark(strategy, defaultHWM) {
                const { highWaterMark } = strategy;
                if (highWaterMark === undefined) {
                    return defaultHWM;
                }
                if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
                    throw new RangeError("Invalid highWaterMark");
                }
                return highWaterMark;
            }
            function ExtractSizeAlgorithm(strategy) {
                const { size } = strategy;
                if (!size) {
                    return ()=>1;
                }
                return size;
            }
            function convertQueuingStrategy(init, context) {
                assertDictionary(init, context);
                const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
                const size = init === null || init === void 0 ? void 0 : init.size;
                return {
                    highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
                    size: size === undefined ? undefined : convertQueuingStrategySize(size, `${context} has member 'size' that`)
                };
            }
            function convertQueuingStrategySize(fn, context) {
                assertFunction(fn, context);
                return (chunk)=>convertUnrestrictedDouble(fn(chunk));
            }
            function convertUnderlyingSink(original, context) {
                assertDictionary(original, context);
                const abort = original === null || original === void 0 ? void 0 : original.abort;
                const close = original === null || original === void 0 ? void 0 : original.close;
                const start = original === null || original === void 0 ? void 0 : original.start;
                const type = original === null || original === void 0 ? void 0 : original.type;
                const write = original === null || original === void 0 ? void 0 : original.write;
                return {
                    abort: abort === undefined ? undefined : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
                    close: close === undefined ? undefined : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
                    start: start === undefined ? undefined : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
                    write: write === undefined ? undefined : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
                    type
                };
            }
            function convertUnderlyingSinkAbortCallback(fn, original, context) {
                assertFunction(fn, context);
                return (reason)=>promiseCall(fn, original, [
                        reason
                    ]);
            }
            function convertUnderlyingSinkCloseCallback(fn, original, context) {
                assertFunction(fn, context);
                return ()=>promiseCall(fn, original, []);
            }
            function convertUnderlyingSinkStartCallback(fn, original, context) {
                assertFunction(fn, context);
                return (controller)=>reflectCall(fn, original, [
                        controller
                    ]);
            }
            function convertUnderlyingSinkWriteCallback(fn, original, context) {
                assertFunction(fn, context);
                return (chunk, controller)=>promiseCall(fn, original, [
                        chunk,
                        controller
                    ]);
            }
            function assertWritableStream(x, context) {
                if (!IsWritableStream(x)) {
                    throw new TypeError(`${context} is not a WritableStream.`);
                }
            }
            function isAbortSignal(value1) {
                if (typeof value1 !== "object" || value1 === null) {
                    return false;
                }
                try {
                    return typeof value1.aborted === "boolean";
                } catch (_a) {
                    // AbortSignal.prototype.aborted throws if its brand check fails
                    return false;
                }
            }
            const supportsAbortController = typeof AbortController === "function";
            /**
		     * Construct a new AbortController, if supported by the platform.
		     *
		     * @internal
		     */ function createAbortController() {
                if (supportsAbortController) {
                    return new AbortController();
                }
                return undefined;
            }
            /**
		     * A writable stream represents a destination for data, into which you can write.
		     *
		     * @public
		     */ class WritableStream {
                constructor(rawUnderlyingSink = {}, rawStrategy = {}){
                    if (rawUnderlyingSink === undefined) {
                        rawUnderlyingSink = null;
                    } else {
                        assertObject(rawUnderlyingSink, "First parameter");
                    }
                    const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
                    const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
                    InitializeWritableStream(this);
                    const type = underlyingSink.type;
                    if (type !== undefined) {
                        throw new RangeError("Invalid type is specified");
                    }
                    const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
                    const highWaterMark = ExtractHighWaterMark(strategy, 1);
                    SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
                }
                /**
		         * Returns whether or not the writable stream is locked to a writer.
		         */ get locked() {
                    if (!IsWritableStream(this)) {
                        throw streamBrandCheckException$2("locked");
                    }
                    return IsWritableStreamLocked(this);
                }
                /**
		         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
		         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
		         * mechanism of the underlying sink.
		         *
		         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
		         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
		         * the stream) if the stream is currently locked.
		         */ abort(reason = undefined) {
                    if (!IsWritableStream(this)) {
                        return promiseRejectedWith(streamBrandCheckException$2("abort"));
                    }
                    if (IsWritableStreamLocked(this)) {
                        return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
                    }
                    return WritableStreamAbort(this, reason);
                }
                /**
		         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
		         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
		         *
		         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
		         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
		         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
		         */ close() {
                    if (!IsWritableStream(this)) {
                        return promiseRejectedWith(streamBrandCheckException$2("close"));
                    }
                    if (IsWritableStreamLocked(this)) {
                        return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
                    }
                    if (WritableStreamCloseQueuedOrInFlight(this)) {
                        return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
                    }
                    return WritableStreamClose(this);
                }
                /**
		         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
		         * is locked, no other writer can be acquired until this one is released.
		         *
		         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
		         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
		         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
		         */ getWriter() {
                    if (!IsWritableStream(this)) {
                        throw streamBrandCheckException$2("getWriter");
                    }
                    return AcquireWritableStreamDefaultWriter(this);
                }
            }
            Object.defineProperties(WritableStream.prototype, {
                abort: {
                    enumerable: true
                },
                close: {
                    enumerable: true
                },
                getWriter: {
                    enumerable: true
                },
                locked: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
                    value: "WritableStream",
                    configurable: true
                });
            }
            // Abstract operations for the WritableStream.
            function AcquireWritableStreamDefaultWriter(stream) {
                return new WritableStreamDefaultWriter(stream);
            }
            // Throws if and only if startAlgorithm throws.
            function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = ()=>1) {
                const stream = Object.create(WritableStream.prototype);
                InitializeWritableStream(stream);
                const controller = Object.create(WritableStreamDefaultController.prototype);
                SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
                return stream;
            }
            function InitializeWritableStream(stream) {
                stream._state = "writable";
                // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
                // 'erroring' or 'errored'. May be set to an undefined value.
                stream._storedError = undefined;
                stream._writer = undefined;
                // Initialize to undefined first because the constructor of the controller checks this
                // variable to validate the caller.
                stream._writableStreamController = undefined;
                // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
                // producer without waiting for the queued writes to finish.
                stream._writeRequests = new SimpleQueue();
                // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
                // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
                stream._inFlightWriteRequest = undefined;
                // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
                // has been detached.
                stream._closeRequest = undefined;
                // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
                // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
                stream._inFlightCloseRequest = undefined;
                // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
                stream._pendingAbortRequest = undefined;
                // The backpressure signal set by the controller.
                stream._backpressure = false;
            }
            function IsWritableStream(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_writableStreamController")) {
                    return false;
                }
                return x instanceof WritableStream;
            }
            function IsWritableStreamLocked(stream) {
                if (stream._writer === undefined) {
                    return false;
                }
                return true;
            }
            function WritableStreamAbort(stream, reason) {
                var _a;
                if (stream._state === "closed" || stream._state === "errored") {
                    return promiseResolvedWith(undefined);
                }
                stream._writableStreamController._abortReason = reason;
                (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
                // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
                // but it doesn't know that signaling abort runs author code that might have changed the state.
                // Widen the type again by casting to WritableStreamState.
                const state = stream._state;
                if (state === "closed" || state === "errored") {
                    return promiseResolvedWith(undefined);
                }
                if (stream._pendingAbortRequest !== undefined) {
                    return stream._pendingAbortRequest._promise;
                }
                let wasAlreadyErroring = false;
                if (state === "erroring") {
                    wasAlreadyErroring = true;
                    // reason will not be used, so don't keep a reference to it.
                    reason = undefined;
                }
                const promise = newPromise((resolve, reject)=>{
                    stream._pendingAbortRequest = {
                        _promise: undefined,
                        _resolve: resolve,
                        _reject: reject,
                        _reason: reason,
                        _wasAlreadyErroring: wasAlreadyErroring
                    };
                });
                stream._pendingAbortRequest._promise = promise;
                if (!wasAlreadyErroring) {
                    WritableStreamStartErroring(stream, reason);
                }
                return promise;
            }
            function WritableStreamClose(stream) {
                const state = stream._state;
                if (state === "closed" || state === "errored") {
                    return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
                }
                const promise = newPromise((resolve, reject)=>{
                    const closeRequest = {
                        _resolve: resolve,
                        _reject: reject
                    };
                    stream._closeRequest = closeRequest;
                });
                const writer = stream._writer;
                if (writer !== undefined && stream._backpressure && state === "writable") {
                    defaultWriterReadyPromiseResolve(writer);
                }
                WritableStreamDefaultControllerClose(stream._writableStreamController);
                return promise;
            }
            // WritableStream API exposed for controllers.
            function WritableStreamAddWriteRequest(stream) {
                const promise = newPromise((resolve, reject)=>{
                    const writeRequest = {
                        _resolve: resolve,
                        _reject: reject
                    };
                    stream._writeRequests.push(writeRequest);
                });
                return promise;
            }
            function WritableStreamDealWithRejection(stream, error) {
                const state = stream._state;
                if (state === "writable") {
                    WritableStreamStartErroring(stream, error);
                    return;
                }
                WritableStreamFinishErroring(stream);
            }
            function WritableStreamStartErroring(stream, reason) {
                const controller = stream._writableStreamController;
                stream._state = "erroring";
                stream._storedError = reason;
                const writer = stream._writer;
                if (writer !== undefined) {
                    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
                }
                if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
                    WritableStreamFinishErroring(stream);
                }
            }
            function WritableStreamFinishErroring(stream) {
                stream._state = "errored";
                stream._writableStreamController[ErrorSteps]();
                const storedError = stream._storedError;
                stream._writeRequests.forEach((writeRequest)=>{
                    writeRequest._reject(storedError);
                });
                stream._writeRequests = new SimpleQueue();
                if (stream._pendingAbortRequest === undefined) {
                    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                    return;
                }
                const abortRequest = stream._pendingAbortRequest;
                stream._pendingAbortRequest = undefined;
                if (abortRequest._wasAlreadyErroring) {
                    abortRequest._reject(storedError);
                    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                    return;
                }
                const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
                uponPromise(promise, ()=>{
                    abortRequest._resolve();
                    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                }, (reason)=>{
                    abortRequest._reject(reason);
                    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                });
            }
            function WritableStreamFinishInFlightWrite(stream) {
                stream._inFlightWriteRequest._resolve(undefined);
                stream._inFlightWriteRequest = undefined;
            }
            function WritableStreamFinishInFlightWriteWithError(stream, error) {
                stream._inFlightWriteRequest._reject(error);
                stream._inFlightWriteRequest = undefined;
                WritableStreamDealWithRejection(stream, error);
            }
            function WritableStreamFinishInFlightClose(stream) {
                stream._inFlightCloseRequest._resolve(undefined);
                stream._inFlightCloseRequest = undefined;
                const state = stream._state;
                if (state === "erroring") {
                    // The error was too late to do anything, so it is ignored.
                    stream._storedError = undefined;
                    if (stream._pendingAbortRequest !== undefined) {
                        stream._pendingAbortRequest._resolve();
                        stream._pendingAbortRequest = undefined;
                    }
                }
                stream._state = "closed";
                const writer = stream._writer;
                if (writer !== undefined) {
                    defaultWriterClosedPromiseResolve(writer);
                }
            }
            function WritableStreamFinishInFlightCloseWithError(stream, error) {
                stream._inFlightCloseRequest._reject(error);
                stream._inFlightCloseRequest = undefined;
                // Never execute sink abort() after sink close().
                if (stream._pendingAbortRequest !== undefined) {
                    stream._pendingAbortRequest._reject(error);
                    stream._pendingAbortRequest = undefined;
                }
                WritableStreamDealWithRejection(stream, error);
            }
            // TODO(ricea): Fix alphabetical order.
            function WritableStreamCloseQueuedOrInFlight(stream) {
                if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
                    return false;
                }
                return true;
            }
            function WritableStreamHasOperationMarkedInFlight(stream) {
                if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
                    return false;
                }
                return true;
            }
            function WritableStreamMarkCloseRequestInFlight(stream) {
                stream._inFlightCloseRequest = stream._closeRequest;
                stream._closeRequest = undefined;
            }
            function WritableStreamMarkFirstWriteRequestInFlight(stream) {
                stream._inFlightWriteRequest = stream._writeRequests.shift();
            }
            function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
                if (stream._closeRequest !== undefined) {
                    stream._closeRequest._reject(stream._storedError);
                    stream._closeRequest = undefined;
                }
                const writer = stream._writer;
                if (writer !== undefined) {
                    defaultWriterClosedPromiseReject(writer, stream._storedError);
                }
            }
            function WritableStreamUpdateBackpressure(stream, backpressure) {
                const writer = stream._writer;
                if (writer !== undefined && backpressure !== stream._backpressure) {
                    if (backpressure) {
                        defaultWriterReadyPromiseReset(writer);
                    } else {
                        defaultWriterReadyPromiseResolve(writer);
                    }
                }
                stream._backpressure = backpressure;
            }
            /**
		     * A default writer vended by a {@link WritableStream}.
		     *
		     * @public
		     */ class WritableStreamDefaultWriter {
                constructor(stream){
                    assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
                    assertWritableStream(stream, "First parameter");
                    if (IsWritableStreamLocked(stream)) {
                        throw new TypeError("This stream has already been locked for exclusive writing by another writer");
                    }
                    this._ownerWritableStream = stream;
                    stream._writer = this;
                    const state = stream._state;
                    if (state === "writable") {
                        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                            defaultWriterReadyPromiseInitialize(this);
                        } else {
                            defaultWriterReadyPromiseInitializeAsResolved(this);
                        }
                        defaultWriterClosedPromiseInitialize(this);
                    } else if (state === "erroring") {
                        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
                        defaultWriterClosedPromiseInitialize(this);
                    } else if (state === "closed") {
                        defaultWriterReadyPromiseInitializeAsResolved(this);
                        defaultWriterClosedPromiseInitializeAsResolved(this);
                    } else {
                        const storedError = stream._storedError;
                        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
                        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
                    }
                }
                /**
		         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
		         * the writer’s lock is released before the stream finishes closing.
		         */ get closed() {
                    if (!IsWritableStreamDefaultWriter(this)) {
                        return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
                    }
                    return this._closedPromise;
                }
                /**
		         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
		         * A producer can use this information to determine the right amount of data to write.
		         *
		         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
		         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
		         * the writer’s lock is released.
		         */ get desiredSize() {
                    if (!IsWritableStreamDefaultWriter(this)) {
                        throw defaultWriterBrandCheckException("desiredSize");
                    }
                    if (this._ownerWritableStream === undefined) {
                        throw defaultWriterLockException("desiredSize");
                    }
                    return WritableStreamDefaultWriterGetDesiredSize(this);
                }
                /**
		         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
		         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
		         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
		         *
		         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
		         * rejected.
		         */ get ready() {
                    if (!IsWritableStreamDefaultWriter(this)) {
                        return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
                    }
                    return this._readyPromise;
                }
                /**
		         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
		         */ abort(reason = undefined) {
                    if (!IsWritableStreamDefaultWriter(this)) {
                        return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
                    }
                    if (this._ownerWritableStream === undefined) {
                        return promiseRejectedWith(defaultWriterLockException("abort"));
                    }
                    return WritableStreamDefaultWriterAbort(this, reason);
                }
                /**
		         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
		         */ close() {
                    if (!IsWritableStreamDefaultWriter(this)) {
                        return promiseRejectedWith(defaultWriterBrandCheckException("close"));
                    }
                    const stream = this._ownerWritableStream;
                    if (stream === undefined) {
                        return promiseRejectedWith(defaultWriterLockException("close"));
                    }
                    if (WritableStreamCloseQueuedOrInFlight(stream)) {
                        return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
                    }
                    return WritableStreamDefaultWriterClose(this);
                }
                /**
		         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
		         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
		         * now on; otherwise, the writer will appear closed.
		         *
		         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
		         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
		         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
		         * other producers from writing in an interleaved manner.
		         */ releaseLock() {
                    if (!IsWritableStreamDefaultWriter(this)) {
                        throw defaultWriterBrandCheckException("releaseLock");
                    }
                    const stream = this._ownerWritableStream;
                    if (stream === undefined) {
                        return;
                    }
                    WritableStreamDefaultWriterRelease(this);
                }
                write(chunk = undefined) {
                    if (!IsWritableStreamDefaultWriter(this)) {
                        return promiseRejectedWith(defaultWriterBrandCheckException("write"));
                    }
                    if (this._ownerWritableStream === undefined) {
                        return promiseRejectedWith(defaultWriterLockException("write to"));
                    }
                    return WritableStreamDefaultWriterWrite(this, chunk);
                }
            }
            Object.defineProperties(WritableStreamDefaultWriter.prototype, {
                abort: {
                    enumerable: true
                },
                close: {
                    enumerable: true
                },
                releaseLock: {
                    enumerable: true
                },
                write: {
                    enumerable: true
                },
                closed: {
                    enumerable: true
                },
                desiredSize: {
                    enumerable: true
                },
                ready: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
                    value: "WritableStreamDefaultWriter",
                    configurable: true
                });
            }
            // Abstract operations for the WritableStreamDefaultWriter.
            function IsWritableStreamDefaultWriter(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_ownerWritableStream")) {
                    return false;
                }
                return x instanceof WritableStreamDefaultWriter;
            }
            // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
            function WritableStreamDefaultWriterAbort(writer, reason) {
                const stream = writer._ownerWritableStream;
                return WritableStreamAbort(stream, reason);
            }
            function WritableStreamDefaultWriterClose(writer) {
                const stream = writer._ownerWritableStream;
                return WritableStreamClose(stream);
            }
            function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
                const stream = writer._ownerWritableStream;
                const state = stream._state;
                if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
                    return promiseResolvedWith(undefined);
                }
                if (state === "errored") {
                    return promiseRejectedWith(stream._storedError);
                }
                return WritableStreamDefaultWriterClose(writer);
            }
            function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
                if (writer._closedPromiseState === "pending") {
                    defaultWriterClosedPromiseReject(writer, error);
                } else {
                    defaultWriterClosedPromiseResetToRejected(writer, error);
                }
            }
            function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
                if (writer._readyPromiseState === "pending") {
                    defaultWriterReadyPromiseReject(writer, error);
                } else {
                    defaultWriterReadyPromiseResetToRejected(writer, error);
                }
            }
            function WritableStreamDefaultWriterGetDesiredSize(writer) {
                const stream = writer._ownerWritableStream;
                const state = stream._state;
                if (state === "errored" || state === "erroring") {
                    return null;
                }
                if (state === "closed") {
                    return 0;
                }
                return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
            }
            function WritableStreamDefaultWriterRelease(writer) {
                const stream = writer._ownerWritableStream;
                const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
                WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
                // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
                // rejected until afterwards. This means that simply testing state will not work.
                WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
                stream._writer = undefined;
                writer._ownerWritableStream = undefined;
            }
            function WritableStreamDefaultWriterWrite(writer, chunk) {
                const stream = writer._ownerWritableStream;
                const controller = stream._writableStreamController;
                const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
                if (stream !== writer._ownerWritableStream) {
                    return promiseRejectedWith(defaultWriterLockException("write to"));
                }
                const state = stream._state;
                if (state === "errored") {
                    return promiseRejectedWith(stream._storedError);
                }
                if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
                    return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
                }
                if (state === "erroring") {
                    return promiseRejectedWith(stream._storedError);
                }
                const promise = WritableStreamAddWriteRequest(stream);
                WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
                return promise;
            }
            const closeSentinel = {};
            /**
		     * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
		     *
		     * @public
		     */ class WritableStreamDefaultController {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                /**
		         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
		         *
		         * @deprecated
		         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
		         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
		         */ get abortReason() {
                    if (!IsWritableStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException$2("abortReason");
                    }
                    return this._abortReason;
                }
                /**
		         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
		         */ get signal() {
                    if (!IsWritableStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException$2("signal");
                    }
                    if (this._abortController === undefined) {
                        // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
                        // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
                        // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
                        throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
                    }
                    return this._abortController.signal;
                }
                /**
		         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
		         *
		         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
		         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
		         * normal lifecycle of interactions with the underlying sink.
		         */ error(e = undefined) {
                    if (!IsWritableStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException$2("error");
                    }
                    const state = this._controlledWritableStream._state;
                    if (state !== "writable") {
                        // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
                        // just treat it as a no-op.
                        return;
                    }
                    WritableStreamDefaultControllerError(this, e);
                }
                /** @internal */ [AbortSteps](reason) {
                    const result = this._abortAlgorithm(reason);
                    WritableStreamDefaultControllerClearAlgorithms(this);
                    return result;
                }
                /** @internal */ [ErrorSteps]() {
                    ResetQueue(this);
                }
            }
            Object.defineProperties(WritableStreamDefaultController.prototype, {
                abortReason: {
                    enumerable: true
                },
                signal: {
                    enumerable: true
                },
                error: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
                    value: "WritableStreamDefaultController",
                    configurable: true
                });
            }
            // Abstract operations implementing interface required by the WritableStream.
            function IsWritableStreamDefaultController(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_controlledWritableStream")) {
                    return false;
                }
                return x instanceof WritableStreamDefaultController;
            }
            function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
                controller._controlledWritableStream = stream;
                stream._writableStreamController = controller;
                // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
                controller._queue = undefined;
                controller._queueTotalSize = undefined;
                ResetQueue(controller);
                controller._abortReason = undefined;
                controller._abortController = createAbortController();
                controller._started = false;
                controller._strategySizeAlgorithm = sizeAlgorithm;
                controller._strategyHWM = highWaterMark;
                controller._writeAlgorithm = writeAlgorithm;
                controller._closeAlgorithm = closeAlgorithm;
                controller._abortAlgorithm = abortAlgorithm;
                const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                WritableStreamUpdateBackpressure(stream, backpressure);
                const startResult = startAlgorithm();
                const startPromise = promiseResolvedWith(startResult);
                uponPromise(startPromise, ()=>{
                    controller._started = true;
                    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
                }, (r)=>{
                    controller._started = true;
                    WritableStreamDealWithRejection(stream, r);
                });
            }
            function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
                const controller = Object.create(WritableStreamDefaultController.prototype);
                let startAlgorithm = ()=>undefined;
                let writeAlgorithm = ()=>promiseResolvedWith(undefined);
                let closeAlgorithm = ()=>promiseResolvedWith(undefined);
                let abortAlgorithm = ()=>promiseResolvedWith(undefined);
                if (underlyingSink.start !== undefined) {
                    startAlgorithm = ()=>underlyingSink.start(controller);
                }
                if (underlyingSink.write !== undefined) {
                    writeAlgorithm = (chunk)=>underlyingSink.write(chunk, controller);
                }
                if (underlyingSink.close !== undefined) {
                    closeAlgorithm = ()=>underlyingSink.close();
                }
                if (underlyingSink.abort !== undefined) {
                    abortAlgorithm = (reason)=>underlyingSink.abort(reason);
                }
                SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
            }
            // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
            function WritableStreamDefaultControllerClearAlgorithms(controller) {
                controller._writeAlgorithm = undefined;
                controller._closeAlgorithm = undefined;
                controller._abortAlgorithm = undefined;
                controller._strategySizeAlgorithm = undefined;
            }
            function WritableStreamDefaultControllerClose(controller) {
                EnqueueValueWithSize(controller, closeSentinel, 0);
                WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
            }
            function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
                try {
                    return controller._strategySizeAlgorithm(chunk);
                } catch (chunkSizeE) {
                    WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
                    return 1;
                }
            }
            function WritableStreamDefaultControllerGetDesiredSize(controller) {
                return controller._strategyHWM - controller._queueTotalSize;
            }
            function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
                try {
                    EnqueueValueWithSize(controller, chunk, chunkSize);
                } catch (enqueueE) {
                    WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
                    return;
                }
                const stream = controller._controlledWritableStream;
                if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
                    const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                    WritableStreamUpdateBackpressure(stream, backpressure);
                }
                WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
            }
            // Abstract operations for the WritableStreamDefaultController.
            function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
                const stream = controller._controlledWritableStream;
                if (!controller._started) {
                    return;
                }
                if (stream._inFlightWriteRequest !== undefined) {
                    return;
                }
                const state = stream._state;
                if (state === "erroring") {
                    WritableStreamFinishErroring(stream);
                    return;
                }
                if (controller._queue.length === 0) {
                    return;
                }
                const value1 = PeekQueueValue(controller);
                if (value1 === closeSentinel) {
                    WritableStreamDefaultControllerProcessClose(controller);
                } else {
                    WritableStreamDefaultControllerProcessWrite(controller, value1);
                }
            }
            function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
                if (controller._controlledWritableStream._state === "writable") {
                    WritableStreamDefaultControllerError(controller, error);
                }
            }
            function WritableStreamDefaultControllerProcessClose(controller) {
                const stream = controller._controlledWritableStream;
                WritableStreamMarkCloseRequestInFlight(stream);
                DequeueValue(controller);
                const sinkClosePromise = controller._closeAlgorithm();
                WritableStreamDefaultControllerClearAlgorithms(controller);
                uponPromise(sinkClosePromise, ()=>{
                    WritableStreamFinishInFlightClose(stream);
                }, (reason)=>{
                    WritableStreamFinishInFlightCloseWithError(stream, reason);
                });
            }
            function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
                const stream = controller._controlledWritableStream;
                WritableStreamMarkFirstWriteRequestInFlight(stream);
                const sinkWritePromise = controller._writeAlgorithm(chunk);
                uponPromise(sinkWritePromise, ()=>{
                    WritableStreamFinishInFlightWrite(stream);
                    const state = stream._state;
                    DequeueValue(controller);
                    if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
                        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                        WritableStreamUpdateBackpressure(stream, backpressure);
                    }
                    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
                }, (reason)=>{
                    if (stream._state === "writable") {
                        WritableStreamDefaultControllerClearAlgorithms(controller);
                    }
                    WritableStreamFinishInFlightWriteWithError(stream, reason);
                });
            }
            function WritableStreamDefaultControllerGetBackpressure(controller) {
                const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
                return desiredSize <= 0;
            }
            // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
            function WritableStreamDefaultControllerError(controller, error) {
                const stream = controller._controlledWritableStream;
                WritableStreamDefaultControllerClearAlgorithms(controller);
                WritableStreamStartErroring(stream, error);
            }
            // Helper functions for the WritableStream.
            function streamBrandCheckException$2(name) {
                return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
            }
            // Helper functions for the WritableStreamDefaultController.
            function defaultControllerBrandCheckException$2(name) {
                return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
            }
            // Helper functions for the WritableStreamDefaultWriter.
            function defaultWriterBrandCheckException(name) {
                return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
            }
            function defaultWriterLockException(name) {
                return new TypeError("Cannot " + name + " a stream using a released writer");
            }
            function defaultWriterClosedPromiseInitialize(writer) {
                writer._closedPromise = newPromise((resolve, reject)=>{
                    writer._closedPromise_resolve = resolve;
                    writer._closedPromise_reject = reject;
                    writer._closedPromiseState = "pending";
                });
            }
            function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
                defaultWriterClosedPromiseInitialize(writer);
                defaultWriterClosedPromiseReject(writer, reason);
            }
            function defaultWriterClosedPromiseInitializeAsResolved(writer) {
                defaultWriterClosedPromiseInitialize(writer);
                defaultWriterClosedPromiseResolve(writer);
            }
            function defaultWriterClosedPromiseReject(writer, reason) {
                if (writer._closedPromise_reject === undefined) {
                    return;
                }
                setPromiseIsHandledToTrue(writer._closedPromise);
                writer._closedPromise_reject(reason);
                writer._closedPromise_resolve = undefined;
                writer._closedPromise_reject = undefined;
                writer._closedPromiseState = "rejected";
            }
            function defaultWriterClosedPromiseResetToRejected(writer, reason) {
                defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
            }
            function defaultWriterClosedPromiseResolve(writer) {
                if (writer._closedPromise_resolve === undefined) {
                    return;
                }
                writer._closedPromise_resolve(undefined);
                writer._closedPromise_resolve = undefined;
                writer._closedPromise_reject = undefined;
                writer._closedPromiseState = "resolved";
            }
            function defaultWriterReadyPromiseInitialize(writer) {
                writer._readyPromise = newPromise((resolve, reject)=>{
                    writer._readyPromise_resolve = resolve;
                    writer._readyPromise_reject = reject;
                });
                writer._readyPromiseState = "pending";
            }
            function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
                defaultWriterReadyPromiseInitialize(writer);
                defaultWriterReadyPromiseReject(writer, reason);
            }
            function defaultWriterReadyPromiseInitializeAsResolved(writer) {
                defaultWriterReadyPromiseInitialize(writer);
                defaultWriterReadyPromiseResolve(writer);
            }
            function defaultWriterReadyPromiseReject(writer, reason) {
                if (writer._readyPromise_reject === undefined) {
                    return;
                }
                setPromiseIsHandledToTrue(writer._readyPromise);
                writer._readyPromise_reject(reason);
                writer._readyPromise_resolve = undefined;
                writer._readyPromise_reject = undefined;
                writer._readyPromiseState = "rejected";
            }
            function defaultWriterReadyPromiseReset(writer) {
                defaultWriterReadyPromiseInitialize(writer);
            }
            function defaultWriterReadyPromiseResetToRejected(writer, reason) {
                defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
            }
            function defaultWriterReadyPromiseResolve(writer) {
                if (writer._readyPromise_resolve === undefined) {
                    return;
                }
                writer._readyPromise_resolve(undefined);
                writer._readyPromise_resolve = undefined;
                writer._readyPromise_reject = undefined;
                writer._readyPromiseState = "fulfilled";
            }
            /// <reference lib="dom" />
            const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : undefined;
            /// <reference types="node" />
            function isDOMExceptionConstructor(ctor) {
                if (!(typeof ctor === "function" || typeof ctor === "object")) {
                    return false;
                }
                try {
                    new ctor();
                    return true;
                } catch (_a) {
                    return false;
                }
            }
            function createDOMExceptionPolyfill() {
                // eslint-disable-next-line no-shadow
                const ctor = function DOMException1(message, name) {
                    this.message = message || "";
                    this.name = name || "Error";
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, this.constructor);
                    }
                };
                ctor.prototype = Object.create(Error.prototype);
                Object.defineProperty(ctor.prototype, "constructor", {
                    value: ctor,
                    writable: true,
                    configurable: true
                });
                return ctor;
            }
            // eslint-disable-next-line no-redeclare
            const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
            function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
                const reader = AcquireReadableStreamDefaultReader(source);
                const writer = AcquireWritableStreamDefaultWriter(dest);
                source._disturbed = true;
                let shuttingDown = false;
                // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
                let currentWrite = promiseResolvedWith(undefined);
                return newPromise((resolve, reject)=>{
                    let abortAlgorithm;
                    if (signal !== undefined) {
                        abortAlgorithm = ()=>{
                            const error = new DOMException$1("Aborted", "AbortError");
                            const actions = [];
                            if (!preventAbort) {
                                actions.push(()=>{
                                    if (dest._state === "writable") {
                                        return WritableStreamAbort(dest, error);
                                    }
                                    return promiseResolvedWith(undefined);
                                });
                            }
                            if (!preventCancel) {
                                actions.push(()=>{
                                    if (source._state === "readable") {
                                        return ReadableStreamCancel(source, error);
                                    }
                                    return promiseResolvedWith(undefined);
                                });
                            }
                            shutdownWithAction(()=>Promise.all(actions.map((action)=>action())), true, error);
                        };
                        if (signal.aborted) {
                            abortAlgorithm();
                            return;
                        }
                        signal.addEventListener("abort", abortAlgorithm);
                    }
                    // Using reader and writer, read all chunks from this and write them to dest
                    // - Backpressure must be enforced
                    // - Shutdown must stop all activity
                    function pipeLoop() {
                        return newPromise((resolveLoop, rejectLoop)=>{
                            function next(done) {
                                if (done) {
                                    resolveLoop();
                                } else {
                                    // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                                    // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                                    PerformPromiseThen(pipeStep(), next, rejectLoop);
                                }
                            }
                            next(false);
                        });
                    }
                    function pipeStep() {
                        if (shuttingDown) {
                            return promiseResolvedWith(true);
                        }
                        return PerformPromiseThen(writer._readyPromise, ()=>{
                            return newPromise((resolveRead, rejectRead)=>{
                                ReadableStreamDefaultReaderRead(reader, {
                                    _chunkSteps: (chunk)=>{
                                        currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
                                        resolveRead(false);
                                    },
                                    _closeSteps: ()=>resolveRead(true),
                                    _errorSteps: rejectRead
                                });
                            });
                        });
                    }
                    // Errors must be propagated forward
                    isOrBecomesErrored(source, reader._closedPromise, (storedError)=>{
                        if (!preventAbort) {
                            shutdownWithAction(()=>WritableStreamAbort(dest, storedError), true, storedError);
                        } else {
                            shutdown(true, storedError);
                        }
                    });
                    // Errors must be propagated backward
                    isOrBecomesErrored(dest, writer._closedPromise, (storedError)=>{
                        if (!preventCancel) {
                            shutdownWithAction(()=>ReadableStreamCancel(source, storedError), true, storedError);
                        } else {
                            shutdown(true, storedError);
                        }
                    });
                    // Closing must be propagated forward
                    isOrBecomesClosed(source, reader._closedPromise, ()=>{
                        if (!preventClose) {
                            shutdownWithAction(()=>WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
                        } else {
                            shutdown();
                        }
                    });
                    // Closing must be propagated backward
                    if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
                        const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
                        if (!preventCancel) {
                            shutdownWithAction(()=>ReadableStreamCancel(source, destClosed), true, destClosed);
                        } else {
                            shutdown(true, destClosed);
                        }
                    }
                    setPromiseIsHandledToTrue(pipeLoop());
                    function waitForWritesToFinish() {
                        // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
                        // for that too.
                        const oldCurrentWrite = currentWrite;
                        return PerformPromiseThen(currentWrite, ()=>oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined);
                    }
                    function isOrBecomesErrored(stream, promise, action) {
                        if (stream._state === "errored") {
                            action(stream._storedError);
                        } else {
                            uponRejection(promise, action);
                        }
                    }
                    function isOrBecomesClosed(stream, promise, action) {
                        if (stream._state === "closed") {
                            action();
                        } else {
                            uponFulfillment(promise, action);
                        }
                    }
                    function shutdownWithAction(action, originalIsError, originalError) {
                        if (shuttingDown) {
                            return;
                        }
                        shuttingDown = true;
                        if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                            uponFulfillment(waitForWritesToFinish(), doTheRest);
                        } else {
                            doTheRest();
                        }
                        function doTheRest() {
                            uponPromise(action(), ()=>finalize(originalIsError, originalError), (newError)=>finalize(true, newError));
                        }
                    }
                    function shutdown(isError, error) {
                        if (shuttingDown) {
                            return;
                        }
                        shuttingDown = true;
                        if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                            uponFulfillment(waitForWritesToFinish(), ()=>finalize(isError, error));
                        } else {
                            finalize(isError, error);
                        }
                    }
                    function finalize(isError, error) {
                        WritableStreamDefaultWriterRelease(writer);
                        ReadableStreamReaderGenericRelease(reader);
                        if (signal !== undefined) {
                            signal.removeEventListener("abort", abortAlgorithm);
                        }
                        if (isError) {
                            reject(error);
                        } else {
                            resolve(undefined);
                        }
                    }
                });
            }
            /**
		     * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
		     *
		     * @public
		     */ class ReadableStreamDefaultController {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                /**
		         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
		         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
		         */ get desiredSize() {
                    if (!IsReadableStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException$1("desiredSize");
                    }
                    return ReadableStreamDefaultControllerGetDesiredSize(this);
                }
                /**
		         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
		         * the stream, but once those are read, the stream will become closed.
		         */ close() {
                    if (!IsReadableStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException$1("close");
                    }
                    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                        throw new TypeError("The stream is not in a state that permits close");
                    }
                    ReadableStreamDefaultControllerClose(this);
                }
                enqueue(chunk = undefined) {
                    if (!IsReadableStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException$1("enqueue");
                    }
                    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                        throw new TypeError("The stream is not in a state that permits enqueue");
                    }
                    return ReadableStreamDefaultControllerEnqueue(this, chunk);
                }
                /**
		         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
		         */ error(e = undefined) {
                    if (!IsReadableStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException$1("error");
                    }
                    ReadableStreamDefaultControllerError(this, e);
                }
                /** @internal */ [CancelSteps](reason) {
                    ResetQueue(this);
                    const result = this._cancelAlgorithm(reason);
                    ReadableStreamDefaultControllerClearAlgorithms(this);
                    return result;
                }
                /** @internal */ [PullSteps](readRequest) {
                    const stream = this._controlledReadableStream;
                    if (this._queue.length > 0) {
                        const chunk = DequeueValue(this);
                        if (this._closeRequested && this._queue.length === 0) {
                            ReadableStreamDefaultControllerClearAlgorithms(this);
                            ReadableStreamClose(stream);
                        } else {
                            ReadableStreamDefaultControllerCallPullIfNeeded(this);
                        }
                        readRequest._chunkSteps(chunk);
                    } else {
                        ReadableStreamAddReadRequest(stream, readRequest);
                        ReadableStreamDefaultControllerCallPullIfNeeded(this);
                    }
                }
            }
            Object.defineProperties(ReadableStreamDefaultController.prototype, {
                close: {
                    enumerable: true
                },
                enqueue: {
                    enumerable: true
                },
                error: {
                    enumerable: true
                },
                desiredSize: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
                    value: "ReadableStreamDefaultController",
                    configurable: true
                });
            }
            // Abstract operations for the ReadableStreamDefaultController.
            function IsReadableStreamDefaultController(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableStream")) {
                    return false;
                }
                return x instanceof ReadableStreamDefaultController;
            }
            function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
                const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
                if (!shouldPull) {
                    return;
                }
                if (controller._pulling) {
                    controller._pullAgain = true;
                    return;
                }
                controller._pulling = true;
                const pullPromise = controller._pullAlgorithm();
                uponPromise(pullPromise, ()=>{
                    controller._pulling = false;
                    if (controller._pullAgain) {
                        controller._pullAgain = false;
                        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
                    }
                }, (e)=>{
                    ReadableStreamDefaultControllerError(controller, e);
                });
            }
            function ReadableStreamDefaultControllerShouldCallPull(controller) {
                const stream = controller._controlledReadableStream;
                if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
                    return false;
                }
                if (!controller._started) {
                    return false;
                }
                if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
                    return true;
                }
                const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
                if (desiredSize > 0) {
                    return true;
                }
                return false;
            }
            function ReadableStreamDefaultControllerClearAlgorithms(controller) {
                controller._pullAlgorithm = undefined;
                controller._cancelAlgorithm = undefined;
                controller._strategySizeAlgorithm = undefined;
            }
            // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
            function ReadableStreamDefaultControllerClose(controller) {
                if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
                    return;
                }
                const stream = controller._controlledReadableStream;
                controller._closeRequested = true;
                if (controller._queue.length === 0) {
                    ReadableStreamDefaultControllerClearAlgorithms(controller);
                    ReadableStreamClose(stream);
                }
            }
            function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
                if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
                    return;
                }
                const stream = controller._controlledReadableStream;
                if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
                    ReadableStreamFulfillReadRequest(stream, chunk, false);
                } else {
                    let chunkSize;
                    try {
                        chunkSize = controller._strategySizeAlgorithm(chunk);
                    } catch (chunkSizeE) {
                        ReadableStreamDefaultControllerError(controller, chunkSizeE);
                        throw chunkSizeE;
                    }
                    try {
                        EnqueueValueWithSize(controller, chunk, chunkSize);
                    } catch (enqueueE) {
                        ReadableStreamDefaultControllerError(controller, enqueueE);
                        throw enqueueE;
                    }
                }
                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
            function ReadableStreamDefaultControllerError(controller, e) {
                const stream = controller._controlledReadableStream;
                if (stream._state !== "readable") {
                    return;
                }
                ResetQueue(controller);
                ReadableStreamDefaultControllerClearAlgorithms(controller);
                ReadableStreamError(stream, e);
            }
            function ReadableStreamDefaultControllerGetDesiredSize(controller) {
                const state = controller._controlledReadableStream._state;
                if (state === "errored") {
                    return null;
                }
                if (state === "closed") {
                    return 0;
                }
                return controller._strategyHWM - controller._queueTotalSize;
            }
            // This is used in the implementation of TransformStream.
            function ReadableStreamDefaultControllerHasBackpressure(controller) {
                if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
                    return false;
                }
                return true;
            }
            function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
                const state = controller._controlledReadableStream._state;
                if (!controller._closeRequested && state === "readable") {
                    return true;
                }
                return false;
            }
            function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
                controller._controlledReadableStream = stream;
                controller._queue = undefined;
                controller._queueTotalSize = undefined;
                ResetQueue(controller);
                controller._started = false;
                controller._closeRequested = false;
                controller._pullAgain = false;
                controller._pulling = false;
                controller._strategySizeAlgorithm = sizeAlgorithm;
                controller._strategyHWM = highWaterMark;
                controller._pullAlgorithm = pullAlgorithm;
                controller._cancelAlgorithm = cancelAlgorithm;
                stream._readableStreamController = controller;
                const startResult = startAlgorithm();
                uponPromise(promiseResolvedWith(startResult), ()=>{
                    controller._started = true;
                    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
                }, (r)=>{
                    ReadableStreamDefaultControllerError(controller, r);
                });
            }
            function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
                const controller = Object.create(ReadableStreamDefaultController.prototype);
                let startAlgorithm = ()=>undefined;
                let pullAlgorithm = ()=>promiseResolvedWith(undefined);
                let cancelAlgorithm = ()=>promiseResolvedWith(undefined);
                if (underlyingSource.start !== undefined) {
                    startAlgorithm = ()=>underlyingSource.start(controller);
                }
                if (underlyingSource.pull !== undefined) {
                    pullAlgorithm = ()=>underlyingSource.pull(controller);
                }
                if (underlyingSource.cancel !== undefined) {
                    cancelAlgorithm = (reason)=>underlyingSource.cancel(reason);
                }
                SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
            }
            // Helper functions for the ReadableStreamDefaultController.
            function defaultControllerBrandCheckException$1(name) {
                return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
            }
            function ReadableStreamTee(stream, cloneForBranch2) {
                if (IsReadableByteStreamController(stream._readableStreamController)) {
                    return ReadableByteStreamTee(stream);
                }
                return ReadableStreamDefaultTee(stream);
            }
            function ReadableStreamDefaultTee(stream, cloneForBranch2) {
                const reader = AcquireReadableStreamDefaultReader(stream);
                let reading = false;
                let readAgain = false;
                let canceled1 = false;
                let canceled2 = false;
                let reason1;
                let reason2;
                let branch1;
                let branch2;
                let resolveCancelPromise;
                const cancelPromise = newPromise((resolve)=>{
                    resolveCancelPromise = resolve;
                });
                function pullAlgorithm() {
                    if (reading) {
                        readAgain = true;
                        return promiseResolvedWith(undefined);
                    }
                    reading = true;
                    const readRequest = {
                        _chunkSteps: (chunk)=>{
                            // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                            // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                            // successful synchronously-available reads get ahead of asynchronously-available errors.
                            queueMicrotask(()=>{
                                readAgain = false;
                                const chunk1 = chunk;
                                const chunk2 = chunk;
                                // There is no way to access the cloning code right now in the reference implementation.
                                // If we add one then we'll need an implementation for serializable objects.
                                // if (!canceled2 && cloneForBranch2) {
                                //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
                                // }
                                if (!canceled1) {
                                    ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                                }
                                if (!canceled2) {
                                    ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                                }
                                reading = false;
                                if (readAgain) {
                                    pullAlgorithm();
                                }
                            });
                        },
                        _closeSteps: ()=>{
                            reading = false;
                            if (!canceled1) {
                                ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                            }
                            if (!canceled2) {
                                ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                            }
                            if (!canceled1 || !canceled2) {
                                resolveCancelPromise(undefined);
                            }
                        },
                        _errorSteps: ()=>{
                            reading = false;
                        }
                    };
                    ReadableStreamDefaultReaderRead(reader, readRequest);
                    return promiseResolvedWith(undefined);
                }
                function cancel1Algorithm(reason) {
                    canceled1 = true;
                    reason1 = reason;
                    if (canceled2) {
                        const compositeReason = CreateArrayFromList([
                            reason1,
                            reason2
                        ]);
                        const cancelResult = ReadableStreamCancel(stream, compositeReason);
                        resolveCancelPromise(cancelResult);
                    }
                    return cancelPromise;
                }
                function cancel2Algorithm(reason) {
                    canceled2 = true;
                    reason2 = reason;
                    if (canceled1) {
                        const compositeReason = CreateArrayFromList([
                            reason1,
                            reason2
                        ]);
                        const cancelResult = ReadableStreamCancel(stream, compositeReason);
                        resolveCancelPromise(cancelResult);
                    }
                    return cancelPromise;
                }
                function startAlgorithm() {
                // do nothing
                }
                branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
                branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
                uponRejection(reader._closedPromise, (r)=>{
                    ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
                    ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
                    if (!canceled1 || !canceled2) {
                        resolveCancelPromise(undefined);
                    }
                });
                return [
                    branch1,
                    branch2
                ];
            }
            function ReadableByteStreamTee(stream) {
                let reader = AcquireReadableStreamDefaultReader(stream);
                let reading = false;
                let readAgainForBranch1 = false;
                let readAgainForBranch2 = false;
                let canceled1 = false;
                let canceled2 = false;
                let reason1;
                let reason2;
                let branch1;
                let branch2;
                let resolveCancelPromise;
                const cancelPromise = newPromise((resolve)=>{
                    resolveCancelPromise = resolve;
                });
                function forwardReaderError(thisReader) {
                    uponRejection(thisReader._closedPromise, (r)=>{
                        if (thisReader !== reader) {
                            return;
                        }
                        ReadableByteStreamControllerError(branch1._readableStreamController, r);
                        ReadableByteStreamControllerError(branch2._readableStreamController, r);
                        if (!canceled1 || !canceled2) {
                            resolveCancelPromise(undefined);
                        }
                    });
                }
                function pullWithDefaultReader() {
                    if (IsReadableStreamBYOBReader(reader)) {
                        ReadableStreamReaderGenericRelease(reader);
                        reader = AcquireReadableStreamDefaultReader(stream);
                        forwardReaderError(reader);
                    }
                    const readRequest = {
                        _chunkSteps: (chunk)=>{
                            // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                            // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                            // successful synchronously-available reads get ahead of asynchronously-available errors.
                            queueMicrotask(()=>{
                                readAgainForBranch1 = false;
                                readAgainForBranch2 = false;
                                const chunk1 = chunk;
                                let chunk2 = chunk;
                                if (!canceled1 && !canceled2) {
                                    try {
                                        chunk2 = CloneAsUint8Array(chunk);
                                    } catch (cloneE) {
                                        ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                                        ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                                        resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                                        return;
                                    }
                                }
                                if (!canceled1) {
                                    ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                                }
                                if (!canceled2) {
                                    ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                                }
                                reading = false;
                                if (readAgainForBranch1) {
                                    pull1Algorithm();
                                } else if (readAgainForBranch2) {
                                    pull2Algorithm();
                                }
                            });
                        },
                        _closeSteps: ()=>{
                            reading = false;
                            if (!canceled1) {
                                ReadableByteStreamControllerClose(branch1._readableStreamController);
                            }
                            if (!canceled2) {
                                ReadableByteStreamControllerClose(branch2._readableStreamController);
                            }
                            if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                                ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                            }
                            if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                                ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                            }
                            if (!canceled1 || !canceled2) {
                                resolveCancelPromise(undefined);
                            }
                        },
                        _errorSteps: ()=>{
                            reading = false;
                        }
                    };
                    ReadableStreamDefaultReaderRead(reader, readRequest);
                }
                function pullWithBYOBReader(view, forBranch2) {
                    if (IsReadableStreamDefaultReader(reader)) {
                        ReadableStreamReaderGenericRelease(reader);
                        reader = AcquireReadableStreamBYOBReader(stream);
                        forwardReaderError(reader);
                    }
                    const byobBranch = forBranch2 ? branch2 : branch1;
                    const otherBranch = forBranch2 ? branch1 : branch2;
                    const readIntoRequest = {
                        _chunkSteps: (chunk)=>{
                            // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                            // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                            // successful synchronously-available reads get ahead of asynchronously-available errors.
                            queueMicrotask(()=>{
                                readAgainForBranch1 = false;
                                readAgainForBranch2 = false;
                                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                                if (!otherCanceled) {
                                    let clonedChunk;
                                    try {
                                        clonedChunk = CloneAsUint8Array(chunk);
                                    } catch (cloneE) {
                                        ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                                        ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                                        resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                                        return;
                                    }
                                    if (!byobCanceled) {
                                        ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                                    }
                                    ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                                } else if (!byobCanceled) {
                                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                                }
                                reading = false;
                                if (readAgainForBranch1) {
                                    pull1Algorithm();
                                } else if (readAgainForBranch2) {
                                    pull2Algorithm();
                                }
                            });
                        },
                        _closeSteps: (chunk)=>{
                            reading = false;
                            const byobCanceled = forBranch2 ? canceled2 : canceled1;
                            const otherCanceled = forBranch2 ? canceled1 : canceled2;
                            if (!byobCanceled) {
                                ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                            }
                            if (!otherCanceled) {
                                ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                            }
                            if (chunk !== undefined) {
                                if (!byobCanceled) {
                                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                                }
                                if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                                    ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                                }
                            }
                            if (!byobCanceled || !otherCanceled) {
                                resolveCancelPromise(undefined);
                            }
                        },
                        _errorSteps: ()=>{
                            reading = false;
                        }
                    };
                    ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
                }
                function pull1Algorithm() {
                    if (reading) {
                        readAgainForBranch1 = true;
                        return promiseResolvedWith(undefined);
                    }
                    reading = true;
                    const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
                    if (byobRequest === null) {
                        pullWithDefaultReader();
                    } else {
                        pullWithBYOBReader(byobRequest._view, false);
                    }
                    return promiseResolvedWith(undefined);
                }
                function pull2Algorithm() {
                    if (reading) {
                        readAgainForBranch2 = true;
                        return promiseResolvedWith(undefined);
                    }
                    reading = true;
                    const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
                    if (byobRequest === null) {
                        pullWithDefaultReader();
                    } else {
                        pullWithBYOBReader(byobRequest._view, true);
                    }
                    return promiseResolvedWith(undefined);
                }
                function cancel1Algorithm(reason) {
                    canceled1 = true;
                    reason1 = reason;
                    if (canceled2) {
                        const compositeReason = CreateArrayFromList([
                            reason1,
                            reason2
                        ]);
                        const cancelResult = ReadableStreamCancel(stream, compositeReason);
                        resolveCancelPromise(cancelResult);
                    }
                    return cancelPromise;
                }
                function cancel2Algorithm(reason) {
                    canceled2 = true;
                    reason2 = reason;
                    if (canceled1) {
                        const compositeReason = CreateArrayFromList([
                            reason1,
                            reason2
                        ]);
                        const cancelResult = ReadableStreamCancel(stream, compositeReason);
                        resolveCancelPromise(cancelResult);
                    }
                    return cancelPromise;
                }
                function startAlgorithm() {
                    return;
                }
                branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
                branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
                forwardReaderError(reader);
                return [
                    branch1,
                    branch2
                ];
            }
            function convertUnderlyingDefaultOrByteSource(source, context) {
                assertDictionary(source, context);
                const original = source;
                const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
                const cancel = original === null || original === void 0 ? void 0 : original.cancel;
                const pull = original === null || original === void 0 ? void 0 : original.pull;
                const start = original === null || original === void 0 ? void 0 : original.start;
                const type = original === null || original === void 0 ? void 0 : original.type;
                return {
                    autoAllocateChunkSize: autoAllocateChunkSize === undefined ? undefined : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
                    cancel: cancel === undefined ? undefined : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
                    pull: pull === undefined ? undefined : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
                    start: start === undefined ? undefined : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
                    type: type === undefined ? undefined : convertReadableStreamType(type, `${context} has member 'type' that`)
                };
            }
            function convertUnderlyingSourceCancelCallback(fn, original, context) {
                assertFunction(fn, context);
                return (reason)=>promiseCall(fn, original, [
                        reason
                    ]);
            }
            function convertUnderlyingSourcePullCallback(fn, original, context) {
                assertFunction(fn, context);
                return (controller)=>promiseCall(fn, original, [
                        controller
                    ]);
            }
            function convertUnderlyingSourceStartCallback(fn, original, context) {
                assertFunction(fn, context);
                return (controller)=>reflectCall(fn, original, [
                        controller
                    ]);
            }
            function convertReadableStreamType(type, context) {
                type = `${type}`;
                if (type !== "bytes") {
                    throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
                }
                return type;
            }
            function convertReaderOptions(options, context) {
                assertDictionary(options, context);
                const mode = options === null || options === void 0 ? void 0 : options.mode;
                return {
                    mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
                };
            }
            function convertReadableStreamReaderMode(mode, context) {
                mode = `${mode}`;
                if (mode !== "byob") {
                    throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
                }
                return mode;
            }
            function convertIteratorOptions(options, context) {
                assertDictionary(options, context);
                const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
                return {
                    preventCancel: Boolean(preventCancel)
                };
            }
            function convertPipeOptions(options, context) {
                assertDictionary(options, context);
                const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
                const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
                const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
                const signal = options === null || options === void 0 ? void 0 : options.signal;
                if (signal !== undefined) {
                    assertAbortSignal(signal, `${context} has member 'signal' that`);
                }
                return {
                    preventAbort: Boolean(preventAbort),
                    preventCancel: Boolean(preventCancel),
                    preventClose: Boolean(preventClose),
                    signal
                };
            }
            function assertAbortSignal(signal, context) {
                if (!isAbortSignal(signal)) {
                    throw new TypeError(`${context} is not an AbortSignal.`);
                }
            }
            function convertReadableWritablePair(pair, context) {
                assertDictionary(pair, context);
                const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
                assertRequiredField(readable, "readable", "ReadableWritablePair");
                assertReadableStream(readable, `${context} has member 'readable' that`);
                const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
                assertRequiredField(writable, "writable", "ReadableWritablePair");
                assertWritableStream(writable, `${context} has member 'writable' that`);
                return {
                    readable,
                    writable
                };
            }
            /**
		     * A readable stream represents a source of data, from which you can read.
		     *
		     * @public
		     */ class ReadableStream1 {
                constructor(rawUnderlyingSource = {}, rawStrategy = {}){
                    if (rawUnderlyingSource === undefined) {
                        rawUnderlyingSource = null;
                    } else {
                        assertObject(rawUnderlyingSource, "First parameter");
                    }
                    const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
                    const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
                    InitializeReadableStream(this);
                    if (underlyingSource.type === "bytes") {
                        if (strategy.size !== undefined) {
                            throw new RangeError("The strategy for a byte stream cannot have a size function");
                        }
                        const highWaterMark = ExtractHighWaterMark(strategy, 0);
                        SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
                    } else {
                        const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
                        const highWaterMark = ExtractHighWaterMark(strategy, 1);
                        SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
                    }
                }
                /**
		         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
		         */ get locked() {
                    if (!IsReadableStream(this)) {
                        throw streamBrandCheckException$1("locked");
                    }
                    return IsReadableStreamLocked(this);
                }
                /**
		         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
		         *
		         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
		         * method, which might or might not use it.
		         */ cancel(reason = undefined) {
                    if (!IsReadableStream(this)) {
                        return promiseRejectedWith(streamBrandCheckException$1("cancel"));
                    }
                    if (IsReadableStreamLocked(this)) {
                        return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
                    }
                    return ReadableStreamCancel(this, reason);
                }
                getReader(rawOptions = undefined) {
                    if (!IsReadableStream(this)) {
                        throw streamBrandCheckException$1("getReader");
                    }
                    const options = convertReaderOptions(rawOptions, "First parameter");
                    if (options.mode === undefined) {
                        return AcquireReadableStreamDefaultReader(this);
                    }
                    return AcquireReadableStreamBYOBReader(this);
                }
                pipeThrough(rawTransform, rawOptions = {}) {
                    if (!IsReadableStream(this)) {
                        throw streamBrandCheckException$1("pipeThrough");
                    }
                    assertRequiredArgument(rawTransform, 1, "pipeThrough");
                    const transform = convertReadableWritablePair(rawTransform, "First parameter");
                    const options = convertPipeOptions(rawOptions, "Second parameter");
                    if (IsReadableStreamLocked(this)) {
                        throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
                    }
                    if (IsWritableStreamLocked(transform.writable)) {
                        throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
                    }
                    const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
                    setPromiseIsHandledToTrue(promise);
                    return transform.readable;
                }
                pipeTo(destination, rawOptions = {}) {
                    if (!IsReadableStream(this)) {
                        return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
                    }
                    if (destination === undefined) {
                        return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
                    }
                    if (!IsWritableStream(destination)) {
                        return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
                    }
                    let options;
                    try {
                        options = convertPipeOptions(rawOptions, "Second parameter");
                    } catch (e) {
                        return promiseRejectedWith(e);
                    }
                    if (IsReadableStreamLocked(this)) {
                        return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
                    }
                    if (IsWritableStreamLocked(destination)) {
                        return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
                    }
                    return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
                }
                /**
		         * Tees this readable stream, returning a two-element array containing the two resulting branches as
		         * new {@link ReadableStream} instances.
		         *
		         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
		         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
		         * propagated to the stream's underlying source.
		         *
		         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
		         * this could allow interference between the two branches.
		         */ tee() {
                    if (!IsReadableStream(this)) {
                        throw streamBrandCheckException$1("tee");
                    }
                    const branches = ReadableStreamTee(this);
                    return CreateArrayFromList(branches);
                }
                values(rawOptions = undefined) {
                    if (!IsReadableStream(this)) {
                        throw streamBrandCheckException$1("values");
                    }
                    const options = convertIteratorOptions(rawOptions, "First parameter");
                    return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
                }
            }
            Object.defineProperties(ReadableStream1.prototype, {
                cancel: {
                    enumerable: true
                },
                getReader: {
                    enumerable: true
                },
                pipeThrough: {
                    enumerable: true
                },
                pipeTo: {
                    enumerable: true
                },
                tee: {
                    enumerable: true
                },
                values: {
                    enumerable: true
                },
                locked: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(ReadableStream1.prototype, SymbolPolyfill.toStringTag, {
                    value: "ReadableStream",
                    configurable: true
                });
            }
            if (typeof SymbolPolyfill.asyncIterator === "symbol") {
                Object.defineProperty(ReadableStream1.prototype, SymbolPolyfill.asyncIterator, {
                    value: ReadableStream1.prototype.values,
                    writable: true,
                    configurable: true
                });
            }
            // Abstract operations for the ReadableStream.
            // Throws if and only if startAlgorithm throws.
            function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = ()=>1) {
                const stream = Object.create(ReadableStream1.prototype);
                InitializeReadableStream(stream);
                const controller = Object.create(ReadableStreamDefaultController.prototype);
                SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
                return stream;
            }
            // Throws if and only if startAlgorithm throws.
            function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
                const stream = Object.create(ReadableStream1.prototype);
                InitializeReadableStream(stream);
                const controller = Object.create(ReadableByteStreamController.prototype);
                SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
                return stream;
            }
            function InitializeReadableStream(stream) {
                stream._state = "readable";
                stream._reader = undefined;
                stream._storedError = undefined;
                stream._disturbed = false;
            }
            function IsReadableStream(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_readableStreamController")) {
                    return false;
                }
                return x instanceof ReadableStream1;
            }
            function IsReadableStreamLocked(stream) {
                if (stream._reader === undefined) {
                    return false;
                }
                return true;
            }
            // ReadableStream API exposed for controllers.
            function ReadableStreamCancel(stream, reason) {
                stream._disturbed = true;
                if (stream._state === "closed") {
                    return promiseResolvedWith(undefined);
                }
                if (stream._state === "errored") {
                    return promiseRejectedWith(stream._storedError);
                }
                ReadableStreamClose(stream);
                const reader = stream._reader;
                if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
                    reader._readIntoRequests.forEach((readIntoRequest)=>{
                        readIntoRequest._closeSteps(undefined);
                    });
                    reader._readIntoRequests = new SimpleQueue();
                }
                const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
                return transformPromiseWith(sourceCancelPromise, noop);
            }
            function ReadableStreamClose(stream) {
                stream._state = "closed";
                const reader = stream._reader;
                if (reader === undefined) {
                    return;
                }
                defaultReaderClosedPromiseResolve(reader);
                if (IsReadableStreamDefaultReader(reader)) {
                    reader._readRequests.forEach((readRequest)=>{
                        readRequest._closeSteps();
                    });
                    reader._readRequests = new SimpleQueue();
                }
            }
            function ReadableStreamError(stream, e) {
                stream._state = "errored";
                stream._storedError = e;
                const reader = stream._reader;
                if (reader === undefined) {
                    return;
                }
                defaultReaderClosedPromiseReject(reader, e);
                if (IsReadableStreamDefaultReader(reader)) {
                    reader._readRequests.forEach((readRequest)=>{
                        readRequest._errorSteps(e);
                    });
                    reader._readRequests = new SimpleQueue();
                } else {
                    reader._readIntoRequests.forEach((readIntoRequest)=>{
                        readIntoRequest._errorSteps(e);
                    });
                    reader._readIntoRequests = new SimpleQueue();
                }
            }
            // Helper functions for the ReadableStream.
            function streamBrandCheckException$1(name) {
                return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
            }
            function convertQueuingStrategyInit(init, context) {
                assertDictionary(init, context);
                const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
                assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
                return {
                    highWaterMark: convertUnrestrictedDouble(highWaterMark)
                };
            }
            // The size function must not have a prototype property nor be a constructor
            const byteLengthSizeFunction = (chunk)=>{
                return chunk.byteLength;
            };
            try {
                Object.defineProperty(byteLengthSizeFunction, "name", {
                    value: "size",
                    configurable: true
                });
            } catch (_a) {
            // This property is non-configurable in older browsers, so ignore if this throws.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
            }
            /**
		     * A queuing strategy that counts the number of bytes in each chunk.
		     *
		     * @public
		     */ class ByteLengthQueuingStrategy {
                constructor(options){
                    assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
                    options = convertQueuingStrategyInit(options, "First parameter");
                    this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
                }
                /**
		         * Returns the high water mark provided to the constructor.
		         */ get highWaterMark() {
                    if (!IsByteLengthQueuingStrategy(this)) {
                        throw byteLengthBrandCheckException("highWaterMark");
                    }
                    return this._byteLengthQueuingStrategyHighWaterMark;
                }
                /**
		         * Measures the size of `chunk` by returning the value of its `byteLength` property.
		         */ get size() {
                    if (!IsByteLengthQueuingStrategy(this)) {
                        throw byteLengthBrandCheckException("size");
                    }
                    return byteLengthSizeFunction;
                }
            }
            Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
                highWaterMark: {
                    enumerable: true
                },
                size: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
                    value: "ByteLengthQueuingStrategy",
                    configurable: true
                });
            }
            // Helper functions for the ByteLengthQueuingStrategy.
            function byteLengthBrandCheckException(name) {
                return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
            }
            function IsByteLengthQueuingStrategy(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_byteLengthQueuingStrategyHighWaterMark")) {
                    return false;
                }
                return x instanceof ByteLengthQueuingStrategy;
            }
            // The size function must not have a prototype property nor be a constructor
            const countSizeFunction = ()=>{
                return 1;
            };
            try {
                Object.defineProperty(countSizeFunction, "name", {
                    value: "size",
                    configurable: true
                });
            } catch (_a) {
            // This property is non-configurable in older browsers, so ignore if this throws.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
            }
            /**
		     * A queuing strategy that counts the number of chunks.
		     *
		     * @public
		     */ class CountQueuingStrategy {
                constructor(options){
                    assertRequiredArgument(options, 1, "CountQueuingStrategy");
                    options = convertQueuingStrategyInit(options, "First parameter");
                    this._countQueuingStrategyHighWaterMark = options.highWaterMark;
                }
                /**
		         * Returns the high water mark provided to the constructor.
		         */ get highWaterMark() {
                    if (!IsCountQueuingStrategy(this)) {
                        throw countBrandCheckException("highWaterMark");
                    }
                    return this._countQueuingStrategyHighWaterMark;
                }
                /**
		         * Measures the size of `chunk` by always returning 1.
		         * This ensures that the total queue size is a count of the number of chunks in the queue.
		         */ get size() {
                    if (!IsCountQueuingStrategy(this)) {
                        throw countBrandCheckException("size");
                    }
                    return countSizeFunction;
                }
            }
            Object.defineProperties(CountQueuingStrategy.prototype, {
                highWaterMark: {
                    enumerable: true
                },
                size: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
                    value: "CountQueuingStrategy",
                    configurable: true
                });
            }
            // Helper functions for the CountQueuingStrategy.
            function countBrandCheckException(name) {
                return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
            }
            function IsCountQueuingStrategy(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_countQueuingStrategyHighWaterMark")) {
                    return false;
                }
                return x instanceof CountQueuingStrategy;
            }
            function convertTransformer(original, context) {
                assertDictionary(original, context);
                const flush = original === null || original === void 0 ? void 0 : original.flush;
                const readableType = original === null || original === void 0 ? void 0 : original.readableType;
                const start = original === null || original === void 0 ? void 0 : original.start;
                const transform = original === null || original === void 0 ? void 0 : original.transform;
                const writableType = original === null || original === void 0 ? void 0 : original.writableType;
                return {
                    flush: flush === undefined ? undefined : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
                    readableType,
                    start: start === undefined ? undefined : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
                    transform: transform === undefined ? undefined : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
                    writableType
                };
            }
            function convertTransformerFlushCallback(fn, original, context) {
                assertFunction(fn, context);
                return (controller)=>promiseCall(fn, original, [
                        controller
                    ]);
            }
            function convertTransformerStartCallback(fn, original, context) {
                assertFunction(fn, context);
                return (controller)=>reflectCall(fn, original, [
                        controller
                    ]);
            }
            function convertTransformerTransformCallback(fn, original, context) {
                assertFunction(fn, context);
                return (chunk, controller)=>promiseCall(fn, original, [
                        chunk,
                        controller
                    ]);
            }
            // Class TransformStream
            /**
		     * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
		     * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
		     * In a manner specific to the transform stream in question, writes to the writable side result in new data being
		     * made available for reading from the readable side.
		     *
		     * @public
		     */ class TransformStream {
                constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}){
                    if (rawTransformer === undefined) {
                        rawTransformer = null;
                    }
                    const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
                    const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
                    const transformer = convertTransformer(rawTransformer, "First parameter");
                    if (transformer.readableType !== undefined) {
                        throw new RangeError("Invalid readableType specified");
                    }
                    if (transformer.writableType !== undefined) {
                        throw new RangeError("Invalid writableType specified");
                    }
                    const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
                    const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
                    const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
                    const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
                    let startPromise_resolve;
                    const startPromise = newPromise((resolve)=>{
                        startPromise_resolve = resolve;
                    });
                    InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
                    SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
                    if (transformer.start !== undefined) {
                        startPromise_resolve(transformer.start(this._transformStreamController));
                    } else {
                        startPromise_resolve(undefined);
                    }
                }
                /**
		         * The readable side of the transform stream.
		         */ get readable() {
                    if (!IsTransformStream(this)) {
                        throw streamBrandCheckException("readable");
                    }
                    return this._readable;
                }
                /**
		         * The writable side of the transform stream.
		         */ get writable() {
                    if (!IsTransformStream(this)) {
                        throw streamBrandCheckException("writable");
                    }
                    return this._writable;
                }
            }
            Object.defineProperties(TransformStream.prototype, {
                readable: {
                    enumerable: true
                },
                writable: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
                    value: "TransformStream",
                    configurable: true
                });
            }
            function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
                function startAlgorithm() {
                    return startPromise;
                }
                function writeAlgorithm(chunk) {
                    return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
                }
                function abortAlgorithm(reason) {
                    return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
                }
                function closeAlgorithm() {
                    return TransformStreamDefaultSinkCloseAlgorithm(stream);
                }
                stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
                function pullAlgorithm() {
                    return TransformStreamDefaultSourcePullAlgorithm(stream);
                }
                function cancelAlgorithm(reason) {
                    TransformStreamErrorWritableAndUnblockWrite(stream, reason);
                    return promiseResolvedWith(undefined);
                }
                stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
                // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
                stream._backpressure = undefined;
                stream._backpressureChangePromise = undefined;
                stream._backpressureChangePromise_resolve = undefined;
                TransformStreamSetBackpressure(stream, true);
                stream._transformStreamController = undefined;
            }
            function IsTransformStream(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_transformStreamController")) {
                    return false;
                }
                return x instanceof TransformStream;
            }
            // This is a no-op if both sides are already errored.
            function TransformStreamError(stream, e) {
                ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
                TransformStreamErrorWritableAndUnblockWrite(stream, e);
            }
            function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
                TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
                WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
                if (stream._backpressure) {
                    // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
                    // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
                    // _backpressure is set.
                    TransformStreamSetBackpressure(stream, false);
                }
            }
            function TransformStreamSetBackpressure(stream, backpressure) {
                // Passes also when called during construction.
                if (stream._backpressureChangePromise !== undefined) {
                    stream._backpressureChangePromise_resolve();
                }
                stream._backpressureChangePromise = newPromise((resolve)=>{
                    stream._backpressureChangePromise_resolve = resolve;
                });
                stream._backpressure = backpressure;
            }
            // Class TransformStreamDefaultController
            /**
		     * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
		     *
		     * @public
		     */ class TransformStreamDefaultController {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                /**
		         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
		         */ get desiredSize() {
                    if (!IsTransformStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException("desiredSize");
                    }
                    const readableController = this._controlledTransformStream._readable._readableStreamController;
                    return ReadableStreamDefaultControllerGetDesiredSize(readableController);
                }
                enqueue(chunk = undefined) {
                    if (!IsTransformStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException("enqueue");
                    }
                    TransformStreamDefaultControllerEnqueue(this, chunk);
                }
                /**
		         * Errors both the readable side and the writable side of the controlled transform stream, making all future
		         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
		         */ error(reason = undefined) {
                    if (!IsTransformStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException("error");
                    }
                    TransformStreamDefaultControllerError(this, reason);
                }
                /**
		         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
		         * transformer only needs to consume a portion of the chunks written to the writable side.
		         */ terminate() {
                    if (!IsTransformStreamDefaultController(this)) {
                        throw defaultControllerBrandCheckException("terminate");
                    }
                    TransformStreamDefaultControllerTerminate(this);
                }
            }
            Object.defineProperties(TransformStreamDefaultController.prototype, {
                enqueue: {
                    enumerable: true
                },
                error: {
                    enumerable: true
                },
                terminate: {
                    enumerable: true
                },
                desiredSize: {
                    enumerable: true
                }
            });
            if (typeof SymbolPolyfill.toStringTag === "symbol") {
                Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
                    value: "TransformStreamDefaultController",
                    configurable: true
                });
            }
            // Transform Stream Default Controller Abstract Operations
            function IsTransformStreamDefaultController(x) {
                if (!typeIsObject(x)) {
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, "_controlledTransformStream")) {
                    return false;
                }
                return x instanceof TransformStreamDefaultController;
            }
            function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
                controller._controlledTransformStream = stream;
                stream._transformStreamController = controller;
                controller._transformAlgorithm = transformAlgorithm;
                controller._flushAlgorithm = flushAlgorithm;
            }
            function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
                const controller = Object.create(TransformStreamDefaultController.prototype);
                let transformAlgorithm = (chunk)=>{
                    try {
                        TransformStreamDefaultControllerEnqueue(controller, chunk);
                        return promiseResolvedWith(undefined);
                    } catch (transformResultE) {
                        return promiseRejectedWith(transformResultE);
                    }
                };
                let flushAlgorithm = ()=>promiseResolvedWith(undefined);
                if (transformer.transform !== undefined) {
                    transformAlgorithm = (chunk)=>transformer.transform(chunk, controller);
                }
                if (transformer.flush !== undefined) {
                    flushAlgorithm = ()=>transformer.flush(controller);
                }
                SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
            }
            function TransformStreamDefaultControllerClearAlgorithms(controller) {
                controller._transformAlgorithm = undefined;
                controller._flushAlgorithm = undefined;
            }
            function TransformStreamDefaultControllerEnqueue(controller, chunk) {
                const stream = controller._controlledTransformStream;
                const readableController = stream._readable._readableStreamController;
                if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
                    throw new TypeError("Readable side is not in a state that permits enqueue");
                }
                // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
                // accept TransformStreamDefaultControllerEnqueue() calls.
                try {
                    ReadableStreamDefaultControllerEnqueue(readableController, chunk);
                } catch (e) {
                    // This happens when readableStrategy.size() throws.
                    TransformStreamErrorWritableAndUnblockWrite(stream, e);
                    throw stream._readable._storedError;
                }
                const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
                if (backpressure !== stream._backpressure) {
                    TransformStreamSetBackpressure(stream, true);
                }
            }
            function TransformStreamDefaultControllerError(controller, e) {
                TransformStreamError(controller._controlledTransformStream, e);
            }
            function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
                const transformPromise = controller._transformAlgorithm(chunk);
                return transformPromiseWith(transformPromise, undefined, (r)=>{
                    TransformStreamError(controller._controlledTransformStream, r);
                    throw r;
                });
            }
            function TransformStreamDefaultControllerTerminate(controller) {
                const stream = controller._controlledTransformStream;
                const readableController = stream._readable._readableStreamController;
                ReadableStreamDefaultControllerClose(readableController);
                const error = new TypeError("TransformStream terminated");
                TransformStreamErrorWritableAndUnblockWrite(stream, error);
            }
            // TransformStreamDefaultSink Algorithms
            function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
                const controller = stream._transformStreamController;
                if (stream._backpressure) {
                    const backpressureChangePromise = stream._backpressureChangePromise;
                    return transformPromiseWith(backpressureChangePromise, ()=>{
                        const writable = stream._writable;
                        const state = writable._state;
                        if (state === "erroring") {
                            throw writable._storedError;
                        }
                        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
                    });
                }
                return TransformStreamDefaultControllerPerformTransform(controller, chunk);
            }
            function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
                // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
                // errored.
                TransformStreamError(stream, reason);
                return promiseResolvedWith(undefined);
            }
            function TransformStreamDefaultSinkCloseAlgorithm(stream) {
                // stream._readable cannot change after construction, so caching it across a call to user code is safe.
                const readable = stream._readable;
                const controller = stream._transformStreamController;
                const flushPromise = controller._flushAlgorithm();
                TransformStreamDefaultControllerClearAlgorithms(controller);
                // Return a promise that is fulfilled with undefined on success.
                return transformPromiseWith(flushPromise, ()=>{
                    if (readable._state === "errored") {
                        throw readable._storedError;
                    }
                    ReadableStreamDefaultControllerClose(readable._readableStreamController);
                }, (r)=>{
                    TransformStreamError(stream, r);
                    throw readable._storedError;
                });
            }
            // TransformStreamDefaultSource Algorithms
            function TransformStreamDefaultSourcePullAlgorithm(stream) {
                // Invariant. Enforced by the promises returned by start() and pull().
                TransformStreamSetBackpressure(stream, false);
                // Prevent the next pull() call until there is backpressure.
                return stream._backpressureChangePromise;
            }
            // Helper functions for the TransformStreamDefaultController.
            function defaultControllerBrandCheckException(name) {
                return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
            }
            // Helper functions for the TransformStream.
            function streamBrandCheckException(name) {
                return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
            }
            exports1.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
            exports1.CountQueuingStrategy = CountQueuingStrategy;
            exports1.ReadableByteStreamController = ReadableByteStreamController;
            exports1.ReadableStream = ReadableStream1;
            exports1.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
            exports1.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
            exports1.ReadableStreamDefaultController = ReadableStreamDefaultController;
            exports1.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
            exports1.TransformStream = TransformStream;
            exports1.TransformStreamDefaultController = TransformStreamDefaultController;
            exports1.WritableStream = WritableStream;
            exports1.WritableStreamDefaultController = WritableStreamDefaultController;
            exports1.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
        });
    })(ponyfill_es2018, ponyfill_es2018.exports);
    return ponyfill_es2018.exports;
}
/* c8 ignore start */ // 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE$1 = 65536;
if (!globalThis.ReadableStream) {
    // `node:stream/web` got introduced in v16.5.0 as experimental
    // and it's preferred over the polyfilled version. So we also
    // suppress the warning that gets emitted by NodeJS for using it.
    try {
        const process1 = __webpack_require__(97742);
        const { emitWarning } = process1;
        try {
            process1.emitWarning = ()=>{};
            Object.assign(globalThis, __webpack_require__(72477));
            process1.emitWarning = emitWarning;
        } catch (error) {
            process1.emitWarning = emitWarning;
            throw error;
        }
    } catch (error) {
        // fallback to polyfill implementation
        Object.assign(globalThis, requirePonyfill_es2018());
    }
}
try {
    // Don't use node: prefix for this, require+node: is not supported until node v14.14
    // Only `import()` can use prefix in 12.20 and later
    const { Blob } = __webpack_require__(14300);
    if (Blob && !Blob.prototype.stream) {
        Blob.prototype.stream = function name(params) {
            let position = 0;
            const blob = this;
            return new ReadableStream({
                type: "bytes",
                async pull (ctrl) {
                    const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
                    const buffer = await chunk.arrayBuffer();
                    position += buffer.byteLength;
                    ctrl.enqueue(new Uint8Array(buffer));
                    if (position === blob.size) {
                        ctrl.close();
                    }
                }
            });
        };
    }
} catch (error) {}
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ // 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536;
/** @param {(Blob | Uint8Array)[]} parts */ async function* toIterator(parts, clone = true) {
    for (const part of parts){
        if ("stream" in part) {
            yield* /** @type {AsyncIterableIterator<Uint8Array>} */ part.stream();
        } else if (ArrayBuffer.isView(part)) {
            if (clone) {
                let position = part.byteOffset;
                const end = part.byteOffset + part.byteLength;
                while(position !== end){
                    const size = Math.min(end - position, POOL_SIZE);
                    const chunk = part.buffer.slice(position, position + size);
                    position += chunk.byteLength;
                    yield new Uint8Array(chunk);
                }
            } else {
                yield part;
            }
        /* c8 ignore next 10 */ } else {
            // For blobs that have arrayBuffer but no stream method (nodes buffer.Blob)
            let position = 0, b = /** @type {Blob} */ part;
            while(position !== b.size){
                const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
                const buffer = await chunk.arrayBuffer();
                position += buffer.byteLength;
                yield new Uint8Array(buffer);
            }
        }
    }
}
const _Blob = class Blob {
    /** @type {Array.<(Blob|Uint8Array)>} */ #parts;
    #type;
    #size;
    #endings;
    /**
   * The Blob() constructor returns a new Blob object. The content
   * of the blob consists of the concatenation of the values given
   * in the parameter array.
   *
   * @param {*} blobParts
   * @param {{ type?: string, endings?: string }} [options]
   */ constructor(blobParts = [], options = {}){
        this.#parts = [];
        this.#type = "";
        this.#size = 0;
        this.#endings = "transparent";
        if (typeof blobParts !== "object" || blobParts === null) {
            throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
            throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
            throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null) options = {};
        const encoder = new TextEncoder();
        for (const element of blobParts){
            let part;
            if (ArrayBuffer.isView(element)) {
                part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
            } else if (element instanceof ArrayBuffer) {
                part = new Uint8Array(element.slice(0));
            } else if (element instanceof Blob) {
                part = element;
            } else {
                part = encoder.encode(`${element}`);
            }
            const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
            // Avoid pushing empty parts into the array to better GC them
            if (size) {
                this.#size += size;
                this.#parts.push(part);
            }
        }
        this.#endings = `${options.endings === undefined ? "transparent" : options.endings}`;
        const type = options.type === undefined ? "" : String(options.type);
        this.#type = /^[\x20-\x7E]*$/.test(type) ? type : "";
    }
    /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */ get size() {
        return this.#size;
    }
    /**
   * The type property of a Blob object returns the MIME type of the file.
   */ get type() {
        return this.#type;
    }
    /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */ async text() {
        // More optimized than using this.arrayBuffer()
        // that requires twice as much ram
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(this.#parts, false)){
            str += decoder.decode(part, {
                stream: true
            });
        }
        // Remaining
        str += decoder.decode();
        return str;
    }
    /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */ async arrayBuffer() {
        // Easier way... Just a unnecessary overhead
        // const view = new Uint8Array(this.size);
        // await this.stream().getReader({mode: 'byob'}).read(view);
        // return view.buffer;
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(this.#parts, false)){
            data.set(chunk, offset);
            offset += chunk.length;
        }
        return data.buffer;
    }
    stream() {
        const it = toIterator(this.#parts, true);
        return new globalThis.ReadableStream({
            // @ts-ignore
            type: "bytes",
            async pull (ctrl) {
                const chunk = await it.next();
                chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
            },
            async cancel () {
                await it.return();
            }
        });
    }
    /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */ slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = this.#parts;
        const blobParts = [];
        let added = 0;
        for (const part of parts){
            // don't add the overflow to new blobParts
            if (added >= span) {
                break;
            }
            const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
            if (relativeStart && size <= relativeStart) {
                // Skip the beginning and change the relative
                // start & end position as we skip the unwanted parts
                relativeStart -= size;
                relativeEnd -= size;
            } else {
                let chunk;
                if (ArrayBuffer.isView(part)) {
                    chunk = part.subarray(relativeStart, Math.min(size, relativeEnd));
                    added += chunk.byteLength;
                } else {
                    chunk = part.slice(relativeStart, Math.min(size, relativeEnd));
                    added += chunk.size;
                }
                relativeEnd -= size;
                blobParts.push(chunk);
                relativeStart = 0; // All next sequential parts should start at 0
            }
        }
        const blob = new Blob([], {
            type: String(type).toLowerCase()
        });
        blob.#size = span;
        blob.#parts = blobParts;
        return blob;
    }
    get [Symbol.toStringTag]() {
        return "Blob";
    }
    static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
    }
};
Object.defineProperties(_Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
/** @type {typeof globalThis.Blob} */ const Blob = _Blob;
const _Blob$1 = Blob;
const _File = class File extends _Blob$1 {
    #lastModified;
    #name;
    /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */ // @ts-ignore
    constructor(fileBits, fileName, options = {}){
        if (arguments.length < 2) {
            throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        this.#lastModified = 0;
        this.#name = "";
        if (options === null) options = {};
        // Simulate WebIDL type casting for NaN value in lastModified option.
        const lastModified = options.lastModified === undefined ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
            this.#lastModified = lastModified;
        }
        this.#name = String(fileName);
    }
    get name() {
        return this.#name;
    }
    get lastModified() {
        return this.#lastModified;
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
    static [Symbol.hasInstance](object) {
        return !!object && object instanceof _Blob$1 && /^(File)$/.test(object[Symbol.toStringTag]);
    }
};
/** @type {typeof globalThis.File} */ // @ts-ignore
const File = _File;
const File$1 = File;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ var { toStringTag: t, iterator: i, hasInstance: h } = Symbol, r = Math.random, m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), f = (a, b, c)=>(a += "", /^(Blob|File)$/.test(b && b[t]) ? [
        (c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a),
        b.name !== c || b[t] == "blob" ? new File$1([
            b
        ], c, b) : b
    ] : [
        a,
        b + ""
    ]), e = (c, f)=>(f ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), x = (n, a, e)=>{
    if (a.length < e) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e} arguments required, but only ${a.length} present.`);
    }
};
/** @type {typeof globalThis.FormData} */ const FormData = class FormData {
    #d;
    constructor(...a){
        this.#d = [];
        if (a.length) throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
    }
    get [t]() {
        return "FormData";
    }
    [i]() {
        return this.entries();
    }
    static [h](o) {
        return o && typeof o === "object" && o[t] === "FormData" && !m.some((m)=>typeof o[m] != "function");
    }
    append(...a) {
        x("append", arguments, 2);
        this.#d.push(f(...a));
    }
    delete(a) {
        x("delete", arguments, 1);
        a += "";
        this.#d = this.#d.filter(([b])=>b !== a);
    }
    get(a) {
        x("get", arguments, 1);
        a += "";
        for(var b = this.#d, l = b.length, c = 0; c < l; c++)if (b[c][0] === a) return b[c][1];
        return null;
    }
    getAll(a, b) {
        x("getAll", arguments, 1);
        b = [];
        a += "";
        this.#d.forEach((c)=>c[0] === a && b.push(c[1]));
        return b;
    }
    has(a) {
        x("has", arguments, 1);
        a += "";
        return this.#d.some((b)=>b[0] === a);
    }
    forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)a.call(b, d, c, this);
    }
    set(...a) {
        x("set", arguments, 2);
        var b = [], c = !0;
        a = f(...a);
        this.#d.forEach((d)=>{
            d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        this.#d = b;
    }
    *entries() {
        yield* this.#d;
    }
    *keys() {
        for (var [a] of this)yield a;
    }
    *values() {
        for (var [, a] of this)yield a;
    }
};
/** @param {FormData} F */ function formDataToBlob(F, B = _Blob$1) {
    var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r\nContent-Disposition: form-data; name="`;
    F.forEach((v, n)=>typeof v == "string" ? c.push(p + e(n) + `"\r\n\r\n${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r\n`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r\nContent-Type: ${v.type || "application/octet-stream"}\r\n\r\n`, v, "\r\n"));
    c.push(`--${b}--`);
    return new B(c, {
        type: "multipart/form-data; boundary=" + b
    });
}
class FetchBaseError extends Error {
    constructor(message, type){
        super(message);
        // Hide custom error implementation details from end-users
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
    }
    get name() {
        return this.constructor.name;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
/**
 * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
*/ /**
 * FetchError interface for operational errors
 */ class FetchError extends FetchBaseError {
    /**
	 * @param  {string} message -      Error message for human
	 * @param  {string} [type] -        Error type for machine
	 * @param  {SystemError} [systemError] - For Node.js system error
	 */ constructor(message, type, systemError){
        super(message, type);
        // When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
        if (systemError) {
            // eslint-disable-next-line no-multi-assign
            this.code = this.errno = systemError.code;
            this.erroredSysCall = systemError.syscall;
        }
    }
}
/**
 * Is.js
 *
 * Object type checks.
 */ const NAME = Symbol.toStringTag;
/**
 * Check if `obj` is a URLSearchParams object
 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
 * @param {*} object - Object to check for
 * @return {boolean}
 */ const isURLSearchParameters = (object)=>{
    return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
/**
 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
 * @param {*} object - Object to check for
 * @return {boolean}
 */ const isBlob = (object)=>{
    return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
/**
 * Check if `obj` is an instance of AbortSignal.
 * @param {*} object - Object to check for
 * @return {boolean}
 */ const isAbortSignal = (object)=>{
    return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
};
/**
 * isDomainOrSubdomain reports whether sub is a subdomain (or exact match) of
 * the parent domain.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isDomainOrSubdomain = (destination, original)=>{
    const orig = new URL(original).hostname;
    const dest = new URL(destination).hostname;
    return orig === dest || orig.endsWith(`.${dest}`);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isSameProtocol = (destination, original)=>{
    const orig = new URL(original).protocol;
    const dest = new URL(destination).protocol;
    return orig === dest;
};
const pipeline = node_util.promisify(Stream.pipeline);
const INTERNALS$2 = Symbol("Body internals");
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Body {
    constructor(body, { size = 0 } = {}){
        let boundary = null;
        if (body === null) {
            // Body is undefined or null
            body = null;
        } else if (isURLSearchParameters(body)) {
            // Body is a URLSearchParams
            body = node_buffer.Buffer.from(body.toString());
        } else if (isBlob(body)) ;
        else if (node_buffer.Buffer.isBuffer(body)) ;
        else if (node_util.types.isAnyArrayBuffer(body)) {
            // Body is ArrayBuffer
            body = node_buffer.Buffer.from(body);
        } else if (ArrayBuffer.isView(body)) {
            // Body is ArrayBufferView
            body = node_buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
        } else if (body instanceof Stream) ;
        else if (body instanceof FormData) {
            // Body is FormData
            body = formDataToBlob(body);
            boundary = body.type.split("=")[1];
        } else {
            // None of the above
            // coerce to string then buffer
            body = node_buffer.Buffer.from(String(body));
        }
        let stream = body;
        if (node_buffer.Buffer.isBuffer(body)) {
            stream = Stream.Readable.from(body);
        } else if (isBlob(body)) {
            stream = Stream.Readable.from(body.stream());
        }
        this[INTERNALS$2] = {
            body,
            stream,
            boundary,
            disturbed: false,
            error: null
        };
        this.size = size;
        if (body instanceof Stream) {
            body.on("error", (error_)=>{
                const error = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
                this[INTERNALS$2].error = error;
            });
        }
    }
    get body() {
        return this[INTERNALS$2].stream;
    }
    get bodyUsed() {
        return this[INTERNALS$2].disturbed;
    }
    /**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */ async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
    }
    async formData() {
        const ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
            const formData = new FormData();
            const parameters = new URLSearchParams(await this.text());
            for (const [name, value1] of parameters){
                formData.append(name, value1);
            }
            return formData;
        }
        const { toFormData } = await __webpack_require__.e(/* import() */ 6755).then(__webpack_require__.t.bind(__webpack_require__, 26755, 19));
        return toFormData(this.body, ct);
    }
    /**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */ async blob() {
        const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
        const buf = await this.arrayBuffer();
        return new _Blob$1([
            buf
        ], {
            type: ct
        });
    }
    /**
	 * Decode response as json
	 *
	 * @return  Promise
	 */ async json() {
        const text = await this.text();
        return JSON.parse(text);
    }
    /**
	 * Decode response as text
	 *
	 * @return  Promise
	 */ async text() {
        const buffer = await consumeBody(this);
        return new TextDecoder().decode(buffer);
    }
    /**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */ buffer() {
        return consumeBody(this);
    }
}
Body.prototype.buffer = node_util.deprecate(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    },
    data: {
        get: node_util.deprecate(()=>{}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)")
    }
});
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return Promise
 */ async function consumeBody(data) {
    if (data[INTERNALS$2].disturbed) {
        throw new TypeError(`body used already for: ${data.url}`);
    }
    data[INTERNALS$2].disturbed = true;
    if (data[INTERNALS$2].error) {
        throw data[INTERNALS$2].error;
    }
    const { body } = data;
    // Body is null
    if (body === null) {
        return node_buffer.Buffer.alloc(0);
    }
    /* c8 ignore next 3 */ if (!(body instanceof Stream)) {
        return node_buffer.Buffer.alloc(0);
    }
    // Body is stream
    // get ready to actually consume the body
    const accum = [];
    let accumBytes = 0;
    try {
        for await (const chunk of body){
            if (data.size > 0 && accumBytes + chunk.length > data.size) {
                const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
                body.destroy(error);
                throw error;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        }
    } catch (error) {
        const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, "system", error);
        throw error_;
    }
    if (body.readableEnded === true || body._readableState.ended === true) {
        try {
            if (accum.every((c)=>typeof c === "string")) {
                return node_buffer.Buffer.from(accum.join(""));
            }
            return node_buffer.Buffer.concat(accum, accumBytes);
        } catch (error) {
            throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, "system", error);
        }
    } else {
        throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
    }
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed   instance       Response or Request instance
 * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
 * @return  Mixed
 */ const clone = (instance, highWaterMark)=>{
    let p1;
    let p2;
    let { body } = instance[INTERNALS$2];
    // Don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
    }
    // Check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof Stream && typeof body.getBoundary !== "function") {
        // Tee instance body
        p1 = new Stream.PassThrough({
            highWaterMark
        });
        p2 = new Stream.PassThrough({
            highWaterMark
        });
        body.pipe(p1);
        body.pipe(p2);
        // Set instance body to teed body and return the other teed body
        instance[INTERNALS$2].stream = p1;
        body = p2;
    }
    return body;
};
const getNonSpecFormDataBoundary = node_util.deprecate((body)=>body.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param {any} body Any options.body input
 * @returns {string | null}
 */ const extractContentType = (body, request)=>{
    // Body is null or undefined
    if (body === null) {
        return null;
    }
    // Body is string
    if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
    }
    // Body is a URLSearchParams
    if (isURLSearchParameters(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
    }
    // Body is blob
    if (isBlob(body)) {
        return body.type || null;
    }
    // Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
    if (node_buffer.Buffer.isBuffer(body) || node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
        return null;
    }
    if (body instanceof FormData) {
        return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
    }
    // Detect form data input from form-data module
    if (body && typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
    }
    // Body is stream - can't really do much about this
    if (body instanceof Stream) {
        return null;
    }
    // Body constructor defaults other things to string
    return "text/plain;charset=UTF-8";
};
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param {any} obj.body Body object from the Body instance.
 * @returns {number | null}
 */ const getTotalBytes = (request)=>{
    const { body } = request[INTERNALS$2];
    // Body is null or undefined
    if (body === null) {
        return 0;
    }
    // Body is Blob
    if (isBlob(body)) {
        return body.size;
    }
    // Body is Buffer
    if (node_buffer.Buffer.isBuffer(body)) {
        return body.length;
    }
    // Detect form data input from form-data module
    if (body && typeof body.getLengthSync === "function") {
        return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
    }
    // Body is stream
    return null;
};
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param {Stream.Writable} dest The stream to write to.
 * @param obj.body Body object from the Body instance.
 * @returns {Promise<void>}
 */ const writeToStream = async (dest, { body })=>{
    if (body === null) {
        // Body is null
        dest.end();
    } else {
        // Body is stream
        await pipeline(body, dest);
    }
};
/**
 * Headers.js
 *
 * Headers class offers convenient helpers
 */ /* c8 ignore next 9 */ const validateHeaderName = typeof http.validateHeaderName === "function" ? http.validateHeaderName : (name)=>{
    if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error, "code", {
            value: "ERR_INVALID_HTTP_TOKEN"
        });
        throw error;
    }
};
/* c8 ignore next 9 */ const validateHeaderValue = typeof http.validateHeaderValue === "function" ? http.validateHeaderValue : (name, value1)=>{
    if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value1)) {
        const error = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error, "code", {
            value: "ERR_INVALID_CHAR"
        });
        throw error;
    }
};
/**
 * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
 */ /**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
 * These actions include retrieving, setting, adding to, and removing.
 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples.)
 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 */ class Headers extends URLSearchParams {
    /**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */ constructor(init){
        // Validate and normalize init object in [name, value(s)][]
        /** @type {string[][]} */ let result = [];
        if (init instanceof Headers) {
            const raw = init.raw();
            for (const [name, values] of Object.entries(raw)){
                result.push(...values.map((value1)=>[
                        name,
                        value1
                    ]));
            }
        } else if (init == null) ;
        else if (typeof init === "object" && !node_util.types.isBoxedPrimitive(init)) {
            const method = init[Symbol.iterator];
            // eslint-disable-next-line no-eq-null, eqeqeq
            if (method == null) {
                // Record<ByteString, ByteString>
                result.push(...Object.entries(init));
            } else {
                if (typeof method !== "function") {
                    throw new TypeError("Header pairs must be iterable");
                }
                // Sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                result = [
                    ...init
                ].map((pair)=>{
                    if (typeof pair !== "object" || node_util.types.isBoxedPrimitive(pair)) {
                        throw new TypeError("Each header pair must be an iterable object");
                    }
                    return [
                        ...pair
                    ];
                }).map((pair)=>{
                    if (pair.length !== 2) {
                        throw new TypeError("Each header pair must be a name/value tuple");
                    }
                    return [
                        ...pair
                    ];
                });
            }
        } else {
            throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        }
        // Validate and lowercase
        result = result.length > 0 ? result.map(([name, value1])=>{
            validateHeaderName(name);
            validateHeaderValue(name, String(value1));
            return [
                String(name).toLowerCase(),
                String(value1)
            ];
        }) : undefined;
        super(result);
        // Returning a Proxy that will lowercase key names, validate parameters and sort keys
        // eslint-disable-next-line no-constructor-return
        return new Proxy(this, {
            get (target, p, receiver) {
                switch(p){
                    case "append":
                    case "set":
                        return (name, value1)=>{
                            validateHeaderName(name);
                            validateHeaderValue(name, String(value1));
                            return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value1));
                        };
                    case "delete":
                    case "has":
                    case "getAll":
                        return (name)=>{
                            validateHeaderName(name);
                            return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
                        };
                    case "keys":
                        return ()=>{
                            target.sort();
                            return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                        };
                    default:
                        return Reflect.get(target, p, receiver);
                }
            }
        });
    /* c8 ignore next */ }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    toString() {
        return Object.prototype.toString.call(this);
    }
    get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
            return null;
        }
        let value1 = values.join(", ");
        if (/^content-encoding$/i.test(name)) {
            value1 = value1.toLowerCase();
        }
        return value1;
    }
    forEach(callback, thisArg = undefined) {
        for (const name of this.keys()){
            Reflect.apply(callback, thisArg, [
                this.get(name),
                name,
                this
            ]);
        }
    }
    *values() {
        for (const name of this.keys()){
            yield this.get(name);
        }
    }
    /**
	 * @type {() => IterableIterator<[string, string]>}
	 */ *entries() {
        for (const name of this.keys()){
            yield [
                name,
                this.get(name)
            ];
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    /**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */ raw() {
        return [
            ...this.keys()
        ].reduce((result, key)=>{
            result[key] = this.getAll(key);
            return result;
        }, {});
    }
    /**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */ [Symbol.for("nodejs.util.inspect.custom")]() {
        return [
            ...this.keys()
        ].reduce((result, key)=>{
            const values = this.getAll(key);
            // Http.request() only supports string as Host header.
            // This hack makes specifying custom Host header possible.
            if (key === "host") {
                result[key] = values[0];
            } else {
                result[key] = values.length > 1 ? values : values[0];
            }
            return result;
        }, {});
    }
}
/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */ Object.defineProperties(Headers.prototype, [
    "get",
    "entries",
    "forEach",
    "values"
].reduce((result, property)=>{
    result[property] = {
        enumerable: true
    };
    return result;
}, {}));
/**
 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
 * not conform to HTTP grammar productions.
 * @param {import('http').IncomingMessage['rawHeaders']} headers
 */ function fromRawHeaders(headers = []) {
    return new Headers(headers// Split into pairs
    .reduce((result, value1, index, array)=>{
        if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
        }
        return result;
    }, []).filter(([name, value1])=>{
        try {
            validateHeaderName(name);
            validateHeaderValue(name, String(value1));
            return true;
        } catch  {
            return false;
        }
    }));
}
const redirectStatus = new Set([
    301,
    302,
    303,
    307,
    308
]);
/**
 * Redirect code matching
 *
 * @param {number} code - Status code
 * @return {boolean}
 */ const isRedirect = (code)=>{
    return redirectStatus.has(code);
};
/**
 * Response.js
 *
 * Response class provides content decoding
 */ const INTERNALS$1 = Symbol("Response internals");
/**
 * Response class
 *
 * Ref: https://fetch.spec.whatwg.org/#response-class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Response extends Body {
    constructor(body = null, options = {}){
        super(body, options);
        // eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
        const status = options.status != null ? options.status : 200;
        const headers = new Headers(options.headers);
        if (body !== null && !headers.has("Content-Type")) {
            const contentType = extractContentType(body, this);
            if (contentType) {
                headers.append("Content-Type", contentType);
            }
        }
        this[INTERNALS$1] = {
            type: "default",
            url: options.url,
            status,
            statusText: options.statusText || "",
            headers,
            counter: options.counter,
            highWaterMark: options.highWaterMark
        };
    }
    get type() {
        return this[INTERNALS$1].type;
    }
    get url() {
        return this[INTERNALS$1].url || "";
    }
    get status() {
        return this[INTERNALS$1].status;
    }
    /**
	 * Convenience property representing if the request ended normally
	 */ get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[INTERNALS$1].statusText;
    }
    get headers() {
        return this[INTERNALS$1].headers;
    }
    get highWaterMark() {
        return this[INTERNALS$1].highWaterMark;
    }
    /**
	 * Clone this response
	 *
	 * @return  Response
	 */ clone() {
        return new Response(clone(this, this.highWaterMark), {
            type: this.type,
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected,
            size: this.size,
            highWaterMark: this.highWaterMark
        });
    }
    /**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */ static redirect(url, status = 302) {
        if (!isRedirect(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        return new Response(null, {
            headers: {
                location: new URL(url).toString()
            },
            status
        });
    }
    static error() {
        const response = new Response(null, {
            status: 0,
            statusText: ""
        });
        response[INTERNALS$1].type = "error";
        return response;
    }
    static json(data = undefined, init = {}) {
        const body = JSON.stringify(data);
        if (body === undefined) {
            throw new TypeError("data is not JSON serializable");
        }
        const headers = new Headers(init && init.headers);
        if (!headers.has("content-type")) {
            headers.set("content-type", "application/json");
        }
        return new Response(body, {
            ...init,
            headers
        });
    }
    get [Symbol.toStringTag]() {
        return "Response";
    }
}
Object.defineProperties(Response.prototype, {
    type: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
const getSearch = (parsedURL)=>{
    if (parsedURL.search) {
        return parsedURL.search;
    }
    const lastOffset = parsedURL.href.length - 1;
    const hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
    return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
};
/**
 * @external URL
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL|URL}
 */ /**
 * @module utils/referrer
 * @private
 */ /**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#strip-url|Referrer Policy §8.4. Strip url for use as a referrer}
 * @param {string} URL
 * @param {boolean} [originOnly=false]
 */ function stripURLForUseAsAReferrer(url, originOnly = false) {
    // 1. If url is null, return no referrer.
    if (url == null) {
        return "no-referrer";
    }
    url = new URL(url);
    // 2. If url's scheme is a local scheme, then return no referrer.
    if (/^(about|blob|data):$/.test(url.protocol)) {
        return "no-referrer";
    }
    // 3. Set url's username to the empty string.
    url.username = "";
    // 4. Set url's password to null.
    // Note: `null` appears to be a mistake as this actually results in the password being `"null"`.
    url.password = "";
    // 5. Set url's fragment to null.
    // Note: `null` appears to be a mistake as this actually results in the fragment being `"#null"`.
    url.hash = "";
    // 6. If the origin-only flag is true, then:
    if (originOnly) {
        // 6.1. Set url's path to null.
        // Note: `null` appears to be a mistake as this actually results in the path being `"/null"`.
        url.pathname = "";
        // 6.2. Set url's query to null.
        // Note: `null` appears to be a mistake as this actually results in the query being `"?null"`.
        url.search = "";
    }
    // 7. Return url.
    return url;
}
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#enumdef-referrerpolicy|enum ReferrerPolicy}
 */ const ReferrerPolicy = new Set([
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
]);
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy|default referrer policy}
 */ const DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#referrer-policies|Referrer Policy §3. Referrer Policies}
 * @param {string} referrerPolicy
 * @returns {string} referrerPolicy
 */ function validateReferrerPolicy(referrerPolicy) {
    if (!ReferrerPolicy.has(referrerPolicy)) {
        throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
    }
    return referrerPolicy;
}
/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy|Referrer Policy §3.2. Is origin potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */ function isOriginPotentiallyTrustworthy(url) {
    // 1. If origin is an opaque origin, return "Not Trustworthy".
    // Not applicable
    // 2. Assert: origin is a tuple origin.
    // Not for implementations
    // 3. If origin's scheme is either "https" or "wss", return "Potentially Trustworthy".
    if (/^(http|ws)s:$/.test(url.protocol)) {
        return true;
    }
    // 4. If origin's host component matches one of the CIDR notations 127.0.0.0/8 or ::1/128 [RFC4632], return "Potentially Trustworthy".
    const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
    const hostIPVersion = node_net.isIP(hostIp);
    if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
        return true;
    }
    if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
        return true;
    }
    // 5. If origin's host component is "localhost" or falls within ".localhost", and the user agent conforms to the name resolution rules in [let-localhost-be-localhost], return "Potentially Trustworthy".
    // We are returning FALSE here because we cannot ensure conformance to
    // let-localhost-be-loalhost (https://tools.ietf.org/html/draft-west-let-localhost-be-localhost)
    if (url.host === "localhost" || url.host.endsWith(".localhost")) {
        return false;
    }
    // 6. If origin's scheme component is file, return "Potentially Trustworthy".
    if (url.protocol === "file:") {
        return true;
    }
    // 7. If origin's scheme component is one which the user agent considers to be authenticated, return "Potentially Trustworthy".
    // Not supported
    // 8. If origin has been configured as a trustworthy origin, return "Potentially Trustworthy".
    // Not supported
    // 9. Return "Not Trustworthy".
    return false;
}
/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-url-trustworthy|Referrer Policy §3.3. Is url potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */ function isUrlPotentiallyTrustworthy(url) {
    // 1. If url is "about:blank" or "about:srcdoc", return "Potentially Trustworthy".
    if (/^about:(blank|srcdoc)$/.test(url)) {
        return true;
    }
    // 2. If url's scheme is "data", return "Potentially Trustworthy".
    if (url.protocol === "data:") {
        return true;
    }
    // Note: The origin of blob: and filesystem: URLs is the origin of the context in which they were
    // created. Therefore, blobs created in a trustworthy origin will themselves be potentially
    // trustworthy.
    if (/^(blob|filesystem):$/.test(url.protocol)) {
        return true;
    }
    // 3. Return the result of executing §3.2 Is origin potentially trustworthy? on url's origin.
    return isOriginPotentiallyTrustworthy(url);
}
/**
 * Modifies the referrerURL to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerURLCallback
 * @param {external:URL} referrerURL
 * @returns {external:URL} modified referrerURL
 */ /**
 * Modifies the referrerOrigin to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerOriginCallback
 * @param {external:URL} referrerOrigin
 * @returns {external:URL} modified referrerOrigin
 */ /**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}
 * @param {Request} request
 * @param {object} o
 * @param {module:utils/referrer~referrerURLCallback} o.referrerURLCallback
 * @param {module:utils/referrer~referrerOriginCallback} o.referrerOriginCallback
 * @returns {external:URL} Request's referrer
 */ function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
    // There are 2 notes in the specification about invalid pre-conditions.  We return null, here, for
    // these cases:
    // > Note: If request's referrer is "no-referrer", Fetch will not call into this algorithm.
    // > Note: If request's referrer policy is the empty string, Fetch will not call into this
    // > algorithm.
    if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
        return null;
    }
    // 1. Let policy be request's associated referrer policy.
    const policy = request.referrerPolicy;
    // 2. Let environment be request's client.
    // not applicable to node.js
    // 3. Switch on request's referrer:
    if (request.referrer === "about:client") {
        return "no-referrer";
    }
    // "a URL": Let referrerSource be request's referrer.
    const referrerSource = request.referrer;
    // 4. Let request's referrerURL be the result of stripping referrerSource for use as a referrer.
    let referrerURL = stripURLForUseAsAReferrer(referrerSource);
    // 5. Let referrerOrigin be the result of stripping referrerSource for use as a referrer, with the
    //    origin-only flag set to true.
    let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
    // 6. If the result of serializing referrerURL is a string whose length is greater than 4096, set
    //    referrerURL to referrerOrigin.
    if (referrerURL.toString().length > 4096) {
        referrerURL = referrerOrigin;
    }
    // 7. The user agent MAY alter referrerURL or referrerOrigin at this point to enforce arbitrary
    //    policy considerations in the interests of minimizing data leakage. For example, the user
    //    agent could strip the URL down to an origin, modify its host, replace it with an empty
    //    string, etc.
    if (referrerURLCallback) {
        referrerURL = referrerURLCallback(referrerURL);
    }
    if (referrerOriginCallback) {
        referrerOrigin = referrerOriginCallback(referrerOrigin);
    }
    // 8.Execute the statements corresponding to the value of policy:
    const currentURL = new URL(request.url);
    switch(policy){
        case "no-referrer":
            return "no-referrer";
        case "origin":
            return referrerOrigin;
        case "unsafe-url":
            return referrerURL;
        case "strict-origin":
            // 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return "no-referrer";
            }
            // 2. Return referrerOrigin.
            return referrerOrigin.toString();
        case "strict-origin-when-cross-origin":
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // 2. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return "no-referrer";
            }
            // 3. Return referrerOrigin.
            return referrerOrigin;
        case "same-origin":
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // 2. Return no referrer.
            return "no-referrer";
        case "origin-when-cross-origin":
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // Return referrerOrigin.
            return referrerOrigin;
        case "no-referrer-when-downgrade":
            // 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return "no-referrer";
            }
            // 2. Return referrerURL.
            return referrerURL;
        default:
            throw new TypeError(`Invalid referrerPolicy: ${policy}`);
    }
}
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header|Referrer Policy §8.1. Parse a referrer policy from a Referrer-Policy header}
 * @param {Headers} headers Response headers
 * @returns {string} policy
 */ function parseReferrerPolicyFromHeader(headers) {
    // 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy`
    //    and response’s header list.
    const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
    // 2. Let policy be the empty string.
    let policy = "";
    // 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty
    //    string, then set policy to token.
    // Note: This algorithm loops over multiple policy values to allow deployment of new policy
    // values with fallbacks for older user agents, as described in § 11.1 Unknown Policy Values.
    for (const token of policyTokens){
        if (token && ReferrerPolicy.has(token)) {
            policy = token;
        }
    }
    // 4. Return policy.
    return policy;
}
/**
 * Request.js
 *
 * Request class contains server only options
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */ const INTERNALS = Symbol("Request internals");
/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} object
 * @return {boolean}
 */ const isRequest = (object)=>{
    return typeof object === "object" && typeof object[INTERNALS] === "object";
};
const doBadDataWarn = node_util.deprecate(()=>{}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
/**
 * Request class
 *
 * Ref: https://fetch.spec.whatwg.org/#request-class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class Request extends Body {
    constructor(input, init = {}){
        let parsedURL;
        // Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
        if (isRequest(input)) {
            parsedURL = new URL(input.url);
        } else {
            parsedURL = new URL(input);
            input = {};
        }
        if (parsedURL.username !== "" || parsedURL.password !== "") {
            throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
        }
        let method = init.method || input.method || "GET";
        if (/^(delete|get|head|options|post|put)$/i.test(method)) {
            method = method.toUpperCase();
        }
        if (!isRequest(init) && "data" in init) {
            doBadDataWarn();
        }
        // eslint-disable-next-line no-eq-null, eqeqeq
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
            throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        const inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
            size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
            const contentType = extractContentType(inputBody, this);
            if (contentType) {
                headers.set("Content-Type", contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init) {
            signal = init.signal;
        }
        // eslint-disable-next-line no-eq-null, eqeqeq
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        }
        // §5.4, Request constructor steps, step 15.1
        // eslint-disable-next-line no-eq-null, eqeqeq
        let referrer = init.referrer == null ? input.referrer : init.referrer;
        if (referrer === "") {
            // §5.4, Request constructor steps, step 15.2
            referrer = "no-referrer";
        } else if (referrer) {
            // §5.4, Request constructor steps, step 15.3.1, 15.3.2
            const parsedReferrer = new URL(referrer);
            // §5.4, Request constructor steps, step 15.3.3, 15.3.4
            referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else {
            referrer = undefined;
        }
        this[INTERNALS] = {
            method,
            redirect: init.redirect || input.redirect || "follow",
            headers,
            parsedURL,
            signal,
            referrer
        };
        // Node-fetch-only options
        this.follow = init.follow === undefined ? input.follow === undefined ? 20 : input.follow : init.follow;
        this.compress = init.compress === undefined ? input.compress === undefined ? true : input.compress : init.compress;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
        this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
        // §5.4, Request constructor steps, step 16.
        // Default is empty string per https://fetch.spec.whatwg.org/#concept-request-referrer-policy
        this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
    }
    /** @returns {string} */ get method() {
        return this[INTERNALS].method;
    }
    /** @returns {string} */ get url() {
        return node_url.format(this[INTERNALS].parsedURL);
    }
    /** @returns {Headers} */ get headers() {
        return this[INTERNALS].headers;
    }
    get redirect() {
        return this[INTERNALS].redirect;
    }
    /** @returns {AbortSignal} */ get signal() {
        return this[INTERNALS].signal;
    }
    // https://fetch.spec.whatwg.org/#dom-request-referrer
    get referrer() {
        if (this[INTERNALS].referrer === "no-referrer") {
            return "";
        }
        if (this[INTERNALS].referrer === "client") {
            return "about:client";
        }
        if (this[INTERNALS].referrer) {
            return this[INTERNALS].referrer.toString();
        }
        return undefined;
    }
    get referrerPolicy() {
        return this[INTERNALS].referrerPolicy;
    }
    set referrerPolicy(referrerPolicy) {
        this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
    }
    /**
	 * Clone this request
	 *
	 * @return  Request
	 */ clone() {
        return new Request(this);
    }
    get [Symbol.toStringTag]() {
        return "Request";
    }
}
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    },
    referrer: {
        enumerable: true
    },
    referrerPolicy: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param {Request} request - A Request instance
 * @return The options object to be passed to http.request
 */ const getNodeRequestOptions = (request)=>{
    const { parsedURL } = request[INTERNALS];
    const headers = new Headers(request[INTERNALS].headers);
    // Fetch step 1.3
    if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = "0";
    }
    if (request.body !== null) {
        const totalBytes = getTotalBytes(request);
        // Set Content-Length if totalBytes is a number (that is not NaN)
        if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
    }
    // 4.1. Main fetch, step 2.6
    // > If request's referrer policy is the empty string, then set request's referrer policy to the
    // > default referrer policy.
    if (request.referrerPolicy === "") {
        request.referrerPolicy = DEFAULT_REFERRER_POLICY;
    }
    // 4.1. Main fetch, step 2.7
    // > If request's referrer is not "no-referrer", set request's referrer to the result of invoking
    // > determine request's referrer.
    if (request.referrer && request.referrer !== "no-referrer") {
        request[INTERNALS].referrer = determineRequestsReferrer(request);
    } else {
        request[INTERNALS].referrer = "no-referrer";
    }
    // 4.5. HTTP-network-or-cache fetch, step 6.9
    // > If httpRequest's referrer is a URL, then append `Referer`/httpRequest's referrer, serialized
    // >  and isomorphic encoded, to httpRequest's header list.
    if (request[INTERNALS].referrer instanceof URL) {
        headers.set("Referer", request.referrer);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch");
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip, deflate, br");
    }
    let { agent } = request;
    if (typeof agent === "function") {
        agent = agent(parsedURL);
    }
    if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    const search = getSearch(parsedURL);
    // Pass the full URL directly to request(), but overwrite the following
    // options:
    const options = {
        // Overwrite search to retain trailing ? (issue #776)
        path: parsedURL.pathname + search,
        // The following options are not expressed in the URL
        method: request.method,
        headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
    };
    return {
        /** @type {URL} */ parsedURL,
        options
    };
};
/**
 * AbortError interface for cancelled requests
 */ class AbortError extends FetchBaseError {
    constructor(message, type = "aborted"){
        super(message, type);
    }
}
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ if (!globalThis.DOMException) {
    try {
        const { MessageChannel } = __webpack_require__(71267), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [
            ab,
            ab
        ]);
    } catch (err) {
        err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
    }
}
var nodeDomexception = globalThis.DOMException;
/**
 * Index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */ const supportedSchemas = new Set([
    "data:",
    "http:",
    "https:"
]);
/**
 * Fetch function
 *
 * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
 * @param   {*} [options_] - Fetch options
 * @return  {Promise<import('./response').default>}
 */ async function fetch(url, options_) {
    return new Promise((resolve, reject)=>{
        // Build request object
        const request = new Request(url, options_);
        const { parsedURL, options } = getNodeRequestOptions(request);
        if (!supportedSchemas.has(parsedURL.protocol)) {
            throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
        }
        if (parsedURL.protocol === "data:") {
            const data = dataUriToBuffer(request.url);
            const response = new Response(data, {
                headers: {
                    "Content-Type": data.typeFull
                }
            });
            resolve(response);
            return;
        }
        // Wrap http.request into fetch
        const send = (parsedURL.protocol === "https:" ? https : http).request;
        const { signal } = request;
        let response = null;
        const abort = ()=>{
            const error = new AbortError("The operation was aborted.");
            reject(error);
            if (request.body && request.body instanceof Stream.Readable) {
                request.body.destroy(error);
            }
            if (!response || !response.body) {
                return;
            }
            response.body.emit("error", error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = ()=>{
            abort();
            finalize();
        };
        // Send request
        const request_ = send(parsedURL.toString(), options);
        if (signal) {
            signal.addEventListener("abort", abortAndFinalize);
        }
        const finalize = ()=>{
            request_.abort();
            if (signal) {
                signal.removeEventListener("abort", abortAndFinalize);
            }
        };
        request_.on("error", (error)=>{
            reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, "system", error));
            finalize();
        });
        fixResponseChunkedTransferBadEnding(request_, (error)=>{
            if (response && response.body) {
                response.body.destroy(error);
            }
        });
        /* c8 ignore next 18 */ if (process.version < "v14") {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            request_.on("socket", (s)=>{
                let endedWithEventsCount;
                s.prependListener("end", ()=>{
                    endedWithEventsCount = s._eventsCount;
                });
                s.prependListener("close", (hadError)=>{
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && endedWithEventsCount < s._eventsCount && !hadError) {
                        const error = new Error("Premature close");
                        error.code = "ERR_STREAM_PREMATURE_CLOSE";
                        response.body.emit("error", error);
                    }
                });
            });
        }
        request_.on("response", (response_)=>{
            request_.setTimeout(0);
            const headers = fromRawHeaders(response_.rawHeaders);
            // HTTP fetch step 5
            if (isRedirect(response_.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get("Location");
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL(location, request.url);
                } catch  {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== "manual") {
                        reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case "error":
                        reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
                        finalize();
                        return;
                    case "manual":
                        break;
                    case "follow":
                        {
                            // HTTP-redirect fetch step 2
                            if (locationURL === null) {
                                break;
                            }
                            // HTTP-redirect fetch step 5
                            if (request.counter >= request.follow) {
                                reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
                                finalize();
                                return;
                            }
                            // HTTP-redirect fetch step 6 (counter increment)
                            // Create a new Request object.
                            const requestOptions = {
                                headers: new Headers(request.headers),
                                follow: request.follow,
                                counter: request.counter + 1,
                                agent: request.agent,
                                compress: request.compress,
                                method: request.method,
                                body: clone(request),
                                signal: request.signal,
                                size: request.size,
                                referrer: request.referrer,
                                referrerPolicy: request.referrerPolicy
                            };
                            // when forwarding sensitive headers like "Authorization",
                            // "WWW-Authenticate", and "Cookie" to untrusted targets,
                            // headers will be ignored when following a redirect to a domain
                            // that is not a subdomain match or exact match of the initial domain.
                            // For example, a redirect from "foo.com" to either "foo.com" or "sub.foo.com"
                            // will forward the sensitive headers, but a redirect to "bar.com" will not.
                            // headers will also be ignored when following a redirect to a domain using
                            // a different protocol. For example, a redirect from "https://foo.com" to "http://foo.com"
                            // will not forward the sensitive headers
                            if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                                for (const name of [
                                    "authorization",
                                    "www-authenticate",
                                    "cookie",
                                    "cookie2"
                                ]){
                                    requestOptions.headers.delete(name);
                                }
                            }
                            // HTTP-redirect fetch step 9
                            if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream.Readable) {
                                reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                                finalize();
                                return;
                            }
                            // HTTP-redirect fetch step 11
                            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
                                requestOptions.method = "GET";
                                requestOptions.body = undefined;
                                requestOptions.headers.delete("content-length");
                            }
                            // HTTP-redirect fetch step 14
                            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
                            if (responseReferrerPolicy) {
                                requestOptions.referrerPolicy = responseReferrerPolicy;
                            }
                            // HTTP-redirect fetch step 15
                            resolve(fetch(new Request(locationURL, requestOptions)));
                            finalize();
                            return;
                        }
                    default:
                        return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
                }
            }
            // Prepare response
            if (signal) {
                response_.once("end", ()=>{
                    signal.removeEventListener("abort", abortAndFinalize);
                });
            }
            let body = Stream.pipeline(response_, new Stream.PassThrough(), (error)=>{
                if (error) {
                    reject(error);
                }
            });
            // see https://github.com/nodejs/node/pull/29376
            /* c8 ignore next 3 */ if (process.version < "v12.10") {
                response_.on("aborted", abortAndFinalize);
            }
            const responseOptions = {
                url: request.url,
                status: response_.statusCode,
                statusText: response_.statusMessage,
                headers,
                size: request.size,
                counter: request.counter,
                highWaterMark: request.highWaterMark
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get("Content-Encoding");
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
                response = new Response(body, responseOptions);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: zlib.Z_SYNC_FLUSH,
                finishFlush: zlib.Z_SYNC_FLUSH
            };
            // For gzip
            if (codings === "gzip" || codings === "x-gzip") {
                body = Stream.pipeline(body, zlib.createGunzip(zlibOptions), (error)=>{
                    if (error) {
                        reject(error);
                    }
                });
                response = new Response(body, responseOptions);
                resolve(response);
                return;
            }
            // For deflate
            if (codings === "deflate" || codings === "x-deflate") {
                // Handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = Stream.pipeline(response_, new Stream.PassThrough(), (error)=>{
                    if (error) {
                        reject(error);
                    }
                });
                raw.once("data", (chunk)=>{
                    // See http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = Stream.pipeline(body, zlib.createInflate(), (error)=>{
                            if (error) {
                                reject(error);
                            }
                        });
                    } else {
                        body = Stream.pipeline(body, zlib.createInflateRaw(), (error)=>{
                            if (error) {
                                reject(error);
                            }
                        });
                    }
                    response = new Response(body, responseOptions);
                    resolve(response);
                });
                raw.once("end", ()=>{
                    // Some old IIS servers return zero-length OK deflate responses, so
                    // 'data' is never emitted. See https://github.com/node-fetch/node-fetch/pull/903
                    if (!response) {
                        response = new Response(body, responseOptions);
                        resolve(response);
                    }
                });
                return;
            }
            // For br
            if (codings === "br") {
                body = Stream.pipeline(body, zlib.createBrotliDecompress(), (error)=>{
                    if (error) {
                        reject(error);
                    }
                });
                response = new Response(body, responseOptions);
                resolve(response);
                return;
            }
            // Otherwise, use response as-is
            response = new Response(body, responseOptions);
            resolve(response);
        });
        // eslint-disable-next-line promise/prefer-await-to-then
        writeToStream(request_, request).catch(reject);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    const LAST_CHUNK = node_buffer.Buffer.from("0\r\n\r\n");
    let isChunkedTransfer = false;
    let properLastChunkReceived = false;
    let previousChunk;
    request.on("response", (response)=>{
        const { headers } = response;
        isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
    });
    request.on("socket", (socket)=>{
        const onSocketClose = ()=>{
            if (isChunkedTransfer && !properLastChunkReceived) {
                const error = new Error("Premature close");
                error.code = "ERR_STREAM_PREMATURE_CLOSE";
                errorCallback(error);
            }
        };
        const onData = (buf)=>{
            properLastChunkReceived = node_buffer.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
            // Sometimes final 0-length chunk and end of message code are in separate packets
            if (!properLastChunkReceived && previousChunk) {
                properLastChunkReceived = node_buffer.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && node_buffer.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
            }
            previousChunk = buf;
        };
        socket.prependListener("close", onSocketClose);
        socket.on("data", onData);
        request.on("close", ()=>{
            socket.removeListener("close", onSocketClose);
            socket.removeListener("data", onData);
        });
    });
}
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */ /**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */ /**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */ const privateData = new WeakMap();
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */ const wrappers = new WeakMap();
/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */ function pd(event) {
    const retv = privateData.get(event);
    console.assert(retv != null, "'this' is expected an Event object, but got", event);
    return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */ function setCancelFlag(data) {
    if (data.passiveListener != null) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
        }
        return;
    }
    if (!data.event.cancelable) {
        return;
    }
    data.canceled = true;
    if (typeof data.event.preventDefault === "function") {
        data.event.preventDefault();
    }
}
/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */ /**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */ function Event(eventTarget, event) {
    privateData.set(this, {
        eventTarget,
        event,
        eventPhase: 2,
        currentTarget: eventTarget,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: event.timeStamp || Date.now()
    });
    // https://heycam.github.io/webidl/#Unforgeable
    Object.defineProperty(this, "isTrusted", {
        value: false,
        enumerable: true
    });
    // Define accessors
    const keys = Object.keys(event);
    for(let i = 0; i < keys.length; ++i){
        const key = keys[i];
        if (!(key in this)) {
            Object.defineProperty(this, key, defineRedirectDescriptor(key));
        }
    }
}
// Should be enumerable, but class methods are not enumerable.
Event.prototype = {
    /**
     * The type of this event.
     * @type {string}
     */ get type () {
        return pd(this).event.type;
    },
    /**
     * The target of this event.
     * @type {EventTarget}
     */ get target () {
        return pd(this).eventTarget;
    },
    /**
     * The target of this event.
     * @type {EventTarget}
     */ get currentTarget () {
        return pd(this).currentTarget;
    },
    /**
     * @returns {EventTarget[]} The composed path of this event.
     */ composedPath () {
        const currentTarget = pd(this).currentTarget;
        if (currentTarget == null) {
            return [];
        }
        return [
            currentTarget
        ];
    },
    /**
     * Constant of NONE.
     * @type {number}
     */ get NONE () {
        return 0;
    },
    /**
     * Constant of CAPTURING_PHASE.
     * @type {number}
     */ get CAPTURING_PHASE () {
        return 1;
    },
    /**
     * Constant of AT_TARGET.
     * @type {number}
     */ get AT_TARGET () {
        return 2;
    },
    /**
     * Constant of BUBBLING_PHASE.
     * @type {number}
     */ get BUBBLING_PHASE () {
        return 3;
    },
    /**
     * The target of this event.
     * @type {number}
     */ get eventPhase () {
        return pd(this).eventPhase;
    },
    /**
     * Stop event bubbling.
     * @returns {void}
     */ stopPropagation () {
        const data = pd(this);
        data.stopped = true;
        if (typeof data.event.stopPropagation === "function") {
            data.event.stopPropagation();
        }
    },
    /**
     * Stop event bubbling.
     * @returns {void}
     */ stopImmediatePropagation () {
        const data = pd(this);
        data.stopped = true;
        data.immediateStopped = true;
        if (typeof data.event.stopImmediatePropagation === "function") {
            data.event.stopImmediatePropagation();
        }
    },
    /**
     * The flag to be bubbling.
     * @type {boolean}
     */ get bubbles () {
        return Boolean(pd(this).event.bubbles);
    },
    /**
     * The flag to be cancelable.
     * @type {boolean}
     */ get cancelable () {
        return Boolean(pd(this).event.cancelable);
    },
    /**
     * Cancel this event.
     * @returns {void}
     */ preventDefault () {
        setCancelFlag(pd(this));
    },
    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     */ get defaultPrevented () {
        return pd(this).canceled;
    },
    /**
     * The flag to be composed.
     * @type {boolean}
     */ get composed () {
        return Boolean(pd(this).event.composed);
    },
    /**
     * The unix time of this event.
     * @type {number}
     */ get timeStamp () {
        return pd(this).timeStamp;
    },
    /**
     * The target of this event.
     * @type {EventTarget}
     * @deprecated
     */ get srcElement () {
        return pd(this).eventTarget;
    },
    /**
     * The flag to stop event bubbling.
     * @type {boolean}
     * @deprecated
     */ get cancelBubble () {
        return pd(this).stopped;
    },
    set cancelBubble (value){
        if (!value) {
            return;
        }
        const data = pd(this);
        data.stopped = true;
        if (typeof data.event.cancelBubble === "boolean") {
            data.event.cancelBubble = true;
        }
    },
    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     * @deprecated
     */ get returnValue () {
        return !pd(this).canceled;
    },
    set returnValue (value){
        if (!value) {
            setCancelFlag(pd(this));
        }
    },
    /**
     * Initialize this event object. But do nothing under event dispatching.
     * @param {string} type The event type.
     * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
     * @param {boolean} [cancelable=false] The flag to be possible to cancel.
     * @deprecated
     */ initEvent () {
    // Do nothing.
    }
};
// `constructor` is not enumerable.
Object.defineProperty(Event.prototype, "constructor", {
    value: Event,
    configurable: true,
    writable: true
});
// Ensure `event instanceof window.Event` is `true`.
if (false) {}
/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */ function defineRedirectDescriptor(key) {
    return {
        get () {
            return pd(this).event[key];
        },
        set (value1) {
            pd(this).event[key] = value1;
        },
        configurable: true,
        enumerable: true
    };
}
/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */ function defineCallDescriptor(key) {
    return {
        value () {
            const event = pd(this).event;
            return event[key].apply(event, arguments);
        },
        configurable: true,
        enumerable: true
    };
}
/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */ function defineWrapper(BaseEvent, proto) {
    const keys = Object.keys(proto);
    if (keys.length === 0) {
        return BaseEvent;
    }
    /** CustomEvent */ function CustomEvent(eventTarget, event) {
        BaseEvent.call(this, eventTarget, event);
    }
    CustomEvent.prototype = Object.create(BaseEvent.prototype, {
        constructor: {
            value: CustomEvent,
            configurable: true,
            writable: true
        }
    });
    // Define accessors.
    for(let i = 0; i < keys.length; ++i){
        const key = keys[i];
        if (!(key in BaseEvent.prototype)) {
            const descriptor = Object.getOwnPropertyDescriptor(proto, key);
            const isFunc = typeof descriptor.value === "function";
            Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
        }
    }
    return CustomEvent;
}
/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */ function getWrapper(proto) {
    if (proto == null || proto === Object.prototype) {
        return Event;
    }
    let wrapper = wrappers.get(proto);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
        wrappers.set(proto, wrapper);
    }
    return wrapper;
}
/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */ function wrapEvent(eventTarget, event) {
    const Wrapper = getWrapper(Object.getPrototypeOf(event));
    return new Wrapper(eventTarget, event);
}
/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */ function isStopped(event) {
    return pd(event).immediateStopped;
}
/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */ function setEventPhase(event, eventPhase) {
    pd(event).eventPhase = eventPhase;
}
/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */ function setCurrentTarget(event, currentTarget) {
    pd(event).currentTarget = currentTarget;
}
/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */ function setPassiveListener(event, passiveListener) {
    pd(event).passiveListener = passiveListener;
}
/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */ /**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */ const listenersMap = new WeakMap();
// Listener types
const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;
/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */ function isObject(x) {
    return x !== null && typeof x === "object" //eslint-disable-line no-restricted-syntax
    ;
}
/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */ function getListeners(eventTarget) {
    const listeners = listenersMap.get(eventTarget);
    if (listeners == null) {
        throw new TypeError("'this' is expected an EventTarget object, but got another value.");
    }
    return listeners;
}
/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */ function defineEventAttributeDescriptor(eventName) {
    return {
        get () {
            const listeners = getListeners(this);
            let node = listeners.get(eventName);
            while(node != null){
                if (node.listenerType === ATTRIBUTE) {
                    return node.listener;
                }
                node = node.next;
            }
            return null;
        },
        set (listener) {
            if (typeof listener !== "function" && !isObject(listener)) {
                listener = null; // eslint-disable-line no-param-reassign
            }
            const listeners = getListeners(this);
            // Traverse to the tail while removing old value.
            let prev = null;
            let node = listeners.get(eventName);
            while(node != null){
                if (node.listenerType === ATTRIBUTE) {
                    // Remove old value.
                    if (prev !== null) {
                        prev.next = node.next;
                    } else if (node.next !== null) {
                        listeners.set(eventName, node.next);
                    } else {
                        listeners.delete(eventName);
                    }
                } else {
                    prev = node;
                }
                node = node.next;
            }
            // Add new value.
            if (listener !== null) {
                const newNode = {
                    listener,
                    listenerType: ATTRIBUTE,
                    passive: false,
                    once: false,
                    next: null
                };
                if (prev === null) {
                    listeners.set(eventName, newNode);
                } else {
                    prev.next = newNode;
                }
            }
        },
        configurable: true,
        enumerable: true
    };
}
/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */ function defineEventAttribute(eventTargetPrototype, eventName) {
    Object.defineProperty(eventTargetPrototype, `on${eventName}`, defineEventAttributeDescriptor(eventName));
}
/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */ function defineCustomEventTarget(eventNames) {
    /** CustomEventTarget */ function CustomEventTarget() {
        EventTarget.call(this);
    }
    CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
        constructor: {
            value: CustomEventTarget,
            configurable: true,
            writable: true
        }
    });
    for(let i = 0; i < eventNames.length; ++i){
        defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
    }
    return CustomEventTarget;
}
/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */ function EventTarget() {
    /*eslint-disable consistent-return */ if (this instanceof EventTarget) {
        listenersMap.set(this, new Map());
        return;
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return defineCustomEventTarget(arguments[0]);
    }
    if (arguments.length > 0) {
        const types = new Array(arguments.length);
        for(let i = 0; i < arguments.length; ++i){
            types[i] = arguments[i];
        }
        return defineCustomEventTarget(types);
    }
    throw new TypeError("Cannot call a class as a function");
/*eslint-enable consistent-return */ }
// Should be enumerable, but class methods are not enumerable.
EventTarget.prototype = {
    /**
     * Add a given listener to this event target.
     * @param {string} eventName The event name to add.
     * @param {Function} listener The listener to add.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */ addEventListener (eventName, listener, options) {
        if (listener == null) {
            return;
        }
        if (typeof listener !== "function" && !isObject(listener)) {
            throw new TypeError("'listener' should be a function or an object.");
        }
        const listeners = getListeners(this);
        const optionsIsObj = isObject(options);
        const capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        const newNode = {
            listener,
            listenerType,
            passive: optionsIsObj && Boolean(options.passive),
            once: optionsIsObj && Boolean(options.once),
            next: null
        };
        // Set it as the first node if the first node is null.
        let node = listeners.get(eventName);
        if (node === undefined) {
            listeners.set(eventName, newNode);
            return;
        }
        // Traverse to the tail while checking duplication..
        let prev = null;
        while(node != null){
            if (node.listener === listener && node.listenerType === listenerType) {
                // Should ignore duplication.
                return;
            }
            prev = node;
            node = node.next;
        }
        // Add it.
        prev.next = newNode;
    },
    /**
     * Remove a given listener from this event target.
     * @param {string} eventName The event name to remove.
     * @param {Function} listener The listener to remove.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */ removeEventListener (eventName, listener, options) {
        if (listener == null) {
            return;
        }
        const listeners = getListeners(this);
        const capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        let prev = null;
        let node = listeners.get(eventName);
        while(node != null){
            if (node.listener === listener && node.listenerType === listenerType) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
                return;
            }
            prev = node;
            node = node.next;
        }
    },
    /**
     * Dispatch a given event.
     * @param {Event|{type:string}} event The event to dispatch.
     * @returns {boolean} `false` if canceled.
     */ dispatchEvent (event) {
        if (event == null || typeof event.type !== "string") {
            throw new TypeError('"event.type" should be a string.');
        }
        // If listeners aren't registered, terminate.
        const listeners = getListeners(this);
        const eventName = event.type;
        let node = listeners.get(eventName);
        if (node == null) {
            return true;
        }
        // Since we cannot rewrite several properties, so wrap object.
        const wrappedEvent = wrapEvent(this, event);
        // This doesn't process capturing phase and bubbling phase.
        // This isn't participating in a tree.
        let prev = null;
        while(node != null){
            // Remove this listener if it's once
            if (node.once) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
            } else {
                prev = node;
            }
            // Call this listener
            setPassiveListener(wrappedEvent, node.passive ? node.listener : null);
            if (typeof node.listener === "function") {
                try {
                    node.listener.call(this, wrappedEvent);
                } catch (err) {
                    if (typeof console !== "undefined" && typeof console.error === "function") {
                        console.error(err);
                    }
                }
            } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
                node.listener.handleEvent(wrappedEvent);
            }
            // Break if `event.stopImmediatePropagation` was called.
            if (isStopped(wrappedEvent)) {
                break;
            }
            node = node.next;
        }
        setPassiveListener(wrappedEvent, null);
        setEventPhase(wrappedEvent, 0);
        setCurrentTarget(wrappedEvent, null);
        return !wrappedEvent.defaultPrevented;
    }
};
// `constructor` is not enumerable.
Object.defineProperty(EventTarget.prototype, "constructor", {
    value: EventTarget,
    configurable: true,
    writable: true
});
// Ensure `eventTarget instanceof window.EventTarget` is `true`.
if (false) {}
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */ /**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */ class AbortSignal extends EventTarget {
    /**
     * AbortSignal cannot be constructed directly.
     */ constructor(){
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */ get aborted() {
        const aborted = abortedFlags.get(this);
        if (typeof aborted !== "boolean") {
            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        }
        return aborted;
    }
}
defineEventAttribute(AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */ function createAbortSignal() {
    const signal = Object.create(AbortSignal.prototype);
    EventTarget.call(signal);
    abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */ function abortSignal(signal) {
    if (abortedFlags.get(signal) !== false) {
        return;
    }
    abortedFlags.set(signal, true);
    signal.dispatchEvent({
        type: "abort"
    });
}
/**
 * Aborted flag for each instances.
 */ const abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties(AbortSignal.prototype, {
    aborted: {
        enumerable: true
    }
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal"
    });
}
/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */ class AbortController$1 {
    /**
     * Initialize this controller.
     */ constructor(){
        signals.set(this, createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */ get signal() {
        return getSignal(this);
    }
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */ abort() {
        abortSignal(getSignal(this));
    }
}
/**
 * Associated signals.
 */ const signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */ function getSignal(controller) {
    const signal = signals.get(controller);
    if (signal == null) {
        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
    }
    return signal;
}
// Properties should be enumerable.
Object.defineProperties(AbortController$1.prototype, {
    signal: {
        enumerable: true
    },
    abort: {
        enumerable: true
    }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortController$1.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController"
    });
}
exports.AbortController = AbortController$1;
exports.AbortError = AbortError;
exports.FetchError = FetchError;
exports.File = File$1;
exports.FormData = FormData;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports._Blob = _Blob$1;
exports.fetch = fetch;
exports.isRedirect = isRedirect;
exports.nodeDomexception = nodeDomexception;


/***/ }),

/***/ 45430:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const nodeFetch = __webpack_require__(28378);
function fetch(input, options) {
    return nodeFetch.fetch(input, options);
}
for(const key in nodeFetch){
    fetch[key] = nodeFetch[key];
}
module.exports = fetch;


/***/ }),

/***/ 87422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
/** @deprecated */ function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
/** @deprecated */ function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
});


/***/ })

};
;