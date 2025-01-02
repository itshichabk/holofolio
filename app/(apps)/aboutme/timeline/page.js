/* eslint react/no-unescaped-entities: 0 */
"use client";

import TimelineSection from "@/src/components/aboutme/TimelineSection";
import Hyperlink from "@/src/components/text/Hyperlink";
import TimelineYear from "@/src/components/TimelineYear";
import { useState } from "react";

export default function Timeline() {
  const [xda, setXda] = useState(false);

  return (
    <div className="my-10 mx-4 text-justify">
      <h1 className="mb-6 text-holo font-bold text-3xl">My tech journey</h1>

      <h2 className="mb-2 text-holo font-bold text-2xl text-start">2013-2015 — The beginnings</h2>
      <p className="mb-2">
        My first adventures in tech started at 9 with jailbreaking an iPad, an iPhone and a Wii.
        Alone, I was following YouTube tutorials on how to do each, and I was surprised to see how easy and straightforward it was,
        and most importantly how things just worked <span className="italic text-sm">(innocent days...)</span>.
      </p>
      <p>
        Later, I got my first smartphone, a Samsung Galaxy Wonder from 2011, as a gift. I enjoyed using it until I started noticing it was running slower than usual.
        So I did what any normal person would do and looked up:
      </p>
      <div className="font-bold text-lg text-center my-3 w-full italic">"how to jailbreak samsung"</div>
      <p className="mb-2">
        Little did I know that one Google search would lead me to a rabbit hole with no exit.
      </p>
      <p className="mb-2">
        By following more tutorials, I learned about "custom ROMs", and I was able to install a custom operating system on my phone (CyanogenMod 10).
        It felt so much faster and it even ran a newer version of Android that was never officially released by Samsung. That was my first proud tech achievement.
      </p>

      <h2 className="mt-6 mb-2 text-holo font-bold text-2xl text-start leading-6">2015-2021 — <span className="whitespace-nowrap text-xl lg:text-2xl">Computer adventures and misadventures</span></h2>
      <p className="mb-2">
        Soon after, I started fiddling with computers too by installing other versions of Windows, such as 8.1 and even the technical preview of Windows 10 in early 2015 before its final release.
        I later installed Ubuntu too, mainly to <Hyperlink onClick={() => setXda(true)} href="https://xdaforums.com/t/rom-sm-g350e-cyanogenmod-11-news.3226820/page-2#post-64789723">try building an Android ROM on it with no success...</Hyperlink>
      </p>

      { xda &&
      <p className="my-4 p-2 border-2 border-orange-500">
        It seems like you've clicked on the XDA link above!<br/>
        I've spent a LOT of my time on that website since I was 11, it's a forum that is notably famous for finding custom operating systems and kernels for Android devices.
        Back then, I enjoyed calling myself a "developer" despite not knowing a single programming language and doing nothing more than pressing buttons and editing files until my phone could boot...
      </p>}

      <p className="mb-2">
        At the age of 12, I also got to discover virtual machines and had fun installing old versions of Windows on VirtualBox.
      </p>
      <p className="mb-2">
        The following year, I got my first personal laptop (an Acer E5-575), and one of the first things I did was turning it into a Hackintosh!
        There was no guide for my specific model, so I had to spend hours troubleshooting until <span className="italic">mostly</span> everything worked.
        I was so happy of the result that <Hyperlink href="https://www.tonymacx86.com/threads/guide-acer-aspire-e5-575-52g6.227038/">I decided to share a guide for my specific laptop</Hyperlink> so that others wouldn't have to endure the same pain anymore.
      </p>
      <p className="mb-2">
        A few months later, I decided <span className="italic">(don't ask why)</span> to install incompatible versions of Windows on that same computer.
        7 and 8.1 were easy to install, XP and 2000 however...<br/>
        After being hit by countless BSODs, that were thankfully easy to troubleshoot as I was somewhat not the only person who would do such an experiment,
        I actually managed to run both versions! Of course, the age gap being way too big (the laptop came out in 2017), drivers simply didn't exist for some of the most important devices, such as the USB controller
        and the integrated graphics. Even essential functionalities like full shutdowns and CPU multi-core support didn't work!
      </p>
      <p className="mb-2">
        <Hyperlink href="https://msfn.org/board/topic/177386-non-compliant-acpi-error-on-windows-xp-x64-setup/">
          To this day, I still can't install install the x64 version of Windows XP on it...
        </Hyperlink>
      </p>

      <h2 className="mt-6 mb-2 text-holo font-bold text-2xl text-start leading-6">2021-now — <span className="font-mono whitespace-nowrap text-xl lg:text-2xl">print("I'm a programmer!");</span></h2>
      <p className="mb-2">
        Fast-forward to 2021, I finally started learning programming! Thanks to a free coupon for a paid Python online course I came across on Reddit, I was able to learn
        fundamental concepts such as variables, loops and if-statements. Later, I got to learn C at a private computer science school, but they only taught the same basics.
        So I took a step further and searched for other courses, and learned more advanced concepts like pointers, which took me a while to properly understand.
        Feeling motivated by my newfound pastime, I created my GitHub profile and published <Hyperlink href="https://github.com/itshichabk/hOS">
        my first personal programming project</Hyperlink>, which is an OS-like program with a barebones login system and a few applications such as a calculator.
        I also took the opportunity to learn basic Git concepts and commands. 
      </p>
      <p className="mb-2">
        In 2022, I took a two-month-long internship at a software consulting enterprise called <Hyperlink href="https://www.i-eteria.com/">I-Eteria</Hyperlink>, where I learned even more languages for Web development, which
        I had never done before. HTML, CSS, JavaScript and MySQL. I had to learn these mostly by myself online. Given the fact that I already knew Python, 
        I was also asked to put those newly acquired skills to the test and create a fictional <Hyperlink href="https://github.com/itshichabk/stage_webapp">Web application</Hyperlink> for managing products, orders and invoices, using Python as the backend (Flask). 
      </p>
      <p className="mb-2">
        Later that year, I started studying abroad in computer science at Cégep de Sherbrooke in Quebec, Canada. Having already learned the basics of programming and Web development, the first semesters were relatively easy.
        However, not only did I acquire new technical skills in object-oriented programming, mobile development (Android), networking and IoT, I also learned how to manage a team project using methods 
        found in business like Scrum. Those soft skills were especially put in practice on a semester-long project where my team had to create a full production-ready website for a real client.
        Unlike most of my projects when I worked alone, I was able to fully take advantage of most Git features like branches, pull requests and webhooks (for autotomatic deployments).  
      </p>
    </div>
  )
}
