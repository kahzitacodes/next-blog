import * as Style from './styles'
export const Header = () => {
  return (
    <Style.Container>
      <Style.Content className="flex h-full w-full items-center justify-between bg-primary/50 px-4">
        <div>logo</div>

        <Style.Nav>
          <Style.List>
            <Style.ListItem>
              <a href="/">Home</a>
            </Style.ListItem>
            <Style.ListItem>
              <a href="/articles">Articles</a>
            </Style.ListItem>
          </Style.List>
        </Style.Nav>
      </Style.Content>
    </Style.Container>
  )
}
