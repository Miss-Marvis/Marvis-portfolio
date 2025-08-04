import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import heroImage from '@/assets/hero-bg.jpg'
const Hero = () => {
	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({
			behavior: 'smooth',
		})
	}
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background with overlay */}
			<div className='absolute inset-0 z-0'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: `url(${heroImage})`,
					}}
				/>
				<div className='absolute inset-0 bg-background/80' />
				<div className='absolute inset-0 bg-hero-gradient' />
			</div>

			{/* Content */}
			<div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
				<Badge variant='secondary' className='mb-6 animate-pulse'>
					Available for new opportunities
				</Badge>

				<div className='flex flex-col items-center mb-6'>
					<div className='w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/70 bg-transparent overflow-hidden mb-4'>
						<img
							src='/lovable-uploads/3ad4f661-a400-4570-827f-34256a2a2a65.png'
							alt='Wondikom Marvis'
							className='w-full h-full object-cover object-top'
						/>
					</div>
					<h1 className='text-5xl md:text-7xl font-bold bg-code-gradient bg-clip-text text-transparent'>
						Wondikom Marvis
					</h1>
				</div>

				<h2 className='text-xl md:text-2xl text-muted-foreground mb-8 font-mono'>
					Frontend Developer & Language enthusiast
				</h2>

				<p className='text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed'>
					I craft accessible, performant web applications using React, Next.js,
					Tailwind CSS, and Styled Components. Passionate about clean code,
					delightful user experiences, and turning ideas into reality. Currently
					exploring open source and contributing to real-world projects — one
					step at a time.
				</p>

				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
					<Button
						size='lg'
						className='shadow-glow-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105'
						onClick={() => scrollToSection('projects')}
					>
						View My Work
					</Button>
					<Button
						variant='outline'
						size='lg'
						className='border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300'
						onClick={() => scrollToSection('contact')}
					>
						Get In Touch
					</Button>
				</div>

				<div className='flex justify-center gap-6'>
					<Button
						variant='ghost'
						size='icon'
						className='hover:text-primary transition-colors'
					>
						<Github className='h-6 w-6' />
					</Button>
					<Button
						variant='ghost'
						size='icon'
						className='hover:text-primary transition-colors'
					>
						<Linkedin className='h-6 w-6' />
					</Button>
					<Button
						variant='ghost'
						size='icon'
						className='hover:text-primary transition-colors'
					>
						<Mail className='h-6 w-6' />
					</Button>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
				<ChevronDown className='h-6 w-6 text-primary' />
			</div>
		</section>
	)
}
export default Hero
