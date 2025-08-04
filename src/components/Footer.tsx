import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='py-12 px-4 border-t border-border'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
					<div className='text-center md:text-left'>
						<h3 className='text-xl font-bold bg-code-gradient bg-clip-text text-transparent mb-2'>
							Wondikom Marvis
						</h3>
						<p className='text-muted-foreground'>
							Frontend Developer & Tech Enthusiast
						</p>
					</div>

					<div className='flex gap-4'>
						<Button
							variant='ghost'
							size='icon'
							className='hover:text-primary transition-colors'
						>
							<Github className='h-5 w-5' />
						</Button>
						<Button
							variant='ghost'
							size='icon'
							className='hover:text-primary transition-colors'
						>
							<Linkedin className='h-5 w-5' />
						</Button>
						<Button
							variant='ghost'
							size='icon'
							className='hover:text-primary transition-colors'
						>
							<Mail className='h-5 w-5' />
						</Button>
					</div>
				</div>

				<div className='mt-8 pt-8 border-t border-border text-center'>
					<p className='text-muted-foreground flex items-center justify-center gap-2'>
						Made with <Heart className='h-4 w-4 text-primary fill-current' />{' '}
						from Wondikom Marvis
					</p>
					<p className='text-sm text-muted-foreground/60 mt-2'>
						© 2025 Wondikom Marvis. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
