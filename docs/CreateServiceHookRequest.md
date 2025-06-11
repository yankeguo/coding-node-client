# CreateServiceHookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionProperty** | **string** | 发送方式属性 | [default to undefined]
**Enabled** | **boolean** | 事件开关 | [default to undefined]
**Event** | **Array&lt;string&gt;** | 事件名，取值范围：ITERATION_CREATED,ITERATION_DELETED,ITERATION_UPDATED,ISSUE_CREATED,ISSUE_DELETED,ISSUE_COMMENT_CREATED,ISSUE_STATUS_UPDATED,ISSUE_ASSIGNEE_CHANGED,ISSUE_ITERATION_CHANGED,ISSUE_RELATIONSHIP_CHANGED,ISSUE_UPDATED,GIT_PUSHED,GIT_MR_CREATED,GIT_MR_UPDATED,GIT_MR_MERGED,GIT_MR_CLOSED,ARTIFACTS_VERSION_CREATED,ARTIFACTS_VERSION_UPDATED,ARTIFACTS_VERSION_DOWNLOADED,ARTIFACTS_VERSION_DELETED,ARTIFACTS_VERSION_RELEASED,ARTIFACTS_VERSION_DOWNLOAD_FORBIDDEN,ARTIFACTS_VERSION_DOWNLOAD_ALLOWED,ARTIFACTS_VERSION_DOWNLOAD_BLOCKED,ARTIFACTS_REPO_CREATED,ARTIFACTS_REPO_UPDATED,ARTIFACTS_REPO_DELETED,CI_JOB_CREATED,CI_JOB_UPDATED,CI_JOB_DELETED,CI_JOB_STARTED,CI_JOB_FINISHED,FILE_CREATED,FILE_UPDATED,FILE_RENAMED,FILE_SHARE_UPDATED,FILE_MOVED,FILE_COPIED,FILE_MOVED_TO_RECYCLE_BIN,FILE_RESTORED_FROM_RECYCLE_BIN,FILE_DELETED,WIKI_CREATED,WIKI_UPDATED,WIKI_MOVED,WIKI_SHARE_UPDATED,WIKI_ACCESS_UPDATED,WIKI_COPIED,WIKI_MOVED_TO_RECYCLE_BIN,WIKI_RESTORED_FROM_RECYCLE_BIN,WIKI_DELETED,MEMBER_CREATED,MEMBER_DELETED,MEMBER_ROLE_UPDATED,TEST_PLAN_CREATED, TEST_PLAN_UPDATED, TEST_PLAN_FINISHED, TEST_TASK_ASSIGNED, TEST_REPORT_CREATED, FLEXIBLE_TESTX_REVIEW_CREATED, FLEXIBLE_TESTX_REVIEW_COMMENTED, FLEXIBLE_TESTX_REVIEW_UPDATED, FLEXIBLE_TESTX_REVIEW_COMPLETED, FLEXIBLE_TESTX_PLAN_CREATED, FLEXIBLE_TESTX_PLAN_TASK_ASSIGNED, FLEXIBLE_TESTX_PLAN_UPDATED, FLEXIBLE_TESTX_PLAN_FINISHED, FLEXIBLE_TESTX_REPORT_CREATED, CODE_DOG_CREATE_JOB, CODE_DOG_RESULT_NOTIFY, PLAN_CREATED, PLAN_DELETED, PLAN_COMMENT_CREATED, PLAN_STATUE_CHANGED, PLAN_ASSIGNEE_CHANGED, PLAN_UPDATED, RISK_CREATED, RISK_DELETED, RISK_COMMENT_CREATED, RISK_STATUS_CHANGED, RISK_ASSIGNEE_CHANGED, RISK_UPDATED | [default to undefined]
**FilterProperty** | **string** | 过滤器属性 | [optional] [default to undefined]
**Name** | **string** | 备注名 | [optional] [default to undefined]
**ProjectId** | **number** | 项目编号或者研发空间编号 | [default to undefined]
**Service** | **string** | 服务名，取值范围：WebHook、WeCom、DingDing、Jenkins、FeiShu。 | [default to undefined]
**ServiceAction** | **string** | 发送方式，取值范围：dingding_group_chat_robot,wecom_group_chat_robot,jenkins_generic_build_job,feishu_group_chat_robot,webhook_http_post,webhook_http_get | [default to undefined]
**TargetType** | **string** | 目标数据类型：PROJECT,SPACE_NODE,PROGRAM,默认PROJECT | [optional] [default to undefined]

## Example

```typescript
import { CreateServiceHookRequest } from './api';

const instance: CreateServiceHookRequest = {
    ActionProperty,
    Enabled,
    Event,
    FilterProperty,
    Name,
    ProjectId,
    Service,
    ServiceAction,
    TargetType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
