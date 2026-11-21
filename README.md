# Cell culture log

A web page for logging cell culture work: thawing, passaging, media changes and freezing. It also shows the lab's protocols for each cell line.

**Open it here: https://cyychong.github.io/cell-log/**

## Opening it

1. Open the link above in any browser, on a phone or a computer.
2. You don't need an account, a sign-in or anything to install.

### Optional: install it as an app

- **iPhone (Safari):** tap the Share button, then **Add to Home Screen**.
- **Android (Chrome):** tap the **⋮** menu, then **Add to Home screen** or **Install app**.
- **Mac (Safari):** **File → Add to Dock**.
- **Mac or Windows (Chrome):** the install icon at the right of the address bar, or **⋮ → Cast, save and share → Install page as app**.

The icon opens it like an app. It keeps working without internet.

**The installed app and the browser keep separate logs.** On an iPhone or a Mac, an app added from Safari doesn't share its log with Safari tabs. Entries made in one don't show in the other. Pick one way of opening it and stick to it. To move your log from one to the other, use **Export backup** in one and **Restore a backup** in the other.

**Getting updates:** the app updates itself when it opens with internet. If an app window has been open for a while, reload it (**⌘R** on a Mac, or close and reopen the app on a phone).

## Protocols

The **Protocols** tab shows the lab's protocols, grouped by cell line. Each cell line starts folded: tap its name to see its protocols, and tap again to fold it. Each protocol links to its original file. When the lab adds or changes a protocol, it shows up the next time you open the page with internet. You don't need to download anything again.

- **Cells to seed:** each protocol with a seeding density shows the cells to seed for every flask, dish and plate. Growth areas differ by brand: tap an area (in cm²) to change it for that protocol only, and its numbers are worked out again. Other protocols keep their own areas. **reset** puts the usual area back.
- **What I tested:** under the cells to seed, press **+ Note what I tested** to record a seeding you tried: the flask or dish, the number of cells, the date, and notes (for example "use this to let them grow for 5 days"). It shows the cells/cm² (using the area at the time you saved it) and whether that's below, in or above the protocol's range. These notes are also in the protocol's PDF.

## Your own protocol versions and notes

- **Editing a protocol** (Edit, change it, Save) makes a new, dated version, for example "v2 (2026-11-19)". The old one is kept under **Earlier versions**, and **Use this version** brings any of them back.
- **Your version stays yours.** Edits are saved only in your app, so each person can keep the way they actually do it. If the lab later updates that protocol on the site, your version stays in use; the lab's new version appears under Earlier versions with a note, and **Use this version** switches to it.
- **Notes:** each protocol has a dated Notes list. Press **+ Add a note** (today's date is filled in; change it if needed). The app also adds dated notes by itself when you make a new version or change a growth area.
- Notes, versions, areas and tested seedings are all in **Export backup**, and notes are in the protocol's PDF.

## Flask areas in each entry

When you add flasks to an entry, each flask type gets a box with its growth area (cm²), filled in from the protocol you picked. If your flasks are a different brand, type the right area. The entry keeps that area, so the cells to seed are worked out from it, and the log and Excel file show it, for example "2 × T75 (72 cm²)".

## Cells to seed in each entry

Under **Counts and seeding**, each flask you added gets its own row, so two T25s are two rows. Each row shows the flask's growth area and the protocol's range for it. Type the cells for that flask (for plates, cells per well). The row then shows the volume to add in mL and µL, and a tag if the number is below or above the protocol's range. The **Total** row adds up the cells and the volume.

## Bottle photos for media batches

On the **Media** tab, press **Add bottle photo** to take or choose photos of the bottle. They are saved with that batch and named after its batch ID: `M-1104.jpg`, then `M-1104_2.jpg` and so on. **Remove** takes a photo off before you save. The photos are in **Export backup** and in the log zip (folder `media_photos`).

## Notes on each entry

Every entry has a **Notes** box near the top. Use it while you work for anything that went wrong or that you tried differently. Tick **Flag this entry** to make it stand out: flagged entries are marked ⚠ in the log, the calendar and the Excel file.

## Where your log is saved

Your log is saved **only in this browser, on this device**. It is not saved online, and nobody else can see it.

- Use the same browser on the same device each time.
- Don't use a private or incognito window. Nothing is kept after you close it.

### Things that delete your log

- **Clearing the browser's data**, for example "Clear browsing data" in Chrome or "Clear History and Website Data" in Safari, when "cookies and site data" is included.
- **Deleting the home-screen icon** on iPhone.

## Backup, sharing and the buttons at the bottom of the page

Scroll to the very bottom of the page. You'll find four buttons there.

### Export backup

Saves a copy of your whole log as one file, for example `cell-culture-backup-2026-11-18_1430.json`.

- It includes all your entries, cell lines, defaults, experiments, media and attached photos, and all your protocols with their versions, notes, growth areas and tested seedings.
- Your log in the browser isn't changed.
- The file is a snapshot of that moment. Export again to include newer entries.
- **What to include:** the whole log, one cell line (all its experiments), or one experiment. A cell line or experiment backup is handy for letting someone look at just that with **Open a shared log**. Don't use it to restore your own log: restoring replaces everything with only what's in the file.
- It asks where the backup should go:
  - **Save to this device:** the file goes to your Downloads (or Files on a phone).
  - **Share…:** opens your device's share menu, so you can attach it to an email, put it in Google Drive, AirDrop it or send it in Messages. On an iPhone, pick **Save to Files**, then **Google Drive**, to put it in Drive. Some laptop browsers can't share files; then only **Save to this device** shows, and you attach the saved file to an email or drag it into Google Drive yourself.
- Keep a copy somewhere other than the device itself, so it survives losing the device.
- Anyone who has the file can open your log.

### Backup reminder

When a backup is due, a bar at the top of the page says when you last backed up, with buttons to back up now. Choose how often next to **Remind me to back up** at the bottom of the page: every day, every 3 days, every week (the usual setting), every 2 weeks, every month, or never. **Later** hides the bar until you next open the page.

### Restore a backup

Puts your log back from a backup file.

- Use it after the browser's data was cleared, or to move your log to a new phone or computer.
- It **replaces** everything in this browser with what's in the file. It asks you first.

### Open a share file

Use this when the lab sends you a **zip file for a cell line or experiment**.

- It adds that cell line, its defaults and its entries to your log, on its own tab.
- Add your entries on that tab as usual.
- If the lab sends a newer zip later, open it the same way. Your unsent entries are kept.

### Open a shared log (view only)

Use this when someone sends you their **backup file** (the `.json` from Export backup).

- You can look through their whole log, but you can't change it.
- Nothing is saved, and your own log isn't touched.
- Press **Back to my log** at the top to return to your log.

## How to share

### Send your entries to the lab

1. Press **Download log (zip)** at the top of the page.
2. Send the zip file by email or chat.

If you opened a share file from the lab, this zip also carries your new entries for that cell line. The lab can review them and add them to the main log.

### Let someone look at your whole log

1. Press **Export backup** at the bottom of the page.
2. Send the `.json` file.
3. They press **Open a shared log (view only)** and choose the file.

### Share a cell line with someone

1. Open the cell line's tab and pick the experiment.
2. Press **Download (zip)** at the top of the page.
3. Send the zip. They press **Open a share file** and choose it; the cell line opens on its own tab in their log.

### Get a cell line or experiment from the lab

1. The lab sends you a zip file.
2. Press **Open a share file** at the bottom of the page and choose the zip.

## Which file do I need?

| I want to… | Use | The other person (or device) uses |
|---|---|---|
| Keep a safe copy of my log | **Export backup** (bottom of the page), whole log | Keep the file somewhere safe (Google Drive, email) |
| Move my log to a new phone or computer | **Export backup**, whole log | **Restore a backup** on the new device (replaces its log) |
| Let someone look at my log, a cell line or one experiment | **Export backup**, pick what to include | **Open a shared log (view only)** |
| Work on a cell line together | **Download (zip)** at the top, on that experiment's tab | **Open a share file**, add entries, send their own zip back |
| Get spreadsheets of my entries | **Download (zip)**: Excel files inside | Open the .xlsx files |

The app has a **Guide** tab with a short version of this page.
