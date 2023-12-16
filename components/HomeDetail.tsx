'use client'
import React, { memo, useEffect, useState } from 'react'
import Step from './Step'
import MenuRender from './MenuRender'
import Cart from './Cart'

const pizza = [
  {
    id: 1,
    name: 'Mediterranean Delight', desc: 'This pizza could include ingredients like feta cheese, olives, sun-dried tomatoes, and maybe some spinach or artichokes for a Mediterranean-inspired flavor',
    price: 79,
    photo: 'p1.jpg',
    discount: 10,
  },
  {
    id: 2,
    name: 'California Dreamin', desc: 'A pizza with a California twist, featuring ingredients like avocado, chicken, bacon, and perhaps some ranch dressing for a fresh and flavorful combination.',
    price: 89,
    photo: 'hero1.jpg',
    discount: 0,
  },
  {
    id: 3,
    name: 'Tuscan Sunrise', desc: 'Inspired by the flavors of Tuscany, this pizza might include ingredients such as prosciutto, arugula, cherry tomatoes, and a balsamic glaze for a delicious and sophisticated taste.',
    price: 99,
    photo: 'p1.jpg',
    discount: 10,
  },
  {
    id: 4,
    name: 'Mediterranean Delight', desc: 'This pizza could include ingredients like feta cheese, olives, sun-dried tomatoes, and maybe some spinach or artichokes for a Mediterranean-inspired flavor',
    price: 79,
    photo: 'p1.jpg',
    discount: 0,
  },
  {
    id: 5,
    name: 'California Dreamin', desc: 'A pizza with a California twist, featuring ingredients like avocado, chicken, bacon, and perhaps some ranch dressing for a fresh and flavorful combination.',
    price: 89,
    photo: 'hero1.jpg',
    discount: 10,
  },
  {
    id: 6,
    name: 'Tuscan Sunrise', desc: 'Inspired by the flavors of Tuscany, this pizza might include ingredients such as prosciutto, arugula, cherry tomatoes, and a balsamic glaze for a delicious and sophisticated taste.',
    price: 99,
    photo: 'p1.jpg',
    discount: 10,
  },
]


const burger = [
  {
    id: 7,
    name: 'Tex-Mex Fiesta Burger',
    desc: 'This burger could feature a seasoned beef patty topped with pepper jack cheese, guacamole, salsa, jalapeños, and crisp lettuce, bringing the vibrant flavors of Tex-Mex cuisine to your burger.',
    price: 29,
    photo: 'b1.jpg',
    discount: 10,
  },
  {
    id: 8,
    name: 'Mushroom Swiss Elegance Burger',
    desc: 'A classic combination of a juicy beef patty, sautéed mushrooms, melted Swiss cheese, and a touch of truffle aioli, creating an elegant and savory burger experience.',
    price: 35,
    photo: 'b2.jpg',
    discount: 0,
  },
  {
    id: 9,
    name: 'BBQ Bacon Bourbon Bliss Burger',
    desc: 'Indulge in the smoky goodness with this burger featuring a barbecue sauce-glazed beef patty, crispy bacon, cheddar cheese, and a hint of bourbon-infused caramelized onions for a sweet and savory delight.',
    price: 39,
    photo: 'b3.jpg',
    discount: 10,
  },
]

const salad = [
  {
    id: 10,
    name: 'Mediterranean Chickpea Salad',
    desc: 'A refreshing salad with a base of mixed greens, cherry tomatoes, cucumber, red onion, Kalamata olives, and feta cheese. Topped with seasoned chickpeas and a zesty lemon vinaigrette, this salad offers a taste of the Mediterranean.',
    price: 19,
    photo: 'sa1.jpg',
    discount: 10,
  },
  {
    id: 11,
    name: 'Asian Sesame Ginger Quinoa Salad',
    desc: 'A vibrant salad featuring a mix of colorful bell peppers, shredded carrots, edamame, and red cabbage. The salad is tossed with quinoa and dressed in a flavorful sesame ginger dressing, creating a delicious fusion of Asian-inspired ingredients.',
    price: 19,
    photo: 's1.jpg',
    discount: 10,
  }
]

interface HomeDetail {
  menu: number;
}

export interface IMenu {
  name: string,
  note: string,
  price: number,
  discount: number,
}

const HomeDetail: React.FC<HomeDetail> = memo(({ menu: menuSelectioin }) => {
  const [addMenu, setAddMenu] = useState({ quantity: 0, menuId: 0, note: '', price: 0, discount: 0, name: '' });
  const [orderMenu, setOrderMenu] = useState<{ [menuId: number]: IMenu[] }>({});

  useEffect(() => {
    const id = addMenu.menuId;
    const quantity = addMenu.quantity;
    if (id === 0 || quantity === 0) { return };
    const oldMenu = orderMenu[id] || [];
    const addMore = { name: addMenu.name, note: addMenu.note, price: addMenu.price, discount: addMenu.discount };


    const newMenu = { ...orderMenu, [id]: [...oldMenu, addMore] };
    for (let i = 1; i < quantity; i++) {
      newMenu[id].push(addMore);
    }

    setOrderMenu(newMenu);

  }, [addMenu])


  const decr = (id: any) => {
    const items = orderMenu[id];
    if (items.length === 0) {
      const newMenu = { ...orderMenu, [id]: [] };
      setOrderMenu(newMenu)
      return
    }

    items.pop();

    const newMenu = { ...orderMenu, [id]: items };

    setOrderMenu(newMenu)

  }

  const incr = (id: any) => {
    const items = orderMenu[id];
    if (items.length === 20) {
      return
    }

    items.push(items[0])
    const newMenu = { ...orderMenu, [id]: items };

    setOrderMenu(newMenu)
  }

  const deleteMenu = (id: any) => {
    const newMenu = { ...orderMenu, [id]: [] };
    setOrderMenu(newMenu)
  }

  const [menuHover, setMenuHover] = useState('');



  return (
    <div className='md:flex w-auto h-full mt-10 mb-20'>
      <div className='flex-auto max-w-xs hidden lg:block'>
        <Step menuList={menuSelectioin === 0 ? pizza : menuSelectioin === 1 ? burger : salad}
          menuHover={menuHover}
          setMenuHover={setMenuHover}
        />
      </div>
      <div className='flex-auto md:w-80 w-full'>
        <MenuRender menu={menuSelectioin} setAddMenu={setAddMenu}
          pizza={pizza} burger={burger} salad={salad} setMenuHover={setMenuHover} />
      </div>
      <div className='flex-auto md:w-20 w-full'>
        <Cart menus={orderMenu} decr={decr} incr={incr} deleteMenu={deleteMenu}

        />
      </div>
    </div>
  )
})

export default HomeDetail