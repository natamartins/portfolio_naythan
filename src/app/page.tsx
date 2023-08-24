import { Gamepad2, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mayPhoto from '@/Images/photo-perfil.jpeg'
import Cards from '@/Components/Cards/Cards'
import ImgMobileNSolucoes from '@/Images/ns_soluçoes-smartphone.png'
import ImgDesktopNSolucoes from '@/Images/ns_soluçoes-notbook.png'
import ImgMobileTransforms from '@/Images/img_transforms-smartphone.png'
import ImgDesktopTransforms from '@/Images/img_tranforms-notbook.png'
import ImgMobileBlog from '@/Images/blog-smartphone.png'
import ImgDesktopBlog from '@/Images/blog-notbook.png'


const page = () => {
  return (
    <>
      <header className='container'>
        <nav className='nav_bar'>
          <Gamepad2 />
          <ul className=''>
            <li>
              <Link href='https://www.linkedin.com/in/nat%C3%A3martins/' target='_blank'>
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link href='https://github.com/natamartins' target='_blank'>
                <Github />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/nata.codedevjr/?theme=dark' target='_blank'>
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href='https://twitter.com/NataCodedev' target='_blank'>
                <Twitter />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='container'>
        <section className='contant_about-me'>
          <Image width={150} src={mayPhoto} alt='' />
          <div>
            <p>Olá, eu sou o Natã Martins!</p>
            <h1>React Developer</h1>
            <p>Tenho 19 anos, sou desenvolvedor</p>
            <p>Front-end a mais de 2 anos.</p>
          </div>
        </section>
        <section className='contant_projects'>
          <h2>Projetos</h2>
          <div className='card_all-projects'>

            <div className='container_projects-nsoluçoes'>
              <div>
                <h3>NSoluções</h3>
                <p>
                  Projeto criado com Next.js, é um projeto pessoal que
                  criei para desenvolver minhas habilidade com o framework
                  Next.js, web responsive e Google ADS e para o deploy
                </p>
                <div className='card_links'>
                  <Link href='https://nsolucoes.netlify.app/' target='_blank'>Site</Link>
                  <Link href='https://github.com/natamartins/mycompany' target='_blank'>Github</Link>
                </div>
              </div>
              <Cards mobile={ImgMobileNSolucoes} desktop={ImgDesktopNSolucoes} />
            </div>

            <div className='container_projects-trasforms'>
              <Cards mobile={ImgMobileTransforms} desktop={ImgDesktopTransforms} />
              <div>
                <h3>Tmovies</h3>
                <p>
                  Este  é um projeto pessoal que criei para aprimorar minha
                  habilidades com React.js. É um site de filmes e séries, onde
                  mostra os trailers dos filmes e séries que já lançaram e que
                  vão lançar! e para o deploy Netlify
                </p>
                <div className='card_links'>
                  <Link href='https://webtmovies.netlify.app/' target='_blank'>Site</Link>
                  <Link href='https://github.com/natamartins/webtmovies' target='_blank'>Github</Link>
                </div>
              </div>
            </div>

            <div className='container_projects-blog'>
              <div>
                <h3>Blog</h3>
                <p>Este é meu blog pessao, onde posto artigos pessoais e profissionais</p>
                <div className='card_links'>
                  <Link href='https://nata-codedev-com-br.vercel.app/' target='_blank'>Site</Link>
                  <Link href='https://github.com/natamartins/nata.codedev.com.br' target='_blank'>Github</Link>
                </div>
              </div>
              <Cards mobile={ImgMobileBlog} desktop={ImgDesktopBlog} />
            </div>
          </div>
        </section>
      </main>
      <footer className='card_footer'>
        <p>©Natã Martins - 2023</p>
      </footer>
    </>
  )
}

export default page