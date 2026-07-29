import { isInsideFigma } from './isInsideFigma'

export function getRoom() {
	// `typeof figma` covers the main-thread sandbox; isInsideFigma() covers the UI iframe.
	const inFigmaMainSandbox = typeof figma !== "undefined";

	return isInsideFigma() || inFigmaMainSandbox ? "figma" : "browser";
}
