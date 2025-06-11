# ModifyCodingCIJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlwaysUserIdList** | **Array&lt;number&gt;** | 不管构建成功还是失败总是通知的用户 | [optional] [default to undefined]
**AutoCancelSameMergeRequest** | **boolean** | 自动取消相同 MR | [default to undefined]
**AutoCancelSameRevision** | **boolean** | 自动取消相同版本 | [default to undefined]
**BranchRegex** | **string** | hookType 为 CUSTOME 时须指定 | [optional] [default to undefined]
**BranchSelector** | **string** | hookType 为 DEFAULT 时须指定 | [optional] [default to undefined]
**BuildFailUserIdList** | **Array&lt;number&gt;** | 仅构建失败时要通知的用户 | [optional] [default to undefined]
**CachePathList** | [**Array&lt;CodingCIJobCachePath&gt;**](CodingCIJobCachePath.md) | 任务缓存目录配置 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotType** | **string** | 仓库类型 CODING,TGIT,GITHUB,GITLAB,GITLAB_PRIVATE,GITEE,NONE | [default to undefined]
**EnvList** | [**Array&lt;CodingCIJobEnv&gt;**](CodingCIJobEnv.md) | 环境变量配置 | [optional] [default to undefined]
**ExecuteIn** | **string** | 执行方式 CVM | STATIC | [default to undefined]
**ExecutedAgentPoolId** | **number** | 自定义构建节点池 ID，ExecuteIn 为 AGENT 必填 | [optional] [default to undefined]
**HookType** | **string** | 代码更新触发匹配规则 | [default to undefined]
**Id** | **number** | 构建计划 ID | [default to undefined]
**JenkinsFileFromType** | **string** | STATIC，SCM 从代码库读取 | [default to undefined]
**JenkinsFilePath** | **string** | JenkinsFileFromType 为 SCM 必填 | [optional] [default to undefined]
**JenkinsFileStaticContent** | **string** | JenkinsFileFromType 为 STATIC 必填 | [optional] [default to undefined]
**JobFromType** | **string** | 构建计划来源 TKE TCB | [default to undefined]
**Name** | **string** | 构建计划名称 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [default to undefined]
**ScheduleList** | [**Array&lt;CodingCIJobSchedule&gt;**](CodingCIJobSchedule.md) | 针对 CRON triggerMethod 的 schedule 规则配置, 暂只用于添加 | [optional] [default to undefined]
**TriggerMethodList** | **Array&lt;string&gt;** | REF_CHANGE 代码更新触发      CRON &#x3D; 1 定时触发      MR_CHANGE  MR变动触发  TKE 对接他们传空数组老是有问题，遂改成非必填 | [optional] [default to undefined]
**TriggerRemind** | **string** | 构建结果通知触发者机制  ALWAYS -总是通知;  BUILD_FAIL -仅构建失败时通知; | [default to undefined]

## Example

```typescript
import { ModifyCodingCIJobRequest } from './api';

const instance: ModifyCodingCIJobRequest = {
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
    Id,
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
