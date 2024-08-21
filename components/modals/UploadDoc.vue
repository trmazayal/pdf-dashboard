<template>
    <p-modal
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
                <div class="grid grid-cols-1">
                    <p-truncate text="PT Privy Identitas Digital" length="20" :tooltip="false" />
                    <div class="flex items-center">
                        <div style="position: relative; color: #0065D1;">
                            <pi-building-20 />
                        </div>
                        <p-text variant="overline" style="color: #0065D1;">JSR999</p-text>
                    </div>
                </div>
            </div>
        </template>
        <template #body>
            <div class="col-span-8 flex items-center justify-center h-full px-4 pt-4 bg-base">
                <div class="grid grid-cols-1">
                    <div class="p-6 rounded-t shadow-sm bg-default space-y-4">
                        <DropzoneAddDoc />
                        <div class = "grid grid-cols-2 items-center gap-4">
                            <p-button>
                                Create blank
                                <pi-add-plus-20 />
                            </p-button>
                            <p-button>
                                From template
                                <pi-add-document-20 />
                            </p-button>
                        </div>
                    </div>
                    <div class="p-2 rounded-b shadow-sm">
                        <div class="flex flex-col items-center justify-center">
                            <p-caption>Add up to 10 documents</p-caption>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </p-modal>
</template>
