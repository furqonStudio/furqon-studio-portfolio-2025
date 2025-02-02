import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useRouter } from 'next/navigation'

interface ProjectCardProps {
  id: number
  imageSrc: string
  title: string
  description: string
  textLight?: boolean
  bgColor?: string
  imageClassName: string
  className?: string
  delay?: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  imageSrc,
  title,
  description,
  bgColor = 'bg-yellow-400',
  imageClassName,
  className = '',
  delay = 0,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const router = useRouter()

  return (
    <motion.a
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.05,
        y: -40,
        boxShadow: '0px 15px 30px rgba(0, 0, 0, 1)',
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      className={`${bgColor} ${className} h-full rounded-2xl aspect-square md:aspect-auto py-4 px-8 md:p-4 relative overflow-hidden hover:cursor-pointer`}
      onClick={(e) => {
        e.preventDefault()
        router.push(`/projects/${id}`)
      }}
    >
      <motion.div>
        <motion.h3
          className={`font-inter font-black tracking-tight text-2xl md:text-xl text-center md:text-left text-black`}
        >
          {title}
        </motion.h3>
        <motion.p
          className={`text-sm font-inter text-center md:text-left md:text-xs text-gray-800`}
        >
          {description}
        </motion.p>
        <Image
          alt={title}
          src={imageSrc}
          width={500}
          height={500}
          draggable={false}
          className={`absolute ${imageClassName}`}
        />
      </motion.div>
    </motion.a>
  )
}
