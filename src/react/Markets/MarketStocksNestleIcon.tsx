import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksNestleIcon = (
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
    <g clipPath='url(#363dcff2b18719a6418fe34debd00898__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#63513D'
        d='M10.418 6.676a.46.46 0 0 1 .425-.272c.261 0 .47.202.47.47a.46.46 0 0 1-.188.376c.025.09.042.17.042.247 0 .293-.174.498-.494.606a.9.9 0 0 1-.244.456c-.111.108-.224.158-.304.194-.071.032-.118.053-.118.092 0 .045.032.073.119.073.386 0 .766-.216.811-.575.37-.125.592-.497.592-.793a.44.44 0 0 0-.038-.206.7.7 0 0 0 .22-.512.84.84 0 0 0-.262-.595.84.84 0 0 0-.592-.237.84.84 0 0 0-.703.373c-.38 0-.87.421-.87 1.024H9.23c-.035-.21-.25-.35-.432-.36-.146-.438-.477-.814-1.02-.814-.063 0-.14.004-.205.014A.82.82 0 0 0 6.989 6c-.474 0-.86.38-.86.86 0 .3.135.505.393.686l-.003.056c0 .383.417.982 1.037.982 0 .097.122.23.258.254v.049h-.053c-.852 0-1.214.41-1.214.686-.255.104-.419.386-.419.647 0 .519.38.888.882.888a.8.8 0 0 0 .456-.157 1 1 0 0 0 .313.049c.24 0 .508-.083.696-.359q.04.005.08.004c.307 0 .571-.202.71-.467a.35.35 0 0 0 .05-.157c0-.037-.018-.069-.056-.069-.03 0-.044.017-.07.048q-.024.03-.073.078c-.195.177-.495.243-.8.243-.15.22-.335.335-.547.335a.7.7 0 0 1-.404-.126.46.46 0 0 1-.349.157.45.45 0 0 1-.47-.47.47.47 0 0 1 .3-.436c.031-.344.4-.578.86-.578q.088 0 .181.011c.07-.111.237-.23.473-.261l.019-.003a.3.3 0 0 0 .096-.021q.042-.024.042-.074a.08.08 0 0 0-.038-.07.3.3 0 0 0-.088-.025l-.027-.006a.8.8 0 0 1-.613-.508.903.903 0 0 1-.912-.895V7.32a.46.46 0 0 1-.292-.436c0-.26.205-.47.466-.47.157 0 .292.077.38.192a1 1 0 0 1 .236-.028c.39 0 .808.247.888.728.502.045.62.47.651.648l.001.004c.017.088.031.163.09.163.06 0 .076-.067.096-.157l.001-.007a.73.73 0 0 1 .237-.432c0-.456.341-.85.825-.85M19.903 8.065c-.124-.097-.221-.172-.285-.233-.231-.222-.426-.463-.58-.655-.082-.1-.152-.187-.21-.25-.38-.415-.871-.927-1.679-.927-.78 0-1.295.508-1.463.947-.02.051-.037.107-.054.159-.025.075-.047.142-.067.175l-.197.33c-.128.218-.283.48-.367.618h.644l-.313.591.027-.006c.351-.077.608-.133.947-.133.31 0 .533.073.63.268.083.164.128.48.18.852.065.449.14.981.308 1.433.286.776.982 1.535 1.765 2.117q.015.01.035.01c.039 0 .063-.028.063-.056q0-.028-.024-.052c-.655-.655-1.188-1.379-1.473-2.172-.141-.386-.2-.85-.255-1.278-.055-.43-.105-.824-.23-1.066-.163-.32-.511-.404-.832-.404-.257 0-.497.052-.608.076l.281-.477h-.477l.143-.243q.072-.119.115-.195c.025-.047.042-.101.062-.165q.021-.073.056-.166c.181-.456.582-.745 1.104-.745.655 0 1.038.421 1.417.842.054.061.12.143.193.235.164.204.37.462.598.67.07.067.163.135.276.219.245.183.591.44 1.047.91.383.397.828.912 1.298 1.602 1.682 2.461 2.786 4.63 3.402 6.323l-.01.007c-1.765-1.198-3.294-2.33-4.527-3.726-.874-.992-1.633-2.141-2.294-3.607q-.044-.094-.082-.184l-.043-.098c-.018-.038-.035-.049-.063-.049a.057.057 0 0 0-.06.06c0 .038.018.121.056.288.352 1.518 1.327 2.88 2.368 4.012 1.038 1.124 2.21 2.092 3.175 2.796l.753 2.151.003.01.003.008a.5.5 0 0 1 .032.143q.001.058-.035.09c-.02.021-.048.032-.111.032h-.226c-.098 0-.137-.015-.171-.042a.27.27 0 0 1-.077-.119c-.034-.105-.159-.463-.28-.814-.113-.322-.223-.64-.26-.75-.014-.04-.038-.055-.066-.055a.06.06 0 0 0-.059.06c0 .016.004.034.01.067l.018.089a73 73 0 0 0 .28 1.368c.017.08.033.153.033.21 0 .062-.014.097-.066.15l-.233.236c-.056.056-.087.07-.132.07-.056 0-.101-.039-.122-.136a83 83 0 0 0-.674-2.812l-.096-.381c-.024-.094-.042-.146-.097-.146-.049 0-.066.034-.066.076q.001.038.007.077l.002.011v.01c.064.438.318 2.037.593 3.496.049.25.143.39.359.39a.4.4 0 0 0 .278-.122 17 17 0 0 1 .355-.349c.122-.118.206-.167.415-.167h.515c.122 0 .188-.03.247-.087a.3.3 0 0 0 .09-.23.9.9 0 0 0-.066-.302c-.067-.183-.212-.588-.354-.984v-.002c-.135-.376-.267-.744-.328-.909l.01-.007c.436.331 1.07.753 1.348.753.087 0 .14-.039.14-.175 0-.64-1.066-3.276-3.5-6.904-1.036-1.546-1.972-2.272-2.469-2.657M11.066 9.857c-.077.088-.17.195-.289.335-.49.582-.749 1.052-1.177 2.097a3 3 0 0 1 .456-.011l.053-.112.005-.011c.24-.514.562-1.204 1.011-1.736l.157-.185.036-.042c.445-.522.724-.848.9-1.574l.006-.021c.06-.256.114-.484.287-.65a.8.8 0 0 1 .568-.22c.174 0 .303.042.49.122.171.073.234.087.415.087.063 0 .108-.003.15-.007l-.244.327.33.234c-.414.121-.633.522-.706.706a.3.3 0 0 0-.02.088c0 .028.013.055.055.055.045 0 .08-.034.139-.104.202-.244.362-.411 1.107-.644l-.526-.397.397-.582h-.372c-.237 0-.394-.003-.6-.097-.278-.129-.42-.185-.668-.185-.303 0-.578.108-.804.317-.255.234-.337.545-.428.886l-.007.027c-.074.27-.16.57-.355.845-.112.16-.202.263-.367.452'
      />
      <path
        fill='#63513D'
        d='M12.157 11.878c-.188.253-.42.563-.604.89.067.032.286.15.363.192.114-.171.249-.362.383-.55.148-.21.295-.418.41-.595.199-.306.28-.439.293-.85l.003-.07q.001-.066.007-.132a.92.92 0 0 1 .275-.626.82.82 0 0 1 .582-.226c.108 0 .193.015.275.03.076.015.15.028.237.028a.8.8 0 0 0 .306-.062l.067-.025-.16.384.375.153c-.24.15-.766.794-.766 1.556 0 .275.042.53.101.755.007.025.021.05.06.05.034 0 .059-.021.062-.06l.004-.08c.01-.233.027-.602.121-.933.157-.557.578-1.08 1-1.33l-.6-.261.258-.63-.281.059-.026.005-.042.009a1.8 1.8 0 0 1-.378.052c-.098 0-.209-.014-.341-.046a1.5 1.5 0 0 0-.362-.045c-.276 0-.572.105-.774.3-.362.345-.389.717-.413 1.05l-.001.019c-.031.448-.114.56-.357.885l-.002.003-.073.099zM21.167 11.989c-.024-.031-.045-.045-.073-.045-.042 0-.063.028-.063.059 0 .049.035.108.122.254.265.45.592.902.996 1.327.435.463.947.895 1.494 1.281l.17.118c.025.018.042.028.063.028.035 0 .06-.034.06-.062q.001-.027-.029-.053a30 30 0 0 1-1.566-1.57c-.401-.428-.812-.88-1.174-1.337M9.962 10.412c.052-.087.21-.3.272-.366-.268-.543-.707-1.062-.898-1.267l-.16.156c.184.268.494.787.786 1.477M7.41 7.268c-.032-.028-.038-.046-.038-.067 0-.024.017-.052.055-.052a.1.1 0 0 1 .046.01c.257.105.477.227.672.377q.245.186.48.463l-.146.167c-.181-.15-.766-.64-1.069-.898M9.879 8.434l-.188-.115c.121-.289.271-.553.449-.752a4 4 0 0 1 .393-.386c.021-.018.038-.032.063-.032.035 0 .06.028.06.056a.1.1 0 0 1-.022.052l-.244.383c-.2.313-.423.663-.511.794M7.494 10.059a.2.2 0 0 1-.066.019.055.055 0 0 1-.056-.056c0-.025.01-.038.035-.06.428-.334.804-.466 1.323-.553l.062.209-1.274.431zM16.45 7.348c0-.122.062-.342.288-.342.077 0 .15.018.209.046.084.038.14.094.14.153 0 .063-.063.125-.157.202-.098.08-.223.153-.324.153-.122 0-.157-.115-.157-.212M12.915 8.364c0-.15.09-.313.264-.313a.35.35 0 0 1 .234.094.15.15 0 0 1 .056.111c0 .084-.08.164-.175.22a.46.46 0 0 1-.215.07c-.108 0-.164-.067-.164-.182'
      />
      <path
        fill='#63513D'
        d='M13.733 10.513q-.002-.054.018-.119c.028-.09.087-.177.233-.177.066 0 .139.017.198.06.053.034.074.079.074.124 0 .15-.251.324-.377.324-.09 0-.146-.087-.146-.212M12.361 14.907c-.47 0-.679-.223-.679-.505 0-.495.867-.978 1.647-1.278l.202.261c-.48.191-1.448.603-1.448.958 0 .125.073.216.365.216.509 0 1.056-.248 1.56-.495a.3.3 0 0 1 .126-.035c.066 0 .108.021.156.09l.084.116c-.588.324-1.323.672-2.013.672'
      />
      <path
        fill='#63513D'
        d='M13.657 15.04c-.46.257-.937.428-1.358.428-.47 0-.888-.203-1.236-.728a4 4 0 0 1-.24-.44q-.077-.157-.16-.309c-.168-.292-.35-.449-.666-.449-.289 0-.571.119-.87.247l.013.066c.025.108.067.185.167.185.035 0 .07-.012.096-.021l.02-.007.052-.016c.142-.046.255-.082.407-.082.261 0 .386.154.564.53l.066.14c-.18.062-.606.093-.922.093h-.15l.025.15c.01.063.034.115.086.14.063.03.154.034.31.034.397 0 .686-.049.853-.09.429.637 1.017.88 1.585.88.484 0 .975-.177 1.445-.435zM14.13 15.196l-.083-.32c.717-.387 1.371-.697 2.416-.798l.007.164c.012.362.026.741.282.741.271 0 .863-.7 1.546-1.577.04.037.094.076.152.117q.052.036.102.075l-.174.226-.002.002c-.664.856-1.23 1.586-1.697 1.586-.435 0-.6-.512-.606-.895-.665.066-1.292.289-1.943.679M23.343 8.208c-.271 0-.348-.15-.348-.362 0-.44.275-1.07.45-1.428h-.422c-.22.425-1.083 1.786-1.55 2.35l.269.289c.194-.216.403-.55.627-.906q.097-.155.198-.313h.055l-.001.039-.002.038c0 .394.202.686.7.686.306 0 .787-.153 1.24-.307.154-.052.302-.105.436-.153.192-.07.354-.127.455-.156v-.418c-.112.034-.291.1-.502.176-.154.056-.327.119-.501.18-.431.149-.856.285-1.104.285M24.273 9.472a40 40 0 0 1 1.598-.634v-.425c-.867.32-2.388.95-3.426 1.515.028.034.21.289.23.32.438-.181.832-.3 1.187-.3.498 0 .905 0 1.588-.16v-.32l-.157.029c-.334.062-.67.124-.898.124-.157 0-.202-.02-.202-.073 0-.031.02-.052.08-.076M15.352 11.428l-.167.321h1.78l-.133-.32z'
      />
      <path
        fill='#63513D'
        d='M8.942 13.34c.185 0 .336-.06.48-.119l.008-.003c.139-.056.278-.111.466-.111.446 0 .996.216 1.48.421q.043.016.09.017a.19.19 0 0 0 .174-.107l.063-.115c-.532-.31-1.382-.641-1.824-.641-.202 0-.349.052-.488.108l-.065.027c-.13.053-.248.102-.37.102-.352 0-1.253-.349-1.253-.686 0-.397 1.434-.55 1.59-.55l.143-.324c-1.04 0-2.28.365-2.28.85 0 .07.02.123.041.175a.4.4 0 0 1 .039.162.9.9 0 0 1-.039.23 1 1 0 0 0-.041.258c0 .128.076.292.167.435q.044.066.088.122c.067.088.124.162.124.25 0 .038-.01.078-.021.126-.018.073-.041.167-.041.3 0 .467.266.753.783 1.309l.007.006.104.112c-.358.139-.975.403-1.28.534l-.144.061c-.65.272-.814.603-.814 1.125 0 .202 0 .432.014.637h.125c.261 0 .292-.156.292-.306l-.001-.152-.002-.19c.003-.288.014-.546.48-.755.086-.038.325-.137.624-.261.357-.148.8-.332 1.173-.491.202-.087.39-.16.599-.16.233 0 .501.1.836.3.282.166.578.393.811.654l.296-.227c-.255-.299-.606-.567-.958-.776-.351-.209-.665-.33-.93-.33-.114 0-.208.02-.288.041l-.036.01a1 1 0 0 1-.257.042c-.129 0-.237-.031-.393-.212-.06-.066-.436-.495-.516-.62a.6.6 0 0 1-.108-.317c0-.06.01-.129.046-.191q.482.375 1.211.463l-.066-.331c-.7-.185-1.445-.8-1.445-1.198 0-.083.021-.143.053-.216.271.251.908.512 1.253.512M13.953 13.403c.438-.31.89-.345 1.256-.345.22 0 .477.031.749.066.22.028.418.05.655.05.477 0 .957-.175 1.166-.266.06.074.16.171.24.24-.1.063-.741.411-1.396.411-.289 0-.564-.034-.8-.066a5 5 0 0 0-.655-.052c-.24 0-.725.07-1.024.213z'
      />
      <path
        fill='#63513D'
        d='M20.419 14.646c-.523 1.1-1.317 1.901-2.131 2.364-.387.22-.735.362-1.487.362h-1.626c-.582 0-.947.077-1.233.15l-.187.052c-.21.06-.382.108-.624.108-.46 0-.885-.226-1.09-.442l.383-.303-.191-.254c-.112.08-1.473 1.086-1.76 1.312l-.016-.01c.007-.07.007-.132.007-.195 0-.766-.356-.95-.895-1.166l-.366.215c.742.248.926.446.926 1 0 .439-.157.613-.383.745a1.6 1.6 0 0 1-.776.198c-.108 0-.157.021-.195.06q-.063.061-.063.191v.122H8.8c.467 0 .899-.073 1.372-.446l1.543-1.204c.219.25.773.599 1.427.599.294 0 .504-.058.75-.125l.197-.053c.265-.066.523-.126 1.087-.126h1.633c.835 0 1.24-.174 1.685-.424.968-.543 1.793-1.463 2.26-2.518l-.08-.05q-.14-.085-.254-.162'
      />
      <path
        fill='#63513D'
        d='M17.797 15.955c.421-.675.797-1.274 1.72-1.762a10 10 0 0 1-.31-.198c-.359.157-.714.47-1.017.787a4.7 4.7 0 0 0-.555.709c-.211.316-.361.541-.813.715-.185.07-.411.146-.7.212-.17-.526-.599-1.048-1.052-1.048-.306 0-.659.156-1.064.336l-.03.012c-.49.216-.94.463-1.082.557l.192.258c.146-.08.567-.29.988-.47.366-.157.697-.285.92-.285.358 0 .591.407.72.734-.47.112-1.243.14-1.476.14-.108 0-.146.017-.184.048a.3.3 0 0 0-.08.164l-.028.118h.25c1.303 0 2.532-.205 3.322-.686.112.032.21.052.334.052.453 0 .92-.247 1.212-.473.104-.08.129-.154.129-.233q-.001-.056-.007-.108l-.014-.136c-.418.33-.766.578-1.198.578a.6.6 0 0 1-.177-.02M9.447 21.101c0-.115.028-.181.076-.24.06-.07.143-.116.276-.116h7.938q.11.002.171.056c.045.042.066.098.066.181v.307c0 .084-.02.14-.066.182a.26.26 0 0 1-.17.055h-7.274v4.049a.34.34 0 0 1-.077.24c-.06.07-.143.115-.275.115h-.554a.58.58 0 0 1-.515-.293c-.073-.118-1.87-3.305-1.87-3.305h-.017v3.242a.34.34 0 0 1-.077.241c-.06.07-.143.115-.275.115H6.48c-.132 0-.216-.045-.275-.115a.34.34 0 0 1-.077-.24v-4.488c0-.115.028-.181.077-.24.06-.07.143-.116.275-.116h.571c.174 0 .265.032.352.08a.6.6 0 0 1 .212.224c.084.143 1.814 3.232 1.814 3.232h.018z'
      />
      <path
        fill='#63513D'
        fillRule='evenodd'
        d='M10.812 24.002c0-.997.679-1.942 1.887-1.942.658 0 1.125.247 1.431.613.3.363.442.837.442 1.294 0 .15-.027.23-.087.286-.052.052-.128.077-.236.077h-2.424a.87.87 0 0 0 .884.833c.349 0 .585-.125.75-.366a.27.27 0 0 1 .243-.126h.56c.073 0 .115.021.143.056a.18.18 0 0 1 .039.122c0 .143-.115.377-.258.544-.328.387-.898.607-1.48.607-1.166 0-1.894-.934-1.894-1.998m1.89-1.165c-.497 0-.825.321-.87.75h1.741c-.045-.429-.383-.75-.87-.75'
        clipRule='evenodd'
      />
      <path
        fill='#63513D'
        d='M14.854 23.238c0-.725.627-1.178 1.581-1.178.53 0 .968.16 1.247.4.209.179.327.412.327.593 0 .08-.017.13-.045.16-.035.04-.08.05-.143.05h-.393c-.098 0-.16 0-.216-.028-.049-.026-.065-.056-.088-.098a.6.6 0 0 0-.097-.136c-.14-.146-.355-.199-.592-.199-.404 0-.578.157-.578.352 0 .203.153.262.48.346l.791.202c.397.101.63.248.794.46a.98.98 0 0 1 .199.614c0 .934-.965 1.224-1.662 1.224-.706 0-1.26-.286-1.524-.642a.82.82 0 0 1-.164-.47c0-.056.01-.112.042-.15.031-.039.076-.067.17-.067h.432c.08 0 .14.004.188.032.06.034.085.076.117.13l.033.055c.06.094.143.163.24.212.14.07.31.101.474.101.334 0 .647-.1.647-.397 0-.192-.195-.258-.414-.314l-.797-.202c-.37-.094-.624-.227-.801-.419a.9.9 0 0 1-.248-.63M18.41 22.192h.195v-1.137a.32.32 0 0 1 .07-.209.28.28 0 0 1 .232-.1h.394c.108 0 .18.038.233.1a.32.32 0 0 1 .07.21v1.136h.63q.11.002.17.056c.046.042.067.098.067.181v.241c0 .084-.021.14-.066.181a.26.26 0 0 1-.17.056H19.6v1.67q0 .294.157.443c.087.084.216.133.404.133h.042q.108.001.17.055a.23.23 0 0 1 .073.182v.303c0 .084-.027.14-.073.181a.26.26 0 0 1-.17.056h-.296c-.474 0-.745-.129-.954-.334-.227-.224-.348-.503-.348-.95v-1.739h-.195a.26.26 0 0 1-.17-.056c-.046-.042-.067-.097-.067-.181v-.24c0-.084.02-.14.066-.182a.26.26 0 0 1 .17-.056M20.805 25.829a.32.32 0 0 1-.07-.21v-4.563a.32.32 0 0 1 .07-.21.28.28 0 0 1 .233-.1h.415c.108 0 .18.038.233.1.042.053.07.12.07.21v4.564c0 .09-.028.157-.07.209a.28.28 0 0 1-.233.101h-.415a.28.28 0 0 1-.233-.101M25.697 21.47a.26.26 0 0 1-.17.056h-2.998q-.093 0-.14-.052c-.024-.028-.038-.06-.038-.13v-.18q-.001-.093.046-.143c.027-.032.066-.056.146-.063l2.779-.276q.016 0 .028-.003c.077-.008.127-.014.177-.014a.23.23 0 0 1 .17.066c.042.045.067.108.067.234v.324c0 .084-.021.14-.067.182'
      />
      <path
        fill='#63513D'
        fillRule='evenodd'
        d='M22.104 24.002c0-.997.679-1.942 1.887-1.942.658 0 1.132.247 1.438.613.3.363.443.837.443 1.294 0 .15-.028.23-.088.286q-.076.078-.236.077h-2.43a.87.87 0 0 0 .884.833c.348 0 .585-.125.748-.366a.27.27 0 0 1 .244-.126h.56c.074 0 .116.021.143.056a.18.18 0 0 1 .039.122c0 .143-.115.377-.258.544-.327.387-.898.607-1.48.607-1.166 0-1.894-.934-1.894-1.998m1.89-1.165c-.497 0-.824.321-.87.75h1.741c-.045-.429-.383-.75-.87-.75'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='363dcff2b18719a6418fe34debd00898__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksNestleIcon);
export default ForwardRef;
