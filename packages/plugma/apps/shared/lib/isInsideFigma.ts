/**
 * Marker set by the figma-bridge on the dev-server UI iframe (via `iframe.name`)
 * before it loads the UI. `window.name` persists across navigations of a browsing
 * context — including plugma's data-uri/blob/srcdoc redirects and cross-origin
 * loads — so the UI can read it synchronously on startup.
 */
export const FIGMA_BRIDGE_FRAME_NAME = 'plugma-figma-bridge'

/**
 * Whether the plugin UI is running inside Figma (as the nested iframe loaded by
 * the figma-bridge) as opposed to a standalone browser preview.
 *
 * This is a positive identity check rather than an "am I in any iframe?" heuristic
 * (`window.self !== window.top`), which misfires whenever the browser preview is
 * itself embedded in a frame (Storybook, devtools panels, other tooling).
 */
export function isInsideFigma(): boolean {
	return window.name === FIGMA_BRIDGE_FRAME_NAME
}
