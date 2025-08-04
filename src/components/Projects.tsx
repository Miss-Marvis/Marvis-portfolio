import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
const Projects = () => {
	const projects = [
		{
			title: ' Hotel Management System',
			description:
				' A modern  Full Stack Hotel Management Web application built with Next.js featuring comprehensive  boking management, Staff authentication and real-time dashboard analytics',
			image: '/cabins.png',
			tech: ['React', 'Supabase', 'Tailwind CSS'],
			github: 'https://github.com/Miss-Marvis/the-wild-oasis',
			live: 'https://wood-craft-hotel.netlify.app',
			featured: true,
		},
		{
			title: ' City Explorer App',
			description:
				'A sleek and interactive React application that allows users to explore and bookmark cities around the world. It uses React Router for routing, context + useReducer for state management and Json server as a mock backend.',
			image: '/worldwise.png',
			tech: ['React', 'Css', 'Json Server, weather API'],
			github: 'https://github.com/Miss-Marvis/worldwise',
			live: 'https://worldwise-explorer.netlify.app/',
			featured: true,
		},
		{
			title: 'React Quiz App',
			description:
				'A modern interactive quiz application built with react and quiz, It dynamically handles quiz states, provides real-time feedback, and supports multiple-choice questions and provides a seamless user experience.',
			image: '/quiz.png',
			tech: ['React', 'Css'],
			github: 'https://github.com/Miss-Marvis/react-quiz',
			live: 'https://questions-answe.netlify.app/',
			featured: false,
		},
		{
			title: 'React Pizza App',
			description:
				'A sleek and functional Pizza Ordering App built with React. Users can browse a list of pizzas, select items, add multiple quantities to the cart, and remove items as needed — all with a smooth and interactive experience',
			image: '/Pizza.png',
			tech: ['React', 'Tailwind CSS', 'Rest API'],
			github: ' https://github.com/Miss-Marvis/react-pizza',
			live: ' https://piza-react.netlify.app/',
			featured: false,
		},
	]
	return (
		<section id='projects' className='py-20 px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 bg-code-gradient bg-clip-text text-transparent'>
						Featured Projects
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						A selection of projects that showcase my skills in frontend
						development, UI/UX design, and problem-solving.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-8'>
					{projects.map((project, index) => (
						<Card
							key={index}
							className={`bg-card-gradient border-border overflow-hidden hover:shadow-glow-accent transition-all duration-300 transform hover:-translate-y-2 ${
								project.featured ? 'lg:col-span-2' : ''
							}`}
						>
							<div className={`${project.featured ? 'md:flex' : ''}`}>
								<div className={`${project.featured ? 'md:w-1/2' : ''}`}>
									<div
										className='aspect-video bg-muted bg-cover bg-center'
										style={{
											backgroundImage: `url(${project.image})`,
										}}
									></div>
								</div>

								<div className={`${project.featured ? 'md:w-1/2' : ''}`}>
									<CardHeader>
										<div className='flex items-center justify-between'>
											<CardTitle className='text-xl'>{project.title}</CardTitle>
											{project.featured && (
												<Badge
													variant='default'
													className='bg-primary text-primary-foreground'
												>
													Featured
												</Badge>
											)}
										</div>
									</CardHeader>

									<CardContent className='space-y-4'>
										<p className='text-muted-foreground leading-relaxed'>
											{project.description}
										</p>

										<div className='flex flex-wrap gap-2'>
											{project.tech.map((tech, techIndex) => (
												<Badge
													key={techIndex}
													variant='secondary'
													className='text-xs'
												>
													{tech}
												</Badge>
											))}
										</div>

										<div className='flex gap-3 pt-2'>
											<Button
												variant='outline'
												size='sm'
												className='flex items-center gap-2'
												onClick={() => window.open(project.github, '_blank')}
												disabled={project.live === '#'}
											>
												<Github className='h-4 w-4' />
												Code
											</Button>
											<Button
												size='sm'
												className='flex items-center gap-2'
												onClick={() => window.open(project.live, '_blank')}
												disabled={project.live === '#'}
											>
												<ExternalLink className='h-4 w-4' />
												Live Demo
											</Button>
										</div>
									</CardContent>
								</div>
							</div>
						</Card>
					))}
				</div>

				<div className='text-center mt-12'>
					<Button
						variant='outline'
						size='lg'
						className='border-primary text-primary hover:bg-primary hover:text-primary-foreground'
						onClick={() => window.open('https://github.com/Miss-Marvis')}
					>
						View All Projects on GitHub
					</Button>
				</div>
			</div>
		</section>
	)
}
export default Projects
