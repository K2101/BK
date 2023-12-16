'use client'
import React, { memo } from 'react'
import MenuCard from './MenuCard';

interface Menu {
  pizza: any;
  burger: any,
  salad: any,
  menu: number;
  setAddMenu: (p: any) => void
  setMenuHover: any
}

const MenuRender: React.FC<Menu> = memo(({ menu, setAddMenu, pizza, burger, salad, setMenuHover }) => {
  return (
    <>
      {
        menu === 0 ? (pizza.map((p: any) => <MenuCard setAddMenu={setAddMenu} id={p.id} name={p.name} desc={p.desc}
          price={p.price} photo={p.photo} discount={p.discount} key={p.id} setMenuHover={setMenuHover} />)) :
          menu === 1 ? (burger.map((p: any) => <MenuCard setAddMenu={setAddMenu} id={p.id} name={p.name} desc={p.desc}
            price={p.price} photo={p.photo} discount={p.discount} key={p.id} setMenuHover={setMenuHover} />))
            : salad.map((p: any) => <MenuCard setAddMenu={setAddMenu} id={p.id} name={p.name} desc={p.desc}
              price={p.price} photo={p.photo} discount={p.discount} key={p.id} setMenuHover={setMenuHover} />)
      }
    </>
  )
})

MenuRender.displayName = 'MenuRender';


export default MenuRender