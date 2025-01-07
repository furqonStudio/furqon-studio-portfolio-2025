'use client'
import { projects } from '@/data/data'
import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'
import { RiNextjsFill } from 'react-icons/ri'
import {
  SiClerk,
  SiExpo,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiWordpress,
} from 'react-icons/si'

const iconMap: Record<string, JSX.Element> = {
  'React Native': <SiReact className="text-4xl lg:text-5xl p-1" />,
  Expo: <SiExpo className="text-4xl lg:text-5xl p-1" />,
  'Next JS': <RiNextjsFill className="text-4xl lg:text-5xl p-1" />,
  'React JS': <SiReact className="text-4xl lg:text-5xl p-1" />,
  Tailwind: <SiTailwindcss className="text-4xl lg:text-5xl p-1" />,
  Nativewind: <SiTailwindcss className="text-4xl lg:text-5xl p-1" />,
  Supabase: <SiSupabase className="text-4xl lg:text-5xl p-1" />,
  Clerk: <SiClerk className="text-4xl lg:text-5xl p-1" />,
  Shadcn: <SiShadcnui className="text-4xl lg:text-5xl p-1" />,
  Wordpress: <SiWordpress className="text-4xl lg:text-5xl p-1" />,
}

const ProjectsDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params

  const project = projects.find((proj) => proj.id === Number(id))

  if (!project) {
    return (
      <div className="p-8 text-center text-white">
        <h1 className="text-2xl font-bold">Proyek Tidak Ditemukan</h1>
        <p className="mt-4">Silakan kembali ke halaman sebelumnya.</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-3xl m-auto text-white">
        <Link
          href={'/'}
          className="flex text-white bg-gray-800 w-fit px-4 py-2 rounded-2xl font-inter hover:cursor-pointer group overflow-hidden"
        >
          <div className="flex group-hover:animate-marquee items-center">
            <LuArrowLeft className="text-lg md:text-xl mr-2" />
            <p className="text-xs md:text-sm">Back</p>
          </div>
        </Link>
        <div
          className={`w-full aspect-[16/9] rounded-3xl my-8 ${project.bgColor}`}
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />

        <div className=" md:sticky md:top-16 space-y-8 h-fit">
          <div>
            <h1 className="text-2xl font-gasoek lg:text-3xl">
              {project.title}
            </h1>
            <p className="text-sm lg:text-base text-justify font-inter text-gray-400 text-secondary">
              {project.description}
            </p>
          </div>

          {project.details && (
            <>
              <div>
                <p className="mt-4 font-bold font-inter lg:text-lg">
                  Deskripsi:
                </p>
                <p className="text-sm lg:text-base text-gray-400 font-inter">
                  {project.details.introduction}
                </p>
              </div>

              {project.details.features &&
                project.details.features.length > 0 && (
                  <div>
                    <p className="mt-4 font-bold font-inter lg:text-lg">
                      Fitur:
                    </p>
                    <ul className="list-disc list-inside text-sm lg:text-base text-gray-400 font-inter">
                      {project.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

              <div>
                <p className="mt-4 font-bold font-inter lg:text-lg">
                  Teknologi:
                </p>
                <div className="flex gap-4 text-gray-400">
                  {project.details.technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {iconMap[tech] || (
                        <div className="text-gray-500 text-4xl lg:text-5xl p-1">
                          ?
                        </div>
                      )}
                      <p className="font-inter text-[8px]">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectsDetailPage
