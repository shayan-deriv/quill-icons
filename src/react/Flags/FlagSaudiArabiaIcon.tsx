import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSaudiArabiaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#006C35'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M4.967 3.9c-.03.448-.074 1.232.31 1.314.459.044.205-.776.373-.925.03-.075.086-.075.09.018v.698c0 .224.149.29.26.336.12-.008.202 0 .247.111l.06 1.205s.275.082.29-.675c.012-.447-.09-.817-.03-.903 0-.085.112-.09.187-.048.12.082.172.186.358.15.284-.083.455-.22.459-.437a1.8 1.8 0 0 0-.13-.62c.014-.037-.053-.137-.038-.175.049.082.127.075.142 0-.049-.156-.123-.31-.243-.373-.1-.09-.25-.074-.298.112-.03.213.075.463.227.672a.66.66 0 0 1 .06.332c-.082.048-.164.026-.235-.045 0 0-.224-.168-.224-.21.06-.38.012-.424-.022-.532-.022-.146-.093-.194-.15-.291-.055-.06-.13-.06-.167 0-.1.171-.052.54.019.708.052.153.13.25.093.25-.03.086-.093.064-.142-.037a2.5 2.5 0 0 1-.078-.65c-.019-.17-.041-.536-.157-.633-.067-.09-.168-.045-.205.037q-.015.25.011.5c.075.276.1.522.138.802.011.377-.216.164-.205-.026.049-.24.045-.486-.011-.724-.037-.097-.079-.12-.172-.104-.07 0-.253.197-.306.533 0 0-.044.172-.063.325-.026.171-.138.298-.22-.023-.067-.235-.112-.805-.224-.671z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m6.217 5.732-1.194.575c.012-.273.564-.761.944-.765.242.004.183.093.246.19zM13.7 7.87c-.046.048.104.253.298.253.32-.037.604-.216.865-.694a1.2 1.2 0 0 0 .197-.53 11.8 11.8 0 0 0-.216-2.7.5.5 0 0 1 .008-.186c.022-.026.093 0 .13-.064.056-.056-.149-.522-.26-.697-.038-.082-.057-.134-.124.007-.081.157-.12.332-.112.508.153 1.063.202 1.991.298 3.054.012.105-.003.254-.074.314a3 3 0 0 1-1.01.734m4.345-.004c-.232.134-.232.287-.045.29.32-.037.7-.063.962-.458.092-.186.146-.39.157-.597a11.3 11.3 0 0 0-.176-2.663c-.007-.075-.04-.25-.03-.272.023-.053.127.003.165-.056.052-.056-.273-.474-.388-.653-.038-.082-.053-.134-.123.007a.83.83 0 0 0-.067.508c.171 1.156.298 2.021.324 3.043-.015.097-.019.15-.063.273-.101.126-.213.29-.317.369-.105.074-.329.149-.4.209'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M11.293 5.49c.157.074.534.033.44-.21l-.007-.118c-.034-.075-.12-.056-.138.022-.007.022.011.063-.015.074-.011.015-.063.008-.06-.06a.12.12 0 0 0-.026-.063c-.01-.003-.015-.007-.037-.007-.019 0-.019.007-.03.026a.2.2 0 0 0-.011.06c-.004.022-.015.03-.034.037-.018 0-.014 0-.03-.011-.01-.011-.022-.015-.022-.034l-.011-.06c-.007-.01-.022-.018-.037-.022-.086 0-.094.097-.09.134-.004.008-.007.187.112.232zm2.686-.806c.157.075.451.041.44-.209l-.008-.12c-.033-.074-.119-.055-.137.02-.008.026.01.067-.015.082-.012.01-.064.003-.06-.068 0-.022-.015-.044-.026-.06-.011-.007-.015-.007-.037-.007-.02 0-.02.008-.03.026l-.011.056q-.006.038-.034.038c-.019 0-.015 0-.03-.008-.011-.011-.022-.015-.022-.033a.2.2 0 0 0-.011-.064q-.014-.015-.038-.018c-.086 0-.093.097-.09.134-.003.007-.007.183.113.231zm.07-1.47c.143.056.24.344.21.485-.03.168-.105.355-.157.332-.06-.022.037-.171-.019-.328-.03-.104-.223-.29-.201-.343-.037-.116.082-.168.168-.15zM15.825 6.881c.026-.343-.022-.552-.03-.753-.007-.202-.227-1.739-.272-1.888-.056-.29.213-.037.183-.209-.093-.209-.321-.518-.392-.7-.045-.075-.026-.15-.123-.02a1.6 1.6 0 0 0-.086.717c.232 1.204.466 2.204.43 3.35.111 0 .234-.25.29-.497m2.402-3.182c.13.064.205.422.19.523-.026.186-.093.387-.141.361-.056-.022.01-.276-.015-.354-.03-.112-.205-.313-.187-.373-.037-.127.075-.179.153-.157M8.69 6.232c.123.048.198.31.186.384-.03.138-.093.287-.141.265-.049-.015.01-.201-.012-.261-.01-.138-.182-.213-.179-.272-.03-.112.075-.13.15-.116zM5.411 3.129c.18.052.19.32.18.399-.027.142-.09.294-.135.276-.052-.019 0-.213-.026-.272-.026-.083-.18-.24-.164-.284-.034-.093.074-.138.145-.12m3.577 1.253c-.141.075-.194.298-.108.433.082.112.209.07.224.07.138.015.22-.257.22-.257s.004-.074-.157.071c-.07.011-.074-.015-.093-.052a.34.34 0 0 1 .019-.213c.026-.067-.026-.097-.105-.052m1.045-1.358c-.075.049-.213.194-.217.358-.003.094-.022.094.038.15.048.067.09.063.179.014a.2.2 0 0 0 .085-.126c.023-.105-.111.052-.126-.067-.03-.112.055-.157.138-.262 0-.074 0-.123-.101-.067zm.835.15a2.2 2.2 0 0 0-.06.413c-.022.105.112.15.168.015.09-.242.09-.346.097-.447-.026-.16-.134-.157-.205.018m5.297 2.696c.015-.018.746-.537.746-.537.074-.026.055.269.022.265a2.9 2.9 0 0 1-.772.533c-.037.026-.071-.197 0-.26zm.66-.007c.13.063.183.44.168.54 0 .202-.123.359-.176.336-.052-.026.008-.25-.018-.328-.03-.112-.138-.317-.12-.377-.037-.127.068-.194.15-.171zm-4.327 1.619q.09-.107.209-.183c.075-.038.142.03.138.026.011.074-.045.138-.026.235.015.037.026.082.097.067a.5.5 0 0 1 .335-.104c.094.003.098.156.038.156-.213.045-.306.105-.459.16-.075.045-.134-.01-.134-.014s-.041-.041-.015-.138c.007-.075-.022-.12-.09-.112-.044.03-.09.045-.112-.011-.01-.038-.014-.06.02-.082m5.095.2c.03.038.052.076-.004.143l-.138.119c-.022.037-.037.104.038.123.134.037.447-.168.447-.171.052-.038.038-.112.03-.112-.03-.034-.097-.012-.142-.019-.022 0-.093-.007-.06-.075a.4.4 0 0 0 .06-.108c.02-.045 0-.074-.074-.1-.078-.015-.112-.008-.198 0-.045.007-.06.03-.07.085.003.086.055.082.111.112z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='m13.039 3.423-.332-.28c-.075-.052-.254-.149-.284.008a1 1 0 0 0 .015.332c.015.06.09.156.148.23l.039.05q.387.513.743 1.05.072.471.104.93.065.915.014 1.828c.112.004.284-.175.347-.44.028-.27.007-.695-.008-.987-.005-.104-.01-.19-.01-.248a18 18 0 0 0-.02-.413q.45.736.837 1.506c.097-.048.074-.6.018-.679a10 10 0 0 0-.482-.884 7 7 0 0 1-.13-.223 21 21 0 0 0-.303-.466 18 18 0 0 0-.058-.504c-.025-.177.018-.144.057-.114.03.023.057.044.047-.035-.051-.286-.201-.489-.385-.738l-.048-.064-.01-.017c-.053-.078-.06-.087-.154.039a.6.6 0 0 0-.052.239c0 .07.013.137.028.202l.01.04q.017.07.03.142l.015.07-.101-.137c-.096-.115-.047-.114.01-.114h.036a1 1 0 0 1-.028-.203 2 2 0 0 0-.093-.12M17.974 4.58c-.015-.075-.053-.317-.041-.343.009-.026.03-.027.054-.027.025-.001.053-.002.072-.033.053-.056-.186-.672-.306-.847-.04-.078-.122-.052-.216.075-.093.086-.06.276-.022.459q.127.664.223 1.297a25 25 0 0 0-.36-.473 24 24 0 0 0-.087-.556c0-.037-.011-.048.026-.045.041.038.045.038.075.049.037.007.074-.064.048-.123l-.373-.694c-.03-.03-.07-.06-.12.007a.27.27 0 0 0-.089.206c.012.164.038.332.049.496l-.03.037c-.317-.336.15-.056-.06-.317-.175-.19-.224-.254-.376-.37-.075-.048-.12-.141-.15.02a3 3 0 0 0-.007.417c0 .063.067.187.127.261l.65.795c.048.596.055 1.089.103 1.69-.007.253-.086.473-.16.506 0 0-.112.064-.187-.007-.056-.022-.276-.37-.276-.37-.112-.1-.186-.074-.265 0-.223.217-.32.612-.473.888-.038.064-.15.112-.269-.003-.241-.333-.18-.775-.163-.871v.005c-.273.31-.154.821-.09.933.09.179.16.295.335.384.16.116.287.045.355-.037.16-.168.164-.597.238-.68.053-.156.187-.13.25-.059.06.084.14.152.232.198.149.13.328.157.507.037a.6.6 0 0 0 .268-.332c.075-.208.038-1.174.02-1.75q.17.22.338.449c.05.484.072.964.056 1.454-.015.097.336-.29.336-.473v-.204l.001-.216q.256.385.491.804c.097-.049.064-.597 0-.672h.004c-.174-.292-.405-.598-.57-.82a1 1 0 0 0-.042-.105.6.6 0 0 1-.043-.255c-.001-.058-.003-.118-.016-.185-.013-.071-.02-.158-.025-.248a2 2 0 0 0-.042-.352'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m15.923 12.017-.187-.007c.037-.049.119-.295-.064-.284-.018.002-.03-.036-.04-.069-.008-.027-.015-.05-.023-.043-.224.06-.224.295-.075.396-1.239-.088-2.47-.104-3.707-.121l-.892-.014c-.337.01-.66.027-.979.045-.419.022-.832.044-1.266.049-.352.022-1.426-.031-1.761-.048l-.1-.005c.298.437.73.526 1.298.534h.012c1.059-.045 2.114-.09 3.184-.093 1.04-.015 2.105.018 3.17.052l1.019.03q0 .018.002.025v.007c.001.011-.004.022-.036.09l-.003.008c-.027.168.067.38.141.392.09.018.135-.049.164-.097.08.008.14.003.201-.001.056-.004.112-.008.184-.003q.127.01.257.012l.171.007a.5.5 0 0 0 .262-.015l.01.013c.052.07.1.135.195.121l.015-.003c.168-.036.298-.063.298-.407 0 0-.015-.6-.41-.563l-.358.037a9 9 0 0 0-.682-.045M9.947 4.86c-.254.071-.62-.66-.388-1.324.082-.082.121.163.161.413.031.193.063.389.115.438.048.085.12.149.186-.067a1.8 1.8 0 0 1 .43-.877c.048-.045.163-.097.234.045.047.085.035.48.027.742v.037c.034.155.088.19.154.232l.017.01c.082.042.19.072.287-.04a1 1 0 0 0 .104-.136l.034-.05c.04-.24.014-.484-.074-.71a.42.42 0 0 1 .038-.397.4.4 0 0 0 .029-.057c.105-.194.141-.102.186.013l.008.02c.084.13.09.361.098.588.004.117.007.232.021.333.052.403.153.43.216.44.15.02.235-.115.235-.115.043-.253-.062-.44-.144-.589l-.035-.064a.37.37 0 0 1-.074-.324l.007-.052c.007-.062.015-.125.079-.183.115-.097.235-.086.32.007.101.112.243.332.198.41-.013.071-.09.057-.139.048l-.014-.003c-.076.01-.018.153.002.201l.006.016c.022.056.035.122.048.19.017.088.034.178.075.25.06.092.17.07.246.055l.037-.007.116-.078c.045-.03.112-.037.108.082 0 0-.112.32-.261.395l-.026.01c-.025.012-.048.023-.105-.017-.029-.059-.007-.096.012-.13a.2.2 0 0 0 .018-.038c0-.026-.1-.06-.16.019a1 1 0 0 0-.077.13l-.065.116c-.063.108-.328.145-.455.093a.3.3 0 0 1-.152-.161c-.016-.032-.03-.062-.057-.085-.07-.045-.138-.045-.19.011l-.224.228a.425.425 0 0 1-.552-.012c-.13-.153-.175-.268-.168-.775-.026-.056-.063-.045-.12.063-.074.38-.186.731-.372.656m.37.076c-.014.013-.03.03-.057.047-.067.079-.078.131-.075.288 0 .007.127.361.236.611.09.266.12.55.089.828-.183.367-.473.67-.832.87-.168.055-.313.037-.35 0-.101-.071-.097-.202-.09-.202l.117-.08c.245-.163.507-.339.719-.785.074-.198.097-.317.022-.623a.6.6 0 0 0-.138-.291c.016-.012.051 0 .086.012.045.015.09.03.1 0a.9.9 0 0 0-.238-.445c-.1-.09-.205-.097-.295-.018-.1.06-.123.26-.074.436.021.056.059.092.103.135.062.06.137.133.199.29l.001.01c.007.043.033.2-.013.266-.048.135-.6.57-.634.59q-.013.019-.008-.027v-.056a2 2 0 0 1 .016-.194.4.4 0 0 0 .007-.104c-.148.096-.215.36-.252.508q-.011.046-.02.074c-.16.11-.328.21-.491.309-.303.181-.59.354-.785.56-.156.246 1.075-.276 1.22-.34.012.01.018.031.027.06.014.047.033.11.085.172.127.171.4.28.66.212.444-.164.698-.462.959-.798.037-.052.097-.093.149-.052.179.4.697.683 1.361.712.153-.19.082-.283.019-.32l-.023-.011c-.076-.034-.314-.14-.357-.243-.03-.112.044-.213.194-.287L12 7.043c.409-.054.814-.107 1.206-.237a1.1 1.1 0 0 1 .138-.429c.028-.048.05-.061.062-.07.011-.006.016-.01.012-.027l-.07-.037-1.366-.007c-.07-.026-.048-.049 0-.067.325-.045.907-.138.948-.698-.008-.287-.127-.477-.485-.53-.261.02-.448.273-.418.552q-.004.036-.001.081c.002.07.005.145-.047.158-.504.045-1.052.358-1.067.582-.034.022-.1-.037-.093-.134-.024-.41-.141-.81-.344-1.168-.118-.118-.12-.117-.16-.077M7.127 3.33c.015.254-.283.287-.44.213-.116-.049-.112-.224-.105-.232-.007-.037 0-.138.086-.138q.024.006.038.023l.01.06c0 .016.007.022.013.029l.006.008.007.003.01.003.02.001c.016-.003.03-.01.03-.037q.001-.024.008-.042l.004-.018.002-.004c.01-.015.01-.018.031-.018.019 0 .026 0 .034.007.011.015.026.038.026.06 0 .07.048.078.063.063.014-.006.012-.024.01-.043a.1.1 0 0 1 .002-.035c.018-.074.108-.093.138-.018zm4.621 3.484c.146-.052.068-.18-.09-.187q-.096-.01-.196-.017c-.138-.011-.273-.022-.374-.05-.1 0-.164.071-.16.15.034.308.251.466.356.541l.024.018.026.014c.075.041.173.095.123-.17.004-.206.137-.25.283-.297zm.776-1.25c-.018.038-.086.038-.149 0-.063-.037-.1-.097-.078-.13.022-.034.085-.034.149 0 .063.033.097.097.078.13m4.252 7.11c.041.007.086-.123.023-.18-.184-.01-.363-.01-.542-.01q-.239.001-.484-.008c-.052.022-.06.123-.015.179q.066.003.128.009c.107.008.21.016.32.002-.008-.097.276-.116.28-.004zM9.399 3.726s-.597.686-.72.73h-.004c-.011.023-.425.023-.44 0-.04-.007.117-.13.312-.283.185-.145.404-.317.523-.444.053-.045-.026-.127-.104-.164-.082-.097-.06-.257.045-.358a.36.36 0 0 1 .324-.004c.075.09.123.276-.026.366-.03.026-.034.056 0 .082zM4.94 7.932c-.123-.16-.104-.694.12-1.052l.012-.016c.044-.057.064-.083.04.06a2.6 2.6 0 0 0-.03.568c.011.112.052.25.15.048.048-.06.085-.048.133.026.034.101-.03.388-.171.448-.078.026-.187-.008-.254-.082m11.033-3.04c.09.16.392.44.538.448v-.004c.002-.11.011-.249.019-.363l.007-.103c.003-.045.014-.097.055-.112a.2.2 0 0 1 .066.01c.031.01.058.019.058-.01-.004-.094-.026-.232-.079-.299-.074-.108-.265-.082-.298.09q.002.041.012.073.011.034.01.076c-.007.034-.044.052-.12.015.012-.011-.051-.1-.051-.1-.064-.038-.146 0-.202.037a.3.3 0 0 0-.015.242M9.091 3.416c.023.052.075.086.112.075l-.004.003c.041-.01.056-.063.03-.112-.026-.048-.074-.085-.112-.074-.037.011-.048.056-.026.108'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M7.713 6.172c-.235 1.783-2.335 1.556-1.709-.067.137-.092.15.127.163.342.007.125.015.25.046.31.138.266.4.236.724.087.537-.284.56-.657.533-.69-.023-.015-.063.014-.113.051-.039.029-.084.062-.133.083-.138.034-.295.074-.425-.083-.045-.134-.034-.327 0-.484.026-.194.235-.4.421-.4.175-.004.25.086.324.176.037.045.074.09.124.123.09.011.156-.097.138-.175-.065-.394-.117-.735-.17-1.081-.04-.273-.083-.55-.132-.859-.03-.164.06-.246.156-.276q.021-.005.039-.012c.039-.014.068-.024.1.016.093.037.26.53.335.772-.051.065-.104.054-.158.042q-.03-.007-.062-.008l.18 1.35c.186-.108.279-.078.26.153.015.1.164.086.243.019.123-.344.324-.317.373-.094.007.071.115.071.126.015l.027-.171c.01-.056.102-.082.23-.119h.005a5 5 0 0 1-.068.604c-.06.197-.335.25-.492.138-.045-.049-.112-.023-.138.015-.063.074-.347.26-.548.044-.036 0-.028.062-.015.171.022.178.06.48-.049.84-.332 1.052-2.364 1.6-2.447.325V7.24c-.001-.104-.002-.163.02-.303.025-.313.193-.436.23-.12q-.002.28.094.545c.268.507 1.846.4 1.894-1.216-.015-.12-.104-.048-.126.026m-.61-.453.016-.025c.022-.037.142-.082.186.03a.14.14 0 0 1-.022.123c-.008.017-.044.015-.079.013l-.033-.001c-.045 0-.07-.012-.097-.049-.011-.031.01-.063.029-.09'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSaudiArabiaIcon);
export default ForwardRef;
