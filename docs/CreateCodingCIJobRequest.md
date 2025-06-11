# CreateCodingCIJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlwaysUserIdList** | **Array&lt;number&gt;** | 不管构建成功还是失败总是通知的用户 | [optional] [default to undefined]
**AutoCancelSameMergeRequest** | **boolean** | 自动取消相同 MR | [optional] [default to undefined]
**AutoCancelSameRevision** | **boolean** | 自动取消相同版本 | [optional] [default to undefined]
**BranchRegex** | **string** | hookType 为 CUSTOME 时须指定 | [optional] [default to undefined]
**BranchSelector** | **string** | hookType 为 DEFAULT 时须指定 | [optional] [default to undefined]
**BuildFailUserIdList** | **Array&lt;number&gt;** | 仅构建失败时要通知的用户 | [optional] [default to undefined]
**CachePathList** | [**Array&lt;CodingCIJobCachePath&gt;**](CodingCIJobCachePath.md) | 任务缓存目录配置 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotType** | **string** | 仓库类型 CODING_OTHER_PROJ,CODING,TGIT,GITHUB,GITLAB,GITLAB_PRIVATE,GITEE,COMMON_GIT_REPO,NONE | [optional] [default to undefined]
**EnvList** | [**Array&lt;CIJobEnv&gt;**](CIJobEnv.md) | 环境变量配置 | [optional] [default to undefined]
**ExecuteIn** | **string** | 执行方式 CVM | STATIC | AGENT | [optional] [default to undefined]
**ExecutedAgentPoolId** | **number** | 自定义构建节点池 ID，ExecuteIn 为 AGENT 必填 | [optional] [default to undefined]
**HookType** | **string** | 代码更新触发匹配规则 DEFAULT,TAG,BRANCH,CUSTOM | [optional] [default to undefined]
**JenkinsFileFromType** | **string** | STATIC，SCM 从代码库读取 | [optional] [default to undefined]
**JenkinsFilePath** | **string** | JenkinsFileFromType 为 SCM 必填 | [optional] [default to undefined]
**JenkinsFileStaticContent** | **string** | JenkinsFileFromType 为 STATIC 必填 | [optional] [default to undefined]
**JobFromType** | **string** | 构建计划来源 TKE TCB | [optional] [default to undefined]
**Name** | **string** | 构建计划名称 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**ScheduleList** | [**Array&lt;CodingCIJobSchedule&gt;**](CodingCIJobSchedule.md) | 针对 CRON triggerMethod 的 schedule 规则配置, 暂只用于添加 | [optional] [default to undefined]
**TriggerMethodList** | **Array&lt;string&gt;** | REF_CHANGE 代码更新触发      CRON &#x3D; 1 定时触发      MR_CHANGE  MR变动触发 | [optional] [default to undefined]
**TriggerRemind** | **string** | 构建结果通知触发者机制  ALWAYS -总是通知;  BUILD_FAIL -仅构建失败时通知; | [optional] [default to undefined]

## Example

```typescript
import { CreateCodingCIJobRequest } from './api';

const instance: CreateCodingCIJobRequest = {
    AlwaysUserIdList,
    AutoCancelSameMergeRequest,
    AutoCancelSameRevision,
    BranchRegex,
    BranchSelector,
    BuildFailUserIdList,
    CachePathList,
    DepotId,
    DepotType,
    EnvList,
    ExecuteIn,
    ExecutedAgentPoolId,
    HookType,
    JenkinsFileFromType,
    JenkinsFilePath,
    JenkinsFileStaticContent,
    JobFromType,
    Name,
    ProjectId,
    ScheduleList,
    TriggerMethodList,
    TriggerRemind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
