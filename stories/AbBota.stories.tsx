import React from 'react'

import {ComponentMeta, ComponentStory} from '@storybook/react'
import {AbBotao} from '../src/componentes/AbBotao'

export default
{
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

interface AbBotaoProps
{
    tipo?: 'primario' | 'secundario' | 'teste'
    texto?: string
    onClick?: () => void
}

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args} />

export const Primario = Template.bind({})

Primario.args =
{
    tipo: 'primario',
    texto: 'AbBotao Primário'
} as AbBotaoProps

export const Secundario = Template.bind({})

Secundario.args =
{
    tipo: 'secundario', 
    texto: 'AbBotao Secundario'
} as AbBotaoProps