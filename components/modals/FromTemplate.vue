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
          <p-text class="text-subtle">
            Select a template
          </p-text>
        </div>
      </div>
      <div class="modal--full__header">
        <div class="flex items-center p-3 space-x-3">
          <p-button color="danger">
            Save template
          </p-button>
        </div>
      </div>
    </template>
    <template #body>
      <div class="col-span-2 bg-default p-2">
        <p-sidebar>
          <p-sidebar-nav>
            <p-nav-item active>
              <template #icon>
                <pi-activity16 />
              </template>
              Dashboard
            </p-nav-item>
            <p-nav-item>
              <template #icon>
                <IconDocument />
              </template>
              Documents
            </p-nav-item>
          </p-sidebar-nav>
        </p-sidebar>
      </div>
      <div class="col-span-6 px-4 pt-4 bg-base">
        <div class="grid grid-cols-1 gap-4">
          <div class="p-6 rounded shadow-sm bg-default">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Tool
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-add-plus-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-document-check-20 />
                  </p-button>
                </div>
              </div>

              <div class="border-r border-base mx-4" />
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Insert
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-text-editor-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-image-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-highlight-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-message-20 />
                  </p-button>
                  <p-dropdown
                    variant="ghost"
                    icon
                    no-caret>
                    <template #button-content>
                      <pi-edit-square-20 />
                      <pi-caret-down-20 />
                    </template>

                    <p-dropdown-item>Item Text</p-dropdown-item>
                    <p-dropdown-item>Item Text</p-dropdown-item>
                    <p-dropdown-item>Item Text</p-dropdown-item>
                  </p-dropdown>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-link-20 />
                  </p-button>
                </div>
              </div>

              <div class="border-r border-base mx-4" />
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Form
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-record-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                </div>
              </div>

              <div class="border-r border-base mx-4" />
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Placement
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-signature-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-stamp-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-signature-text-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-e-meterai-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
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
    </template>
  </p-modal>
</template>

<script lang="ts" setup>
</script>
