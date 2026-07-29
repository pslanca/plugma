import { postMessageVia } from '../../shared/lib/postMessageVia'
import { isInsideFigma } from '../../shared/lib/isInsideFigma'

/**
 * When the UI is being previewed in the browser, postMessage calls need to be forwarded to the websocket server
 * because the window in this context isn't inside the Figma plugin iframe. Posting a message to window would send
 * it to itself in this case, so we need to relay it to Figma instead.
 */

export function interceptPostMessage() {
	// Override postMessage when running as a browser preview (not inside Figma)
	if (!isInsideFigma()) {
		// Store the original postMessage function
		const originalPostMessage = window.postMessage

		window.postMessage = function (
			message: any,
			targetOriginOrOptions?: string | WindowPostMessageOptions,
			transfer?: Transferable[],
		) {
			postMessageVia(['ws'], message)

			return null
			// // Call the original postMessage to maintain functionality
			// originalPostMessage.call(window, message, targetOrigin, transfer)
		}
	}
}
