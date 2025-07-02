---
title: Reading audio contents
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Reading audio contents

Audio contents can appear in almost all formats. When they are included in textual or visual first ebooks, they come with a set of buttons as play, pause, stop, and eventually rewind and forward or other options like speed. Those buttons are not part of the Thorium interface, they can be provided by the specific rendering engine (Chromium for web contents in EPUB and Daisy ; pdf.js for PDF). They can also be styled by the content creator. Therefore, this user guide can hardly give detailed information on their design and functionalities.

Audio only contents, synchronied audios and Text to speech generated audio, in contrast, are directly piloted by the Thorium interface.

## Audio only {#audioonly}

Thorium can read audiobooks in the standardises W3C audiobook and in Daisy audio only formats. When such a book is opened, the book will start to play. The reading window will display the cover, a set of functions buttons and a progression bar. 

The interface is composed of:
* A Shift button to Play or Pause;
* A Previous and a Next buttons passing to the previous or next authored section; 
* A rewind and a forward buttons to move 30 seconds before or after
* A dropdown menu to change the reading speed;
* A progression bar showing the time elapsed and the total time of the current section of the book.

It is possible to bookmark a reading location, and to add a note to the bookmark. Annotations are not possible.

Navigation in audiobooks are usually only authored as table of content.

It is actually not possible to search in audio only contents.


## Readaloud, Text to speech (TTS) {#readaloud}

Text-to-speech is launched using the speaker button in the middle of the
toolbar, or by using the dedicated keyboard shortcut. 
There is a voice to text synchronisation showed by 
highlight of the current sentence and underline of the word.

Possible actions are 

- Play and pause;
- Move playback position to previous and next;
- Control speed with a range from x0.5 to x2;
- Simplify view of the publication ;
- choose a preferred voice.

<div class="framed">

Thorium uses the voices from the computer's operating system, in
combination with the language information provided by the book. 
If you experience problems please check the 
[online related FAQ entry](https://thorium.edrlab.org/en/th3/400_ressources/430_faq/index.html).

</div>

### Text-to-speech options {#readaloudoptions}

In addition to the functionalities, a specific options panel provides options for a "clear view" and the ability to skip secondary content (<span class="ui_info">skippability</span>), which may include footnotes or other content marked as complementary (`aside`) according to the semantics indicated when the digital book was produced. <span class="ui_info">Split TTS</span> will divide content by sentence for more precise highlighting.

</section>
<section class="filet">
