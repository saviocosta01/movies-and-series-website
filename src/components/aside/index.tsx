import imageAvatar from '../../assets/image-avatar.png'
import { HomeSvg, MovieSvg, SerieSvg, BookMarkSvg, LogoSvg } from '../../assets/img-svg'
import { Aside } from './style'

export const AsideComponent = () => {
    return(
        <Aside>
        <LogoSvg />
        <div>
          <HomeSvg />
          <MovieSvg />
          <SerieSvg />
          <BookMarkSvg />
        </div>
        <img src={imageAvatar} alt="" className="image-avatar" />
      </Aside>
    )
}