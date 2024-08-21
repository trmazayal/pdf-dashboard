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
                    <p-text variant="caption" class="text-subtle">
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
  <ModalsCreateTemplate v-model="documentTemplateModal" />
</template>

<script lang="ts" setup>

import { defineTable } from '@privyid/persona/core'

const documentTemplateModal = ref(false)
const canUploadDocument = computed(() => {
  return true
})

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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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
        time: '12:45 (GMT +7)',
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