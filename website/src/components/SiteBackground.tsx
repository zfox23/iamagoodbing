import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { useBackgroundImages } from '../hooks/useBackgroundImages';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export enum SiteBackgroundStyles {
    Images = "images",
    Words = "words"
}

export const SiteBackground = ({ bgStyle, backgroundImageIdx = 0 }) => {
    const backgroundImages = useBackgroundImages();

    if (!backgroundImageIdx) {
        const newBGImageIdx = Math.floor(Math.random() * (backgroundImages.length));
        backgroundImageIdx = newBGImageIdx;
    }

    return (
        <>
            <Transition
                className='fixed -inset-4 text-slate-900/5 text-sm text-justify tracking-wide z-10 cursor-default pointer-events-none'
                show={bgStyle === SiteBackgroundStyles.Images}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="linear duration-0"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <GatsbyImage
                    className={`!absolute inset-0 blur-md scale-110 saturate-50 brightness-75 touch-none`}
                    image={getImage(backgroundImages[backgroundImageIdx].src)!}
                    objectFit="cover"
                    alt={backgroundImages[backgroundImageIdx].alt} />

            </Transition>

            <Transition
                className='fixed inset-0 text-slate-900/5 text-sm space-y-2 text-justify tracking-wider z-10 cursor-default pointer-events-none'
                show={bgStyle === SiteBackgroundStyles.Words}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="linear duration-0"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <p>
                    In the 2021 Appropriations Act, Congress directed the Federal Trade Commission to study and
                    report on whether and how artificial intelligence (AI) "may be used to identify, remove, or take
                    any other appropriate action necessary to address" a wide variety of specified "online harms."1
                    Congress refers specifically to content that is deceptive, fraudulent, manipulated, or illegal, and
                    to particular examples such as scams, deepfakes, fake reviews, opioid sales, child sexual
                    exploitation, revenge pornography, harassment, hate crimes, and the glorification or incitement
                    of violence. Also listed are misleading or exploitative interfaces, terrorist and violent extremist
                    abuse of digital platforms, election-related disinformation, and counterfeit product sales.
                    Congress seeks recommendations on "reasonable policies, practices, and procedures" for such AI
                    uses and on legislation to "advance the adoption and use of AI for these purposes."
                </p>
                <p>
                    AI is defined in many ways and often in broad terms.3 The variations stem in part from whether
                    one sees it as a discipline (e.g., a branch of computer science), a concept (e.g., computers
                    performing tasks in ways that simulate human cognition), a set of infrastructures (e.g., the data
                    and computational power needed to train AI systems), or the resulting applications and tools.4 In
                    a broader sense, it may depend on who is defining it for whom, and who has the power to do so.
                </p>
                <p>
                    We assume that Congress is less concerned with whether a given tool fits within a definition of
                    AI than whether it uses computational technology to address a listed harm. In other words, what
                    matters more is output and impact.6 Thus, some tools mentioned herein are not necessarily
                    AI-powered. Similarly, and when appropriate, we may use terms such as automated detection
                    tool or automated decision system,7 which may or may not involve actual or claimed use of AI.
                    We may also refer to machine learning, natural language processing, and other terms that —
                    while also subject to varying definitions — are usually considered branches, types, or
                    applications of AI.
                </p>
                <p>
                    We note, too, that almost all of the harms listed by Congress are not themselves creations of AI
                    and, with a few exceptions like deepfakes, existed well before the Internet. Greed, hate, sickness,
                    violence, and manipulation are not technological creations, and technology will not rid society of
                    them.8 While social media and other online environments can help bring people together, they
                    also provide people with new ways to hurt one another and to do so at warp speed and with
                    incredible reach.
                </p>
                <p>
                    No matter how these harms are generated, technology and AI do not play a neutral role in their
                    proliferation and impact. Indeed, in the social media context, the central challenge of the
                    Congressional question posed here should not be lost: the use of AI to address online harm is
                    merely an attempt to mitigate problems that platform technology — itself reliant on AI —
                    amplifies by design and for profit in accord with marketing incentives and commercial
                    surveillance. Harvard University Professor Shoshana Zuboff has explained that platforms' engagement engines — powering human data extraction and deriving from surveillance
                    economics — are the crux of the matter and that "content moderation and policing illegal
                    content" are mere "downstream issues."10 Platforms do use AI to run these engines, which can
                    and do amplify harmful content. In a sense, then, one way for AI to address this harmful content
                    is simply for platforms to stop using it to spread that content. Congress has asked us to focus
                    here, however, not on the harm that big platforms are causing with AI's assistance but on
                    whether anyone's use of AI can help address any of the specified online harms.
                </p>
                <p>
                    Out of scope for this report are the widely expressed concerns about the use of AI in other
                    contexts, including offline applications. As Congress directed, we focus here only on the use of
                    AI to detect or address the specified online harms. Nonetheless, it turns out that even such
                    well-intended AI uses can have some of the same problems — like bias, discrimination, and
                    censorship — often discussed in connection with other uses of AI.
                </p>
                <p>
                    The FTC's work has addressed AI repeatedly, and this work will likely deepen as AI's presence
                    continues to rise in commerce. Two recent FTC cases — one against Everalbum and the other
                    against Facebook11 — have dealt with facial recognition technology.12 Commissioner Rebecca
                    Kelly Slaughter has written about AI harms,13 as have FTC staff members.14 A 2016 FTC report,
                    Big Data: A Tool for Inclusion or Exclusion?, discussed algorithmic bias in depth.15 The agency
                    has also held several public events focused on AI issues, including workshops on dark patterns
                    and voice cloning, sessions on AI and algorithmic bias at PrivacyCon 2020 and 2021, a hearing
                    on competition and consumer protection issues with algorithms and AI, a FinTech Forum on AI
                    and blockchain, and an early forum on facial recognition technology (resulting in a 2012 staff report).16 Some of these matters and events are discussed in more detail in the 2021 FTC Report
                    to Congress on Privacy and Security.17
                </p>
                <p>
                    Reflecting this subject's importance, in November 2021, Chair Khan announced that the agency
                    had hired its first-ever advisors on artificial intelligence.18 The FTC has also sought to add more
                    technologists to its professional staff. The FTC is not primarily a science agency, however, and is
                    not currently authorized or funded to engage in scientific research beyond its jurisdiction. The
                    FTC has traditionally consisted of lawyers, investigators, economists, and other professionals
                    specializing in enforcement, regulatory, educational,19 and policy efforts relating to consumer
                    protection and competition. Some other federal agencies and offices do engage in more sustained
                    AI-related work, sometimes as a central part of their mission.
                </p>
                <p>
                    With these agency caveats in mind, it is important to recognize that only a few of the harms
                    Congress specified fall within the FTC's mission to protect consumers from deceptive or unfair
                    commercial conduct. Many others do not, such as criminal conduct, terrorism, and election-
                    related disinformation. It is possible, however, that changes to platforms' advertising-dependent
                    business models, including the incentives for commercial surveillance and data extraction, could
                    have a substantial impact in those categories. Further, some disinformation campaigns are simply
                    disguises for commercially motivated actors.20 We did consult informally with relevant federal
                    agencies and offices on some issues, including the Department of State, the Department of
                    Homeland Security (DHS), the Defense Advanced Research Projects Agency (DARPA), and the
                    National Artificial Intelligence Initiative Office.21 Thus, although we discuss each harm
                    Congress lists, we would defer to other parts of the government on the topics as to which they
                    are much more engaged and knowledgeable.
                </p>
                <p>
                    The scope of the listed harms leads to a few other preliminary observations. First, while that
                    scope is broad, Congress does not ask for a report covering all forms of online harm or the
                    general problem of online misinformation and disinformation. Second, the wide variety of the
                    listed harms means that no one-size-fits-all answers exist as to whether and how AI can or should
                    be used to address them. In some cases, AI will likely never be appropriate or at least not be the
                    best option. Many of the harms are distinct in ways that make AI more or less useful or that
                    would make regulating or mandating its use more or less of a legal minefield. For example, both
                    AI and humans have trouble discerning whether particular content falls within certain categories
                    of harm, which can have shifting and subjective meanings. Moreover, while some harms refer to
                    content that is plainly illegal, others involve speech protected by the First Amendment. To the
                    extent a harm can be clearly defined, AI tools can help to reduce it, albeit with serious
                    limitations and the caveat that AI will never be able to replace the human labor required to
                    monitor and contend with these harms across the current platform ecosystem.
                </p>
                <p>
                    Finally, we note that Congress does not refer to who may be deploying these tools, requiring
                    their use, or responsible for their outcomes. The use of AI to combat online harm is usually
                    discussed in the context of content moderation efforts by large social media platforms. We do not
                    limit the report strictly to that context, however, because the Congressional language does not
                    mention "social media" at all and refers to "platforms" only in connection with terrorists and
                    violent extremists. Governments and others may deploy these tools, too. Other parts of the online
                    ecosystem or "tech stack" are also fair game, including search engines, gaming platforms, and
                    messaging apps. That said, the body of the report reflects the fact that much of the research and
                    policy discussion in this area focuses on social media, and for good reasons. These platforms and
                    other large technology companies maintain the infrastructure in which these harms have been
                    allowed to flourish, and despite mixed incentives to deal with those harms, they also control
                    most of the resources to develop and deploy advanced mitigation tools.
                </p>
                <p>II. EXECUTIVE SUMMARY</p>
                <p>
                    The deployment of AI tools intended to detect or otherwise address harmful online content is
                    accelerating. Largely within the confines — or via funding from — the few big technology
                    companies that have the necessary resources and infrastructure, AI tools are being conceived,
                    developed, and used for purposes including combat against many of the harms listed by
                    Congress. Given the amount of online content at issue, this result appears to be inevitable, as a
                    strictly human alternative is impossible or extremely costly at scale.
                </p>
                <p>
                    Nonetheless, it is crucial to understand that these tools remain largely rudimentary, have
                    substantial limitations, and may never be appropriate in some cases as an alternative to human
                    judgment. Their use — both now and in the future — raises a host of persistent legal and policy
                    concerns. The key conclusion of this report is thus that governments, platforms, and others must
                    exercise great caution in either mandating the use of, or over-relying on, these tools even for the
                    important purpose of reducing harms. Although outside of our scope, this conclusion implies
                    that, if AI is not the answer and if the scale makes meaningful human oversight infeasible, we
                    must look at other ways, regulatory or otherwise, to address the spread of these harms.
                </p>
                <p>
                    A central failing of these tools is that the datasets supporting them are often not robust or
                    accurate enough to avoid false positives or false negatives. Part of the problem is that automated
                    systems are trained on previously identified data and then have problems identifying new
                    phenomena (e.g., misinformation about COVID-19). Mistaken outcomes may also result from
                    problems with how a given algorithm is designed. Another issue is that the tools use proxies that
                    stand in for some actual type of content, even though that content is often too complex, dynamic,
                    and subjective to capture, no matter what amount and quality of data one has collected. In fact,
                    the way that researchers classify content in the training data generally includes removing
                    complexity and context — the very things that in some cases the tools need to distinguish
                    between content that is or is not harmful. These challenges mean that developers and operators of
                    these tools are necessarily reactive and that the tools — assuming they work — need constant
                    adjustment even when they are built to make their own adjustments.
                </p>
                <p>
                    The limitations of these tools go well beyond merely inaccurate results. In some instances,
                    increased accuracy could itself lead to other harms, such as enabling increasingly invasive forms
                    of surveillance. Even with good intentions, their use can also lead to exacerbating harms via bias,
                    discrimination, and censorship. Again, these results may reflect problems with the training data
                    (possibly chosen or classified based on flawed judgments or mislabeled by insufficiently trained
                    workers), the algorithmic design, or preconceptions that data scientists introduce inadvertently.
                    They can also result from the fact that some content is subject to different and shifting meanings,
                    especially across different cultures and languages. These bad outcomes may also depend on who
                    is using the tools and their incentives for doing so, and on whether the tool is being used for a
                    purpose other than the specific one for which it was built.
                </p>
                <p>
                    Further, as these AI tools are developed and deployed, those with harmful agendas — whether
                    adversarial nations, violent extremists, criminals, or other bad actors — seek actively to evade
                    and manipulate them, often using their own sophisticated tools. This state of affairs, often
                    referred to as an arms race or cat-and-mouse game, is a common aspect of many kinds of new
                    technology, such as in the area of cybersecurity. This unfortunate feature will not be going away,
                    and the main struggle here is to ensure that adversaries are not in the lead. This task includes
                    considering possible evasions and manipulations at the tool development stage and being vigilant
                    about them after deployment. However, this brittleness in the tools — the fact that they can fail
                    with even small modifications to inputs — may be an inherent flaw.
                </p>
                <p>
                    While AI continues to advance in this area, including with existing government support, all of
                    these significant concerns suggest that Congress, regulators, platforms, scientists, and others
                    should exercise great care and focus attention on several related considerations.
                </p>
                <p>
                    First, human intervention is still needed, and perhaps always will be, in connection with
                    monitoring the use and decisions of AI tools intended to address harmful content. Although the
                    enormous amount of online content makes this need difficult to fulfill at scale, most large
                    platforms acknowledge that automated tools aren't good enough to work alone. That said, even
                    extensive human oversight would not solve for underlying algorithmic design flaws. In any
                    event, the people tasked with monitoring the decisions these tools make — the "humans in the
                    loop" — deserve adequate training, resources, and protection to do these difficult jobs.
                    Employers should also provide them with enough agency and time to perform the work and should not use them as scapegoats for the tools' poor decisions and outcomes. Of course, even
                    the best-intentioned and well-trained moderators will bring their own biases to the work,
                    including a tendency to defer to machines ("automation bias"), reflecting that moderation
                    decisions are never truly neutral. Nonetheless, machines should not be allowed to discriminate
                    where humans cannot
                </p>
                <p>
                    Second, AI use in this area needs to be meaningfully transparent, which includes the need for it
                    to be explainable and contestable, especially when people's rights are involved or when personal
                    data is being collected or used. Some platforms may provide more information about their use of
                    automated tools than they did previously, but it is still mostly hidden or protected as trade
                    secrets. Transparency can mean many things, and exactly what should be shared with which
                    audiences and in what way are all questions under debate. The public should have more
                    information about how AI-based tools are being used to filter content, for example, but the
                    average citizen has no use for pages of code. Platforms should be more open to sharing
                    information about these tools with researchers, though they should do so in a manner that
                    protects the privacy of the subjects of that shared data. Such researchers should also have
                    adequate legal protection to do their important work. Public-private partnerships are also worth
                    exploring, with due consideration of both privacy and civil liberty concerns.
                </p>
                <p>
                    Third, and intertwined with transparency, platforms and other companies that rely on AI tools to
                    clean up the harmful content their services have amplified must be accountable both for their
                    data practices and for their results. After all, transparency means little, ultimately, unless we can
                    do something about what we learn from it. In this context, accountability would include
                    meaningful appeal and redress mechanisms for consumers and others — woefully lacking now
                    and perhaps hard to imagine at scale — and the use of independent audits and algorithmic impact
                    assessments (AIAs). Frameworks for such audits and AIAs have been proposed, but many
                    questions about their focus, content, and norms remain. Like researchers, auditors also need
                    protection to do this work, whether they are employed internally or externally, and they
                    themselves need to be held accountable. Possible regulation to implement both transparency and
                    accountability requirements is discussed below, and the import of focusing on these goals cannot
                    be overstated, though they do not stand in for more substantive reforms.
                </p>
                <p>Fourth, data scientists and their employers who build AI tools — as well as the firms
                    procuring and deploying them — are responsible for both inputs and outputs. They should all
                    strive to hire and retain diverse teams, which may help reduce inadvertent bias or discrimination,
                    and to avoid using training data and classifications that reflect existing societal and historical
                    inequities. Appropriate documentation of the datasets, models, and work undertaken to create
                    these tools is important in this regard. They should all be concerned, too, with potential impact
                    and actual outcomes, even though those designing the tools will not always know how they will
                    ultimately be used. Further, they should always keep privacy and security in mind, such as in
                    their treatment of the training data. It may be that these responsibilities need to be imposed on executives overseeing development and deployment of these tools, not merely pushed as ethical
                    precepts.</p>
                <p>Fifth, platforms and others should use the range of interventions at their disposal, such as tools
                    that slow the viral spread or otherwise limit the impact of certain harmful content. Automated
                    tools can do more with harmful content than simply identify and delete it. These tools can
                    change how platform users engage with content and are thus internal checks on a platform's own
                    recommendation engines that result in such engagement in the first place.23 They include, among
                    other things, limiting ad targeting options, downranking, labeling, or inserting interstitial pages
                    with respect to problematic content. How effective any of these tools are — and under what
                    circumstances — is unknown and often still dependent on detection of particular content, which,
                    as noted, AI usually does not do well. In any event, the efficacy of these tools needs more study,
                    which is severely hindered by platform secrecy. AI tools can also help map and uncover
                    networks of people and entities spreading the harmful content at issue. As a corollary, they can
                    be used to amplify content deemed authoritative or trustworthy. Assuming confidence in who is
                    making those determinations, such content could be directed at populations that were targets of
                    malign influence campaigns (debunking) or that may be such targets in the future (prebunking).
                    Such work would go hand-in-hand with other public education efforts.</p>
                <p>Sixth, it is possible to give individuals the ability to use AI tools to limit their personal exposure
                    to certain harmful or otherwise unwanted content. Filters that enable people, at their discretion,
                    to block certain kinds of sensitive or harmful content are one example of such user tools. These
                    filters may necessarily rely on AI to determine whether given content should pass through or get
                    blocked. Another example is middleware, a tailored, third-party content moderation system that
                    would ride atop and filter the content shown on a given platform. These systems mostly do not
                    yet exist but are the topic of robust academic discussion, some of which questions whether a
                    viable market could ever be created for them.</p>
                <p>Seventh, to the extent that any AI tool intended to combat online harm works effectively and
                    without unfair or biased results, it would help for smaller platforms and other organizations to
                    have access to it, since they may not have the resources to create it on their own. As noted above,
                    however, these tools have largely been developed and deployed by several large technology
                    companies as proprietary items. On the other hand, greater access to such tools carries its own set
                    of problems, including potential privacy concerns, such as when datasets are transmitted with the
                    algorithm. Indeed, access to user data should be granted only when robust privacy safeguards are
                    in place. Another problem is that the more widely a given tool is in use, the easier it will be to
                    exploit.</p>
                <p>Eighth, given the limitations on using AI to detect harmful content, it is important to focus on
                    key complementary measures, particularly the use of authentication tools to identify the source of particular content and whether it has been altered. These tools — which could involve
                    blockchain, among other things — can be especially helpful in dealing with the provenance of
                    audio and video materials. Like detection tools, however, authentication measures have limits
                    and are not helpful for every online harm.</p>
                <p>Finally, in the context of AI and online harms, any laws or regulations require careful
                    consideration. Given the various limits of and concerns with AI, explicitly or effectively
                    mandating its use to address harmful content — such as overly quick takedown requirements
                    imposed on platforms — can be highly problematic. The suggestion or imposition of such
                    mandates has been the subject of major controversy and litigation globally. Among other
                    concerns, such mandates can lead to overblocking and put smaller platforms at a disadvantage.
                    Further, in the United States, such mandates would likely run into First Amendment issues, at
                    least to the extent that the requirements impact legally protected speech. Another hurdle for any
                    regulation in this area is the need to develop accepted definitions and norms not just for what
                    types of automated tools and systems are covered but for the harms such regulation is designed
                    to address.</p>
                <p>Putting aside laws or regulations that would require more fundamental changes to platform
                    business models, the most valuable direction in this area — at least as an initial step — may be in
                    the realm of transparency and accountability. Seeing and allowing for research behind platforms'
                    opaque screens (in a manner that takes user privacy into account) may be crucial for determining
                    the best courses for further public and private action.24 It is hard to craft the right solutions when
                    key aspects of the problems are obscured from view.</p>
            </Transition>
        </>
    )
}
