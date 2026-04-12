/**
 * Captures two viewport screenshots from https://velvetcaratco.com/
 * Run: node scripts/capture-velvetcarat.cjs
 */
const path = require("path")
const { chromium } = require("playwright")

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  })

  const out = (f) => path.join(__dirname, "..", "public", "portfolio", f)

  await page.goto("https://velvetcaratco.com/", {
    waitUntil: "networkidle",
    timeout: 120000,
  })
  await page.waitForTimeout(4000)
  await page.screenshot({ path: out("velvetcarat-1.png"), type: "png" })

  await page.evaluate(() =>
    window.scrollTo({ top: 2400, left: 0, behavior: "instant" })
  )
  await page.waitForTimeout(2500)
  await page.screenshot({ path: out("velvetcarat-2.png"), type: "png" })

  await browser.close()
  console.log("Wrote public/portfolio/velvetcarat-1.png and velvetcarat-2.png")
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
