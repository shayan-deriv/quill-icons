import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketUsSmallcap2000Icon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#f0a548813ee58c151c8438b56a9df632__a)'>
      <path
        fill='#fff'
        d='M4 16.568v1.224h24v-1.224zM15.5 15.344H28V14.12H15.5zM15.5 12.896H28v-1.224H15.5zM15.5 10.448H28V10c0-.275-.055-.537-.156-.776H15.5zM28 19.016H4v1.224h24zM4 21.464h24V22q-.002.364-.122.688H4.121A2 2 0 0 1 4 22z'
      />
      <path
        fill='#F44336'
        d='M26 8H15.5v1.224h12.344A2 2 0 0 0 26 8M15.5 16.568H28v-1.224H15.5zM15.5 14.12H28v-1.224H15.5zM15.5 11.672H28v-1.224H15.5zM4 17.792h24v1.224H4zM28 20.24H4v1.224h24zM4.121 22.688H27.88A2 2 0 0 1 26 24H6a2 2 0 0 1-1.879-1.312'
      />
      <path
        fill='#0D47A1'
        fillRule='evenodd'
        d='M15.5 8H6a2 2 0 0 0-2 2v6.568h11.5zM5.189 15.098l-.095-.281c-.012-.039-.06-.039-.065.001l-.095.282h-.296a.04.04 0 0 0-.024.071l.24.177-.099.28a.04.04 0 0 0 .016.043.04.04 0 0 0 .046 0l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.282.24-.176a.04.04 0 0 0-.024-.071zm8.973-.281a.034.034 0 0 0-.065.001l-.095.282h-.296a.04.04 0 0 0-.037.052.04.04 0 0 0 .013.02l.24.176-.098.28a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.282.24-.176a.04.04 0 0 0 .013-.044.04.04 0 0 0-.037-.028h-.295zm-2.268 0a.034.034 0 0 0-.066.001l-.095.282h-.295a.04.04 0 0 0-.037.027.04.04 0 0 0 .013.044l.24.177-.099.28a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.282.24-.176a.04.04 0 0 0-.024-.072h-.295zm-4.437.281-.095-.281c-.012-.039-.064-.039-.065.001l-.095.282h-.296a.04.04 0 0 0-.024.071l.24.177-.099.28a.04.04 0 0 0 .062.043l.24-.172.24.172c.013.011.033.012.047.002a.04.04 0 0 0 .014-.045l-.09-.282.24-.176.01-.013a.04.04 0 0 0-.034-.059zm2.269 0-.096-.281c-.01-.039-.064-.039-.064.001l-.096.282h-.296a.04.04 0 0 0-.024.071l.24.177-.098.28a.04.04 0 0 0 .016.043.04.04 0 0 0 .046 0l.24-.172.24.172c.013.011.032.012.046.002a.04.04 0 0 0 .015-.045l-.09-.282.24-.176a.04.04 0 0 0-.024-.072zm-3.403-.744-.095-.281c-.011-.039-.06-.039-.065 0l-.095.281h-.304a.04.04 0 0 0-.024.071l.24.177-.09.282a.04.04 0 0 0 .061.043l.24-.172.24.172a.04.04 0 0 0 .062-.043l-.09-.282.24-.176a.04.04 0 0 0-.025-.072zm6.705-.281a.04.04 0 0 0-.019-.032.04.04 0 0 0-.036 0 .04.04 0 0 0-.019.032l-.095.281h-.295a.04.04 0 0 0-.024.072l.24.176-.09.282a.04.04 0 0 0 .061.043l.24-.172.24.172a.04.04 0 0 0 .062-.043l-.09-.282.24-.176a.04.04 0 0 0-.025-.072h-.295zm-2.168.281-.095-.281c-.011-.039-.064-.039-.074 0l-.095.281H10.3a.04.04 0 0 0-.024.072l.24.176-.09.282a.04.04 0 0 0 .06.043l.24-.172.241.172a.039.039 0 0 0 .062-.043l-.09-.282.24-.176a.04.04 0 0 0-.025-.072zm-2.269 0-.095-.281c-.011-.039-.064-.039-.065 0l-.095.281h-.304a.04.04 0 0 0-.024.072l.24.176-.09.282a.04.04 0 0 0 .036.05.04.04 0 0 0 .025-.007l.24-.172.24.172a.039.039 0 0 0 .062-.043l-.09-.282.24-.176a.04.04 0 0 0-.025-.072zm-1.134-.72-.095-.282c-.012-.033-.064-.033-.065 0l-.095.282h-.304a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .06.043l.24-.172.24.172.01.006a.04.04 0 0 0 .052-.049l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm6.8 0-.095-.282c-.006-.033-.059-.033-.073 0l-.096.282h-.295a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm-9.068 0-.095-.282c-.012-.033-.06-.033-.065 0l-.095.282H4.63a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .06.043l.24-.172.24.172a.04.04 0 0 0 .062-.043l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm6.8 0-.095-.282c-.004-.019-.023-.027-.042-.024a.04.04 0 0 0-.032.024l-.095.282h-.295a.04.04 0 0 0-.037.027.04.04 0 0 0 .012.044l.24.177-.09.281a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm-2.263 0-.096-.282c-.01-.033-.064-.033-.064 0l-.096.282h-.304a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .062.043l.24-.172.24.172c.013.011.032.012.046.002a.04.04 0 0 0 .015-.045l-.09-.281.24-.177a.04.04 0 0 0 .013-.044.04.04 0 0 0-.037-.027zm-3.403-.744-.095-.281c-.011-.039-.06-.039-.065.001l-.095.282h-.296a.04.04 0 0 0-.024.071l.24.177-.098.28a.04.04 0 0 0 .061.043l.24-.172.24.172a.04.04 0 0 0 .062-.043l-.09-.282.24-.176a.04.04 0 0 0-.025-.072zm6.705-.281a.037.037 0 0 0-.074 0l-.095.281h-.295a.04.04 0 0 0-.037.027.04.04 0 0 0 .013.045l.24.176-.09.282a.04.04 0 0 0 .061.043l.24-.172.24.172a.04.04 0 0 0 .062-.043l-.09-.282.24-.176a.04.04 0 0 0-.025-.072h-.295zm-2.168.281-.095-.281c-.011-.039-.064-.039-.074 0l-.095.281H10.3a.04.04 0 0 0-.024.071l.24.177-.09.282a.04.04 0 0 0 .015.043.04.04 0 0 0 .046 0l.24-.172.24.172a.039.039 0 0 0 .062-.043l-.09-.282.24-.176a.04.04 0 0 0-.025-.072zm-2.269 0-.095-.281c-.011-.039-.064-.039-.065.001l-.095.282H8.04a.04.04 0 0 0-.035.057.04.04 0 0 0 .011.014l.24.177-.098.28a.04.04 0 0 0 .061.043l.24-.172.24.172c.014.011.033.012.047.002a.04.04 0 0 0 .015-.045l-.09-.282.24-.176a.04.04 0 0 0-.025-.072zm-1.134-.716-.095-.281c-.012-.039-.064-.039-.065.001l-.095.282h-.296a.04.04 0 0 0-.024.071l.24.177-.099.28a.04.04 0 0 0 .062.043l.24-.172.24.172c.013.011.033.012.047.002a.04.04 0 0 0 .014-.045l-.09-.282.24-.176a.04.04 0 0 0 .013-.044.04.04 0 0 0-.037-.028zm6.687-.304-.015-.003a.034.034 0 0 0-.032.027l-.095.282h-.296a.04.04 0 0 0-.037.027.04.04 0 0 0 .013.044l.24.177-.098.28a.04.04 0 0 0 .016.043.04.04 0 0 0 .046 0l.24-.172.24.172a.04.04 0 0 0 .047.002.04.04 0 0 0 .014-.045l-.09-.282.24-.176a.04.04 0 0 0-.024-.072h-.295l-.096-.281a.03.03 0 0 0-.018-.023m-2.25.023a.037.037 0 0 0-.074 0l-.095.281h-.295a.04.04 0 0 0-.024.072l.24.176-.09.282a.04.04 0 0 0 .015.043.04.04 0 0 0 .046 0l.24-.172.24.172a.04.04 0 0 0 .047.002.04.04 0 0 0 .014-.045l-.09-.282.24-.176a.04.04 0 0 0-.024-.072h-.295zm-6.705.281-.095-.281c-.012-.039-.06-.039-.065.001l-.095.282h-.296a.04.04 0 0 0-.024.071l.24.177-.099.28a.04.04 0 0 0 .016.043q.014.01.03.007l.016-.007.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.282.24-.176a.04.04 0 0 0-.024-.072zm4.537 0-.096-.281c-.01-.039-.064-.039-.064 0l-.096.281h-.304a.04.04 0 0 0-.036.028.04.04 0 0 0 .012.044l.24.176-.09.282a.04.04 0 0 0 .04.05.04.04 0 0 0 .022-.007l.24-.172.24.172c.013.011.032.012.046.002a.04.04 0 0 0 .015-.045l-.09-.282.24-.176a.04.04 0 0 0-.024-.072zm-3.403-.75-.095-.28c-.011-.034-.06-.034-.065 0l-.095.28h-.304a.04.04 0 0 0-.024.071l.24.178-.09.281a.04.04 0 0 0 .061.044l.24-.172.24.172a.04.04 0 0 0 .062-.044l-.09-.281.24-.177a.04.04 0 0 0-.025-.071zm4.537 0-.095-.28c-.011-.034-.064-.034-.074 0l-.095.28H10.3a.04.04 0 0 0-.024.072l.24.177-.09.281a.04.04 0 0 0 .06.044l.24-.172.241.172a.04.04 0 0 0 .062-.044l-.09-.281.24-.177a.04.04 0 0 0-.025-.071zm-2.269 0-.095-.28c-.011-.034-.064-.034-.065 0l-.095.28h-.304a.04.04 0 0 0-.024.072l.24.177-.09.281a.04.04 0 0 0 .061.044l.24-.172.24.172c.014.01.033.011.047.001a.04.04 0 0 0 .015-.045l-.09-.281.24-.177a.04.04 0 0 0-.025-.071zm4.532 0-.095-.28c-.006-.034-.06-.034-.074 0l-.095.28h-.295a.04.04 0 0 0-.024.072l.24.177-.09.281a.04.04 0 0 0 .061.044l.24-.172.24.172a.04.04 0 0 0 .047.001.04.04 0 0 0 .015-.045l-.09-.281.24-.177a.04.04 0 0 0-.025-.071zm-3.397-.714-.096-.282c-.01-.033-.064-.033-.064 0l-.096.282h-.304a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .062.043l.24-.172.24.172c.013.011.032.012.046.002a.04.04 0 0 0 .015-.045l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm-4.537 0-.095-.282c-.012-.033-.06-.033-.065 0l-.095.282H4.63a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .06.043l.24-.172.24.172a.04.04 0 0 0 .062-.043l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm2.271 0-.095-.282c-.015-.033-.067-.033-.073 0l-.095.282h-.295a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.281.24-.177a.04.04 0 0 0 .013-.044.04.04 0 0 0-.037-.027zm4.529 0-.095-.282c-.007-.033-.06-.033-.074 0l-.095.282h-.295a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .016.043.04.04 0 0 0 .045 0l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm2.269 0-.096-.282c-.006-.033-.059-.033-.073 0l-.096.282h-.295a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .062.043l.24-.172.24.172q.014.01.03.008a.04.04 0 0 0 .031-.051l-.09-.281.24-.177a.04.04 0 0 0-.024-.071zm-3.398-.744-.095-.282c-.011-.038-.064-.038-.074 0l-.095.282H10.3a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .015.044.04.04 0 0 0 .046 0l.24-.173.24.172a.039.039 0 0 0 .062-.043l-.09-.281.24-.177a.04.04 0 0 0-.025-.071zm-2.269 0-.095-.282c-.008-.026-.034-.034-.05-.025q-.014.007-.015.027l-.095.281H8.04a.04.04 0 0 0-.024.071l.24.177-.098.28a.04.04 0 0 0 .04.05.04.04 0 0 0 .021-.007l.24-.172.24.172c.014.011.033.012.047.002a.04.04 0 0 0 .015-.045l-.09-.281.24-.177a.04.04 0 0 0-.025-.071zm-2.268 0-.095-.282c-.011-.038-.06-.038-.065.002l-.095.281h-.296a.04.04 0 0 0-.024.071l.24.177-.098.28a.04.04 0 0 0 .015.044.04.04 0 0 0 .046 0l.24-.173.24.172a.04.04 0 0 0 .062-.043l-.09-.281.24-.177a.04.04 0 0 0-.025-.071zm6.705-.282a.04.04 0 0 0-.019-.032.037.037 0 0 0-.055.032l-.095.282h-.295a.04.04 0 0 0-.024.07l.24.178-.09.281a.04.04 0 0 0 .015.044.04.04 0 0 0 .046 0l.24-.173.24.172a.04.04 0 0 0 .047.002.04.04 0 0 0 .015-.045l-.09-.281.24-.177a.04.04 0 0 0-.025-.071h-.295zm-7.84-.434-.094-.281c-.012-.039-.06-.039-.065.001l-.095.282h-.296a.04.04 0 0 0-.024.071l.24.177-.099.28a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.282.24-.176a.04.04 0 0 0-.024-.072zm2.269 0-.095-.281c-.007-.023-.028-.032-.044-.028q-.018.005-.021.03l-.095.281h-.296a.04.04 0 0 0-.024.071l.24.177-.099.28a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.282.24-.176A.04.04 0 0 0 7.79 9.3a.04.04 0 0 0-.038-.05zm2.269 0L9.63 8.97c-.01-.039-.064-.039-.064 0l-.096.281h-.304a.04.04 0 0 0-.024.072l.24.176-.09.282a.04.04 0 0 0 .016.043.04.04 0 0 0 .046 0l.24-.172.24.172a.04.04 0 0 0 .061-.043l-.09-.282.24-.176a.04.04 0 0 0-.024-.072zm2.168-.281a.04.04 0 0 0-.033-.037.037.037 0 0 0-.042.037l-.094.281h-.295a.04.04 0 0 0-.024.072l.24.176-.09.282a.04.04 0 0 0 .06.043l.24-.172.24.172a.04.04 0 0 0 .02.008q.015.003.028-.006a.04.04 0 0 0 .014-.045l-.09-.282.24-.176a.04.04 0 0 0-.024-.072h-.295zm2.268 0a.034.034 0 0 0-.065.001l-.095.282h-.296a.04.04 0 0 0-.037.027.04.04 0 0 0 .013.044l.24.177-.098.28a.04.04 0 0 0 .062.043l.24-.172.24.172a.04.04 0 0 0 .047.002.04.04 0 0 0 .014-.045l-.09-.282.24-.176a.04.04 0 0 0-.024-.072h-.295z'
        clipRule='evenodd'
      />
      <path
        fill='#F5F5F5'
        d='m5.094 14.817.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.099-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c.005-.04.053-.04.065-.001m9.035-.026c.016 0 .03.01.033.026l.096.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.098-.28-.24-.177a.04.04 0 0 1-.013-.044.04.04 0 0 1 .037-.027h.296l.095-.282a.033.033 0 0 1 .032-.027m-2.269 0q.026.001.034.026l.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.099-.28-.24-.177a.04.04 0 0 1-.013-.044.04.04 0 0 1 .037-.027h.295l.095-.282a.033.033 0 0 1 .032-.027m-4.498.026.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.099-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c0-.04.053-.04.065-.001m2.268 0 .096.281h.295a.04.04 0 0 1 .024.071l-.24.177.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.098-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.096-.282c0-.04.053-.04.064-.001m-3.402-.744.095.281h.295a.04.04 0 0 1 .024.071l-.24.177.09.282a.04.04 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.282-.24-.176a.04.04 0 0 1 .024-.072h.304l.095-.281c.006-.039.054-.039.065 0m6.781-.032a.04.04 0 0 1 .019.032l.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.039.039 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.282-.24-.176a.04.04 0 0 1 .024-.072h.295l.095-.281q0-.021.019-.032a.04.04 0 0 1 .036 0m-2.244.032.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.014.045.04.04 0 0 1-.047-.002l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.282-.24-.176a.04.04 0 0 1 .025-.072h.295l.095-.281c.01-.039.063-.039.074 0m-2.269 0 .095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.014.045.04.04 0 0 1-.047-.002l-.24-.172-.24.172a.04.04 0 0 1-.061-.043l.09-.282-.24-.176a.04.04 0 0 1 .024-.072h.304l.095-.281c.001-.039.054-.039.065 0m-1.134-.721.095.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .025-.071h.304l.095-.282c0-.033.053-.033.065 0m6.8 0 .096.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.295l.096-.282c.014-.033.067-.033.073 0m-9.068 0 .095.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .025-.071h.304l.095-.282c.005-.033.053-.033.065 0m6.8 0 .095.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .025-.071h.295l.095-.282c.014-.033.067-.033.074 0m-2.264 0 .096.282h.295a.04.04 0 0 1 .037.027.04.04 0 0 1-.013.044l-.24.177.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.304l.096-.282c0-.033.053-.033.064 0m-3.402-.743.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.098-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c.006-.04.054-.04.065-.001m6.763-.037c.02 0 .037.017.037.037l.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.282-.24-.176a.04.04 0 0 1 .024-.072h.295l.095-.281c0-.02.017-.037.037-.037m-2.226.037.095.281h.295a.04.04 0 0 1 .024.071l-.24.177.09.282a.039.039 0 0 1-.062.043l-.24-.172-.24.172a.04.04 0 0 1-.06-.043l.09-.282-.24-.176a.04.04 0 0 1 .024-.072h.295l.095-.281c.01-.039.063-.039.074 0m-2.269 0 .095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.098-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c.001-.04.054-.04.065-.001m-1.134-.716.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.099-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c0-.04.053-.04.065-.001m6.767-.026c.016 0 .03.01.033.026l.096.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.046 0 .04.04 0 0 1-.016-.043l.098-.28-.24-.177a.04.04 0 0 1-.013-.044.04.04 0 0 1 .037-.027h.296l.095-.282a.034.034 0 0 1 .032-.027m-2.272-.011c.02 0 .037.017.037.037l.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.046 0 .04.04 0 0 1-.016-.043l.09-.282-.24-.176a.04.04 0 0 1 .025-.072h.295l.095-.281c0-.02.016-.037.037-.037m-6.763.037.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.046 0 .04.04 0 0 1-.016-.043l.099-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c.005-.04.053-.04.065-.001m4.536 0 .096.281h.295a.04.04 0 0 1 .024.071l-.24.177.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.282-.24-.176a.04.04 0 0 1 .024-.072h.304l.096-.281c0-.039.053-.039.064 0m-3.402-.75.095.282h.295a.04.04 0 0 1 .024.071l-.24.177.09.281a.04.04 0 0 1-.06.044l-.24-.172-.24.172a.04.04 0 0 1-.062-.044l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.304l.095-.282c.006-.033.054-.033.065 0m4.537 0 .095.282h.295a.04.04 0 0 1 .024.071l-.24.177.09.281a.039.039 0 0 1-.062.043l-.24-.171-.24.172a.04.04 0 0 1-.06-.044l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.295l.095-.282c.01-.033.063-.033.074 0m-2.269 0 .095.282h.295a.04.04 0 0 1 .024.071l-.24.177.09.281a.04.04 0 0 1-.06.044l-.24-.172-.24.172a.04.04 0 0 1-.062-.044l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.304l.095-.282c.001-.033.054-.033.065 0m4.532 0 .095.282h.295a.04.04 0 0 1 .024.071l-.24.177.09.281a.04.04 0 0 1-.06.044l-.24-.172-.24.172a.04.04 0 0 1-.062-.044l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.295l.095-.282c.015-.033.068-.033.074 0m-3.398-.715.096.282h.295a.04.04 0 0 1 .024.071l-.24.177.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.304l.096-.282c0-.033.053-.033.064 0m-4.536 0 .095.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .025-.071h.304l.095-.282c.005-.033.053-.033.065 0m2.27 0 .096.282h.297a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.295l.095-.282c.006-.033.058-.033.073 0m4.53 0 .095.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .025-.071h.295l.095-.282c.014-.033.067-.033.074 0m2.268 0 .096.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.295l.096-.282c.014-.033.067-.033.073 0m-3.397-.744.095.282h.295a.04.04 0 0 1 .024.071l-.24.177.09.281a.039.039 0 0 1-.062.043l-.24-.172-.24.172a.04.04 0 0 1-.06-.043l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.295l.095-.282c.01-.038.063-.038.074 0m-2.269 0 .095.282h.295a.04.04 0 0 1 .024.071l-.24.177.09.281a.04.04 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.098-.28-.24-.177a.04.04 0 0 1 .024-.07h.296l.095-.282c.001-.04.054-.04.065-.002m-2.268 0 .095.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.047 0 .04.04 0 0 1-.015-.043l.098-.28-.24-.177a.04.04 0 0 1 .024-.07h.296l.095-.282c.006-.04.054-.04.065-.002m6.781-.032a.04.04 0 0 1 .019.032l.095.282h.295a.04.04 0 0 1 .024.07l-.24.178.09.281a.04.04 0 0 1-.06.043l-.24-.172-.24.172a.04.04 0 0 1-.047 0 .04.04 0 0 1-.015-.043l.09-.281-.24-.177a.04.04 0 0 1 .024-.071h.295l.095-.282a.037.037 0 0 1 .055-.032M5.094 8.97l.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.099-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c.005-.04.053-.04.065-.001m2.268 0 .095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.099-.28-.24-.177a.04.04 0 0 1 .024-.071h.296l.095-.282c0-.04.053-.04.065-.001m2.268 0 .096.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.282-.24-.176a.04.04 0 0 1 .024-.072h.304l.096-.281c0-.039.053-.039.064 0m2.245-.032a.04.04 0 0 1 .019.032l.095.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.09-.282-.24-.176a.04.04 0 0 1 .025-.072h.295l.095-.281a.037.037 0 0 1 .055-.032m2.254.006c.016 0 .03.01.033.026l.096.281h.295a.04.04 0 0 1 .024.072l-.24.176.09.282a.04.04 0 0 1-.061.043l-.24-.172-.24.172a.04.04 0 0 1-.062-.043l.098-.28-.24-.177a.04.04 0 0 1-.013-.044.04.04 0 0 1 .037-.027h.296l.095-.282a.034.034 0 0 1 .032-.027'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M26 9H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M6 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z'
        clipRule='evenodd'
      />
      <path
        fill='#414652'
        d='M8 2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z'
      />
      <path
        fill='#fff'
        d='M14.814 8h-3.952V6.904l1.72-1.472q.233-.2.392-.36.16-.168.256-.32.105-.16.144-.312.048-.151.048-.328V4a.59.59 0 0 0-.232-.48.88.88 0 0 0-.504-.16.9.9 0 0 0-.352.064.8.8 0 0 0-.256.176 1 1 0 0 0-.176.248 1.3 1.3 0 0 0-.112.296l-1.048-.4q.096-.288.264-.544.168-.264.416-.456.255-.2.6-.312a2.5 2.5 0 0 1 .776-.112q.457 0 .808.128t.592.352q.248.224.376.536.128.304.128.664t-.12.656a2.3 2.3 0 0 1-.328.56 3.4 3.4 0 0 1-.472.488q-.271.232-.568.472l-1.04.816h2.64zM17.603 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76q1.095 0 1.624.76.528.76.528 2.128t-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352q-.183.352-.184.992v1.056q0 .64.184.992t.664.352M22.4 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M27.197 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128q-.529.76-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M0 24a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      />
      <path
        fill='#414652'
        d='M12.168 26.128h-.024l-.408.816-1.088 1.976-1.064-1.968-.424-.88h-.024v3.72H7.992v-5.584H9.28l1.368 2.616h.016l1.352-2.616h1.296v5.584h-1.144zM4.808 29.888q-.736 0-1.248-.248a2.9 2.9 0 0 1-.872-.656l.8-.808q.568.64 1.4.64.448 0 .664-.184a.61.61 0 0 0 .216-.488.58.58 0 0 0-.128-.384q-.128-.16-.52-.216l-.552-.072q-.888-.112-1.304-.536-.408-.424-.408-1.128 0-.376.144-.688t.408-.536q.272-.224.656-.344.392-.128.888-.128.632 0 1.112.2t.824.584l-.808.816a1.6 1.6 0 0 0-.488-.376q-.28-.152-.712-.152-.408 0-.608.144a.47.47 0 0 0-.2.4q0 .288.152.416.16.128.512.184l.552.088q.864.136 1.28.536.416.392.416 1.12 0 .4-.144.736a1.56 1.56 0 0 1-.424.576q-.272.24-.68.376a3.1 3.1 0 0 1-.928.128'
      />
      <path
        fill='#414652'
        fillRule='evenodd'
        d='M1 24v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m-1 0v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='f0a548813ee58c151c8438b56a9df632__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketUsSmallcap2000Icon);
export default ForwardRef;
