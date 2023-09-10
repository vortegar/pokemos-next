import { FC } from "react"
import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router";

interface Props {
    pokeId: number
}
export const FavoriteCardPokemon: FC<Props> = ({ pokeId }) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${ pokeId }`)
    }
  return (
    <Grid xs={6} sm={3} md={2} xl={2} key={ pokeId } onClick={ onFavoriteClicked }>
        <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
            width={'100%'}
            height={140}
        />
        </Card>
    </Grid>
  )
}
