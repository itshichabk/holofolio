/* eslint react/no-unescaped-entities: 0 */
"use client";

import TimelineSection from "@/components/aboutme/TimelineSection";
import TimelineYear from "@/components/TimelineYear";

export default function Timeline() {
  return (
    <div className="overflow-y-scroll">
      <TimelineYear year="2013" description="The year when it all began">
        <TimelineSection img="evasi0n.png" title="Homebrews and jailbreaks">
          <p className="my-2">
            My first adventures in tech started at nine with jailbreaking an iPad and an iPhone, and installing the Homebrew channel on a Wii using an SD card.
            Alone, I was following YouTube tutorials on how to do each, and I was surprised to see how easy and straightforward it was,
            and most importantly how things just worked <span className="italic text-sm">(innocent days...)</span>.
          </p>
          <p>
            Later, I got my first smartphone as a gift.
            It was a Samsung Galaxy Wonder, a phone from 2011. I enjoyed using it until I started noticing it was running slower than usual.
            So I did what any normal person would do and looked up:
          </p>
          <div className="font-bold text-lg text-center my-3 w-full italic">"how to jailbreak samsung"</div>
          <p>
            Little did I know that one Google search would lead me to a rabbit hole with no exit.
          </p>
        </TimelineSection>
      </TimelineYear>

      <TimelineYear year="2014" description="My first OS adventures... and misadventures">
        <TimelineSection img="cm.gif" title="Custom ROMs or why I wiped my phone's data every week">
          <p className="my-2">
            In case you haven't noticed, this website's UI is mainly inspired by the old <span className="text-holo font-bold">Holo</span> theme found in earlier versions of Android,
            and in my first successful custom OS install on my phone, all thanks to a tutorial on YouTube!
          </p>
          <p className="my-2">
            That OS was named CyanogenMod (now LineageOS). It used to be extremely popular in the early 2010s, notably on a forum called <a href="https://xdaforums.com" className="text-holo underline">XDA Developers</a>, where people build those custom ROMs
            for many different devices, and my Galaxy W was no exception. 
          </p>
          <p>
            After installing it, my phone did become much more performant and much nicer to use. That experiment was my first proud tech achievement, and I made sure it wouldn't be the last.
          </p>
        </TimelineSection>

        <TimelineSection img="win8.jpg" title='"Where did our data go?"'>
          <div className="font-bold text-lg text-center mb-4 w-full italic">"One day, I want to make my own operating system for computers!"</div>
          <p className="my-2">
            This is the story of a ten year old Moroccan boy, who had a particular love for computers and technology.
          </p>
          <p className="my-2">
            Dreaming of creating the Windows killer, he was... a bit too ambitious. Drawing mockups of a desktop with a start menu and windows on a school notebook, he decided to call the project "GlassesOS" or something similar,
            as a reference to... his glasses. Genius.
          </p>
          <p className="my-2">
            But that wasn't enough. He wanted to do something else, something more concrete. So on a 2014 summer, he decided to follow yet another online tutorial, format a USB drive (which may or may not have had data),
            restart the family computer, and install a fresh copy of Windows 8.1, without ever thinking about the fate of the data that was sitting on the hard drive.
          </p>
          <p className="my-2">
            Important documents? Spreadsheets? Programs? All that mattered for him was the taste of success and novelty, and the beauty of colored square icons on a mediocre UI made for tablets.
          </p>
          <p className="my-2">
            Excited, he later tried doing the same thing during computer science class on one of the lab's Dell Optiplex towers, using the same USB drive.
            However, as the monitor read "Windows is copying files...", the computer was thankfully so slow that his teacher caught him, and thus prevented his destructive desires from becoming reality.
          </p>
          <p className="text-sm italic">This would not be the first experiment of this kind.</p>
        </TimelineSection>

      </TimelineYear>


    </div>
  )
}
