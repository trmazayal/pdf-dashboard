<template>
<div class="p-6">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
            <p-button variant="ghost" icon>
                <IconRefresh />
            </p-button>

            <p-input-group style="width: 300px;">
                <p-input-group-addon>
                    <IconSearch />
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
            Create Document <IconAddPlus />
        </p-button>
    </div>

    <div class="p-6 table-container mt-6">
        <p-table-static :fields="fields" :items="items">
            <template #cell(.)="{ item }">
                <p-text variant="body2" class="center-content">
                    {{ item.star }}
                </p-text>
          </template>
            <template #cell(templateName)="{ item }">
                <p-text variant="body2" class="center-content">
                    {{ item.templateName }}
                </p-text>
          </template>
            <template #cell(owner)="{ item }">
                <p-text variant="body2" class="center-content">
                    {{ item.owner }}
                </p-text>
          </template>
            <template #cell(uploadAt)="{ item }">
                <p-text variant="body2" class="center-content">
                    {{ item.uploadAt }}
                </p-text>
          </template>

        </p-table-static>
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
                    <IconDocument />
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
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                            </div>
                        </div>

                        <div class="border-r border-base mx-4"></div>
                        <div class="flex flex-col ...">
                            <p-text variant="overline">Insert</p-text>
                            <div class="flex flex-row ...">
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                            </div>
                        </div>

                        <div class="border-r border-base mx-4"></div>
                        <div class="flex flex-col ...">
                            <p-text variant="overline">Form</p-text>
                            <div class="flex flex-row ...">
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                            </div>
                        </div>

                        <div class="border-r border-base mx-4"></div>
                        <div class="flex flex-col ...">
                            <p-text variant="overline">Placement</p-text>
                            <div class="flex flex-row ...">
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
                                </p-button>
                                <p-button variant="ghost" icon>
                                    <IconAddPlus />
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

import IconRefresh from '@privyid/persona-icon/vue/refresh/20.vue'
import IconSearch from '@privyid/persona-icon/vue/search/20.vue'
import IconAddPlus from '@privyid/persona-icon/vue/add-plus/20.vue'
import IconDocument from '@privyid/persona-icon/vue/need-action-alt/20.vue'

import { defineTable } from '@privyid/persona/core'

const fields = defineTable([
{
    key    : 'star',
    label  : '',
},
{
    key    : 'templateName',
    label  : 'Template Name',
},
{
    key  : 'owner',
    label: 'Owner',
},
{
    key      : 'uploadAt',
    label    : 'Upload At',
},
])

const items = ref([
{
    star        : true,
    templateName: 'Template Name',
    owner       : 'Owner',
    uploadAt    : 'Upload At',
},
{
    star        : false,
    templateName: 'Template Name',
    owner       : 'Owner',
    uploadAt    : 'Upload At',
},
{
    star        : false,
    templateName: 'Template Name',
    owner       : 'Owner',
    uploadAt    : 'Upload At',
},
])

const documentTemplateModal = ref(false)

const openModal = () => {
    documentTemplateModal.value = true
}


</script>