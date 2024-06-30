export interface RouteSettings {
	api: string;
	cdn: string;
	gateway: string;
	wellknown: string;
}

export const DefaultRouteSettings: RouteSettings = {
	api: "https://server.elysium.chat/api",
	cdn: "https://server.elysium.chat",
	gateway: "wss://server.elysium.chat",
	wellknown: "https://server.elysium.chat/",
};

// TODO: we should probably make our own
export const USER_JOIN_MESSAGES = [
	"{author} joined the party.",
	"{author} is here.",
	"Welcome, {author}. We hope you brought pizza.",
	"A wild {author} appeared.",
	"{author} just landed.",
	"{author} just slid into the server.",
	"{author} just showed up!",
	"Welcome {author}. Say hi!",
	"{author} hopped into the server.",
	"Everyone welcome {author}!",
	"Glad you're here, {author}.",
	"Good to see you, {author}.",
	"Yay you made it, {author}!",
];

// TODO: this should come from the server
export const MAX_UPLOAD_SIZE = 1024 * 1024 * 1024; // 1GB, taken from spacebar server default
export const EMBEDDABLE_VIDEO_MIMES = ["webm", "ogg", "mp4"]; // list of the mimetypes that can be used in a video element
export const EMBEDDABLE_AUDIO_MIMES = ["mp3", "wav", "ogg", "x-wav", "mpeg", "mp4"]; // list of the mimetypes that can be used in an audio element
export const EMBEDDABLE_IMAGE_MIMES = ["png", "jpg", "jpeg", "gif", "webp"]; // list of mimetypes that can be used in an image element
export const ARCHIVE_MIMES = ["zip", "tar", "tar.gz", "tar.xz", "tar.bz2", "rar", "7z"]; // list of mimetypes to associate with archives

export const MAX_ATTACHMENTS = 15; // max number of attachments per message
