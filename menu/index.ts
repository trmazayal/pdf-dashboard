import IconAction from '@privyid/persona-icon/vue/need-action/20.vue'
import IconInbox from '@privyid/persona-icon/vue/inbox/20.vue'
import IconDocumentExport from '@privyid/persona-icon/vue/document-export/20.vue'
import IconDocumentDraft from '@privyid/persona-icon/vue/document-draft/20.vue'
import IconDocumentCheck from '@privyid/persona-icon/vue/document-check/20.vue'
import IconArchiveBox from '@privyid/persona-icon/vue/archive-box/20.vue'
import IconDocumentTemplate from '@privyid/persona-icon/vue/template/20.vue'
import IconGroupContact from '@privyid/persona-icon/vue/group-contact/20.vue'
import IconCollaboration from '@privyid/persona-icon/vue/collaboration/20.vue'
import IconDataStructure from '@privyid/persona-icon/vue/data-structure/20.vue'

import { defineMenu } from '@privyid/persona/core'

export default defineMenu([
  {
    items: [
      {
        name : 'dashboard',
        label: 'Actions required',
        url  : '/dashboard',
        icon : IconAction,
      },
    ],
  },
  {
    maxLength: 5,
    items: [
      {
        name : 'overview',
        label: 'Inbox',
        url  : '/',
        icon : IconInbox,
      },
      {
        name : 'user-and-role',
        label: 'Sent',
        url  : '/user-role',
        icon : IconDocumentExport,
      },
      {
        name : 'enterprise-seal',
        label: 'Draft',
        url  : '/enterprise',
        icon : IconDocumentDraft,
      },
      {
        name : 'reminder',
        label: 'Completed',
        url  : '/reminder',
        icon : IconDocumentCheck,
      },
      {
        name : 'email-logo',
        label: 'Archieve',
        url  : '/email',
        icon : IconArchiveBox,
      },
      {
        name : 'email-logo',
        label: 'Document Template',
        url  : '/document-template',
        icon : IconDocumentTemplate,
      },
      {
        name : 'email-logo',
        label: 'Grooups',
        url  : '/email',
        icon : IconGroupContact,
      },
      {
        name : 'email-logo',
        label: 'Handover',
        url  : '/email',
        icon : IconCollaboration,
      },
      {
        name : 'email-logo',
        label: 'Employee',
        url  : '/email',
        icon : IconDataStructure,
      },
    ],
  },
])
