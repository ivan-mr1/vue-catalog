<script setup>
import { ref } from 'vue';
import ProductList from '@/widgets/product-list';
import { useSliceI18n } from '@/shared/i18n';

import ru from '../locales/ru.json';
import ua from '../locales/ua.json';
import en from '../locales/en.json';

const { t } = useSliceI18n('homePage', { ru, ua, en });

const products = ref([
  {
    id: 1,
    name: 'Ray-Ban Aviator Classic',
    code: '01-1',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
  },
  {
    id: 2,
    name: 'Oakley Holbrook Polarized',
    code: '01-2',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400',
  },
  {
    id: 3,
    name: 'Gucci Fashion Glasses',
    code: '03-5',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
  },
  {
    id: 4,
    name: 'Prada VPR Medical',
    code: '04-1',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=400',
  },
  {
    id: 5,
    name: 'Tom Ford FT5401',
    code: '05-9',
    price: 7100,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=400',
  },
  {
    id: 6,
    name: 'Versace VE2140',
    code: '06-2',
    price: 6300,
    image: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=400',
  },
  {
    id: 11,
    name: 'Ray-Ban Aviator Classic',
    code: '01-1',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
  },
  {
    id: 12,
    name: 'Oakley Holbrook Polarized',
    code: '01-2',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400',
  },
  {
    id: 13,
    name: 'Gucci Fashion Glasses',
    code: '03-5',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
  },
  {
    id: 14,
    name: 'Prada VPR Medical',
    code: '04-1',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=400',
  },
  {
    id: 15,
    name: 'Tom Ford FT5401',
    code: '05-9',
    price: 7100,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=400',
  },
  {
    id: 16,
    name: 'Versace VE2140',
    code: '06-2',
    price: 6300,
    image: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=400',
  },
]);
</script>
<template>
  <ProductList :title="t('ourProducts')" :products="products" />
</template>
