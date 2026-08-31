import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Reveal from './deck/Reveal';
import Bento from './components/Bento';
import Split from './components/Split';
import CountUp from './components/CountUp';
import StatGrid from './components/StatGrid';
import Comparison from './components/Comparison';
import BrowserFrame from './components/BrowserFrame';
import Steps from './components/Steps';
import Cover from './components/Cover';
import BigNumber from './components/BigNumber';
import Contrast from './components/Contrast';
import Quote from './components/Quote';
import CodeWindow from './components/CodeWindow';

export default function App() {
  return (
    <Deck>
      {/* Slide 1: Cover Page */}
      <Cover
        nav="Cover"
        notes="Welcome judges and builders to DemoDominator. Built for the Google Cloud & Devpost 'All Things Agentic' Hackathon in the Taskmaster Track by Dorien Van den Abbeele. DemoDominator is not just another screen recorder—it is an autonomous Video SEO and GEO engine that transforms any live web or mobile URL into studio-grade 4K product walkthroughs and complete Google Video SEO packages in under 25 seconds for less than 1 cent."
        kicker="Google Cloud 'All Things Agentic' Hackathon · Taskmaster Track"
        title={
          <>
            Demo<span className="accent-text" style={{ color: 'var(--primary)' }}>Dominator</span>
          </>
        }
        subtitle="Autonomous App Walkthrough Studio & 5-Pillar Video SEO Engine"
        foot="Dorien Van den Abbeele · @DorienVibecodes · github.com/tanDivina · dominator.hero-apps.com"
      />

      {/* Slide 2: The Problem (Contrast) */}
      <Contrast
        nav="The Problem"
        notes="Most builders already use video tools like Loom, OBS, or Screen Studio. But standard recorders only capture raw pixels—they leave your video completely invisible to search engines with zero structured schema. Recording retakes, syncing audio, and transcribing captions is still manual work. DemoDominator stands apart because it is fundamentally a Video SEO engine: it autonomously navigates your live app, records the walkthrough, and packages it with structured VideoObject schema, key moments, sitemaps, and llms.txt for instant Google and AI search ranking."
        kicker="Beyond Standard Screen Recorders"
        title="Standard recorders capture pixels. DemoDominator delivers ranked Video SEO."
        left={{
          label: "Standard Video Recorders",
          title: "Manual Recording & Zero SEO",
          points: [
            "Multiple manual screen takes & retakes for every update",
            "Manual timeline editing & cut-away adjustments",
            "Manual subtitle transcription & formatting",
            "Zero Google VideoObject Schema or Key Moments",
            "Invisible to Google Search & AI engines (Perplexity/Gemini)"
          ]
        }}
        right={{
          label: "With DemoDominator",
          title: "Autonomous Pipeline + Full SEO",
          points: [
            "Autonomous DOM leaf-node discovery & kinetic directing",
            "Gemini 3.7 Flash 3-act storyboarding with Pydantic schemas",
            "Calibrated neural voice synthesis with millisecond audio sync",
            "Complete 5-Pillar Video SEO & GEO suite (Schema + llms.txt)",
            "Burned-in captions + WCAG AA .vtt/.srt for silent viewers"
          ]
        }}
      />

      {/* Slide 3: 6-Phase Agent Pipeline (Steps) */}
      <Steps
        nav="Agent Pipeline"
        notes="This is our 6-phase autonomous agent pipeline running inside Google Antigravity SDK. From the moment a URL is entered, the agent inspects the live DOM, plans the 3-act journey with Gemini 3.7 Flash, synthesizes voiceovers, directs the headless browser over CDP, multiplexes the video in memory, and generates the full SEO package."
        kicker="Autonomous Orchestration"
        title="From URL to Ranked Video SEO in 6 Autonomous Phases."
        items={[
          {
            title: "1. DOM Leaf-Node Walker",
            body: "Puppeteer CDP crawler maps live buttons, tabs, and CTAs while filtering non-interactive wrappers."
          },
          {
            title: "2. 3-Act Storyboard Reasoner",
            body: "Gemini 3.7 Flash drafts deterministic structured actions (Hook → Core Feature → CTA) via Pydantic."
          },
          {
            title: "3. Neural Voice Synthesis",
            body: "Synthesizes founder voiceover with millisecond-exact duration tracking for visual calibration."
          },
          {
            title: "4. Kinetic CDP Directing",
            body: "Directs headless Chromium with cubic-bezier easing pointer curves, hover dwell, and touch ripples."
          },
          {
            title: "5. In-Memory Multiplexing",
            body: "FFmpeg pipes raw 30 FPS compositor frames + audio delay offset + dual-layer burned-in captions."
          },
          {
            title: "6. 5-Pillar SEO & GEO Engine",
            body: "Compiles Google VideoObject JSON-LD, Dwell Widget, llms.txt, Video Sitemap, and Social Kit."
          }
        ]}
      />

      {/* Slide 4: Live Multi-Modal Execution (Split) */}
      <Split
        nav="Live Directing"
        notes="Here we see DemoDominator in action autonomously analyzing https://shorts.hero-apps.com/. Notice how the agent reasons about the product value proposition, establishes visual context, and puppeteers the live DOM with cubic-bezier easing pointer physics."
        kicker="Live Multi-Modal Execution"
        title={
          <>
            Reasoning &amp; Directing on <span className="accent-text">Live Web DOMs</span>.
          </>
        }
        body={
          <>
            <p style={{ marginBottom: 16 }}>
              DemoDominator doesn't hallucinate coordinates. It crawls live DOM leaf-nodes, streams real-time SSE execution logs, and puppeteers headless Chromium with synthetic kinetic touch physics (Cubic Bezier curves and ripple waves).
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
              <span className="chip" style={{ background: 'rgba(168, 255, 53, 0.1)', color: '#a8ff35', borderColor: 'rgba(168, 255, 53, 0.3)' }}>
                CDP Screencasting
              </span>
              <span className="chip" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                Gemini 3.7 Flash
              </span>
              <span className="chip" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                Cubic Bezier Physics
              </span>
            </div>
          </>
        }
        media={
          <BrowserFrame url="dominator.hero-apps.com/direct">
            <img
              src="/demodominator_agent_thought_stream.png"
              alt="DemoDominator Live Agent Thought Stream"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </BrowserFrame>
        }
      />

      {/* Slide 5: Unit Economics (BigNumber) */}
      <BigNumber
        nav="Unit Economics"
        notes="Let's talk unit economics and serverless scaling. Because DemoDominator is containerized on Google Cloud Run with min-instances zero and zero-disk FFmpeg piping, the raw compute and API cost per 25-second 4K video is less than 0.7 cents ($0.0072). Under Google Cloud's Free Tier, the first 2,500 video generations every month are 100% free."
        kicker="Serverless Scale-to-Zero Efficiency"
        value={<CountUp to={0.7} prefix="<" suffix="¢" decimals={1} />}
        caption="total unit cost per 25-second 4K product walkthrough ($0.0072)"
        foot="Absorbed completely by Google Cloud Free Tier (Cloud Run + Gemini 3.7 Flash + Google TTS)"
      />

      {/* Slide 6: Architecture & ADRs (Split with CodeWindow) */}
      <Split
        nav="Architecture & ADRs"
        notes="Engineering rigor is proved through our Architectural Decision Records. ADR 01: CDP Screencast vs WebRTC eliminates frame drops during heavy JS execution. ADR 02: Dual-layer captions serve both silent social viewers and Google's Video OCR crawler. ADR 03: Phonetic normalization eliminates TTS mispronunciation slurs."
        kicker="Architectural Decision Records"
        title={
          <>
            Engineered for deterministic <span className="accent-text">30 FPS</span> reliability.
          </>
        }
        body={
          <>
            <p style={{ marginBottom: 14 }}>
              By piping raw compositor bitmap buffers directly into FFmpeg stdin, DemoDominator avoids client-side WebRTC stutter. Millisecond audio delay offsets guarantee frame-accurate sync.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.9rem', color: 'var(--fg-muted)' }}>
              <li><strong style={{ color: 'var(--fg)' }}>ADR 01:</strong> CDP Screencast stream vs WebRTC (Zero CPU dropouts)</li>
              <li><strong style={{ color: 'var(--fg)' }}>ADR 02:</strong> Dual-layer subtitles (Burned-in + WCAG AA .vtt/.srt)</li>
              <li><strong style={{ color: 'var(--fg)' }}>ADR 03:</strong> Phonetic text normalization in TTS pipeline</li>
              <li><strong style={{ color: 'var(--fg)' }}>ADR 04:</strong> In-memory pipe buffers (Zero disk I/O bottleneck)</li>
            </ul>
          </>
        }
        media={
          <CodeWindow
            title="video_multiplexer.py"
            code={`# ADR 01: CDP Screencast to FFmpeg In-Memory Pipeline
async def multiplex_walkthrough_stream(
    frame_stream: AsyncIterator[bytes],
    audio_path: str,
    output_path: str,
    fps: int = 30
):
    # Zero disk write: stream raw JPEG buffers directly to FFmpeg
    proc = await asyncio.create_subprocess_exec(
        'ffmpeg', '-y',
        '-f', 'image2pipe', '-framerate', str(fps),
        '-i', '-',  # stdin pipe for 30 FPS compositor frames
        '-itsoffset', '0.25', '-i', audio_path,  # Audio sync calibration
        '-vf', 'subtitles=subs.srt:force_style="FontSize=14,PrimaryColour=&H00a8ff35"',
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
        output_path,
        stdin=asyncio.subprocess.PIPE
    )
    async for frame in frame_stream:
        proc.stdin.write(frame)
    await proc.stdin.drain()`}
            highlight={[5, 12, 17]}
          />
        }
      />

      {/* Slide 7: 5-Pillar SEO & GEO Dominance (StatGrid) */}
      <StatGrid
        nav="5-Pillar SEO"
        notes="Here is what truly sets DemoDominator apart from standard screen recorders: the 5-Pillar Video SEO and GEO Suite. Video without SEO is invisible. Every generation automatically outputs VideoObject Schema with Key Moments clips for +41% Google CTR, Dwell Time Maximizer widget for 2.6x on-page engagement, and token-efficient llms.txt markdown for AI search grounding."
        kicker="Organic Video Distribution"
        title="The 5-Pillar Video SEO & GEO Dominance Suite."
        stats={[
          {
            value: <CountUp to={41} prefix="+" suffix="%" />,
            label: "Google Search CTR",
            caption: "Structured VideoObject JSON-LD with timecoded Key Moments timeline scrubber clips."
          },
          {
            value: <CountUp to={2.6} suffix="×" decimals={1} />,
            label: "Session Dwell Time",
            caption: "Interactive glassmorphic player embed with chapter jump buttons and conversion CTAs."
          },
          {
            value: <CountUp to={100} suffix="%" />,
            label: "AI Search Grounding",
            caption: "Token-efficient llms.txt Markdown representations for Perplexity, Gemini, ChatGPT, and Claude."
          }
        ]}
      />

      {/* Slide 8: Us vs Competitors (Slide center + Comparison) */}
      <Slide
        center
        nav="Competitive Matrix"
        notes="Comparing DemoDominator against Loom, Screen Studio, Screenity, and generic LLMs. Standard screen recorders only capture raw pixels and provide zero SEO packaging. Generic LLMs cannot act in real web DOMs or render video. DemoDominator unites autonomous acting, kinetic recording, neural voice, and complete Video SEO distribution."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Market Comparison
          </div>
          <h2
            className="headline"
            style={{
              marginInline: 'auto',
              marginBottom: 'clamp(20px,3.5vh,36px)',
              maxWidth: '30ch',
            }}
          >
            Why DemoDominator <span className="accent-text">Dominates</span> the Category.
          </h2>
        </Reveal>
        <Comparison
          cols={['Capability', 'DemoDominator', 'Loom / Screenity', 'Screen Studio', 'Generic LLMs']}
          highlight={0}
          rows={[
            {
              label: 'Autonomous DOM Leaf-Node Actions',
              values: [true, false, false, false]
            },
            {
              label: '3-Act Storyboarding & Scripting',
              values: [true, false, false, 'Text Only']
            },
            {
              label: 'Synchronized Neural Voiceovers',
              values: [true, false, false, false]
            },
            {
              label: 'Burned-In Captions + .VTT/.SRT',
              values: [true, 'Paid / Slow', 'Manual', false]
            },
            {
              label: '5-Pillar Video SEO & Schema',
              values: [true, false, false, false]
            },
            {
              label: 'AI Search Grounding (llms.txt)',
              values: [true, false, false, false]
            },
            {
              label: 'Unit Cost Per Video',
              values: ['<$0.01', '$12–$20/mo', '$89 one-off', 'N/A']
            }
          ]}
        />
      </Slide>

      {/* Slide 9: Founder Vision (Quote) */}
      <Quote
        nav="Founder Vision"
        notes="Dorien's vision for DemoDominator: empowering every developer and indie hacker to produce Apple-grade product walkthroughs and dominate search rankings without spending thousands on video agencies."
        text="Software creators shouldn't spend days editing screencasts or recording re-takes. DemoDominator turns any deployed URL into studio-grade 4K walkthroughs with Google Video SEO rankings in 25 seconds."
        name="Dorien Van den Abbeele"
        role="Founder, Hero-Apps Suite (@DorienVibecodes)"
        img="/dorien.jpeg"
      />

      {/* Slide 10: Production Ready & Roadmap (Bento) */}
      <Bento
        nav="Live Verification"
        notes="To conclude: DemoDominator is live in production today at dominator.hero-apps.com. Our code is open on GitHub. Upcoming milestones include dynamic Screen Studio pan/zoom effects and automated CI/CD video regression testing on every pull request. Thank you judges!"
        kicker="Production Ready · Verified Live"
        title="Live on Google Cloud. Ready for production."
        tiles={[
          {
            k: "Live Production Web App",
            fig: "100%",
            title: "dominator.hero-apps.com",
            body: "Deployed on Google Cloud Run with custom domain, automated SSL, Google Search Console verification, and SSE live thought streams.",
            c: 6,
            r: 2,
            variant: "glow"
          },
          {
            k: "Open Source Repository",
            title: "github.com/tanDivina/demo-director-ai",
            body: "Full codebase with Dockerfile, FastAPI backend, Puppeteer CDP engine, and comprehensive ADR documentation.",
            c: 6,
            r: 1,
            variant: "accent"
          },
          {
            k: "Future Roadmap",
            title: "Screen Studio Zoom & CI/CD",
            body: "Dynamic kinetic viewport zooming, multi-step OAuth checkout flows, and automated video regression testing on Git PRs.",
            c: 6,
            r: 1
          }
        ]}
      />
    </Deck>
  );
}
