---
title: "Technical Specification for Thorium Reader Desktop"
description: ""
draft: false
weight: 380
toc: false
---

Last updated 2025, October 6
Version: 3

## App Overview

**Purpose:** Thorium is a digital book reader, it is also a library where you can store your books and access to online catalogs.

**Target Audience:** General public with a particular attention for heavy readers, library-goers, and students.

**Supported Operating Systems:** 
  * macOS (Big Sur and up)
  * Windows (Windows 10 and up)
  * Linux: 
    * Ubuntu 18.04 and newer
    * Fedora 32 and newer
    * Debian 10 and newer

**Hardware & Software Requirements:** 
  * Both ARM 64 and AMD 64 architectures are supported via different installers.
  * No additional software is needed.

**Major and minor versions:** Thorium releases minor versions each 3 to 4 months, those are numbered with a dot and numbers after the main version number (e.g. 3.1.1). Those versions usually include bug fix, minor improvements and enhanced features but no major break. This technical specification page address the main version and all it's minor versions. In case of significative difference with a minor version, this will be informed in the corresponding section.


## Download, Installation, & Registration

### Download
Thorium Reader Desktop is available on the Windows store and can also be installed directly from the installer files available from the [Thorium website](https://thorium.edrlab.org). A standalone (with no need to be installed) AppImage is also available for Linux, once this one downloaded, it is necessary to change permissions to make it executable as a program, then double-click on the Icon to launch the app. 

### Installation
  * On Windows: 
    * Select the download link corresponding to your Windows architecture (ARM 64 or AMD 64), this information is available from your system information panel.
    * Download the Thorium.Setup.3.3.x.exe file to your Windows device.
    * Open the Explorer and navigate to Downloads.
    * Double-click the downloaded *.exe file.Double-click the downloaded installer file and complete the installation process. Managed devices may require admin authorization to install. 
  * On MacOS: 
    * Select the download link corresponding to your Mac architecture (Recent M1, M2, M3, M4 or Intel for Mac produced before fourth quarter of 2021), this information is available from your system information panel.
    * Download the Thorium.Setup.3.3.x.dmg file to your macOS device.
    * Open the Finder and navigate to Downloads.
    * Double-click the downloaded *.dmg file.
    * Now drag and drop the application icon to the Applications folder to install the application.
    * Close the window and press the eject button in Finder to dismount the image.
  * On Linux: 
    * Select the download link corresponding to your computer architecture (ARM 64 or AMD 64), this information is available from your system information panel.
    * Download the Thorium.Setup.3.3.x.deb file to your Windows device.
    * Open the Explorer and navigate to Downloads.
    * Double-click the downloaded *.exe file.Double-click the downloaded installer file and complete the installation process. Managed devices may require admin authorization to install. 

### Accounts & passphrases
  * No account nor registration are necessary to use Thorium Reader Desktop. 
  * An account can be necessary to access catalogs loaded into Thorium. In that case, the catalog provider is responsible for any related question, support or reclamation.
  * A passphrase can be necessary to read protected ebooks. In that case, the file provider is responsible for any related question, support or reclamation.

## Supported publication formats
 * **EPUB** (Electronic PUBlication), 2 and 3 including Reflowable, Fixed-Layout and MediaOverlay variants. 
 * **Web Publication** both in their W3C and Readium flavors.
 * **DAISY** 3 and 2.02, both in their text only, audio only, and syncronised text and audio.
 * **PDF** without support for forms nor annotations.
 * **Audiobooks** standardized as per W3C packaged (LPF) audiobook format.
 * **Divina**, an experimental format for comics, manga, webtoons and other styles of digital works based on sequences of images.


## App features

* **Load & Read ebooks:** Thorium Reader Desktop allows you to load an ebook from your computer and read it in a dedicated windows.
* **Organise ebooks:** ebooks can be sorted, tagged, exported, deleted and lending can be managed from the Library window.
* **Bookmark:** Users can add, comment, tag, modify, sort, access, export and import bookmarks.
* **Annotations:**  Users can add, personalize (with color and stroke), comment, tag, modify, sort, access, export and import annotations.
* **Filter:** Users can filter ebooks with a range of options, including free text (like search).
* **Search:** Users can search inside an ebook, list and navigate between search results.
* **Add & Browse catalogs:** Users can add catalogs in the OPDS format and browse them depending on the options provided by the catalog provider.
* **Lend & acquire ebooks:** Users can download ebooks from catalogs for a timeless access or under a time period depending on the catalog provider terms of lending or acquisition.
* **Personalization:** Users can personalize the reading experience according to the formats capacities.
* **Accessibility:** Users can use assistive technology to access and use Thorium Reader Desktop.
* **User guide:** Users can download, read online or load as catalog a complete user guide as ebook. 
* **Offline support:** Thorium Reader Desktop can be used offline, however, online catalogs can not be accessed offline.

## Security Information

**Security Reports:** security vulnerabilities must be reported privately to maintainers through the dedicated [report a vulnerability page](https://github.com/edrlab/thorium-reader/security/advisories/new). A GitHub account is necessary. Alternatively, vulnerability reports can be sent by email at: contact@edrlab.org.

**Data protection:** Thorium Reader Desktop collects no personal data

**Permissions:** : Thorium Reader Desktop requires device access to the following:
  * File system access - Required for downloading digital content (e.g. books) and storing annotations.
  * Network access - Necessary for connecting third party catalogs and downloading digital content from those.

**Network Communications:** Thorium Reader Desktop works entirely offline by default. If network access is available, it uses only HTTP and HTTPS protocols, typically over ports 80 and 443, for these specific functions:
  * `HTTP POST https://telemetry.edrlab.org/` — Sends anonymized telemetry data (no personal information).
  * `HTTP GET https://raw.githubusercontent.com/edrlab/thorium-reader/master/latest.json` — Checks if a new version of Thorium Reader is available.

When users add third-party catalogs (such as OPDS feeds), Thorium Reader may connect using HTTP or HTTPS with GET, POST, or PUT requests. These catalogs may use ports other than 80 and 443, depending on their configuration.

Thorium Reader Desktop does not use SSH, direct TCP connections, or WebSockets for any communication.

## Troubleshooting
* **User guide:** is available in English, French and Spanish, as an ebook to Download or read online. The [complete user guide catalog](opds://edrlab.github.io/publications/feeds/thorium32_documentation.json) can be added to Thorium Reader. as EPUB, different translations are available through the Thorium documentation catalog. You can Add Documentation catalog to Thorium (OPDS link) or browse English documentation inline within the Readium web reader.
* **Support:** the webpage contains [support](https://thorium.edrlab.org/en/th3/) information in English, French and Spanish. That includes [Frequently asked questions](https://thorium.edrlab.org/en/th3/400_resources/430_faq/)
* **Known/Common issues:** are available publicly from our [Issue tracker](https://github.com/edrlab/thorium-reader-doc/issues/new)
* **Error Reports:** errors and problems should preferably be reported via our [support tracking tool](https://github.com/edrlab/thorium-reader-doc/issues/new) (necessitate a free GitHub account) or [contact form](https://www.edrlab.org/contact/). To reproduce and find a solution, we need to know Operating system and Thorium version (indicated at the bottom of the library under the title About Thorium).

## Version
**Current Version:** 3.3

**Version File Sizes:**
  * Windows AMD .exe: 102 MB
  * Windows ARM .exe: 104 MB
  * MacOS AMD .dmg: 129 MB
  * MacOS ARM .dmg: 129 MB
  * Linux AMD .deb: 89.6 MB
  * Linux ARM .deb: 84.8 MB
  * Linux AMD .app: 135 MB
  * Linux ARM .app: 135 MB

**Release Notes:** Full release note are available from the [code repository release page](https://github.com/edrlab/thorium-reader/releases/tag/v3.3)

## Legal Information

EDRLab is the owner of the Application, including all copyrights, trademarks, trade names, logos, patents, trade secrets and other intellectual property rights relating thereto. EDRLab may license third parties for the use or operation of the Application.

Complete and up to date [Terms of use](https://thorium.edrlab.org/en/th3/900_about_thorium/901_thorium-terms-of-use/) are available from the Thorium Reader website. A short list is provided here for quick reference:

* We reserve the right to withdraw or modify the Application and any service we provide on it. 
* We may change the Terms of Use from time to time. 
* the user does not have and will acquire no rights in the Application, other than the right to use it under the Terms of Use. 
* You may use the Application only for lawful purposes.
* In the event that you have authorized a minor to use the Application and its Content, you acknowledge that you are responsible for. 
* The Application may import Content that is inappropriate for a minor.
* Contents imported in the Application can be protected by copyright or other intellectual property rights. You are responsible for ensuring that your use of the Contents, as well as of all the elements that compose them, does not violate any intellectual property right or any other right.
* By using the Application, you accept the terms of the privacy policy relative to the Application. 
* Links to Other Sites or Resources in the Application links to third-party services or resources not operated by EDRLab, including Library data feeds. EDRLab has no control over such third-party sites or resources and is not responsible for their availability, security, Content or resources. The inclusion of such links does not imply an endorsement or a recommendation by EDRLab of the third-party service or resource in question. EDRLab is not responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any Content, information, products, goods or services available on or through any third party service.

**Applicable Laws and Jurisdiction**
These Terms of Use and any dispute arising out of or relating to these Terms of Use shall be governed by the laws in force in France, without reference to its conflict of law rules. Any action, suit or proceeding arising out of these Terms of Use (whether for breach of contract, wrongful conduct or otherwise) shall be brought exclusively in France, as the case may be, located in Paris, and you agree to submit to the jurisdiction of such courts for any action, suit or proceeding arising out of these Terms of Use.

**Contact Us**
All questions, comments or requests regarding these terms of use should be sent to EDRLab at: contact@edrlab.org.
