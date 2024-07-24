import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightCreditCardSampleIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 518 330'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      clipPath='url(#852f2151d0e485e1a7731c30d8f88146__a)'
      filter='url(#852f2151d0e485e1a7731c30d8f88146__b)'
    >
      <path
        fill='#fff'
        d='M12 28C12 12.536 24.536 0 40 0h438c15.464 0 28 12.536 28 28v250c0 15.464-12.536 28-28 28H40c-15.464 0-28-12.536-28-28z'
      />
      <path
        fill='#536E86'
        d='M69.543 206.959q1.6 1.09 2.39 2.531.792 1.424.792 3.199a6.42 6.42 0 0 1-1.055 3.551q-1.038 1.618-3.023 2.461-1.988.826-5.204.826-4.183 0-6.293-1.3-1.177-.74-1.177-1.758 0-.774.51-1.301a1.7 1.7 0 0 1 1.265-.545q.51 0 1.055.352.773.527 1.459.703 1.055.246 2.9.246 3.146 0 4.553-.809 1.406-.826 1.406-2.32 0-1.107-.826-2.127-.81-1.037-2.18-1.6-.79-.316-2.672-.439-.896-.053-1.388-.545a1.76 1.76 0 0 1-.475-1.248q0-.774.527-1.301.528-.527 1.336-.527 1.793 0 1.916-.018a3.7 3.7 0 0 0 1.407-.457 3.04 3.04 0 0 0 1.125-1.054q.44-.686.44-1.407 0-1.142-1.02-1.968-1.002-.844-3.024-.844-2.602 0-3.973 1.511-.405.44-.65.563a1.75 1.75 0 0 1-.826.193q-.738 0-1.266-.527a1.77 1.77 0 0 1-.527-1.301q0-1.213 1.617-2.355 2.355-1.67 5.889-1.67 3.339 0 5.361 1.898t2.022 4.571q0 1.388-.598 2.601-.597 1.195-1.793 2.215M87.86 195.674v19.722h3.638q1.301 0 1.846.51.562.492.562 1.301 0 .79-.562 1.301-.545.492-1.846.492h-10.88q-1.302 0-1.864-.492-.545-.51-.545-1.319 0-.79.545-1.283.563-.51 1.863-.51h3.639v-15.029l-3.217.844q-.774.211-1.16.211-.686 0-1.195-.545-.493-.545-.493-1.336 0-.72.37-1.125.369-.421 1.546-.738zM112.926 196.254v14.098q1.143 0 1.687.509.546.492.545 1.284 0 .79-.562 1.3-.545.51-1.67.51v1.441q1.143 0 1.687.51.546.51.545 1.301 0 .79-.562 1.301-.546.492-1.846.492h-4.834q-1.3 0-1.863-.492-.545-.51-.545-1.319 0-.79.545-1.283.563-.51 1.863-.51h1.406v-1.441h-9.79v-3.006l8.63-14.695zm-3.604 14.098v-8.86l-5.22 8.86zM125.898 215.396h7.893q.651-.527 1.23-.527.827 0 1.301.545.492.544.492 1.863V219h-16.418v-3.814q9.74-8.034 11.76-10.336 1.02-1.179 1.02-2.233 0-1.318-1.16-2.32-1.143-1.02-3.059-1.02-1.933 0-3.217 1.125-.667.599-1.072 1.776-.246.738-.686 1.054-.421.317-1.054.317-.738 0-1.283-.528-.528-.526-.528-1.23 0-1.055.967-2.637.984-1.581 2.848-2.531 1.88-.95 4.078-.949 3.41 0 5.59 2.074 2.18 2.056 2.179 4.992 0 1.494-.633 2.778-.615 1.265-2.988 3.515-1.863 1.776-7.26 6.363M169.475 199.857v4.289q2.004-.632 3.638-.632 3.322 0 5.52 2.267t2.197 5.854q0 3.691-2.232 5.801-2.215 2.091-6.803 2.091-4.042 0-6.399-1.529-1.371-.88-1.371-2.021 0-.721.528-1.248a1.75 1.75 0 0 1 1.283-.545q.615 0 1.336.597.72.58 1.512.809 1.125.334 2.882.334 3.27 0 4.465-1.037 1.196-1.055 1.196-3.217 0-2.127-1.161-3.34-1.142-1.213-2.953-1.213-1.951 0-4.447 1.266-.562.299-.984.299-.774 0-1.301-.563-.51-.562-.51-1.459v-10.406h11.022q1.3 0 1.845.51.563.492.563 1.3 0 .792-.563 1.301-.545.492-1.845.492zM199.199 209.543q-1.353 1.16-2.478 1.652a6 6 0 0 1-2.373.475q-2.9 0-5.08-2.32-2.163-2.32-2.163-5.766 0-2.69 1.495-4.887 2.038-3.023 5.748-3.023 2.654 0 4.64 1.599 1.986 1.582 2.918 4.588.932 2.99.932 6.241 0 5.519-4.272 8.859-3.305 2.566-7.242 2.566-2.18 0-3.375-.879-.808-.58-.808-1.529 0-.773.509-1.283.528-.527 1.284-.527.421 0 .949.263.685.352 1.441.352 2.725 0 5.028-1.846 2.303-1.863 2.847-4.535m-.51-5.678q-.579-2.496-1.722-3.533-1.125-1.055-2.584-1.055-1.53 0-2.602 1.178-1.072 1.16-1.072 3.094 0 2.02 1.072 3.269 1.09 1.248 2.479 1.248 2.443 0 4.429-4.201M393.789 209.543q-1.353 1.16-2.478 1.652a6 6 0 0 1-2.373.475q-2.9 0-5.081-2.32-2.162-2.32-2.162-5.766 0-2.69 1.494-4.887 2.04-3.023 5.749-3.023 2.654 0 4.64 1.599 1.986 1.582 2.918 4.588.932 2.99.932 6.241 0 5.519-4.272 8.859-3.304 2.566-7.242 2.566-2.18 0-3.375-.879-.809-.58-.809-1.529 0-.773.51-1.283.528-.527 1.283-.527.423 0 .95.263.685.352 1.441.352 2.724 0 5.027-1.846 2.304-1.863 2.848-4.535m-.51-5.678q-.58-2.496-1.722-3.533-1.125-1.055-2.584-1.055-1.53 0-2.602 1.178-1.072 1.16-1.072 3.094 0 2.02 1.072 3.269 1.09 1.248 2.479 1.248 2.443 0 4.429-4.201M414.057 199.857h-8.245q-.07 1.055-.544 1.53-.476.456-1.248.457-.81 0-1.319-.545-.492-.545-.492-1.846v-3.199h15.645v3.603l-5.836 17.368q-.37 1.09-.827 1.459-.44.351-1.072.351-.755 0-1.301-.527-.527-.528-.527-1.213 0-.387.281-1.231zM437.031 209.543q-1.353 1.16-2.478 1.652a6 6 0 0 1-2.373.475q-2.9 0-5.08-2.32-2.163-2.32-2.162-5.766 0-2.69 1.494-4.887 2.038-3.023 5.748-3.023 2.654 0 4.64 1.599 1.987 1.582 2.918 4.588.932 2.99.932 6.241 0 5.519-4.272 8.859-3.304 2.566-7.242 2.566-2.18 0-3.375-.879-.808-.58-.808-1.529 0-.773.509-1.283.528-.527 1.284-.527.421 0 .949.263.685.352 1.441.352 2.725 0 5.028-1.846 2.303-1.863 2.847-4.535m-.51-5.678q-.579-2.496-1.722-3.533-1.125-1.055-2.584-1.055-1.53 0-2.602 1.178-1.072 1.16-1.072 3.094 0 2.02 1.072 3.269 1.09 1.248 2.479 1.248 2.443 0 4.429-4.201M458.723 206.959q1.6 1.09 2.39 2.531.791 1.424.791 3.199a6.42 6.42 0 0 1-1.054 3.551q-1.038 1.618-3.024 2.461-1.986.826-5.203.826-4.184 0-6.293-1.3-1.178-.74-1.178-1.758 0-.774.51-1.301a1.7 1.7 0 0 1 1.266-.545q.51 0 1.054.352.774.527 1.459.703 1.055.246 2.901.246 3.146 0 4.553-.809 1.406-.826 1.406-2.32 0-1.107-.826-2.127-.809-1.037-2.18-1.6-.79-.316-2.672-.439-.897-.053-1.389-.545-.474-.51-.474-1.248 0-.774.527-1.301.528-.527 1.336-.527 1.793 0 1.916-.018a3.7 3.7 0 0 0 1.406-.457 3.04 3.04 0 0 0 1.125-1.054q.44-.686.44-1.407 0-1.142-1.02-1.968-1.002-.844-3.023-.844-2.602 0-3.973 1.511-.404.44-.65.563a1.75 1.75 0 0 1-.826.193q-.739 0-1.266-.527a1.77 1.77 0 0 1-.527-1.301q0-1.213 1.617-2.355 2.355-1.67 5.888-1.67 3.34 0 5.362 1.898 2.02 1.898 2.021 4.571a5.8 5.8 0 0 1-.597 2.601q-.598 1.195-1.793 2.215M67.445 259.082v2.637q0 2.343-1.36 4.488-1.347 2.145-3.866 2.145-1.455 0-2.461-.633-.996-.645-1.899-2.356a7.8 7.8 0 0 1-.89-3.644v-2.637q0-2.332 1.347-4.477 1.348-2.156 3.868-2.156 1.44 0 2.437.633 1.008.633 1.91 2.356.915 1.71.914 3.644m-2.414 0q0-1.957-1.09-3.422-.621-.808-1.746-.808-1.09 0-1.78.89-1.044 1.348-1.044 3.34v2.637q0 1.968 1.102 3.422.609.808 1.746.808 1.077 0 1.77-.89 1.042-1.348 1.042-3.34zM74.36 259.797q.867-.727 1.652-1.055a4.2 4.2 0 0 1 1.675-.34q1.887 0 3.305 1.5t1.418 3.762q0 2.097-1.324 3.398-1.313 1.29-3.574 1.29-1.887 0-3.106-.879-1.218-.88-1.84-2.707-.62-1.828-.62-4.078 0-2.696 1.23-4.477 1.23-1.793 2.894-2.777t3.516-.985q1.465 0 2.273.574.528.387.528.985 0 .527-.352.89a1.15 1.15 0 0 1-.844.352q-.281 0-.808-.281a1.3 1.3 0 0 0-.61-.164q-1.147 0-2.379.656-1.23.645-2.132 1.992-.621.937-.903 2.344m.35 3.715q.376 1.406 1.009 1.922.645.515 1.828.515t1.816-.621q.645-.62.645-1.687 0-1.22-.739-2.028-.725-.808-1.64-.808-.727 0-1.559.715-.82.714-1.36 1.992M95.98 253.117l-7.699 16.594q-.292.621-.527.809-.305.246-.738.246-.493 0-.856-.352-.351-.351-.351-.797 0-.316.28-.926l7.724-16.582q.293-.62.515-.808.316-.246.738-.246.493 0 .844.351.351.34.352.785 0 .317-.281.926M106.668 252.449v13.149h2.426q.867 0 1.23.34.375.327.375.867 0 .526-.375.867-.363.328-1.23.328h-7.254q-.867 0-1.242-.328-.364-.34-.364-.879 0-.528.364-.855.375-.34 1.242-.34h2.426v-10.02l-2.145.563q-.515.14-.773.14-.458 0-.797-.363a1.28 1.28 0 0 1-.328-.891q0-.48.246-.75.246-.28 1.031-.492zM117.836 255.238v2.86q1.336-.422 2.426-.422 2.214 0 3.679 1.512 1.465 1.51 1.465 3.902 0 2.46-1.488 3.867-1.476 1.395-4.535 1.395-2.695 0-4.266-1.02-.914-.586-.914-1.348 0-.48.352-.832a1.17 1.17 0 0 1 .855-.363q.41 0 .891.399.48.386 1.008.539.75.222 1.921.222 2.18 0 2.977-.691.797-.704.797-2.145 0-1.417-.774-2.226-.761-.809-1.968-.809-1.301 0-2.965.844-.375.2-.656.199-.516 0-.868-.375-.339-.375-.339-.973v-6.937h7.347q.868 0 1.231.34.375.329.375.867 0 .528-.375.867-.364.328-1.231.328zM73.577 54.789l4.904 1.555q-1.127 4.102-3.76 6.1-2.615 1.983-6.647 1.983-4.99 0-8.203-3.4-3.213-3.42-3.213-9.332 0-6.255 3.23-9.707 3.23-3.468 8.493-3.469 4.598 0 7.469 2.717 1.708 1.607 2.563 4.615l-5.007 1.196q-.445-1.948-1.863-3.076-1.401-1.128-3.418-1.128-2.786 0-4.529 2-1.726 1.998-1.726 6.476 0 4.751 1.71 6.768 1.708 2.016 4.442 2.016 2.017 0 3.47-1.281 1.452-1.283 2.085-4.033M87.402 64H82.6V45.85h4.46v2.581q1.146-1.828 2.051-2.41.923-.58 2.085-.58 1.641 0 3.162.905l-1.487 4.187q-1.213-.786-2.256-.786-1.008 0-1.709.564-.7.547-1.11 2-.394 1.452-.394 6.084zM106.953 58.224l4.785.803q-.922 2.631-2.922 4.016-1.983 1.367-4.973 1.367-4.734 0-7.007-3.093-1.794-2.478-1.794-6.255 0-4.511 2.358-7.058 2.358-2.564 5.964-2.564 4.05 0 6.392 2.684 2.341 2.666 2.239 8.186H99.963q.052 2.136 1.162 3.332 1.112 1.18 2.769 1.18 1.128 0 1.897-.616.77-.614 1.162-1.982m.274-4.854q-.052-2.085-1.077-3.161-1.025-1.094-2.495-1.094-1.572 0-2.598 1.145t-1.008 3.11zM132.571 64h-4.461v-2.666q-1.11 1.555-2.631 2.324-1.504.752-3.042.752-3.127 0-5.367-2.512-2.221-2.529-2.221-7.041 0-4.614 2.17-7.007 2.17-2.41 5.486-2.41 3.041 0 5.264 2.53v-9.024h4.802zm-12.818-9.468q0 2.905.804 4.204 1.162 1.88 3.247 1.88 1.658 0 2.82-1.401 1.161-1.419 1.162-4.221 0-3.128-1.128-4.495-1.128-1.384-2.888-1.384-1.71 0-2.872 1.367-1.145 1.35-1.145 4.05M137.322 43.39v-4.444h4.802v4.444zm0 20.61V45.85h4.802V64zM155.386 45.85v3.829h-3.282v7.314q0 2.222.086 2.598.103.359.427.598.342.24.821.24.666 0 1.931-.462l.41 3.725q-1.675.718-3.794.718-1.299 0-2.341-.427-1.043-.444-1.539-1.128-.478-.7-.666-1.88-.154-.837-.154-3.384V49.68h-2.204V45.85h2.204v-3.606l4.819-2.803v6.409zM177.312 55.182l3.315.461q-1.572 4.34-4.58 6.563-3.008 2.22-6.75 2.221-4.563 0-7.246-2.785-2.666-2.787-2.666-7.981 0-6.768 4.067-11.194 3.624-3.948 9.006-3.948 3.983 0 6.443 2.136 2.478 2.136 2.871 5.743l-3.127.29q-.495-2.718-2.051-4.05-1.537-1.35-3.982-1.35-4.597 0-7.434 4.084-2.46 3.52-2.461 8.357 0 3.862 1.897 5.896t4.939 2.034q2.598 0 4.7-1.692t3.059-4.785M194.897 61.744q-1.606 1.384-3.093 2.034a8 8 0 0 1-3.179.632q-2.511 0-4.05-1.47-1.538-1.486-1.538-3.793 0-1.521.684-2.684a5.4 5.4 0 0 1 1.845-1.88q1.146-.717 2.803-1.025 1.042-.205 3.948-.325 2.922-.12 4.187-.615.359-1.265.359-2.102 0-1.077-.786-1.692-1.077-.855-3.145-.854-1.948 0-3.196.871-1.23.855-1.794 2.444l-3.128-.273q.958-2.7 3.025-4.136 2.085-1.436 5.247-1.436 3.367 0 5.332 1.607 1.504 1.196 1.504 3.11 0 1.453-.427 3.367l-1.009 4.512q-.478 2.153-.478 3.503 0 .855.376 2.461h-3.128q-.256-.888-.359-2.256m1.145-6.938q-.649.256-1.401.393-.735.136-2.478.29-2.7.24-3.811.616-1.111.358-1.675 1.162a3.02 3.02 0 0 0-.564 1.777q0 1.299.889 2.136.906.837 2.563.838 1.538 0 2.957-.804a5.96 5.96 0 0 0 2.239-2.273q.82-1.453 1.281-4.135M202.144 64l3.794-18.15h2.734l-.769 3.71q1.401-2.104 2.734-3.111 1.35-1.008 2.752-1.009.923 0 2.273.667l-1.265 2.871a2.94 2.94 0 0 0-1.76-.581q-1.624 0-3.333 1.812-1.708 1.811-2.683 6.51L205.083 64zM226.035 61.368q-2.648 3.042-5.537 3.042-2.58 0-4.307-1.897-1.709-1.914-1.709-5.537 0-3.315 1.351-6.05 1.367-2.751 3.4-4.118 2.052-1.368 4.102-1.368 3.384 0 5.11 3.265l2.051-9.759h3.076L228.342 64h-2.854zm-8.476-4.973q0 1.898.376 2.99a3.97 3.97 0 0 0 1.281 1.83q.906.717 2.171.717 2.101 0 3.811-2.187 2.29-2.906 2.29-7.178 0-2.154-1.128-3.367t-2.837-1.213q-1.112 0-2.034.495-.906.496-1.811 1.692-.89 1.18-1.504 3.008-.615 1.83-.615 3.213M394.758 42.82h6.867q2.039 0 3.035.176 1.008.165 1.793.703.797.54 1.324 1.442.528.89.528 2.004 0 1.206-.657 2.214a4 4 0 0 1-1.757 1.512q1.57.457 2.414 1.559.843 1.1.843 2.59a5.1 5.1 0 0 1-.55 2.285 4.6 4.6 0 0 1-1.489 1.77q-.937.655-2.32.808-.867.093-4.184.117h-5.847zm3.469 2.86v3.972h2.273q2.027 0 2.52-.058.89-.105 1.394-.61.516-.515.516-1.347 0-.797-.446-1.29-.433-.502-1.3-.609-.516-.058-2.965-.058zm0 6.832v4.593h3.211q1.874 0 2.378-.105.774-.14 1.254-.68.492-.55.492-1.465 0-.773-.374-1.312-.375-.54-1.09-.785-.704-.246-3.071-.246zM427.582 60h-3.773l-1.5-3.902h-6.868L414.023 60h-3.679l6.691-17.18h3.668zm-6.387-6.797-2.367-6.375-2.32 6.375zM429.469 60V42.82h3.375l7.031 11.473V42.82h3.223V60h-3.481l-6.926-11.203V60zM446.824 60V42.82h3.469v7.63l7.008-7.63h4.664l-6.469 6.692L462.316 60h-4.488l-4.723-8.062-2.812 2.87V60zM67.5 99c-7.396 0-13.452 5.735-13.965 13H77.5V99zM81.5 99v65h16v-52h27.965c-.513-7.265-6.569-13-13.965-13z'
      />
      <path
        fill='#536E86'
        d='M125.5 116h-24v14h24zM125.5 134h-24v13h24zM125.465 151H101.5v13h10c7.396 0 13.452-5.735 13.965-13M77.5 164v-13H53.535c.513 7.265 6.57 13 13.965 13zM53.5 147h24v-13h-24zM53.5 130h24v-14h-24zM41 142.5V121l-11 11z'
      />
      <path fill='#231F20' d='M208 188h152v36H208z' />
    </g>
    <defs>
      <clipPath id='852f2151d0e485e1a7731c30d8f88146__a'>
        <path fill='#fff' d='M0 0h518v330H0z' />
      </clipPath>
      <filter
        id='852f2151d0e485e1a7731c30d8f88146__b'
        width={526}
        height={338}
        x={-4}
        y={-4}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} />
        <feColorMatrix values='0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.03 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_2016_93' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={12} />
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix values='0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.08 0' />
        <feBlend in2='effect1_dropShadow_2016_93' result='effect2_dropShadow_2016_93' />
        <feBlend in='SourceGraphic' in2='effect2_dropShadow_2016_93' result='shape' />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightCreditCardSampleIcon);
export default ForwardRef;
