# CodingCIJob

构建计划信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlwaysUserIdList** | **Array&lt;number&gt;** | 不管构建成功还是失败总是通知的用户 | [default to undefined]
**AutoCancelSameMergeRequest** | **boolean** | 自动取消相同 MR | [default to false]
**AutoCancelSameRevision** | **boolean** | 自动取消相同版本 | [default to false]
**BranchRegex** | **string** | 分支匹配正则 | [default to '']
**BranchSelector** | **string** | 触发构建的分支 | [default to '']
**BuildFailUserIdList** | **Array&lt;number&gt;** | 仅构建失败时要通知的用户 | [default to undefined]
**CachePathList** | [**Array&lt;CIJobCachePath&gt;**](CIJobCachePath.md) | 任务缓存目录配置 | [default to undefined]
**CacheSize** | **number** | 构建缓存大小 | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间 | [default to undefined]
**CreatorId** | **number** | 创建者 | [default to undefined]
**DepotHttpsUrl** | **string** | 仓库库的 Https 地址 | [optional] [default to '']
**DepotId** | **number** | 仓库ID | [default to undefined]
**DepotName** | **string** | 仓库名称 | [optional] [default to '']
**DepotSshUrl** | **string** | 仓库库的 SSH 地址 | [optional] [default to '']
**DepotType** | **string** | 仓库类型 | [default to '']
**DepotWebUrl** | **string** | 仓库库的 Web 页面 | [optional] [default to '']
**EnvList** | [**Array&lt;CIJobEnv&gt;**](CIJobEnv.md) | 环境变量配置 | [default to undefined]
**ExecuteIn** | **string** | 执行方式 | [default to '']
**ExecutedAgentPoolId** | **number** | 自定义构建节点池 ID | [optional] [default to undefined]
**HookType** | **string** | 代码更新触发匹配规则 | [default to '']
**Id** | **number** | 构建计划ID | [optional] [default to undefined]
**JenkinsFileFromType** | **string** | Jenkinsfile 来源 | [default to '']
**JenkinsFilePath** | **string** | Jenkinsfile 在仓库中的文件路径 | [default to '']
**JenkinsFileStaticContent** | **string** | Jenkinsfile 文件内容 | [default to '']
**JobFromType** | **string** | 构建计划创建来源 | [default to '']
**Name** | **string** | 构建计划名称 | [default to '']
**ProjectId** | **number** | 项目ID | [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to '']
**ScheduleList** | [**Array&lt;CIJobSchedule&gt;**](CIJobSchedule.md) | 针对 CRON triggerMethod 的 schedule 规则配置 | [default to undefined]
**TriggerMethodList** | **Array&lt;string&gt;** | 构建计划触发方式 | [default to undefined]
**TriggerRemind** | **string** | 构建结果通知触发者机制 | [default to '']
**UpdatedAt** | **number** | 最后更新时间 | [default to undefined]

## Example

```typescript
import { CodingCIJob } from './api';

const instance: CodingCIJob = {
    AlwaysUserIdList,
    AutoCancelSameMergeRequest,
    AutoCancelSameRevision,
    BranchRegex,
    BranchSelector,
    BuildFailUserIdList,
    CachePathList,
    CacheSize,
    CreatedAt,
    CreatorId,
    DepotHttpsUrl,
    DepotId,
    DepotName,
    DepotSshUrl,
    DepotType,
    DepotWebUrl,
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
    ProjectName,
    ScheduleList,
    TriggerMethodList,
    TriggerRemind,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
