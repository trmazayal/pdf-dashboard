<template>
    <p-dropzone accept="application/pdf">
      <template #default="{ isDragover, isHovered, model, browse }">
        <div class="flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded "
          :class="[isDragover ? 'bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis' : 'bg-default dark:bg-dark-default border-default dark:border-dark-default']">
          <p-spread :active="isDragover || isHovered">
            <pi-document-filled-20 class="w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis" style="color: #0065D1;"/>
          </p-spread>
          <p-heading element="h5">
            Upload Document
          </p-heading>
          <p-heading element="h6">
            <template v-if="!model">
              Drag your document here or click
              <a href="#" @click.prevent="browse">browse</a>
            </template>
            <template v-else>
              {{ model.name }}
            </template>
          </p-heading>
          <p-caption weight="bold">PDF up to 25MB</p-caption>
          <p-caption>Document with e-Meterai up to 9 MB</p-caption>
        </div>
      </template>
    </p-dropzone>
</template>