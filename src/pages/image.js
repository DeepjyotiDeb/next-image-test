import dynamic from 'next/dynamic';
// import { EditAruco } from 'src/components/editAruco';

const EditAruco = dynamic(() => import('src/components/editAruco'), {
  ssr: false,
});
export default function Image() {
  return <EditAruco />;
}
