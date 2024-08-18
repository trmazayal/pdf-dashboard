<template>
<div class="p-6">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
            <p-button variant="ghost" icon>
                <pi-refresh-20 />
            </p-button>

            <p-input-group style="width: 300px;">
                <p-input-group-addon>
                    <pi-search-20 />
                </p-input-group-addon>
                <p-input placeholder="Search"/>
            </p-input-group>

            <p-dropdown text="Last 6 Months" variant="outline">
                <p-dropdown-item>Item Text</p-dropdown-item>
                <p-dropdown-item>Item Text</p-dropdown-item>
                <p-dropdown-item>Item Text</p-dropdown-item>
            </p-dropdown>

            <p-dropdown text="Filters" variant="outline">
                <p-dropdown-item>Item Text</p-dropdown-item>
                <p-dropdown-item>Item Text</p-dropdown-item>
                <p-dropdown-item>Item Text</p-dropdown-item>
            </p-dropdown>
        </div>

        <p-button variant="outline" icon @click="openModal">
            Create Template <pi-add-plus-20 />
        </p-button>
    </div>

    <div class="document--list">
    <p-table
      class="datatable--custom"
      :fields="fields"
      :items="items"
      variant="static">
        <template #cell(star)="{ item }">
            <div class="text-center item-center self-stretch m-auto"
                @click="toggleFavorite(item)">
                <!-- toggle favorite star -->
                <pi-star-favorite-20 v-if="!item.isFavorite" />
                <pi-star-favorite-solid-20 v-else />
            </div>
        </template>
        <template #cell(template)="{ item }">
            <div class="flex gap-3">
            <div class="flex items-start gap-3">
                <div>
                <p-avatar
                    size="sm">
                    <pi-template-20 />
                </p-avatar>
                </div>
                <div class="flex flex-col">
                <p-text variant="body2">
                    {{ item.template.name }}
                </p-text>
                </div>
            </div>
            </div>
        </template>
        <template #cell(owner)="{ item }">
            <div class="flex gap-3">
            <div class="flex items-start gap-3">
                <div>
                <p-avatar
                    v-if="item.owner.avatar"
                    size="sm"
                    :src="item.owner.avatar" />
                <p-avatar
                    v-else
                    size="sm">
                    <pi-document-empty-16 />
                </p-avatar>
                </div>
                <div class="flex flex-col">
                <p-text variant="body2">
                    {{ item.owner.name }}
                </p-text>
                </div>
            </div>
            </div>
        </template>
        <template #cell(uploadedAt)="{ item }">
            <div class="flex gap-3">
            <div class="grid grid-cols-1 gap-1">
                <div>
                    <p-text variant="body2">
                        {{ item.uploadedAt.date }}
                    </p-text>
                </div>
                <div>
                    <p-text variant="body2">
                        {{ item.uploadedAt.time }}
                    </p-text>
                </div>
            </div>
            </div>
        </template>
        </p-table>
        <p-pagination
        v-model="model"
        v-model:per-page="perPage"
        :per-page-options="perPageOptions"
        :total="total"
        navigation-only
        show-detail
        variant="far">
        <template #pagination-count>
            Page {{ model }} of {{ totalPage }}
        </template>
        </p-pagination>
    </div>
</div>

<p-modal
    v-model="documentTemplateModal"
    size="full"
    body-class="grid h-full grid-cols-8">
    <template #header>
        <div class="overflow-y-auto modal--full__header__content">
            <div class="flex items-center p-3 space-x-3">
                <div style="position: relative;">
                    <pi-need-action-alt-20 />
                </div>
                <p-text class="text-subtle">Document 1</p-text>
            </div>
        </div>
        <div class="modal--full__header__navigation">
            <p-button color="danger">
                    Save template
            </p-button>
        </div>
    </template>
    <template #body>
        <div class="col-span-6 px-4 pt-4 bg-base">
            <div class="grid grid-cols-1 gap-4">
                <div class="p-6 rounded shadow-sm bg-default">
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col ...">
                            <p-text variant="overline">Tool</p-text>
                            <div class="flex flex-row ...">
                                <p-button variant="ghost" icon>
                                    <pi-add-plus-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-document-check-20 />
                                </p-button>
                            </div>
                        </div>

                        <div class="border-r border-base mx-4"></div>
                        <div class="flex flex-col ...">
                            <p-text variant="overline">Insert</p-text>
                            <div class="flex flex-row ...">
                                <p-button variant="ghost" icon>
                                    <pi-text-editor-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-image-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-highlight-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-message-20 />
                                </p-button>
                                <p-dropdown variant="ghost" icon no-caret>
                                    <template #button-content>
                                        <pi-edit-square-20 />
                                        <pi-caret-down-20 />
                                    </template>

                                    <p-dropdown-item>Item Text</p-dropdown-item>
                                    <p-dropdown-item>Item Text</p-dropdown-item>
                                    <p-dropdown-item>Item Text</p-dropdown-item>
                                </p-dropdown>
                                <p-button variant="ghost" icon>
                                    <pi-link-20 />
                                </p-button>
                            </div>
                        </div>

                        <div class="border-r border-base mx-4"></div>
                        <div class="flex flex-col ...">
                            <p-text variant="overline">Form</p-text>
                            <div class="flex flex-row ...">
                                <p-button variant="ghost" icon>
                                    <pi-record-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-persona-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-persona-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-persona-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-persona-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-persona-20 />
                                </p-button>
                            </div>
                        </div>

                        <div class="border-r border-base mx-4"></div>
                        <div class="flex flex-col ...">
                            <p-text variant="overline">Placement</p-text>
                            <div class="flex flex-row ...">
                                <p-button variant="ghost" icon>
                                    <pi-signature-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-stamp-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-signature-text-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-e-meterai-20 />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <pi-document-seal-20 />
                                </p-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-6 rounded shadow-sm bg-default">
                    This is place holder text. The basic dialog for modals
                    should contain only valuable and relevant information.
                </div>
            </div>
        </div>
        <div class="col-span-2 p-7 bg-default">
            <p-subheading weight="bold">Document properties</p-subheading>
            <p-text variant="caption">Adjust the basic settings of your document.</p-text>

            <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="grid grid-cols-1">
                    <p-text variant="body2">Size</p-text>
                    <p-dropdown text="A4" variant="outline">
                        <p-dropdown-item>Item Text</p-dropdown-item>
                        <p-dropdown-item>Item Text</p-dropdown-item>
                        <p-dropdown-item>Item Text</p-dropdown-item>
                    </p-dropdown>
                </div>
                <div>
                    <p-text variant="body2">Orientation</p-text>
                    <p-dropdown text="Potrait" variant="outline">
                        <p-dropdown-item>Item Text</p-dropdown-item>
                        <p-dropdown-item>Item Text</p-dropdown-item>
                        <p-dropdown-item>Item Text</p-dropdown-item>
                    </p-dropdown>
                </div>
            </div>

            <div class="border-t border-base mt-6"></div>

        </div>
    </template>
</p-modal>
</template>

<script lang="ts" setup>

import { defineTable } from '@privyid/persona/core'

const documentTemplateModal = ref(false)

const openModal = () => {
    documentTemplateModal.value = true
}

// Table

const fields = defineTable([
  {
    key  : 'star',
    label: '',
    width: 5,
  },
  {
    key  : 'template',
    label: 'Template Name',
    width: 40,
  },
  {
    key  : 'owner',
    label: 'Owner',
    width: 40,
  },
  {
    key  : 'uploadedAt',
    label: 'Uploaded At',
  },
])

const items = ref([
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi Surat Pernyataan Program Akselerasi Surat Pernyataan Program Akselerasi Surat Pernyataan Program Akselerasi Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Tarjono Sujono Jati',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Xavier Sawojati',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Tarjono Sujono Jati',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Tarjono Sujono Jati',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Tarjono Sujono Jati',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Franc Meduta Wijayanto',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
  {
    template: {
      name  : 'Surat Pernyataan Program Akselerasi',
      avatar: 'https://picsum.photos/50',
    },
    owner: {
      name  : 'Tarjono Sujono Jati',
      avatar: 'https://picsum.photos/50',
    },
    uploadedAt: {
        date: 'Jun 02, 2023',
        time: '12:00',
    },
  },
])

// Pagination

const model          = ref(1)
const total          = ref(50)
const perPage        = ref(10)
const perPageOptions = ref([
  5,
  10,
  15,
])

const totalPage = computed(() => {
  return total.value <= 0 ? 0 : Math.ceil(total.value / perPage.value)
})

const toggleFavorite = (item) => {
  item.isFavorite = !item.isFavorite
}

</script>